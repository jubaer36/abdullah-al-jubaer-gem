"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ExternalLinkIcon } from "@/components/primitives/icons";

export type Slide = {
  title: string;
  /* small mono line above the title, e.g. "IUT Hackathon · 2025" or "5th Place" */
  meta?: string;
  caption?: string;
  image: string;
  link?: string;
};

const AUTO_ADVANCE_MS = 5000;

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={dir === "left" ? "rotate-180" : undefined}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function Slideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, count]);

  if (count === 0) return null;
  const active = slides[index];

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl border border-border bg-surface"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[inherit] sm:aspect-[16/10] lg:aspect-[2/1]">
          {slides.map((s, i) => (
            <figure
              key={s.image + i}
              className="absolute inset-0 transition-opacity duration-700 ease-out"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              {/* blurred fill so mixed aspect ratios don't leave bare bars */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                {s.meta && (
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-signal">
                    {s.meta}
                  </p>
                )}
                <p className="mt-2 font-display font-semibold text-lg md:text-xl text-text">
                  {s.title}
                </p>
                {s.caption && (
                  <p className="mt-1 max-w-xl text-sm text-soft leading-relaxed">
                    {s.caption}
                  </p>
                )}
                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-bg/60 px-3 py-1.5 font-mono text-xs text-dim backdrop-blur-sm transition-all duration-150 hover:text-text hover:border-muted active:scale-[0.96]"
                  >
                    <ExternalLinkIcon /> View
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/70 text-soft backdrop-blur-sm transition-all duration-150 hover:text-text hover:border-muted active:scale-[0.92] md:opacity-0 md:group-hover:opacity-100"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/70 text-soft backdrop-blur-sm transition-all duration-150 hover:text-text hover:border-muted active:scale-[0.92] md:opacity-0 md:group-hover:opacity-100"
            >
              <ArrowIcon dir="right" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.image + i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to ${s.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-6 bg-signal" : "w-2 bg-muted hover:bg-dim"
              }`}
            />
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {active.title}
      </p>
    </>
  );
}
