import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Detail } from "../../Reduxx/Actions/actions";
import Style from "./CardDetail..module.css";

export default function CardDetail(props) {
  const { id } = useParams();
  console.log(id, " soy id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_Detail(id));
  }, [dispatch]);
  const details = useSelector((state) => state.details);

  return (
    <div className={Style.body}>
      <div>
        <h1>{details.name}</h1>
      </div>
      <div>
        <img className={Style.img} src={details.image} alt="" />
      </div>

      <h1>Diets Type: {details.diets}</h1>
      <h1>Dish Type: {details.dishTypes}</h1>
      <h1>Summary: </h1>
      <h6
        className={Style.summary}
        dangerouslySetInnerHTML={{ __html: details.summary }}
      ></h6>
      <h1>Cooking Steps: </h1>
      <h6>{details.steps}</h6>
      <h1>Health Score: {details.healthScore}</h1>
    </div>
  );
}
// {el.dishTypes&& el.dishTypes.map((el)=><h1>{el}</h1>)}
// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso
