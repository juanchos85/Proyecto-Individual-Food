import React  from "react";
import { Link } from "react-router-dom";
import Styles from '../Welcome/Welcome.module.css'


export default function Welcome(){
    return(
        <div className={Styles.landing}>
             Welcome to your favorite app food
            <Link to="/home">Home</Link>
        </div>
    )
}