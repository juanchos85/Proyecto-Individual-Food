import React  from "react";
import { Link } from "react-router-dom";


export default function Welcome(){
    return(
        <div>
            soy Welcome pa
            <Link to="/home">Home</Link>
        </div>
    )
}