import { en } from "./en";
import { ru } from "./ru";
import type { Lang } from "../i18n";

export function getDict(lang: Lang) {
  return lang === "ru" ? ru : en;
}
