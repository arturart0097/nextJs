import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import path from "path";
import { promises as fsPromises } from "fs";
import { Buffer } from "buffer";


const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}


export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferImage = await meal.image.arrayBuffer();
  const buffer = Buffer.from(bufferImage);

  const filePath = path.join(process.cwd(), "public/images", fileName);

  try {
    await fsPromises.writeFile(filePath, buffer);
  } catch (error) {
    throw new Error("Saving image failed!");
  }

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES(
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `
  ).run(meal);
}
