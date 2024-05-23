import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "en" as const;
export const locales = ["en", "bn"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    bn: "/about",
  },
  "/[id]": {
    en: "/[id]",
    bn: "/[id]",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
