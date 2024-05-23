import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Test App",
  description: "Next test app for testing purpose",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Layout</title>
        <meta property="og:title" content="Soyeb testing title in layout" />
        <meta
          property="og:image"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta
          property="og:image:secure_url"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
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
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
