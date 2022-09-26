const axios = require("axios");
const {
  isElement,
  findRenderedDOMComponentWithTag,
} = require("react-dom/test-utils");
const { DataTypes } = require("sequelize");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, DietsTypes } = require("../db");
const { getInfo } = require("../downloadData/reutilizable");

const getAllApiInformation = async () => {
  const verDb = await Recipe.findAll();
  console.log("linea 15")
  
  if (verDb.length > 0) {
    console.log("base precargada  ", verDb.length);
    return verDb;
  }
  // const data = apiSpoon();

  const { data } = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  console.log("linea 24");
  const dataPretended = data.results.map((el) => {
    return getInfo(el);
  });
  try {
    const db = await Recipe.bulkCreate(dataPretended);
    console.log("cargando db por 1° ", db.length);
    return db;
  } catch (error) {
    console.log( "error catch juan", error);
    return error;
  }
};

const allDiets = async () => {
  const verDbDiets = await DietsTypes.findAll();
  if (verDbDiets.length > 0) {
    console.log("base precargada ", verDbDiets.length);
    return verDbDiets;
  }
  try {
    const dietas = [
      "vegan",
      "lacto ovo vegetarian",
      "whole 30",
      "ketogenic",
      "gluten free",
      "fodmap friendly",
      "dairy free",
      "paleolithic",
      "lacto ovo vegetarian",
      "primal",
      "pescatarian",
      "dairy free"
    ];
    
    dietas.map(async (dieta) => {
      console.log("cargando dietsType primera vez")
      DietsTypes.findOrCreate({
        where: { name: dieta },
      });
    });
    
  } catch (error) {
    console.log(error, "error catch");
    return error;
  }
};

module.exports = { getAllApiInformation, allDiets }; 
