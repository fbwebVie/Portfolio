import ru from "./dictionaries/ru";

export type Lang = "ru";

export function getDictionary(lang: Lang) {
  return ru;
}
