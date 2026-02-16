"use client";

import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/70 hover:text-white transition-colors text-sm"
    >
      {children}
    </Link>
  );
}
