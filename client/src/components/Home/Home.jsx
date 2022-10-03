import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect } from "react";
import Paginate from "../Paginate/Paginate";
import Style from '../Home/Home.module.css';
import {
  get_Diets,
  get_recipe,
  showRecipesCreated,
  dietsFilter,
  ScoreOrderA,
  ScoreOrderD,
  NameOrderA,
  NameOrderD,
  deleteRecipe,
} from "../../Reduxx/Actions/actions";
import SearchBar from "../Search/SearchBar";
export default function Home() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [paginado, setPaginado] = useState()
 

    useEffect(() => {
      if(recipes.length === 0){
      dispatch(get_Diets());
      dispatch(get_recipe())
      setPaginado();
      deleteRecipe()
    }
    },[dispatch, recipes]);

    useEffect(()=>{
      dispatch(get_Diets());
      dispatch(get_recipe())
    }, []
    )

    const DietsTypes = useSelector((state) => state.diets);

  function handleSubmit(e) {
    e.preventDefault();
   
  }
  function HandlerDietsFilter(e) {
    dispatch(dietsFilter(e.target.value));
  }
  function handleOrderByScore(e) {
    if(e.target.value === 'ascendente'){
      dispatch(ScoreOrderA(e.target.value))
     }
     if(e.target.value === "descendente"){
       dispatch(ScoreOrderD(e.target.value))
      }
  }
  function handleOrderByName(e){
   if(e.target.value === 'ascendente'){
    dispatch(NameOrderA(e.target.value))
   }
   if(e.target.value === "descendente"){
     dispatch(NameOrderD(e.target.value))
    }
  }

  return (
    <div className={Style.Home}>
      <span className={Style.search}>
   <SearchBar/>
      </span>
      <div>

<Paginate paginado={recipes} setPaginado={setPaginado}></Paginate>
</div>
<div>
        <select defaultValue="default" onChange={(e) => handleOrderByName(e)}>
          <option defaultValue='default'>orden por nombre</option>
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>
     
        <select defaultValue="default" onChange={(e) => handleOrderByScore(e)}>
        <option defaultValue='default'>orden por puntaje</option>          
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>
      
      </div> 
      <div>
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
      <div className={Style.cards}>
        {paginado &&paginado.map((el)=>{
          return(
          <Card
            key={el.idOriginal}
            deleteRecipe={deleteRecipe}
            name={el.name}
            idOriginal={el.idOriginal}
            image={el.image}
            servings={el.servings}
            cookingTime={el.cookingTime}
            diets={el.diets}
          />
          )
        })
        }
       
      </div>
   
    </div>
  );
}

