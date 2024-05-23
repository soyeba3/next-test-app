import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { localePrefix, pathnames } from "./config";

export const locales = ["en", "bn"] as const;

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
