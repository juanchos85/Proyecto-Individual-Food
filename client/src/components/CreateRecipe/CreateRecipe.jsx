import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { create_Recipe } from "../../Reduxx/Actions/actions";
import { useSelector } from "react-redux";
import { get_Diets, dietsFilter } from "../../Reduxx/Actions/actions";
import Style from "./CreateRecipe.module.css";

function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "Name required";
  } 
  if (!state.diets) {
    errors.name = "diets required";
  }

  if (!state.dishType) {
    errors.dishType = "dishType required";
  } 

  if (!state.summary) {
    errors.summary = "summury is required";
  }

  if (!state.steps) {
    errors.steps = "steps is required";
  } 

  if (state.healthScore === 0) {
    errors.healthScore = "health Score required";
  } else if (state.healthScore > 100 || state.healthScore < 0) {
    errors.healthScore = "health Score required";
  }

  if (!state.servings) {
    errors.servings = "Servings required";
  }

  if (!state.cookingTime) {
    errors.cookingTime = "Cooking Time required";
  }
  if (!state.diets.length === 0) {
    errors.diets = "Diets required";
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
    dishType: [],
    idOriginal: 123,
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
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleChangeSteps = (e) => {
    setState({
      ...state,
      steps: [e.target.value],
    });

    setErrors(
      validate({
        ...state,
        steps: [...state.steps, e.target.value],
      })
    );
  };
  // const handleChangeDishType = (e) => {
  //   setErrors(
  //     validate({
  //       ...state,
  //       diets: [...state.diets, e.target.value],
  //     })
  //   );
  //   setState({
  //     ...state,
  //     dishType: [e.target.value],
  //   });
  // };

  function HandlerDietsFilter(e) {
    dispatch(dietsFilter(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   let  test = Object.values(errors);
    if (test.length > 0) {
      alert("completar correctamente");
    } else {
      if (state.name.length < 3) return alert("Completar campos");
      dispatch(create_Recipe(state));
      alert("receta creada");
    }
  };

  useEffect(() => {
    dispatch(get_Diets());
  }, [dispatch]);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={Style.background}
    >
      {/* <div className={Style.body}> */}
        <div className={Style.short}>
        <label>Name: </label>
        <input
          name="name"
          className={Style.placeHolder}
          type="text"
          value={state.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
         
        {errors.name && <h6 Style="color:white">{errors.name}</h6>}

        <label>Health Score: </label>
        <input
          className={Style.placeHolder}
          name="healthScore"
          type="number"
          value={state.healthScore}
          onChange={(e) => {
            handleChange(e);
          }}
        />

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

        <label>Diet Type: </label>
        <select
          className={Style.placeHolderDiet}
          defaultValue="default"
          onChange={(e) => HandlerDietsFilter(e)}
        >
          <option  className={Style.placeHolderD}>
            Diet Types
          </option>
          {DietsTypes &&
            DietsTypes.map((el) => {
              return (
                <option
                  className={Style.placeHolderP}
                  key={el.id}
                  value={el.name}
                >
                  {el.name}
                </option>
              );
            })}
        </select>
        {errors.diets && <h6 Style="color:white">{errors.diets}</h6>}

        <label htmlFor="servings">Servings: </label>
        <input
          className={Style.placeHolder}
          name="servings"
          type="number"
          value={state.servings}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors.servings && <h6 Style="color:white">{errors.servings}</h6>}

        <label>Cooking Time: </label>
        <input
          className={Style.placeHolder}
          name="cookingTime"
          type="number"
          value={state.cookingTime}
          onChange={(e) => {
            handleChange(e);
          }}
        />
     
        {errors.cookingTime && <h6 Style="color:white">{errors.cookingTime}</h6>}
        </div>
        {/* <label>tipo de plato: </label>
        <input
        className={Style.placeHolder}
        name="dishType"
        type="text"
        value={state.dishType}
        onChange={(e) => {
          handleChangeDishType(e);
        }}
        />
      {errors.dishType && <p>{errors.dishType}</p>} */}
       <div className={Style.long}>
        <label>Summary: </label>
        <textarea
          className={Style.placeHolder}
          name="summary"
          id="long"
          type="text"
          value={state.summary}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors.summary && <h6 Style="color:white">{errors.summary}</h6>}

        <label Style="padding-top:1rem">Step By Step: </label>
        <textarea
          className={Style.placeHolder}
          id="long"
          name="steps"
          type="text"
          value={state.steps}
          onChange={(e) => {
            handleChangeSteps(e);
          }}
        />
        </div>
        {errors.steps && <h6 Style="color:white">{errors.steps}</h6>}
       <div>
       <button  className={Style.button} type="submit">
          Create Recipe
        </button>
       </div>
   
   
    </form>
  );
}
