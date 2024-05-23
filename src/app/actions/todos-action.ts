"use server";

export type TodoViewModel = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getAllTodo() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const result = (await res.json()) as TodoViewModel[];

  return result;
}

export async function getSingleTodo(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const result = (await res.json()) as TodoViewModel;

  return result;
}

export async function createPost(id: number, title: string) {
  const requestBody = {
    id,
    title,
    body: "",
    userId: 1,
  };

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody ? JSON.stringify(requestBody) : undefined,
  });

  const response = await data.json();

  console.log(response);

  return response;
}
