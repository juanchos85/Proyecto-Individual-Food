import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRecipesCreated } from "../../Reduxx/Actions/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function RecipesCreated() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRecipesCreated());
  },[]);
  const recetasCreadas = useSelector((state) => state.created);
  return (
    <div>
      {recetasCreadas
        ? recetasCreadas.map((el) => {
            return (
              <Card
                key={el.id}
                name={el.name}
                idOriginal={el.idOriginal}
                image={el.image}
                servings={el.servings}
              />
            );
          })
        : "todavía no has creado una receta"}
    </div>
  );
}
