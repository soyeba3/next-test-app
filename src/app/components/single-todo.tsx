import { Link } from "@/navigation";
import { TodoViewModel } from "../actions/todos-action";

type SingleTodo = {
  todo: TodoViewModel;
};

export default function SingleTodo({ todo }: SingleTodo) {
  return (
    <li>
      <Link
        className="flex gap-2 p-3 text-blue-500 underline border"
        href={`/${todo.id}`}
        prefetch={true}
      >
        <p>{todo.id}</p>
        <p>{todo.title}</p>
      </Link>
    </li>
  );
}
