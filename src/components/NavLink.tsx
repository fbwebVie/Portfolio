"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/i18n/i18n";

export function NavLink({
  lang,
  label,
  to,
}: {
  lang: Lang;
  label: string;
  to: "home" | "services" | "demos" | "trust" | "pricing" | "contact";
}) {
  const pathname = usePathname();
  const isHome = pathname === `/${lang}`;

  const href =
    to === "home"
      ? `/${lang}`
      : to === "contact"
      ? `/${lang}/contact`
      : isHome
      ? `#${to}`
      : `/${lang}#${to}`;

  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white transition"
    >
      {label}
    </Link>
  );
}
