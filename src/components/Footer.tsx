"use client";

import Link from "next/link";
import { Lang, getDictionary } from "@/i18n/i18n";
import { NavLink } from "@/components/NavLink";

export function Footer({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href={`/${lang}`} className="text-white font-semibold">
              FBWebVie
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Современная веб-разработка из Вены. Чистый дизайн, скорость и результат.
            </p>
          </div>

          <div>
            <h4 className="text-white/70 text-sm font-semibold mb-3">
              {dict.footer.navigation}
            </h4>
            <div className="flex flex-col gap-2">
              <NavLink href="#services">{dict.nav.services}</NavLink>
              <NavLink href="#cases">{dict.nav.cases}</NavLink>
              <NavLink href="#why">{dict.nav.why}</NavLink>
              <NavLink href="#contact">{dict.nav.contact}</NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-white/70 text-sm font-semibold mb-3">
              {dict.footer.social}
            </h4>
            <div className="flex flex-col gap-2">
              <a className="text-white/70 hover:text-white text-sm" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="text-white/70 hover:text-white text-sm" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="text-white/70 hover:text-white text-sm" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <span>© {new Date().getFullYear()} FBWebVie. {dict.footer.rights}</span>
          <span>Next.js • Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
