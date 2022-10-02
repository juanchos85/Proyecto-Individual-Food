import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Style from "./Nav.module.css";

function Nav() {
  return (
    <div className={Style.Nav}>
      <div className={Style.components}>
        <Link className={Style.title} to="/Home">Home</Link>
      </div>
      <span className={Style.components}>
        <Link className={Style.title} to="/RecipesCreated">Recipes Created</Link>
      </span>
      <span className={Style.components}>
        <Link className={Style.title} to="/CreateRecipe">Share Your Own Recipe Here</Link>
      </span>
    </div>
  );
}

export default Nav;
