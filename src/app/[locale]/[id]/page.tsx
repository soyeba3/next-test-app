import { getSingleTodo } from "@/app/actions/todos-action";

type SingleTodoProps = {
  params: {
    id: number;
  };
};

export default async function SingleTodo({ params }: SingleTodoProps) {
  const singleTodo = await getSingleTodo(Number(params.id));
  return (
    <>
      <head>
        <title>Single Todo</title>
        <meta property="og:title" content={`Soyeb ${singleTodo.title}`} />
        <meta
          property="og:image"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta
          property="og:image:secure_url"
          content="https://support.rebrandly.com/hc/article_attachments/17557974325021"
        />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Next js test app" />
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
      <div className="container space-y-10">
        <h3 className="text-xl font-bold">This is single todo page</h3>
        <div>
          This is single todo page{" "}
          <span className="font-bold">{singleTodo.title}</span>
        </div>
      </div>
    </>
  );
}
