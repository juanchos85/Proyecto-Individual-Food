import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecipe } from "../../Reduxx/Actions/actions";
import Style from './Card.module.css'

export default function Card({ name, diets, image, idOriginal, cookingTime, servings, deleteRecipe }) {

  const dispatch =useDispatch()

  
  return (
    <div className={Style.card} key={idOriginal}>
      <button className={Style.close} onClick={()=>dispatch(deleteRecipe(idOriginal))}>x</button>

     
      <Link to={`/CardDetail/${idOriginal}`}>
        <h4 className={Style.title}>{name}</h4>
      </Link>
      <section>
        <h5>Cooking Time: {cookingTime} minutes</h5>
        <h5>Servings: {servings} persons</h5>
        <h5>Diets: {diets}</h5>
      </section>
      <img className={Style.img} src={image} alt="" />
    </div>
  );
}

// Tipo de dieta (vegetariano, vegano

// idOriginal: obj.id,
// name: obj.title.toLowerCase(),
// summary: obj.summary,
// healthScore: obj.healthScore,
// steps:
//   obj.analyzedInstructions[0] &&
//   obj.analyzedInstructions[0].steps.map((obj) => {
//     obj.number, obj.step;
//   }),
// image: obj.image,
// createdByUser: false,
// diets: obj.diets && obj.diets.map((obj) => obj),
// servings: obj.servings,
// cookingTime: obj.readyInMinutes,
