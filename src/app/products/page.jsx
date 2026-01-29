'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroIntro from '@/components/toolkit/HeroIntro';
import CarouselNavigationButtons from '@/components/CarouselNavigationButtons';

const fitnessRecap = '/assets/fitness-recap.png';
const macrosTrackerPoster = '/assets/macros-tracker.png';
const calibratePoster = '/assets/calibrate.jpg';
const creationRobotPoster = '/assets/creation-of-robot.jpg';

function ProductCard({ product, index, categoryStyles, isDesktop }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!isDesktop) {
      const frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frameId);
    }
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, isDesktop]);

  const textClass = categoryStyles[product.category]?.text || 'text-white';
  const linkClass =
    categoryStyles[product.category]?.link || categoryStyles.default.link;

  return (
    <div
      ref={cardRef}
      className={`brand-card min-w-[260px] max-w-xs text-white snap-center flex-shrink-0 ${isDesktop ? 'slide-in-right' : 'card-enter'
        } ${isVisible ? 'is-visible' : ''}`}
      data-product-card
      style={{
        transitionDelay: isDesktop && isVisible ? `${index * 80}ms` : '0ms',
      }}
    >
      <div className="p-4 flex flex-col flex-grow">
        <h4 className={`text-lg font-semibold ${textClass}`}>
          {product.title}
        </h4>
        <p
          className={`text-xs uppercase tracking-wide mb-2 ${categoryStyles[product.category]?.text || 'text-gray-400'
            }`}
        >
          {product.category === 'Apps'
            ? 'App'
            : product.category === 'Agents'
              ? 'Agent'
              : product.category}
        </p>
        <p className="text-sm text-gray-300 mb-4 flex-grow">
          {product.description}
        </p>
        {product.tools && (
          <p className="brand-section-subhead text-brand-lavender text-xs mb-3">
            AI Tools: <span className="text-white">{product.tools.join(', ')}</span>
          </p>
        )}
        {product.stack && (
          <p className="brand-section-subhead text-brand-peach text-xs mb-3">
            Stack: <span className="text-white">{product.stack.join(', ')}</span>
          </p>
        )}
        <div className="mt-auto flex flex-col gap-3">
          {product.image && (
            <div className="relative w-full h-32 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover"
              />
            </div>
          )}
          {product.title === 'Calibrate: Confidently Automate Your Workflows' && (
            <>
              <a
                href="https://youtu.be/RDJ4sWbqu6g?si=Sn0qPdJeO_2BRy1L"
                className={`brand-cta-sm ${linkClass}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Overview →
              </a>
            </>
          )}
          {((product.category === 'Agents' && product.title !== 'Calibrate: Confidently Automate Your Workflows') || product.comingSoon) ? (
            <Link href="/contact" className={`brand-cta-sm ${linkClass}`}>
              Get Notified →
            </Link>
          ) : (
            <a
              href={product.link}
              className={`brand-cta-sm ${linkClass}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.title === 'Calibrate: Confidently Automate Your Workflows'
                ? 'Open Repo →'
                : product.category === 'Other'
                  ? 'Open Repo →'
                  : 'Try Product →'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 768px)').matches
      : false
  );

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

  const products = {
    applications: [
      {
        title: "FitnessAI",
        description: "Set your goals and log workouts. Let AI analyze your progress and generate workout plans. In-depth charts for progressive overload, imbalance detection, and calorie burn. It's like having AI Tableau for your workout data.",
        link: "https://fitnessai-prod--fitnessai-prod.us-central1.hosted.app/",
        image: fitnessRecap,
        tools: ["Gemini", "Genkit", "Firebase Studio", "Antigravity", "Cursor", "Codex", "Claude Code"],
        stack: ["Next.js (React)", "TypeScript", "Firebase Auth + Firestore"],
      },
      {
        title: "Macros Tracker",
        description: "Chat with your AI coach and have it calculate your macros, log your meals, and give you live advice on how to hit your macro goals. View daily, weekly, and monthly rollups to stay on track.",
        link: "https://macros-coach.vercel.app/",
        image: macrosTrackerPoster,
        tools: ["Google Generative AI", "Cursor", "Antigravity", "Codex", "Gemini"],
        stack: ["Next.js (React)", "TypeScript", "Firebase Auth + Firestore", "Vercel"],
      },
    ],
    agents: [
      {
        title: "Content Lab Prototype",
        description: "In development with Gemini 3 preview. The Problem: prompt engineering does not come naturally to most people. The Solution: multi-modal unlocks visually-driven interfaces so people don't have to become masters of languge. Prototype available Feb 9.",
        link: "/contact",
        tools: ["Gemini", "Antigravity", "Cursor", "Claude", "Codex"],
        stack: ["Next.js", "Python"],
        comingSoon: true,
      },
      {
        title: "Calibrate: Confidently Automate Your Workflows",
        description: "Upload your workflow and let AI analyze its automation compatibility. Create your agent org chart, A2A cards, and tool registries. This was a team submission for the Google x Kaggle Agents Intensive Program.",
        link: "https://github.com/reimagen/agentarchitecture",
        tools: ["Codex", "Claude", "Cursor", "Google ADK", "Gemini", "NotebookLM"],
        stack: ["Next.js (React)", "Python services (FastAPI)", "Firebase Auth + Firestore"],
        image: calibratePoster,
      },
    ],
    other: [
      {
        title: "reimagen Website",
        description: "Created with AI IDEs, CLI coding agents, and GenAI video models. Video assets were created with Sora, Meta AI, Veo, and via OpenArt's platform to battle-test the models from the big international labs: Kling, WAN, Seedance, Minimax Hailuo, PixVerse, Vidu, etc. TLDR: Do not sleep on these, especially Kling.",
        link: "https://github.com/reimagen/reimagen-website",
        tools: ["Cursor", "Codex", "Antigravity", "Sora", "OpenArt"],
        stack: ["Vite + React", "Tailwind", "Vercel"],
      },
    ],
    gpts: [
      {
        title: "YC Office Hours",
        description: "YC partner board simulation giving you direct, high-leverage startup feedback. Challenges assumptions, asks clarifying questions, and adapts feedback by company stage.",
        link: "https://chatgpt.com/g/g-69050a13e2f081919fa4a1465e0cc273-yc-partners-office-hours",
      },
      {
        title: "a16z Office Hours",
        description: "A16Z-style advisory board simulation partner-level strategic feedback. Provides differentiated takes across product, market, and defensibility.",
        link: "https://chatgpt.com/g/g-6905072329f8819188ce714b9880984d-a16z-partners-office-hours",
      },
      {
        title: "Creative Director: AI Media",
        description: "A creative partner that turns your ideas and aesthetic intent into structured, model-optimized prompts designed to improve composition, motion, and visual consistency.",
        link: "https://chatgpt.com/g/g-6965ad33b7788191bbdd8d49bf201c8f-creative-director-for-ai-media",
      },
      {
        title: "Social Media Copywriter",
        description: "Writes platform-optimized copy for TikTok, IG, Facebook, YouTube, LinkedIn, and X. Adapts tone and structure per platform while enforcing basic compliance and brand safety.",
        link: "https://chatgpt.com/g/g-6965a2af838081918148a56770ba8f15-social-media-copywriter",
      },
      {
        title: "Focus Group Simulator",
        description: "Runs simulated user reactions across key demographics and social platforms. Surfaces conflicting viewpoints instead of averaging responses.",
        link: "https://chatgpt.com/g/g-681683c622688191b4ef22413c711047-focus-group-simulator",
      },
      {
        title: "FitnessAI Companion GPT",
        description: "AI fitness companion paired with FitnessAI for training and recovery insights. Interprets uploaded InBody data conservatively and avoids medical claims.",
        link: "https://chatgpt.com/g/g-68b5eaa588208191b9482111e885291e-fitnessai-companion-coach",
      },
    ],
  };

  const allProducts = [
    ...products.agents.map((p) => ({ ...p, category: 'Agents' })),
    ...products.applications.map((p) => ({ ...p, category: 'Apps' })),
    ...products.other.map((p) => ({ ...p, category: 'Other' })),
  ];
  const gptProducts = products.gpts;

  const productScrollRef = useRef(null);
  const gptScrollRef = useRef(null);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeGptIndex, setActiveGptIndex] = useState(0);

  const categoryStyles = {
    Apps: {
      pill: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black border-brand-lavender',
      link: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black',
      text: 'text-brand-lavender'
    },
    Agents: {
      pill: 'bg-brand-pink hover:bg-brand-pink-dark text-black border-brand-pink',
      link: 'bg-brand-pink hover:bg-brand-pink-dark text-black',
      text: 'text-brand-pink'
    },
    Other: {
      pill: 'bg-brand-peach hover:bg-brand-peach-dark text-black border-brand-peach',
      link: 'bg-brand-peach hover:bg-brand-peach-dark text-black',
      text: 'text-brand-peach'
    },
    default: {
      pill: 'bg-gray-200 text-black border-gray-200',
      link: 'bg-white/10 hover:bg-white/20 text-white'
    }
  };

  const visibleProducts = allProducts;

  useEffect(() => {
    const node = productScrollRef.current;
    if (!node) return undefined;

    let animationFrame;
    const updateActiveCard = () => {
      animationFrame = null;
      const cards = node.querySelectorAll('[data-product-card]');
      if (!cards.length) return;
      const containerRect = node.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closestIndex = 0;
      let minDelta = Infinity;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const delta = Math.abs(cardCenter - containerCenter);
        if (delta < minDelta) {
          minDelta = delta;
          closestIndex = index;
        }
      });
      setActiveProductIndex(closestIndex);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveCard);
    };

    node.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveCard);
    updateActiveCard();

    return () => {
      node.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveCard);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [visibleProducts.length]);

  useEffect(() => {
    const node = gptScrollRef.current;
    if (!node) return undefined;

    let animationFrame;
    const updateActiveCard = () => {
      animationFrame = null;
      const cards = node.querySelectorAll('[data-gpt-card]');
      if (!cards.length) return;
      const containerRect = node.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closestIndex = 0;
      let minDelta = Infinity;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const delta = Math.abs(cardCenter - containerCenter);
        if (delta < minDelta) {
          minDelta = delta;
          closestIndex = index;
        }
      });
      setActiveGptIndex(closestIndex);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveCard);
    };

    node.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveCard);
    updateActiveCard();

    return () => {
      node.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveCard);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [gptProducts.length]);

  const scrollToGptIndex = (index) => {
    const node = gptScrollRef.current;
    if (!node) return;
    const cards = node.querySelectorAll('[data-gpt-card]');
    const target = cards[index];
    if (!target) return;
    const containerRect = node.getBoundingClientRect();
    const cardRect = target.getBoundingClientRect();
    const delta = cardRect.left - containerRect.left;
    node.scrollTo({
      left: node.scrollLeft + delta,
      behavior: 'smooth',
    });
  };

  const scrollToProductIndex = (index) => {
    const node = productScrollRef.current;
    if (!node) return;
    const cards = node.querySelectorAll('[data-product-card]');
    const target = cards[index];
    if (!target) return;
    const containerRect = node.getBoundingClientRect();
    const cardRect = target.getBoundingClientRect();
    const delta = cardRect.left - containerRect.left;
    node.scrollTo({
      left: node.scrollLeft + delta,
      behavior: 'smooth',
    });
  };

  const handlePrevGpt = () => {
    setActiveGptIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? gptProducts.length - 1 : prevIndex - 1;
      scrollToGptIndex(newIndex);
      return newIndex;
    });
  };

  const handleNextGpt = () => {
    setActiveGptIndex((prevIndex) => {
      const newIndex = prevIndex === gptProducts.length - 1 ? 0 : prevIndex + 1;
      scrollToGptIndex(newIndex);
      return newIndex;
    });
  };

  const handlePrevProduct = () => {
    setActiveProductIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? visibleProducts.length - 1 : prevIndex - 1;
      scrollToProductIndex(newIndex);
      return newIndex;
    });
  };

  const handleNextProduct = () => {
    setActiveProductIndex((prevIndex) => {
      const newIndex = prevIndex === visibleProducts.length - 1 ? 0 : prevIndex + 1;
      scrollToProductIndex(newIndex);
      return newIndex;
    });
  };

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden pb-48">
        <video
          src="/videos/creation-of-robot.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={creationRobotPoster}
          className="fixed inset-0 w-full h-full object-cover brightness-100 md:scale-100 scale-[1.05]"
        />
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

        <div className="relative z-10 flex flex-col px-4 py-16 md:px-10 lg:px-16">
          <HeroIntro
            title="Products"
            subhead="A roundup of Public Apps, Agents, and Custom GPTs"
            titleClass="text-3xl mb-1 tracking-[0.15em] uppercase text-center"
            subheadClass="brand-section-subhead text-brand-lavender text-sm"
            wrapperClass="mb-8 text-center flex flex-col items-center space-y-2"
            titleAs="h2"
            subheadAs="p"
          />

          {/* Navigation for Products Carousel */}
          <div className="mb-6 flex justify-center px-4 md:px-0">
            <CarouselNavigationButtons
              onPrev={handlePrevProduct}
              onNext={handleNextProduct}
              isVisible={visibleProducts.length > 0}
              ariaLabelPrev="Previous product"
              ariaLabelNext="Next product"
            />
          </div>

          {/* Horizontal carousel */}
          <div
            className="overflow-x-auto pb-6 pt-2 products-scroll scrollbar-lavender products-scroll-compact dot-scroll"
            ref={productScrollRef}
          >
            <div className="flex gap-4 snap-x snap-mandatory">
              {visibleProducts.map((product, index) => (
                <ProductCard
                  key={`${product.title}-${index}`}
                  product={product}
                  index={index}
                  categoryStyles={categoryStyles}
                  isDesktop={isDesktop}
                />
              ))}
            </div>
          </div>
          {visibleProducts.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {visibleProducts.map((_, index) => (
                <button
                  key={`product-dot-${index}`}
                  type="button"
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeProductIndex ? 'w-8 bg-brand-lavender' : 'w-2 bg-white/30'
                    }`}
                  aria-label={`Go to product card ${index + 1}`}
                  onClick={() => scrollToProductIndex(index)}
                />
              ))}
            </div>
          )}
          <div className="flex justify-center mt-8">
            <Link href="/contact" className="brand-cta text-sm bg-brand-lavender hover:bg-brand-lavender-dark text-black px-6 py-3 rounded-full">
              Get Dev Help →
            </Link>
          </div>
          <section className="mb-8">
            <h3 className="text-3xl mt-12 mb-1 tracking-[0.15em] uppercase text-center">Custom GPTs</h3>
            <p className="brand-section-subhead text-brand-lavender text-sm text-center mt-4">
              [ Requires ChatGPT Account ]
            </p>

            <div className="flex justify-center mt-6">
              <CarouselNavigationButtons
                onPrev={handlePrevGpt}
                onNext={handleNextGpt}
                isVisible={gptProducts.length > 0}
                ariaLabelPrev="Previous GPT card"
                ariaLabelNext="Next GPT card"
              />
            </div>
            <div
              className="overflow-x-auto pb-4 pt-2 products-scroll scrollbar-lavender dot-scroll mt-8"
              ref={gptScrollRef}
            >
              <div className="flex gap-4 snap-x snap-mandatory">
                {gptProducts.map((product, index) => (
                  <div
                    key={`gpt-${product.title}-${index}`}
                    className="brand-card min-w-[260px] max-w-xs text-white snap-center flex-shrink-0"
                    data-gpt-card
                  >
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-lg font-semibold mb-2 text-brand-lavender">{product.title}</h4>
                      <p className="text-sm text-gray-300 mb-4 flex-grow">
                        {product.description}
                      </p>
                      <a
                        href={product.link}
                        className="brand-cta-sm bg-brand-lavender hover:bg-brand-lavender-dark text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Chat →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {gptProducts.map((_, index) => (
                <button
                  key={`gpt-dot-${index}`}
                  type="button"
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeGptIndex ? 'w-8 bg-brand-lavender' : 'w-2 bg-white/30'
                    }`}
                  aria-label={`Go to GPT card ${index + 1}`}
                  onClick={() => scrollToGptIndex(index)}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/contact" className="brand-cta text-sm bg-brand-lavender hover:bg-brand-lavender-dark text-black px-6 py-3 rounded-full">
                Build me a GPT →
              </Link>
            </div>
          </section>
          <div className="h-16" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
