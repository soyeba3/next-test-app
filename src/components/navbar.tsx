import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  return (
    <div className="container flex items-center justify-between gap-10 py-5">
      <div className="text-lg font-bold">
        <Link prefetch={true} href="/">
          TODO APP
        </Link>
      </div>
      <ul className="flex items-center gap-2 font-semibold underline">
        <LocaleSwitcher />
        <li>
          <Link prefetch={true} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link prefetch={true} href="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
