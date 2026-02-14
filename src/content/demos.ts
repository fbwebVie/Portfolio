export type Demo = {
  slug: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  tags: string[];
  href: string;
  image: string;
};

export const demos: Demo[] = [
  {
    slug: "workshop",
    title: { en: "Auto Workshop", ru: "Автосервис" },
    description: {
      en: "Service website with pricing, gallery, and contact CTA.",
      ru: "Сайт услуг с ценами, галереей и CTA для заявки.",
    },
    tags: ["Business", "Next.js", "SEO"],
    href: "https://example.netlify.app",
    image: "/demos/workshop.png",
  }
];
