import axios from "axios";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DETAILS = "GET_DETAILS";
export const CREATE_RECIPE= "CREATE_RECIPE";
export const GET_DIETS= "GET_DIETS";
export const SHOW_RECIPES_CREATED= "SHOW_RECIPES_CREATED";
export const DIETS_FILTER = "DIETS_FILTER";
export const SCORE_ORDER = "SCORE_ORDER";
export const NAME_ORDER = "NAME_ORDER";

export function get_recipe(name) {
  console.log("name" + name);
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      console.log("soy data length ", data.length, `${data} data entera`);
      return dispatch({ type: GET_RECIPE, payload: data });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: GET_RECIPE,
        payload: error,
      });
    }
  };
}
export function get_Detail(id) {
  console.log("get-details id " + id);
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/recipes/${id}`);
      console.log("soy details " + data);
      return dispatch({ type: GET_DETAILS, payload: data });
    } catch (error) {
      return dispatch({ type: GET_DETAILS, payload: error });
    }
  };
}


export function create_Recipe(object) {
  
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`http://localhost:3001/recipes`, object);
      console.log("soy create recipes " + data);
      return dispatch({ type: CREATE_RECIPE, payload: data });
      
    } catch (error) {
      return dispatch({ type: CREATE_RECIPE, payload: error });
    }
  };
}
export function get_Diets() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get('http://localhost:3001/diets');
      console.log("soy data de diets " + data);
      return dispatch({ type: GET_DIETS, payload: data });
    } catch (error) {
      return dispatch({ type: GET_DIETS, payload: error });
    }
  };
}

  export function showRecipesCreated(){
    return async function(dispatch){
      try {
        const {data} = await axios.get('http://localhost:3001//recipesCreated')
        console.log('soy recetas creadas', data)
        return dispatch({type: SHOW_RECIPES_CREATED, payload: data})
      } catch (error) {
        return dispatch({type: SHOW_RECIPES_CREATED, payload: error})
      }
    }
  }

  export function dietsFilter(diet){
    return async function(dispatch){
      try {
       
        console.log('soy recetas creadas', diet)
        return dispatch({type: DIETS_FILTER, payload: diet})
      } catch (error) {
        return dispatch({type: DIETS_FILTER, payload: error})
      }
    }
  }

  export function ScoreOrder(Orderkind){
    return async function(dispatch){
      try {       
        console.log('soy recetas creadas', Orderkind)
        return dispatch({type: SCORE_ORDER, payload: Orderkind})
      } catch (error) {
        return dispatch({type: SCORE_ORDER, payload: error})
      }
    }
  }
  
  export function NameOrder(name){
    return async function(dispatch){
      try {       
        console.log('soy recetas creadas', name)
        return dispatch({type: NAME_ORDER, payload: name})
      } catch (error) {
        return dispatch({type: NAME_ORDER, payload: error})
      }
    }
  }

 

