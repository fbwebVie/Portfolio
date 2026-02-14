"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-white/15 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-200 backdrop-blur hover:border-[rgb(var(--accent))]/60 hover:text-white transition active:scale-[0.95]"
    >
      ↑
    </button>
  );
}
