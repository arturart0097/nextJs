"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import classes from "./style.module.css";

export default function MealsPicker({ label, name }) {
  const refMeals = useRef();
  const [selectFiles, setSelectFiles] = useState([]);

  const openHandler = () => {
    refMeals.current.click();
  };

  const changeFiles = (event) => {
    setSelectFiles([...event.target.files]);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {selectFiles.length === 0 ? (
            <p>No image picked yet.</p>
          ) : (
            <ul>
              {selectFiles.map((file, index) => (
                <li key={index}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={100}
                    height={100}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type="file"
          name={name}
          className={classes.input}
          id={name}
          accept="image/png, image/jpeg"
          ref={refMeals}
          onChange={changeFiles}
          multiple
        />
        <button type="button" className={classes.button} onClick={openHandler}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
