import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { create_Recipe } from "../../Reduxx/Actions/actions";
import { useSelector } from "react-redux";
import { get_Diets, dietsFilter } from "../../Reduxx/Actions/actions";
import Style from './CreateRecipe.module.css'

function validate(state){
  let errors = {};
  if(!state.name){
    errors.name ="Name required";
  } else if (state.name.length < 3){
  errors.name ="Name must be longar than three characteres";
  };
  if(!state.diets){
    errors.name ="diets required";
  } else if (state.diets.length > 3){
  errors.diets ="diets must be longar than three characteres";
  };

  if(!state.dishType){
    errors.dishType ="dishType required";
  } else if (state.dishType.length > 1){
  errors.dishType ="dishType must be longar than three characteres";
  };

  if(!state.summary){
    errors.summary ="summury is required";
  }

  if(!state.steps){
    errors.steps ="steps is required";
  } else if (state.steps.length > 1){
  errors.steps ="steps must be longar than three characteres";
  }

  if(state.healthScore === 0){
    errors.healthScore ="healthScore required";
  } else if ( state.healthScore >100 || state.healthScore < 0){
  errors.healthScore ="healthScore must be longer than 0, and less than 100";
  }

  if(!state.servings){
    errors.servings ="servings required";
  } 
 
  if(!state.cookingTime){
    errors.cookingTime ="cookingTime required";
  } 
  if(!state.diets.length===0){
    errors.diets="diets required";
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
// setState()//para vaciar los campos después del submit
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...state,
      [e.target.name]: e.target.value
    }))
    
  };
  const handleChangeSteps = (e) =>{
    setState({
      ...state,
      steps: [e.target.value]
    });
    
    setErrors(validate({
      ...state,
      steps: [...state.steps, e.target.value]
    }))
    
    
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

  function HandlerDietsFilter(e) {
    dispatch(dietsFilter(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let test = Object.values(errors)
    if(test.length>0 ){
      alert('completar correctamente')}else {
        if(state.name.length < 3)  return alert('Completar campos')
    dispatch(create_Recipe(state));
    alert('receta creada')
}
  };

  useEffect(() => {
    dispatch(get_Diets());
  },[dispatch]);

  return (
    <form
    onSubmit={(e) => {
      handleSubmit(e);
    }}
    className={Style.background}
    >
      <div className={Style.body}>
       
          <label>Name: </label>
          <input
            name='name'
            className={Style.placeHolder}
            type="text"
            value={state.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
         {errors.name && <h6>{errors.name}</h6>}
        
          <label>Summary: </label>
          <input
          className={Style.placeHolder}
            name="summary"
            type="text"
            value={state.summary}
            onChange={(e) => {
              handleChange(e);
            }}
          />
           {errors.summary && <h6>{errors.summary}</h6>}
       
          <label>HealthScore: </label>
          <input
          className={Style.placeHolder}
            name="healthScore"
            type="number"
            value={state.healthScore}
            onChange={(e) => {
              handleChange(e);
            }}
          />
       
          <label>tipo de plato: </label>
          <input
          className={Style.placeHolder}
            name="dishType"
            type="text"
            value={state.dishType}
            onChange={(e) => {
              handleChangeDishType(e);
            }}
          />
           {errors.dishType && <h6>{errors.dishType}</h6>}
    
          <label>Step By Step: </label>
          <input
          className={Style.placeHolder}
            name="steps"
            type="text"
            value={state.steps}
            onChange={(e) => {
              handleChangeSteps(e);
            }}
          />
           {errors.steps && <h6>{errors.steps}</h6>}
   
          <label>Imagen: </label>
          <input
          className={Style.placeHolder}
            name="image"
            type="text"
            value={state.image}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          
 
          <label>tipo de dietas: </label>
        <select className={Style.placeHolder} defaultValue="default" onChange={(e) => HandlerDietsFilter(e)}> 
          <option className={Style.placeHolder} value="default">opciones de dietas</option>
          {DietsTypes &&
            DietsTypes.map((el) => {
              return (
                <option className={Style.placeHolder} key={el.id} value={el.name}>
                  {el.name}
                </option>
              );
            })}
        </select> 
        {errors.diets && <h6>{errors.diets}</h6>}
   
          <label>Porciones</label>
          <input
          className={Style.placeHolder}
            name="servings"
            type="number"
            value={state.servings}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.servings && <h6>{errors.servings}</h6>}
       
          <label>Tiempo de cocción: </label>
          <input
          className={Style.placeHolder}
            name="cookingTime"
            type="number"
            value={state.cookingTime}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {errors.cookingTime && <h6>{errors.cookingTime}</h6>}
    
    
        <button className={Style.button} type='submit'>compartir receta</button>
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