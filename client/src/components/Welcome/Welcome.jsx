import React  from "react";
import { Link } from "react-router-dom";
import Style from '../Welcome/Welcome.module.css'


export default function Welcome(){
    return(
        <div className={Style.Welcome}>
            <h1 className={Style.text} color="red">
             Welcome
            </h1>
            <Link to="/home" color="red">Begin your experience, here</Link>
        </div>
    )
}