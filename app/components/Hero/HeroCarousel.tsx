"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "./heroData";

type Props = {
  autoPlayMs?: number;
  backgroundSrc: string;
};

export default function HeroCarousel({
  autoPlayMs = 6000,
  backgroundSrc,
}: Props) {
  const slides = useMemo(() => heroSlides, []);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const indexRef = useRef(index);
  indexRef.current = index;

  const goTo = (next: number) => {
    setIndex((next + total) % total);
  };

  const next = () => goTo(indexRef.current + 1);
  const prev = () => goTo(indexRef.current - 1);

  // Autoplay
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      setIndex((curr) => (curr + 1) % total);
    }, autoPlayMs);

    return () => window.clearInterval(id);
  }, [autoPlayMs, isPaused, total]);

  // Keyboard arrows
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = slides[index];

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative h-[70vh] min-h-100 w-full sm:h-[78vh] sm:min-h-150 lg:h-[86vh] lg:min-h-100">
        <Image
          src={backgroundSrc}
          alt="Hero background image"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* TEXT LAYER (we animate text only) */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div
            key={active.id}
            className="mx-auto max-w-4xl text-center text-white animate-hero-in"
          >
            <h1 className="whitespace-pre-line text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {active.title}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
              {active.subtitle}
            </p>

            <div className="mt-6">
              <Link
                href={active.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-3 text-sm text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:text-base"
              >
                {active.ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 p-2 text-white backdrop-blur transition hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:left-6 sm:p-3"
        >
          <ChevronLeft className="h-5 w-5 " />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 p-2 text-white backdrop-blur transition hover:bg-black/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:right-6 sm:p-3"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
