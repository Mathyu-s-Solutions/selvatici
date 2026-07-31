import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { it } from "./it";
import type { Content } from "./types";

const dictionaries: Record<Locale, Content> = { it, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content } from "./types";
