"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function usePinnedScroll(count: number, scrollPerBeat = 100) {
  const [enhanced, setEnhanced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnhanced(!motionMq.matches);
    update();
    motionMq.addEventListener("change", update);
    return () => motionMq.removeEventListener("change", update);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!enhanced || !containerRef.current || count < 1) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${count * scrollPerBeat}%`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const raw = self.progress * count;
          const idx = Math.min(count - 1, Math.floor(raw));
          setActiveIndex(idx);
          setProgress(raw - idx);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [enhanced, count, scrollPerBeat]);

  return { containerRef, enhanced, activeIndex, progress };
}
