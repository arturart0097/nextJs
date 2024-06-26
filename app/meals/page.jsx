import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingOut from "./Loading";

async function DopMeals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created </h1>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose you favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingOut />}>
          <DopMeals />
        </Suspense>
      </main>
    </>
  );
}
