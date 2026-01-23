'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import GalleryCarousel from "@/components/GalleryCarousel";
import HeroIntro from '@/components/toolkit/HeroIntro';
import CarouselNavigationButtons from '@/components/CarouselNavigationButtons';

const galaxyPoster = "/assets/galaxy.jpg";

// Models used / planned for the gallery
const MODELS = ["Sora", "Veo"];
const FILTER_OPTIONS = ["All", ...MODELS, "Others"];
const modelStyles = {
  Sora: 'bg-brand-lavender text-black hover:bg-brand-lavender-dark',
  Veo: 'bg-brand-pink text-black hover:bg-brand-pink-dark',
  Others: 'bg-brand-peach text-black hover:bg-brand-peach-dark'
};

const filterButtonBase = 'brand-cta text-xs tracking-[0.2em] uppercase';

const galleryItems = [
  {
    order: 1,
    format: "Video",
    src: "/videos/cherry-blossoms.mp4",
    alt: "A Woman Smiles as Cherry Blossoms Cascade Through the Air",
    caption: "Spring Blooms",
    model: "Meta AI Vibes",
    poster: "/assets/cherry-blossoms.jpg",
  },
  {
    order: 2,
    format: "Video",
    src: "/videos/nyc-timelapse.mp4",
    alt: "A Woman Stands Still as New York City Taxis and Pedestrians Buzz Past",
    caption: "Stillness in New York City",
    model: "Meta AI Vibes",
    poster: "/assets/infinity-lightart.jpg",
  },
  {
    order: 3,
    format: "Video",
    src: "/videos/wishing-flower.mp4",
    alt: "A Young Woman Blows a Wishing Flower and the Particles Float Away",
    caption: "Imagination is a Wish",
    model: "Meta AI Vibes",
    poster: "/assets/wishing-flower.jpg",
  },
  {
    order: 4,
    format: "Video",
    src: "/videos/impossible-run.mp4",
    alt: "Woman Running in Impossible Places",
    caption: "Redefine Impossible",
    model: "Sora 2",
    poster: "/assets/impossible-run.jpg",
  },
  {
    order: 5,
    format: "Video",
    src: "/videos/ocean-splash.mp4",
    alt: "A girl sits on a rock as a giant wave splashes behind her.",
    caption: "Ocean Splash",
    model: "Meta AI Vibes",
    poster: "/assets/ocean-splash.jpg",
  },
  {
    order: 6,
    format: "Video",
    src: "/videos/cloud-dog.mp4",
    alt: "Cloud Morphs Into a Dog",
    caption: "Watching the Clouds Go By",
    model: "Sora",
    poster: "/assets/clouds-dog.jpg",
  },
  {
    order: 7,
    format: "Video",
    src: "/videos/roco-genz-kling2.5.mp4",
    alt: "A GenZ Girl Holding Cell Phone in Rococo Style",
    caption: "Rococo Goes 2025",
    model: "Kling 2.5",
    poster: "/assets/rococo.jpeg",
  },
  {
    order: 8,
    format: "Video",
    src: "/videos/creation-of-robot.mp4",
    alt: "Creation of Adam but a Robot instead of a man",
    caption: "Creation of Adam",
    model: "Minimax Hailuo 2",
    poster: "/assets/creation-of-robot.jpg",
  },
  {
    order: 9,
    format: "Video",
    src: "/videos/infinity-lightart.mp4",
    alt: "A Woman Draws the Infinity Sign with Light",
    caption: "Infinity Light Art",
    model: "Meta AI Vibes",
    poster: "/assets/infinity-lightart.jpg",
  },
  {
    order: 10,
    format: "Video",
    src: "/videos/rain-window-moody.mp4",
    alt: "A Young Woman Looking Out a Window in the Rain",
    caption: "Rainy Day Dreams",
    model: "Meta AI Vibes",
    poster: "/assets/rain-window-moody.jpeg",
  },
];

export default function Gallery() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const carouselRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => setIsGridVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  const [selectedModel, setSelectedModel] = useState("All");
  const orderedItems = [...galleryItems].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const matchesModel = (modelName, filter) =>
    modelName?.toLowerCase().startsWith(filter.toLowerCase());

  const filteredItems =
    selectedModel === "All"
      ? orderedItems
      : selectedModel === "Others"
        ? orderedItems.filter((item) => !MODELS.some((base) => matchesModel(item.model, base)))
        : orderedItems.filter((item) => matchesModel(item.model, selectedModel));

  const handlePrev = () => {
    if (carouselRef.current && carouselRef.current.slidePrev) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current && carouselRef.current.slideNext) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="pt-24">
      <section className="relative pb-24 overflow-hidden">
        <video
          src="/videos/galaxy.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={galaxyPoster}
          className="fixed inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

        <div className="relative z-10 px-4 py-16 md:px-10 lg:px-16">
          <HeroIntro
            title="Gallery"
            subhead="Swipe below to explore a short selection, head to socials for more."
            titleClass="text-3xl mb-1 tracking-[0.15em] uppercase text-center"
            subheadClass="brand-section-subhead text-brand-lavender text-center"
            wrapperClass="mb-8 text-center flex flex-col items-center space-y-2"
            titleAs="h1"
            subheadAs="p"
          />

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4 px-4 md:px-0">
            {/* Model Filters */}
            <div className="hidden">
              <div className="flex flex-wrap gap-3">
                {FILTER_OPTIONS.map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`${filterButtonBase} ${selectedModel === model
                      ? model === 'All'
                        ? 'bg-gray-200 text-black'
                        : modelStyles[model] || 'bg-white/20 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center w-full">
              <CarouselNavigationButtons
                onPrev={handlePrev}
                onNext={handleNext}
                isVisible={filteredItems.length > 0}
                ariaLabelPrev="Previous gallery item"
                ariaLabelNext="Next gallery item"
              />
            </div>
          </div>


          <div className={`gallery-stack-animate ${isGridVisible ? 'is-visible' : ''}`}>
            <GalleryCarousel items={filteredItems} ref={carouselRef} />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/contact" className="brand-cta text-sm bg-brand-lavender hover:bg-brand-lavender-dark text-black px-6 py-3 rounded-full">
              COMMISSION CONTENT →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
