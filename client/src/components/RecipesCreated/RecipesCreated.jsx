import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRecipesCreated, deleteRecipeCreated } from "../../Reduxx/Actions/actions";
import Card from "../Card/Card";


export default function RecipesCreated() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRecipesCreated());
    // dispatch(deleteRecipeCreated());
  }, []);
  const recetasCreadas = useSelector((state) => state.created);
  return (
    <div>
      {recetasCreadas
        ? recetasCreadas.map((el) => {
            return (
              <Card
                id={el.id}
                name={el.name}
                deleteRecipe={deleteRecipeCreated}
                image={el.image}
                servings={el.servings}
                diets={el.diets}
              />
            );
          })
        : alert("todavía no has creado una receta")}
    </div>
  );
}
