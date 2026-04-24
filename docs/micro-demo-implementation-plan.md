# Implementation Plan: Product Categories → Micro Real Demo Experience

---

## 1. Architecture

### Component Structure

```
components/
  micro-demo/
    micro-demo-modal.tsx          ← shared modal wrapper (backdrop, header, close, accent theming)
    systems/
      retail-micro-demo.tsx       ← lazy-loaded, self-contained
      healthcare-micro-demo.tsx
      education-micro-demo.tsx
      growth-micro-demo.tsx
```

**Shared base component, not 4 standalone modals.** `MicroDemoModal` owns the shell (backdrop, slide-in animation, header, close button, accent color injection via CSS vars or props). Each system file exports only its inner content block — a pure UI slice with local state only.

### Wiring Changes

**In `home-page.tsx`:**
- Keep `isDemoOpen` / `setIsDemoOpen` state (already exists)
- Keep `selectedType` (already exists)
- Replace `<DemoModal>` with `<MicroDemoModal systemId={selectedType} isOpen={isDemoOpen} onClose={...} />`
- `DemoModal` is untouched (left in place, simply no longer rendered on home page)

**In `product-categories-section.tsx`:**
- Card structure stays the same
- `onClick` flow stays the same: `onSelectType(id)` + `onOpenDemo(id)`
- No changes required to the card UI itself

### Modal Trigger Flow

```
Card click
  → onSelectType(id)       [updates selectedType in HomePage]
  → onOpenDemo(id)         [sets isDemoOpen = true]
    → MicroDemoModal renders with correct systemId
      → lazy-loads the matching system component
```

### State Philosophy

- **No global state additions.** Everything the micro demo needs is derived from `systemId`.
- **Local state only** inside each system component (e.g., which attendance boxes are ticked, which action was last pressed).
- **No prop drilling** beyond `systemId` and `onClose`.
- All simulated activity is deterministic initial state — no timers, no polling, no intervals unless one subtle animation pulse is needed.

---

## 2. Micro Demo Concept

A micro real demo is **not a dashboard**. It is a single committed action — the one thing a real user would do right now in that system. It answers: *"What does this system let me do in the next 5 seconds?"*

**Allowed elements per demo:**
- One stat line (context: who/what/when)
- 2–3 activity items (rows with static status badges — read-only display)
- Exactly one interactive primary action button
- 1–2 static ghost buttons (visual only, non-interactive)

**Interaction model:** One button does one thing. Clicking it produces a single, permanent visual confirmation — a badge changes state or the button label updates to reflect the result. No timed resets. No multi-step flows. No row-level toggling. The action is done; the UI reflects it.

**Feel goal:** The user clicks once, sees an immediate result, and thinks *"That's exactly how this would work in real life."*

**Strictly not allowed:**
- Auto-resets or timed state loops
- Rows or badges that are individually clickable
- Actions that trigger secondary states or cascading changes
- Any behavior that invites exploration or repeated interaction

---

## 3. Per-System Design

### Retail Ops (`supermarket-system`) — Blue

**Real scenario:** A shop manager doing an end-of-day stock check. Three items are running low. They need to flag them for reorder.

**Stat line:**
> `3 items below threshold · Updated just now`

**Activity items (stock rows):**

| Product | Stock | Status |
|---|---|---|
| Rice 5kg | 8 units | `⚠ Low` (amber badge) |
| Cooking Oil 1L | 5 units | `⚠ Low` (amber badge) |
| Sugar 2kg | 12 units | `✓ OK` (green badge) |

**Actions:**
- `Reorder flagged items` (primary, blue accent — one-time action)
- `Add new product` (static ghost, non-interactive)
- `View all stock` (static ghost, non-interactive)

**Cause → Effect:** Clicking "Reorder flagged items" changes the `⚠ Low` badge on Rice 5kg and Cooking Oil 1L to `Ordered` (blue badge). Sugar 2kg row is unchanged. Button → `✓ Reorder sent` (disabled). No other element changes.

**Micro feedback:** Badge background and text color transition in ~120ms (`transition: color 120ms ease, background-color 120ms ease`). No layout shift. No motion. Button opacity drops to 0.5 on disabled state.

---

### Healthcare Ops (`hospital-system`) — Green

**Real scenario:** A clinic receptionist managing the morning appointment queue. Three patients are scheduled. One has checked in, one is waiting, one hasn't arrived.

**Stat line:**
> `Today · 3 appointments · 1 checked in`

**Activity items (appointment rows):**

| Patient | Time | Status |
|---|---|---|
| Ahmed K. | 09:00 | `✓ Checked in` (green badge) |
| Sara M. | 09:30 | `⏳ Waiting` (slate badge) |
| Omar F. | 10:00 | `○ Upcoming` (slate/muted badge) |

**Actions:**
- `Check in patient` (primary, green accent — one-time action)
- `Book appointment` (static ghost, non-interactive)
- `View records` (static ghost, non-interactive)

**Cause → Effect:** Clicking "Check in patient" changes Sara M.'s badge from `⏳ Waiting` to `✓ Checked in` (green badge). Ahmed K. and Omar F. rows are unchanged. Button → `✓ Checked in` (disabled). No other element changes.

**Micro feedback:** Badge fades to new color in ~120ms (`transition: color 120ms ease, background-color 120ms ease, opacity 120ms ease`). No layout shift. Button opacity drops to 0.5 on disabled state.

---

### Education Ops (`school-system`) — Violet

**Real scenario:** A teacher confirming the day's attendance record for Class 10A. Attendance has already been taken. One click submits it.

**Stat line:**
> `Class 10A · Today · 2 present · 1 absent`

**Activity items (attendance rows — static display):**

| Student | Status |
|---|---|
| Lena R. | `Present` (violet badge) |
| James T. | `Present` (violet badge) |
| Maya S. | `Absent` (slate badge) |

**Actions:**
- `Save attendance` (primary, violet accent — one-time action)
- `Mark all present` (static ghost, non-interactive)
- `Send to admin` (static ghost, non-interactive)

**Cause → Effect:** Clicking "Save attendance" updates the button to `✓ Attendance saved` (disabled). All rows remain as displayed — unchanged, read-only. The button is the only element that reacts. No toggling. No reset.

**Micro feedback:** Button label crossfades via opacity (`transition: opacity 120ms ease, color 120ms ease, background-color 120ms ease`). Button opacity drops to 0.5 on disabled state. No row animation.

---

### Growth & Services (`business-website`) — Orange

**Real scenario:** A small business owner setting up their digital presence. Three setup tasks exist with different completion states.

**Stat line:**
> `2 of 3 steps complete · Launch ready`

**Activity items (setup checklist):**

| Task | Status |
|---|---|
| Website live | `✓ Done` (green badge) |
| Email configured | `✓ Done` (green badge) |
| Google Reviews link | `○ Pending` (amber badge) |

**Actions:**
- `Complete Google setup` (primary, orange accent — one-time action)
- `Edit website` (static ghost, non-interactive)
- `View analytics` (static ghost, non-interactive)

**Cause → Effect:** Clicking "Complete Google setup" changes the Google Reviews link badge from `○ Pending` (amber) to `✓ Done` (green badge). Website and Email rows are unchanged. Button → `✓ Completed` (disabled). No other element changes.

**Micro feedback:** Badge color shifts in ~120ms (`transition: color 120ms ease, background-color 120ms ease`). No layout shift. Button opacity drops to 0.5 on disabled state.

---

## 4. UI Layout

### Modal Shell (`MicroDemoModal`)

```
┌───────────────────────────────────────────┐
│  [Accent Icon]  System Name      [✕]      │  ← Header
│  ─────────────────────────────────────────│
│  Stat line                                │  ← Context bar (1 line, muted text)
│  ─────────────────────────────────────────│
│                                           │
│  ● Row 1                        [Badge]   │  ← Activity block
│  ● Row 2                        [Badge]   │
│  ● Row 3                        [Badge]   │
│                                           │
│  ─────────────────────────────────────────│
│  [Primary Action]  [Ghost]  [Ghost]       │  ← Action bar
└───────────────────────────────────────────┘
```

**Exact specs:**
- Modal max-width: `max-w-md` (448px) on desktop
- Padding: `p-6` throughout
- Header: `flex items-center justify-between` — icon + title left, close button right
- Icon badge: `h-9 w-9 rounded-xl` with per-system accent bg + border + icon color
- Title: `text-lg font-semibold text-white tracking-tight`
- Close: `h-8 w-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/8`
- Divider: `border-t border-white/8`
- Stat line: `text-xs text-slate-400 py-3` (no icon, just plain text)
- Activity rows: `flex items-center justify-between py-2.5` — left: dot + name, right: badge
- Activity dot: `h-1.5 w-1.5 rounded-full bg-slate-600`
- Badges: `text-xs font-medium px-2 py-0.5 rounded-full` with per-status colors
- Action bar: `flex gap-2 flex-wrap pt-4`
- Primary button: `text-sm font-medium px-4 py-2 rounded-xl border` with accent border + accent text, hover fills with `bg-accent/12`
- Ghost buttons: `text-sm text-slate-400 px-3 py-2 rounded-xl hover:text-white hover:bg-white/6`

**Backdrop:** `fixed inset-0 bg-black/60 backdrop-blur-sm z-50`

---

## 5. Performance Strategy

### Lazy Loading

Each system component uses **Next.js `dynamic()`** with `{ ssr: false }`:

```ts
// Inside micro-demo-modal.tsx
const RetailMicroDemo = dynamic(() => import("./systems/retail-micro-demo"), { ssr: false });
const HealthcareMicroDemo = dynamic(() => import("./systems/healthcare-micro-demo"), { ssr: false });
// ...
```

The correct component is selected with a simple `switch(systemId)` — only the selected system's chunk is downloaded when the modal opens. Suspense fallback is a skeleton of 3 `h-8 w-full rounded-lg bg-white/6 animate-pulse` rows.

### Bundle Rules

- Zero imports from `components/demo/demo-content.tsx`, `components/demo/demo-sidebar.tsx`, or `lib/demo/systems/*.ts`
- No chart libraries, no table libraries
- Each system component imports only: Lucide icons (already in the bundle), `useState` from React, `motion` from Framer Motion (already in the bundle)
- Total per-system component target: **< 80 lines**

### State Minimalism

Each system component uses **1–2 `useState` calls maximum:**
- One for the "active activity items" state (an array of item statuses)
- One optional for "action feedback" (which button was last pressed, auto-reset after 1500ms via `setTimeout`)

No `useEffect` for data fetching, no context consumers, no refs unless needed for animation.

---

## 6. Mobile Behavior

### Breakpoint Strategy

- **Mobile (`< md`, < 768px):** Bottom sheet. Modal anchors to the bottom of the viewport, slides up with `y: "100%" → y: 0`. Rounded top corners only (`rounded-t-3xl`). Full viewport width. Max height `80dvh` with `overflow-y-auto`.
- **Desktop (`≥ md`):** Centered modal. `fixed inset-0 flex items-center justify-center`. `max-w-md w-full rounded-2xl`.

### Mobile-Specific Adjustments

- Drag handle pill: `w-10 h-1 rounded-full bg-white/20 mx-auto mb-4` at the very top of the sheet
- Action buttons: stack to `flex-col gap-2` on very small screens (`< sm`), each full width `w-full`
- Tap targets: all buttons minimum `h-11` on mobile
- Attendance toggles: `h-11 w-full` rows for easy thumb tapping
- Close button: moved to top-right of sheet header (always visible)
- No horizontal scroll anywhere — all rows truncate with `truncate` on text

### Animation

- Mobile: `AnimatePresence` + `motion.div` with `initial={{ y: "100%" }}`, `animate={{ y: 0 }}`, `exit={{ y: "100%" }}`, `transition={{ type: "spring", damping: 30, stiffness: 300 }}`
- Desktop: `initial={{ opacity: 0, scale: 0.96 }}`, `animate={{ opacity: 1, scale: 1 }}`, `exit={{ opacity: 0, scale: 0.96 }}`, `transition={{ duration: 0.18, ease: "easeOut" }}`

---

## 7. Design Rules

### Per-System Accent Colors

| System | Primary | Border | Text | Badge bg |
|---|---|---|---|---|
| Retail | `#3B82F6` | `border-blue-500/25` | `text-blue-400` | `bg-blue-500/12` |
| Healthcare | `#22C55E` | `border-emerald-500/25` | `text-emerald-400` | `bg-emerald-500/12` |
| Education | `#6366F1` | `border-violet-500/25` | `text-violet-400` | `bg-violet-500/12` |
| Growth | `#F97316` | `border-orange-500/25` | `text-orange-400` | `bg-orange-500/12` |

### Status Badge Colors (shared across all systems)

| Meaning | Text | Background |
|---|---|---|
| Success / Done / Present | `text-emerald-400` | `bg-emerald-500/12` |
| Warning / Low / Pending | `text-amber-400` | `bg-amber-500/12` |
| Neutral / Upcoming | `text-slate-400` | `bg-white/8` |
| System accent (Ordered, etc.) | per-system text | per-system bg |

### Dark Theme Consistency

- **Modal background:** `bg-slate-950` (matches site's `bg-[#02050d]` family)
- **Modal border:** `border border-white/10`
- **Row hover:** `hover:bg-white/4 rounded-xl transition-colors` — no heavy borders on hover
- **No white fills anywhere.** White only as text or icon, never as a background block.
- **Typography scale:** Title `text-lg`, stat `text-xs`, row labels `text-sm text-slate-300`, secondary text `text-slate-400`
- **No shadows on inner elements.** One outer shadow on the modal panel: `shadow-[0_24px_64px_rgba(0,0,0,0.5)]`

### Avoiding Heavy UI

- No section headings inside the modal (the modal header is the only heading)
- No horizontal rules except the two structural dividers (after header, before actions)
- No icons on action buttons (text only)
- No tooltips, no popovers, no nested interactivity
- Max 3 rows in any activity block — never more

---

## Summary: Execution Order

1. **Create `components/micro-demo/micro-demo-modal.tsx`** — shared shell with responsive bottom-sheet / centered-modal logic and accent color props
2. **Create the 4 system components** in `components/micro-demo/systems/` — each self-contained with local state and fake-interactive actions
3. **Wire into `home-page.tsx`** — replace `<DemoModal>` with `<MicroDemoModal>`, pass `systemId={selectedType}`
4. **Extend `live-demo-systems.ts`** if needed — add any per-system accent class tokens not already present
5. **Test on mobile viewport** — verify bottom sheet behavior and touch targets
6. **Verify no imports from old demo system** — confirm `DemoContent`, `DemoSidebar`, `lib/demo/systems/*` are unreferenced from new files
