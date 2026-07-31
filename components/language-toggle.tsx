import Link from "next/link";

import { locales, type Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  /** Font size of the labels — 12px in the nav, 13px in the drawer. */
  size?: 12 | 13;
};

export function LanguageToggle({ locale, size = 12 }: LanguageToggleProps) {
  return (
    <div
      className="flex items-center gap-[2px] font-bold tracking-[.06em]"
      style={{ fontSize: `${size}px` }}
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && <span className="opacity-40">/</span>}
          <Link
            href={`/${code}`}
            hrefLang={code}
            aria-current={code === locale ? "true" : undefined}
            className={`px-1.5 py-1 text-inherit ${
              code === locale ? "opacity-100" : "opacity-45"
            }`}
          >
            {code.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
