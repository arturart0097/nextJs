import MealItem from "./MealsItem";
import classes from "./meals.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((el) => (
        <li key={el.id}><MealItem {...el}/></li>
      ))}
    </ul>
  );
}
