import React from "react";
import { Link } from "react-router-dom";

export default function Card ({name, diets, image, idOriginal}){
   console.log("props en card "+name)
   
   

    return( 
    <div key = {idOriginal}>  
    soy card pa
     <h1 >name: {name} </h1>
    {diets&& diets.map((el)=><h1>{el}</h1>)}
     <img src={image} alt=""/> 
    <Link to={`/CardDetail/${idOriginal}`} >
        
        <h1>{name}</h1>
        </Link>
</div>
)
}
      

// Tipo de dieta (vegetariano, vegano,

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