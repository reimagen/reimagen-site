'use client'

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/monument-valley-aurora.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/monument-valley-aurora.jpg"
          className="fixed inset-0 w-full h-full object-cover brightness-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 text-center space-y-6 max-w-2xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-lavender">404</h1>
          <p className="text-2xl md:text-3xl font-semibold">Page not found</p>
          <p className="text-lg text-white/80">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-block brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black transition-transform duration-200 hover:scale-105"
          >
            Back to home →
          </Link>
        </div>
      </section>
    </div>
  );
}
