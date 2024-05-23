import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <>
      <head>
        <title>Layout</title>
        <meta property="og:title" content="About page" />
        <meta
          property="og:image"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta
          property="og:image:secure_url"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="A shiny red apple with a bite taken out"
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/88161150?v=4"
        />
        <meta name="twitter:image:type" content="image/jpeg" />
        <meta name="twitter:image:width" content="400" />
        <meta name="twitter:image:height" content="300" />
      </head>
      <div className="flex items-center justify-center min-h-screen text-bold">
        <h1 className="p-4 text-lg font-bold text-center">{t("title")}</h1>
        <p>This is About page</p>
      </div>
    </>
  );
}
