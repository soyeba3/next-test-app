import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <>
      <div className="flex items-center justify-center min-h-screen text-bold">
        <h1 className="p-4 text-lg font-bold text-center">{t("title")}</h1>
        <p>This is About page</p>
      </div>
    </>
  );
}
