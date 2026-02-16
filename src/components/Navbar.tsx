"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lang, getDictionary } from "@/i18n/i18n";

const shell =
  "backdrop-blur-xl bg-black/40 border border-white/10 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.08)]";

export function Navbar({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const links = [
    { href: "#services", label: dict.nav.services },
    { href: "#cases", label: dict.nav.cases },
    { href: "#why", label: dict.nav.why },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href={`/${lang}`} className={`px-4 py-3 ${shell} text-white text-sm font-semibold`}>
              FBWebVie
            </Link>

            <nav className={`hidden md:flex items-center gap-1 px-2 py-2 ${shell}`}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="ml-1 px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-white/90 transition"
              >
                {dict.nav.contact}
              </Link>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden px-4 py-3 ${shell} text-white/80`}
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl p-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block px-4 py-3 rounded-2xl bg-white text-black font-medium text-center"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
