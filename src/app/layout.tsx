import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Lang } from "@/i18n/i18n";

export const metadata = {
  title: "FBWebVie — Веб-разработка в Вене",
  description: "Современные сайты для бизнеса: дизайн, скорость, SEO.",
};

export async function generateStaticParams() {
  return [{ lang: "ru" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang = params.lang;

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
