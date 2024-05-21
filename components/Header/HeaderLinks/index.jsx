"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./headerLinks.module.css";

export default function HeaderLinks({ href, text }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : ""}
    >
      {text}
    </Link>
  );
}
