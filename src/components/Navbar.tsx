"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDict } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/i18n";

export function Navbar({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Aktive Route erkennen
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  // Smart Language Switch (behält aktuelle Seite)
  const switchLanguage = () => {
    const segments = pathname.split("/");
    segments[1] = lang === "en" ? "ru" : "en";
    return segments.join("/");
  };

  const other = lang === "en" ? "ru" : "en";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="font-semibold tracking-tight">
          fbwebvie
          <span className="ml-2 rounded-full bg-[rgb(var(--accent))] px-2 py-1 text-xs text-white">
            portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm text-zinc-200">
          <Link
            href={`/${lang}`}
            className={`px-3 py-2 rounded-xl transition ${
              isActive(`/${lang}`)
                ? "bg-[rgb(var(--accent))]/20 text-white"
                : "hover:bg-white/5"
            }`}
          >
            {d.nav.home}
          </Link>

          <Link
            href={`/${lang}#pricing`}
            className="px-3 py-2 rounded-xl hover:bg-white/5 transition"
          >
            {d.nav.packages}
          </Link>

          <Link
            href={`/${lang}/demos`}
            className={`px-3 py-2 rounded-xl transition ${
              isActive(`/${lang}/demos`)
                ? "bg-[rgb(var(--accent))]/20 text-white"
                : "hover:bg-white/5"
            }`}
          >
            {d.nav.demos}
          </Link>

          <Link
            href={`/${lang}/contact`}
            className={`px-3 py-2 rounded-xl transition ${
              isActive(`/${lang}/contact`)
                ? "bg-[rgb(var(--accent))]/20 text-white"
                : "hover:bg-white/5"
            }`}
          >
            {d.nav.contact}
          </Link>

          {/* Language Switch */}
          <Link
            href={switchLanguage()}
            className="ml-2 rounded-full border border-white/15 px-3 py-1 hover:border-[rgb(var(--accent))]/70 transition"
          >
            {other.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950 px-4 py-4 space-y-3 text-sm text-zinc-200">
          <Link href={`/${lang}`} onClick={() => setOpen(false)}>
            {d.nav.home}
          </Link>

          <Link href={`/${lang}#pricing`} onClick={() => setOpen(false)}>
            {d.nav.packages}
          </Link>

          <Link href={`/${lang}/demos`} onClick={() => setOpen(false)}>
            {d.nav.demos}
          </Link>

          <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}>
            {d.nav.contact}
          </Link>

          <Link href={switchLanguage()} onClick={() => setOpen(false)}>
            {other.toUpperCase()}
          </Link>
        </div>
      )}
    </header>
  );
}
