export const languages = ["en", "ru"] as const;
export type Lang = (typeof languages)[number];

export function isLang(x: string): x is Lang {
  return (languages as readonly string[]).includes(x);
}
