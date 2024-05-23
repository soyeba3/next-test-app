import { getTranslations } from "next-intl/server";
import { getAllTodo } from "../actions/todos-action";
import Button from "../components/button";
import SingleTodo from "../components/single-todo";

export default async function Home() {
  const data = await getAllTodo();
  const t = await getTranslations("Home");

  return (
    <>
      <head>
        <title>The Rock (1996)</title>
        <meta property="og:title" content="Soyeb testing title in root" />
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
      <div className="container">
        <h1 className="p-4 text-lg font-bold text-center">Todos</h1>
        <h1 className="p-4 text-lg font-bold text-center">{t("title")}</h1>
        <ul className="flex flex-col gap-5 p-5">
          {data.map((item) => (
            <SingleTodo key={item.id} todo={item} />
          ))}
        </ul>
        <div className="flex justify-center my-10">
          <Button />
        </div>
      </div>
    </>
  );
}
