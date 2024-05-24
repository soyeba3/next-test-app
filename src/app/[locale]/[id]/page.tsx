import { getSingleTodo } from "@/app/actions/todos-action";

import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const singleTodo = await getSingleTodo(Number(params.id));

  return {
    title: singleTodo.title,
    openGraph: {
      images: [
        "https://support.rebrandly.com/hc/article_attachments/17557974325021",
      ],
      type: "website",
      title: singleTodo.title,
    },
  };
}

type SingleTodoProps = {
  params: {
    id: number;
  };
};

export default async function SingleTodo({ params }: SingleTodoProps) {
  const singleTodo = await getSingleTodo(Number(params.id));
  return (
    <div className="container space-y-10">
      <h3 className="text-xl font-bold">This is single todo page</h3>
      <div>
        This is single todo page{" "}
        <span className="font-bold">{singleTodo.title}</span>
      </div>
    </div>
  );
}
