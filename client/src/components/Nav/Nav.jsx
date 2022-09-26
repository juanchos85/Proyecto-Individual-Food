
import React from 'react'
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Welcome from '../Welcome/Welcome';


//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
// export default function Nav () {
    
    
//         return (
//             <div>
//                 <p>
//                 <Link to="/">Home</Link>
//                 <Link to="/SearchBar">Search</Link>
//                 <Link to="/Card">card</Link>
                
//                 </p>

//             </div>
//         )
    
// }

class Nav extends Component {

    render() {
        return (
            <div>
                <Link to='/Home'>Home</Link>
               <Link to="/RecipesCreated">recetas creadas</Link>
               <Link to="/CreateRecipe">Crea tu propia receta</Link>
            </div>
        );
    };
};

export default Nav;




// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Nav(){
//     return(
// <div>
//     <NavLink to = '/'>Home</NavLink>
// </div>
//     )
// }