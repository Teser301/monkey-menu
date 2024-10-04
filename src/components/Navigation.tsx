import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-10 justify-center p-8 pb-20">
          <li>
            <Link href="/">Monkey Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
