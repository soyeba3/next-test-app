import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const defaultLocale = "bn";

export const locales = ["bn", "en"] as const;
export const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
