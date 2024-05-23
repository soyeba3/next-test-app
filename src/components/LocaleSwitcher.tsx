"use client";

import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const localActive = useLocale();

  const handleLanguageChange = (value: string) => {
    const segments = pathname.split("/");
    if (segments.length === 2) {
      segments[1] = value;
    } else {
      segments.splice(1, 1, value);
    }
    const newPathname = segments.join("/");
    startTransition(() => {
      router.replace(newPathname);
    });

    // const nextLocale = value;
    // startTransition(() => {
    //   router.replace(
    //     // @ts-expect-error -- TypeScript will validate that only known `params`
    //     // are used in combination with a given `pathname`. Since the two will
    //     // always match for the current route, we can skip runtime checks.
    //     { pathname, params },
    //     { locale: nextLocale },
    //   );
    // });
  };

  return (
    <label>
      <select
        className="inline-flex py-3 pl-2 pr-6 bg-transparent appearance-none"
        disabled={isPending}
        defaultValue={localActive}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleLanguageChange(event.target.value)
        }
      >
        <option value="bn">Bangla</option>
        <option value="en">English</option>
      </select>
    </label>
  );
}
