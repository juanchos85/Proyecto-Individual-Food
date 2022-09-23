import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Detail } from "../../Reduxx/Actions/actions";

export default function CardDetail(props) {
  const { id } = useParams();
  console.log(id, " soy id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_Detail(id));
  }, []);
  const details = useSelector((state) => state.details);

  return (
    <div>
      <h1>name :{details.name}</h1>
      <img src={details.image} alt="" />
      <h1>diets:{details.diets}</h1>
      <h1>tipo de plato:{details.dishTypes}</h1>
      <h1>resumen:{details.summary}</h1>
      <h1>pasos:{details.steps}</h1>
      <h1>puntaje de salud:{details.healthScore}</h1>
    </div>
  );
}
// {el.dishTypes&& el.dishTypes.map((el)=><h1>{el}</h1>)}
// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso
