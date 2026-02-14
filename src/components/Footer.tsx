import type { Lang } from "@/i18n/i18n";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} fbwebvie</p>
          <p>
            {lang === "ru"
              ? "Сделано на Next.js • Деплой на Netlify"
              : "Built with Next.js • Deployed on Netlify"}
          </p>
        </div>
      </div>
    </footer>
  );
}
