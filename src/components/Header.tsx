"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          tf<span className="text-gray-400">.</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-100 px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}