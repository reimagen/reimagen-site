'use client'

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import ExplorerSection from '@/components/toolkit/ExplorerSection';
import VibeSection from '@/components/toolkit/VibeSection';
import BuilderSection from '@/components/toolkit/BuilderSection';
import ToolkitCTA from '@/components/toolkit/ToolkitCTA';
import HeroIntro from '@/components/toolkit/HeroIntro';
import {
  builderCategories,
  builderRunnersUp,
  explorerTips,
  vibeQuestions,
  vibeStack,
  vibeTips,
} from '@/data/toolkitData';

const dreamscapePoster = '/assets/dreamscape.jpeg';

export default function Toolkit() {
  const sectionKicker = 'brand-section-kicker';
  const personaCtas = [
    {
      id: 'explorer',
      label: "I'm new to AI",
      colorClass: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black',
    },
    {
      id: 'vibe',
      label: 'I want to vibe code',
      colorClass: 'bg-brand-pink hover:bg-brand-pink-dark text-black',
    },
    {
      id: 'builder',
      label: 'I build with code',
      colorClass: 'bg-brand-peach hover:bg-brand-peach-dark text-black',
    },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [buttonOffset, setButtonOffset] = useState(40);
  const [isClient, setIsClient] = useState(false);
  const [personaButtonsAnimated, setPersonaButtonsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (footerRect.top < viewportHeight) {
          const overlap = viewportHeight - footerRect.top;
          setButtonOffset(Math.max(40, overlap + 16));
          return;
        }
      }
      setButtonOffset(40);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsClient(true));
    if (typeof window === 'undefined') {
      const reduceFrameId = requestAnimationFrame(() => setPersonaButtonsAnimated(true));
      return () => {
        cancelAnimationFrame(frameId);
        cancelAnimationFrame(reduceFrameId);
      };
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      const reduceFrameId = requestAnimationFrame(() => setPersonaButtonsAnimated(true));
      return () => {
        cancelAnimationFrame(frameId);
        cancelAnimationFrame(reduceFrameId);
      };
    }
    const timer = setTimeout(() => setPersonaButtonsAnimated(true), 150);
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getHighlightColor = (sectionId) => {
    switch (sectionId) {
      case 'explorer':
        return '199, 164, 246'; // lavender
      case 'vibe':
        return '255, 115, 192'; // pink
      case 'builder':
        return '255, 191, 148'; // peach
      default:
        return '255, 255, 255';
    }
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const glowColor = getHighlightColor(sectionId);

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    if (!prefersReducedMotion && target.animate) {
      setTimeout(() => {
        target.animate(
          [
            { boxShadow: `0 0 0 rgba(${glowColor}, 0)`, transform: 'scale(1)' },
            { boxShadow: `0 0 40px rgba(${glowColor}, 0.6)`, transform: 'scale(1.01)' },
            { boxShadow: `0 0 0 rgba(${glowColor}, 0)`, transform: 'scale(1)' },
          ],
          { duration: 1500, easing: 'ease-out' }
        );
      }, 250);
    }
  };

  return (
    <div className="pt-24">
    <section className="relative pb-24 overflow-visible">
      <video
        src="/videos/floating-dream.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster={dreamscapePoster}
        className="fixed inset-0 w-full h-full object-cover brightness-90"
      />
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 px-4 py-16 md:px-10 lg:px-16 space-y-12">
        <HeroIntro
          title="Toolkit"
          subhead="We try every AI product so you don't have to. What best describes you?"
        />
        <div
          className={`flex flex-wrap justify-center gap-4 transform transition-all duration-700 ease-out ${
            personaButtonsAnimated
              ? 'opacity-100 scale-100 md:translate-x-0'
              : 'opacity-0 scale-95 md:-translate-x-16'
          }`}
        >
          {personaCtas.map((cta) => (
            <ToolkitCTA
              key={cta.id}
              href={`#${cta.id}`}
              colorClass={cta.colorClass}
              onClick={(event) => scrollToSection(event, cta.id)}
            >
              {cta.label}
            </ToolkitCTA>
          ))}
        </div>


        <ExplorerSection
          sectionKicker={sectionKicker}
          explorerTips={explorerTips}
        />

        <VibeSection
          sectionKicker={sectionKicker}
          vibeStack={vibeStack}
          vibeTips={vibeTips}
          vibeQuestions={vibeQuestions}
        />

        <BuilderSection
          sectionKicker={sectionKicker}
          builderCategories={builderCategories}
          builderRunnersUp={builderRunnersUp}
        />
      </div>
    </section>
    {isClient && showBackToTop
      ? createPortal(
          <button
            onClick={scrollToTop}
            className="fixed right-6 md:right-10 z-[999] rounded-full bg-brand-lavender px-4 py-2 text-sm text-black shadow-xl transition hover:bg-brand-lavender-dark"
            aria-label="Back to top"
            style={{ bottom: `${buttonOffset}px` }}
          >
            Back to top ↑
          </button>,
          document.body
        )
      : null}
    </div>
  );
}
