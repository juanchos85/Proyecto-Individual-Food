import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { create_Recipe } from "../../Reduxx/Actions/actions";

export default function CreateRecipe() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: [],
    image: "",
    diets: [],
    servings: 0,
    cookingTime: 0,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_Recipe(state));
  };
  const handleChangeSteps = (e) =>{
    
      setState({
          ...state,
          steps: [e.target.value]
      });
  }
  const handleChangeDiets = (e) =>{
    
    setState({
        ...state,
        diets: [...state.diets, e.target.value]
    });
}
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Summary: </label>
          <input
            name="summary"
            type="text"
            value={state.summary}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>HealthScore: </label>
          <input
            name="healthScore"
            type="number"
            value={state.healthScore}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>paso a paso: </label>
          <input
            name="steps"
            type="text"
            value={state.steps}
            onChange={(e) => {
              handleChangeSteps(e);
            }}
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            name="image"
            type="text"
            value={state.image}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Tipo de dieta/s</label>
          <input
            name="diets"
            type="text"
            value={state.diets}
            onChange={(e) => {
              handleChangeDiets(e);
            }}
          />
        </div>
        <div>
          <label>Porciones</label>
          <input
            name="servings"
            type="number"
            value={state.servings}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Tiempo de cocción: </label>
          <input
            name="coockingTime"
            type="number"
            value={state.cookingTime}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <h1>si completaste todos los pasos, tu receta esta lista para ser compartida</h1>
        <button type='submit'>compartir receta</button>
      </div>
    </form>
  );
}

// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta