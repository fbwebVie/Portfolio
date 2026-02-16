import type { Demo } from "@/content/demos";

export function DemoCard({ demo }: { demo: Demo }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white text-lg font-semibold">{demo.title}</h3>
          <p className="mt-2 text-white/70 text-sm leading-relaxed">
            {demo.subtitle}
          </p>
        </div>
        <div className="shrink-0 rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white/70">
          {demo.result}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {demo.tags.map((t) => (
          <span
            key={t}
            className="text-xs text-white/70 border border-white/10 bg-black/30 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
