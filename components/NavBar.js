"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <img className={style.navImg} src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior>
          <span className={pathname === "/" ? style.active : ""}>Home</span>
        </Link>
        <Link href="/about" legacyBehavior>
          <span className={pathname === "/about" ? style.active : ""}>About</span>
        </Link>
      </div>
    </nav>
  );
}
