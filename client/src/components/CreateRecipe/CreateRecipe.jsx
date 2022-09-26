import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { create_Recipe } from "../../Reduxx/Actions/actions";
import { useSelector } from "react-redux";
import { get_Diets, dietsFilter } from "../../Reduxx/Actions/actions";

function validate(state){
  let errors = {};
  if(!state.name){
    errors.name ="Name required";
  } else if (state.name.length > 3){
  errors.name ="Name must be longar than three characteres";
  };
  if(!state.diets){
    errors.name ="diets required";
  } else if (state.diets.length > 3){
  errors.diets ="diets must be longar than three characteres";
  };

  if(!state.dishType){
    errors.dishType ="dishType required";
  } else if (state.dishType.length > 3){
  errors.dishType ="dishType must be longar than three characteres";
  };

  if(!state.summary){
    errors.summary ="summury is required";
  } else if (state.name.length > 140){
  errors.name ="summary must be longar than three characteres";
  }

  if(!state.steps){
    errors.steps ="steps is required";
  } else if (state.steps.length > 140){
  errors.steps ="steps must be longar than three characteres";
  }

  if(!state.healthScore){
    errors.healthScore ="healthScore required";
  } else if (typeof state.healthScore != 'number'){
  errors.healthScore ="healthScore must be a number";
  }

  if(!state.servings){
    errors.servings ="servings required";
  } else if (typeof state.servings != 'number'){
  errors.servings ="servings must be a number";
  }
  if(!state.cookingTime){
    errors.cookingTime ="cookingTime required";
  } else if (typeof state.cookingTime != 'number'){
  errors.cookingTime ="cookingTime must a number";
  }
    return errors;
}

export default function CreateRecipe() {
  const DietsTypes = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: [],
    dishType:[],
    idOriginal:123,
    image: "",
    diets: [],
    servings: 0,
    cookingTime: 0,
  });
// setState("")
  const handleChange = (e) => {
    setErrors({
      ...state,
      [e.target.name]: e.target.value
    })
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    
  };
  const handleChangeSteps = (e) =>{
    setErrors(validate({
      ...state,
      steps: [...state.steps, e.target.value]
    }))
    
    setState({
      ...state,
      steps: [e.target.value]
    });
  }
  
  useEffect(() => {
    dispatch(get_Diets());
  },[dispatch]);
  
  function HandlerDietsFilter(e) {
    dispatch(dietsFilter(e.target.value));
  }
  const handleChangeDishType = (e) =>{
    setErrors(validate({
      ...state,
      diets: [...state.diets, e.target.value]
  }))
    setState({
      ...state,
      dishType: [ e.target.value]
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_Recipe(state));
  };
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
          <label>tipo de plato: </label>
          <input
            name="dishType"
            type="text"
            value={state.dishType}
            onChange={(e) => {
              handleChangeDishType(e);
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
          <label>tipo de dietas: </label>
        <select defaultValue="default" onChange={(e) => HandlerDietsFilter(e)}> 
          <option value="default">opciones de dietas</option>
          {DietsTypes &&
            DietsTypes.map((el) => {
              return (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              );
            })}
        </select> 
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
            name="cookingTime"
            type="number"
            value={state.cookingTime}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
    
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