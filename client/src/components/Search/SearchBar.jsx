import React from "react";
import { useDispatch } from "react-redux";
import { get_recipe } from "../../Reduxx/Actions/actions";
import { useRef } from "react";
import Style from './Search.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  // let [name, SetName] = useState();
  const lele = useRef(null)


  function handleChanges(e) {
    e.preventDefault();
    // SetName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    // let names = document.getElementById("id");
    // console.log("soy names  " + names.value);
const pepe = lele.current.value
    dispatch(get_recipe(pepe));
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          // id="id"
          ref={lele}
          type="text"
          placeholder="busqueda de producto..."
          onChange={(e) => handleChanges(e)}
        />
        <input className={Style.button} type="submit" value="Agregar" />
      </form>

      
    </div>
  );
}
// export default function SearchBar({returnToFirstPage}){
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');

//   function handleChange(e){
//       e.preventDefault();
//       setName(e.target.value)
//   };
//   function handleButton(e){
//       e.preventDefault();
//       dispatch(searchByName(name))
//       .then(() =>{ returnToFirstPage(); })
//   };

//   return (
//       <div className={styles.searchContainer}>
//           <input className={styles.searchInput} type="text"
//           placeholder='Search by name or diet type:'
//           onChange={(e) => handleChange(e)}/>
//           <button className={styles.buttonSearch} type='submit' onClick={ (e) => handleButton(e)} >Search</button>
//       </div>
//   )
