export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Лендинг для барбершопа",
    description:
      "Одностраничный сайт для барбершопа с секциями услуг, галереей работ, отзывами клиентов и формой записи. Адаптивный дизайн, плавные анимации.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/demo-barbershop.png",
    liveUrl: "https://demo-barbershop-gules.vercel.app",
    codeUrl: "https://github.com/fedotovatais/demo-barbershop",
  },
  {
    id: 2,
    title: "Сайт-визитка фотографа",
    description:
      "Минималистичный сайт-портфолио для фотографа с галереей, лайтбоксом для просмотра фото, секцией «обо мне» и контактной формой.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/demo-photographer.png",
    liveUrl: "https://demo-photographer-jet.vercel.app/",
    codeUrl: "https://github.com/fedotovatais/demo-photographer",
  },
  {
    id: 3,
    title: "Лендинг для фитнес-студии",
    description:
      "Многостраничный сайт фитнес-студии с расписанием занятий, тарифами, командой тренеров, галереей и формой записи. Тёмная тема, яркие акценты.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/demo-fitness.png",
    liveUrl: "https://demo-fitness-six.vercel.app/",
    codeUrl: "https://github.com/fedotovatais/demo-fitness",
  },
];