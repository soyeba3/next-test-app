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
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
        ...
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
