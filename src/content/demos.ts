export type Demo = {
  title: string;
  subtitle: string;
  tags: string[];
  result: string;
};

export const demos: Demo[] = [
  {
    title: "Vienna Beauty Studio",
    subtitle: "Салон красоты — сайт с онлайн-записью и сильной подачей услуг",
    tags: ["Landing", "UX", "SEO"],
    result: "+52% новых обращений за месяц",
  },
  {
    title: "JuristWien",
    subtitle: "Юридическая фирма — строгий корпоративный стиль и доверие",
    tags: ["Corporate", "SEO", "Content"],
    result: "+44% заявок через форму",
  },
  {
    title: "Wiener Genuss",
    subtitle: "Ресторан — меню, бронирование и быстрый мобильный опыт",
    tags: ["Brand", "Mobile", "Performance"],
    result: "+37% бронирований",
  },
  {
    title: "Meister Auto Wien",
    subtitle: "Автосервис — услуги, карта, быстрый контакт и WhatsApp-CTA",
    tags: ["Local", "CTA", "Speed"],
    result: "+30% обращений",
  },
];
