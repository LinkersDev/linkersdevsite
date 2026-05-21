"use client";

import { useEffect, useRef, useState } from "react";

import {
  type FeatureKey,
  getProjectType,
  type ProjectType,
} from "@/lib/demo-config";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FloatingAssistant } from "@/components/sections/floating-assistant";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { RealSystemsSection } from "@/components/sections/real-systems-section";
import { SystemSelectorSection } from "@/components/sections/system-selector-section";
import { LoadingScreen } from "@/components/ui/loading-screen";

const initialType: ProjectType = "school-system";

const initialFeatures: FeatureKey[] = getProjectType(initialType).defaultFeatures;

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("a, button, input, textarea"));
}

export function HomePage() {
  const [selectedType, setSelectedType] = useState<ProjectType>(initialType);
  const [selectedFeatures, setSelectedFeatures] = useState<FeatureKey[]>(initialFeatures);
  const [loadingProgress, setLoadingProgress] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const progressInterval = window.setInterval(() => {
      setLoadingProgress((current) => {
        const next = current + Math.ceil((100 - current) / 4.5);
        return next >= 100 ? 100 : next;
      });
    }, 180);

    return () => window.clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (loadingProgress < 100) {
      return;
    }

    const timeout = window.setTimeout(() => setIsLoading(false), 400);
    return () => window.clearTimeout(timeout);
  }, [loadingProgress]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const playTone = (frequency: number, duration: number, gain: number) => {
      if (!soundEnabled) {
        return;
      }

      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) {
        return;
      }

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }

      const context = audioContextRef.current;
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gainNode.gain.value = gain;

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      const now = context.currentTime;
      gainNode.gain.setValueAtTime(gain, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
      oscillator.start(now);
      oscillator.stop(now + duration);
    };

    const handleClick = (event: Event) => {
      if (isInteractiveTarget(event.target)) {
        playTone(280, 0.08, 0.024);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [soundEnabled]);

  const selectType = (type: ProjectType) => {
    setSelectedType(type);
    setSelectedFeatures((current) => {
      const next = current.filter((feature) =>
        getProjectType(type).availableFeatures.includes(feature),
      );

      if (next.length > 0) {
        return next;
      }

      return getProjectType(type).defaultFeatures;
    });
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} progress={loadingProgress} />
      <div className="relative min-h-screen overflow-hidden bg-[#02050d] text-white">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,120,255,0.16),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_20%)]" />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.08]" />

        <Navbar soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled((current) => !current)} />

        <main className="relative z-10">
          <HeroSection />
          <SystemSelectorSection
            selectedType={selectedType}
            onSelectType={selectType}
          />
          <RealSystemsSection />
          <FinalCtaSection />
        </main>

        <Footer />
        <FloatingAssistant selectedType={selectedType} selectedFeatures={selectedFeatures} />
      </div>
    </>
  );
}
