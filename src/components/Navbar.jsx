'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/toolkit", label: "Toolkit" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsMenuOpen(false));
    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  const renderLinks = (itemClass = "") => (
    NAV_LINKS.map(({ href, label }) => {
      const isActive = pathname === href;
      return (
        <li key={label}>
          <Link
            href={href}
            className={`${itemClass} ${isActive ? "text-brand-lavender" : "text-white hover:text-brand-lavender/70 transition"}`.trim()}
          >
            {label}
          </Link>
        </li>
      );
    })
  );

  return (
    <nav className="fixed inset-x-0 top-4 px-4 md:px-8 z-50">
      <div className="bg-black/40 backdrop-blur text-white border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-none">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl tracking-[0.12em] text-brand-lavender">reimagen</h1>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex flex-col gap-1.5 rounded border border-white/30 px-3 py-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>

          <ul className="hidden md:flex gap-6 text-md tracking-[0.12em]">
            {renderLinks()}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 flex flex-col gap-4 text-sm tracking-[0.2em] md:hidden border-t border-white/10 pt-4 text-right">
            {renderLinks("block")}
          </ul>
        )}
      </div>
    </nav>
  );
}
