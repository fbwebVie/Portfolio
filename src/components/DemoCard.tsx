import type { Demo } from "@/content/demos";
import type { Lang } from "@/i18n/i18n";
import Image from "next/image";


export function DemoCard({ demo, lang }: { demo: Demo; lang: Lang }) {
  const title = demo.title[lang];
  const desc = demo.description[lang];

  return (
    <a
      href={demo.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10"
    >
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={demo.image}
        alt={title}
        fill
        className="object-cover transition group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
    </div>
      <div className="flex items-start justify-between gap-3">
        <p className="text-base font-semibold">{title}</p>
        <span className="text-sm text-zinc-400 group-hover:text-zinc-200">↗</span>
      </div>

      <p className="mt-2 text-sm text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {demo.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
