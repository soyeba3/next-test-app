"use client";

import { createPost } from "../actions/todos-action";

export default function Button() {
  const handleClick = async () => {
    const id = Date.now();
    const title = Date.now().toString();
    await createPost(id, title);
  };
  return (
    <button
      onClick={handleClick}
      className="px-4 py-1 text-white bg-green-500 rounded-sm"
    >
      Add todo
    </button>
  );
}
