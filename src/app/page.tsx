import { getDictionary, type Lang } from "@/i18n/i18n";
import { demos } from "@/content/demos";
import { DemoCard } from "@/components/DemoCard";

export default function Page({ params }: { params: { lang: Lang } }) {
  const dict = getDictionary(params.lang);

  return (
    <main className="pt-28">
      <div className="max-w-6xl mx-auto px-4">
        <section className="py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            {dict.hero.badge}
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            {dict.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
            {dict.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/[0.06] transition"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.services.items.map((s) => (
                <div key={s.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="mt-2 text-white/65 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold">{dict.services.title}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.services.items.map((s) => (
              <div key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="py-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold">{dict.cases.title}</h2>
          <p className="mt-3 text-white/70 max-w-2xl">{dict.cases.subtitle}</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((d) => (
              <DemoCard key={d.title} demo={d} />
            ))}
          </div>

          <div className="mt-6 text-xs text-white/50">
            Примеры — демонстрационные кейсы для презентации подхода (без чужих реальных брендов).
          </div>
        </section>

        <section id="why" className="py-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold">{dict.why.title}</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.why.items.map((i) => (
              <div key={i.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-white font-semibold">{i.title}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold">{dict.testimonials.title}</h2>
          <p className="mt-3 text-white/70 max-w-2xl">{dict.testimonials.subtitle}</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.testimonials.items.map((t) => (
              <div key={t.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-white/75 text-sm leading-relaxed">“{t.quote}”</p>
                <div className="mt-5 text-sm text-white font-semibold">{t.name}</div>
                <div className="text-xs text-white/55">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-white/10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">{dict.contact.title}</h2>
            <p className="mt-3 text-white/70 max-w-2xl">{dict.contact.subtitle}</p>

            <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder={dict.contact.name}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />
              <input
                placeholder={dict.contact.email}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />
              <textarea
                placeholder={dict.contact.message}
                className="md:col-span-2 min-h-[140px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
              />
              <button
                type="button"
                className="md:col-span-2 rounded-2xl bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                {dict.contact.button}
              </button>
              <p className="md:col-span-2 text-xs text-white/50">{dict.contact.note}</p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
