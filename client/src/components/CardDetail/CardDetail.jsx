import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Detail } from "../../Reduxx/Actions/actions";



export default function CardDetail(props){
    const {id} = useParams();
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(get_Detail(id))
    // },[dispatch, id])
    // const detail = useSelector((state)=>state.details)
    const detail = dispatch(get_Detail(id))
    let producto = detail.includes(el =>el.idOriginal === id)
console.log("soy detail de Card detail ", producto)


    return(
{producto}
    )
}
// Ruta de detalle de receta: debe contener

// [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
// [ ] Resumen del plato
// [ ] Nivel de "comida saludable" (health score)
// [ ] Paso a paso