import type { Metadata } from "next";
import { isLang, type Lang } from "@/i18n/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "fbwebvie | Portfolio",
  description: "Modern websites built with Next.js",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = isLang(params.lang) ? (params.lang as Lang) : "en";

  return (
    <>
      {/* Purple Glow Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))]/20 blur-3xl" />
        <div className="absolute right-[-220px] top-[120px] h-[460px] w-[460px] rounded-full bg-[rgb(var(--accent2))]/15 blur-3xl" />
        <div className="absolute bottom-[-220px] left-[80px] h-[520px] w-[520px] rounded-full bg-[rgb(var(--accent))]/10 blur-3xl" />
      </div>

      <Navbar lang={lang} />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
      <ScrollTop />
      <Footer lang={lang} />
    </>
  );
}
