import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecipe } from "../../Reduxx/Actions/actions";
import Style from './Card.module.css'

export default function Card({ name, diets, image, idOriginal, cookingTime, servings, deleteRecipe }) {

  const dispatch =useDispatch()

  
  return (
    <div className={Style.card} key={idOriginal}>

      <div >
      <button className={Style.close} onClick={()=>dispatch(deleteRecipe(idOriginal))}>x</button>
      </div>
     
      <Link to={`/CardDetail/${idOriginal}`}>
        <h4 className={Style.title}>{name}</h4>
      </Link>
      <section>
        <p>⏲️ {cookingTime}' </p>
        <p>🧍 {servings}</p>
        <p>🍽️ {diets}</p>
      </section>
      <div  className={Style.img}>
      <img src={image} alt="" />
      </div>
      
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
