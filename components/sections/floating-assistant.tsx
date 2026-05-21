"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  type FeatureKey,
  getAssistantResponse,
  type ProjectType,
} from "@/lib/demo-config";
import { assistantSuggestions } from "@/lib/site-content";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type FloatingAssistantProps = {
  selectedType: ProjectType;
  selectedFeatures: FeatureKey[];
};

function inferProjectType(input: string, fallback: ProjectType): ProjectType {
  const lower = input.toLowerCase();

  if (lower.includes("school")) {
    return "school-system";
  }

  if (lower.includes("hospital") || lower.includes("clinic")) {
    return "hospital-system";
  }

  if (lower.includes("restaurant") || lower.includes("cafe")) {
    return "restaurant-system";
  }

  if (lower.includes("market")) {
    return "supermarket-system";
  }

  if (lower.includes("shop")) {
    return "shop-system";
  }

  if (lower.includes("website")) {
    return "business-website";
  }

  if (lower.includes("mobile") || lower.includes("app")) {
    return "mobile-app";
  }

  if (lower.includes("automation")) {
    return "automation-system";
  }

  return fallback;
}

function inferFeatures(input: string, fallback: FeatureKey[]) {
  const lower = input.toLowerCase();
  const detected = new Set<FeatureKey>(fallback);

  if (lower.includes("student")) {
    detected.add("students");
  }
  if (lower.includes("attendance")) {
    detected.add("attendance");
  }
  if (lower.includes("patient")) {
    detected.add("patients");
  }
  if (lower.includes("booking")) {
    detected.add("booking");
  }
  if (lower.includes("dashboard")) {
    detected.add("dashboard");
  }
  if (lower.includes("payment") || lower.includes("billing")) {
    detected.add("payments");
  }
  if (lower.includes("api") || lower.includes("integration")) {
    detected.add("integrations");
  }
  if (lower.includes("report")) {
    detected.add("reports");
  }
  if (lower.includes("automation")) {
    detected.add("automation-flows");
  }

  return Array.from(detected);
}

export function FloatingAssistant({
  selectedType,
  selectedFeatures,
}: FloatingAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const baseResponse = useMemo(
    () => getAssistantResponse(selectedType, selectedFeatures),
    [selectedFeatures, selectedType],
  );
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `${baseResponse.title}. ${baseResponse.timeline}. ${baseResponse.features}.`,
    },
  ]);

  const submitMessage = (rawMessage: string) => {
    const trimmed = rawMessage.trim();
    if (!trimmed) {
      return;
    }

    const nextProjectType = inferProjectType(trimmed, selectedType);
    const nextFeatures = inferFeatures(trimmed, selectedFeatures);
    const response = getAssistantResponse(nextProjectType, nextFeatures);

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      {
        role: "assistant",
        content: `${response.title}. ${response.timeline}. ${response.features}. ${response.suggestion}`,
      },
    ]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="fixed bottom-24 right-4 z-50 w-[min(390px,calc(100vw-2rem))] overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/80 shadow-[0_24px_90px_rgba(5,10,30,0.55)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">AI Assistant</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Pick a system fast</h3>
            </div>
            <div className="max-h-[360px] space-y-4 overflow-y-auto px-5 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-[24px] px-4 py-3 text-sm leading-6 ${
                    message.role === "assistant" ? "bg-white/6 text-slate-200" : "bg-cyan-300/12 text-cyan-100"
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t border-white/10 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {assistantSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => submitMessage(suggestion)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      submitMessage(input);
                    }
                  }}
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/35"
                  placeholder="I need a clinic system..."
                />
                <Button onClick={() => submitMessage(input)}>Send</Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-6 right-4 z-50 flex items-center gap-3 rounded-full border border-cyan-300/25 bg-slate-950/85 px-5 py-4 text-sm font-semibold text-white shadow-[0_0_45px_rgba(59,130,246,0.28)] backdrop-blur-2xl"
      >
        <span className="flex h-3 w-3 rounded-full bg-cyan-300" />
        Quick AI
      </motion.button>
    </>
  );
}
