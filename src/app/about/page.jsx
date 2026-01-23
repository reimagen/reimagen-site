'use client'

import { useEffect, useState } from "react";
import useReveal from "@/hooks/useReveal";

const infinityLightartPoster = "/assets/infinity-lightart.jpg";
const galaxyPoster = "/assets/galaxy.jpg";

export default function About() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  const { ref: headerRef, isVisible: headerVisible } = useReveal({ threshold: 0.25 });
  const { ref: whoRef, isVisible: whoVisible } = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px" });
  const { ref: whatRef, isVisible: whatVisible } = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px", reduceMotion: isDesktop });
  const { ref: howRef, isVisible: howVisible } = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px", reduceMotion: isDesktop });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event) => setIsDesktop(event.matches);
    const frameId = requestAnimationFrame(() => setIsDesktop(mediaQuery.matches));
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (isVideoReady) return undefined;
    const timeout = setTimeout(() => setIsVideoReady(true), 2000);
    return () => clearTimeout(timeout);
  }, [isVideoReady]);

  return (
    <section className="relative overflow-hidden">
      {/* Desktop background */}
      <video
        src="/videos/galaxy.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={galaxyPoster}
        className="hidden md:block fixed inset-0 w-full h-full object-cover brightness-[0.62]"
        aria-hidden="true"
      />
      <div className="hidden md:block fixed inset-0 bg-black/75" aria-hidden="true" />

      {/* Mobile background */}
      <video
        src="/videos/infinity-lightart.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoReady(true)}
        poster={infinityLightartPoster}
        className="md:hidden fixed inset-0 w-full h-full object-cover brightness-90"
        aria-hidden="true"
      />
      <div className="md:hidden fixed inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-16 md:pt-28 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.4fr] items-start">
          {/* Left: video */}
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 hidden md:block">
            <video
              src="/videos/infinity-lightart.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoReady(true)}
              poster={infinityLightartPoster}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: text content */}
          <div className="space-y-10 mt-14 md:mt-16">
            <header
              ref={headerRef}
              className={`space-y-4 slide-in-left ${isVideoReady && headerVisible ? "is-visible" : ""
                }`}
            >
              <h1 className="brand-section-kicker text-brand-lavender text-lg">
                AI Consulting for strategy, tools, workflows, and content.
              </h1>
              <p className="text-4xl md:text-5xl font-bold">
                Let&apos;s reimagine everything, together.
              </p>
            </header>

            <div
              ref={whoRef}
              className={`space-y-4 slide-in-right ${isVideoReady && whoVisible ? "is-visible" : ""
                }`}
            >
              <h2 className="brand-section-kicker text-brand-lavender text-md">Who we are</h2>
              <p className="text-gray-300 max-w-2xl">
                AI changes fast. We rigorously evaluate models and tools so you don&apos;t have to.
                Our work is grounded in experience across tech startups, advertising, and consumer brands. We
                build practical AI systems for communication, personalization, and operations.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div
                ref={whatRef}
                className={`space-y-3 slide-in-left ${isVideoReady && whatVisible ? "is-visible" : ""
                  }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">What we do</h2>
                <p className="text-gray-300">
                  We design and implement the playbook for integrating AI into the systems that run the business.
                  This includes strategy, content engines, workflow automation, and custom tools.
                  Tools don&apos;t replace taste, and real expertise is proven through execution.
                </p>
              </div>

              <div
                ref={howRef}
                className={`space-y-3 slide-in-right ${isVideoReady && howVisible ? "is-visible" : ""
                  }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">How we work</h2>
                <p className="text-gray-300">
                  You bring the goals. We put the right systems in place. AI handles the repetitive, error-prone work.
                  People handle judgment, quality, and intent. We focus on fixing foundations first so operations can scale reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
