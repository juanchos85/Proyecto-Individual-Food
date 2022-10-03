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
    <div className={Style.parent}>
      <div className={Style.div1}>
        <h1>{details.name}</h1>
      </div>
      <div className={Style.div2}>
        <img className={Style.img} src={details.image} alt="" />

        <p>Diets Type: {details.diets}</p>
        <p>Dish Type: {details.dishTypes}</p>
        <p>Health Score: {details.healthScore}</p>
      </div>
      <div className={Style.div3}>
        <div>
          <p>Summary: </p>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div>
          <p>Cooking Steps: </p>
          <p>{details.steps}</p>
        </div>
      </div>
    </div>
  );
}
// {el.dishTypes&& el.dishTypes.map((el)=><h1>{el}</h1>)}
// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso
