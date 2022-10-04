import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecipe, deleteRecipeCreated } from "../../Reduxx/Actions/actions";
import Style from "./Card.module.css";

export default function Card({
  name,
  diets,
  image,
  id,
  cookingTime,
  servings,
  deleteRecipe,
}) {
  const dispatch = useDispatch();

  console.log(" soy key   ", id);
  return (
    <div className={Style.card}>
      <div>
        <button
          className={Style.close}
          onClick={() => dispatch(deleteRecipe(id), deleteRecipeCreated(id))}
        >
          X
        </button>
      </div>

      <Link to={`/CardDetail/${id}`}>
        <h4 className={Style.title}>{name}</h4>
      </Link>
      <section>
        <p>⏲️ {cookingTime}' </p>
        <p>🧍 {servings}</p>
        <p>🍽️ {diets}</p>
      </section>
      <div className={Style.img}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
