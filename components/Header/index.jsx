import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="A place with foog on it" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <HeaderLinks href="/meals" text="Browse Meals" />
            <HeaderLinks href="/community" text="Foodies Community" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
