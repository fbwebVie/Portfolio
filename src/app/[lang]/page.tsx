import Link from "next/link";
import type { Lang } from "@/i18n/i18n";
import { getDict } from "@/i18n/dictionaries";

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang = params.lang;
  const d = getDict(lang);

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 sm:p-12">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {d.hero.title}
          </h1>

          <p className="text-zinc-200 sm:text-lg">{d.hero.subtitle}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/${lang}/demos`}
              className="rounded-2xl bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition active:scale-[0.97]"
            >
              {d.hero.ctaPrimary}
            </Link>

            <Link
              href={`/${lang}/contact`}
              className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-[rgb(var(--accent))]/60 transition active:scale-[0.97]"
            >
              {d.hero.ctaSecondary}
            </Link>
          </div>

          <div className="pt-3 text-xs text-zinc-400">{d.hero.bullets}</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="space-y-6">
        <h2 className="text-xl font-semibold">{d.sections.services}</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {d.services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[rgb(var(--accent))]/30 hover:bg-white/10"
            >
              <p className="font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMOS (später) */}
      <section id="demos" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">{d.sections.demos}</h2>
          <Link className="text-sm text-zinc-300 hover:text-white" href={`/${lang}/demos`}>
            {d.sections.viewAll}
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
          {lang === "ru"
            ? "Демо-работы добавим позже."
            : "We’ll add demo projects later."}
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="space-y-6">
        <h2 className="text-xl font-semibold">{d.sections.trust}</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {d.trust.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[rgb(var(--accent))]/30 hover:bg-white/10"
            >
              <p className="font-semibold">{t.title}</p>
              <p className="mt-2 text-sm text-zinc-300">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">{d.cta.title}</h3>
            <p className="mt-1 text-sm text-zinc-300">{d.cta.text}</p>
          </div>

          <Link
            href={`/${lang}/contact`}
            className="inline-flex w-fit rounded-2xl bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition active:scale-[0.97]"
          >
            {d.cta.button}
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="space-y-6">
        <h2 className="text-xl font-semibold">{d.sections.pricing}</h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* BASIC */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">{d.pricing.basic.name}</h3>
            <p className="mt-2 text-3xl font-bold">{d.pricing.basic.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {d.pricing.basic.items.map((it) => (
                <li key={it}>✔ {it}</li>
              ))}
            </ul>

            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-flex w-full justify-center rounded-2xl border border-white/20 py-3 text-sm hover:border-[rgb(var(--accent))]/60 transition active:scale-[0.97]"
            >
              {d.pricing.basic.button}
            </Link>
          </div>

          {/* STANDARD */}
          <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[rgb(var(--accent))] px-3 py-1 text-xs font-semibold text-white">
              {d.pricing.standard.badge}
            </span>

            <h3 className="text-lg font-semibold">{d.pricing.standard.name}</h3>
            <p className="mt-2 text-3xl font-bold">{d.pricing.standard.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {d.pricing.standard.items.map((it) => (
                <li key={it}>✔ {it}</li>
              ))}
            </ul>

            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[rgb(var(--accent))] py-3 text-sm font-semibold text-white hover:opacity-90 transition active:scale-[0.97]"
            >
              {d.pricing.standard.button}
            </Link>
          </div>

          {/* PRO */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">{d.pricing.pro.name}</h3>
            <p className="mt-2 text-3xl font-bold">{d.pricing.pro.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {d.pricing.pro.items.map((it) => (
                <li key={it}>✔ {it}</li>
              ))}
            </ul>

            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-flex w-full justify-center rounded-2xl border border-white/20 py-3 text-sm hover:border-[rgb(var(--accent))]/60 transition active:scale-[0.97]"
            >
              {d.pricing.pro.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
