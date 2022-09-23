require("dotenv").config();
const apiSpoon =require('../../../apiSpoon/apiSpoon')
const { default: axios } = require("axios");
const { Router } = require("express");
const { Op } = require("sequelize");
const {API_KEY} = process.env
const {
  getAllApiInformation,
  allDiets
} = require("../downloadData/downloading");
const { Recipe, DietsTypes} = require("../db");


getAllApiInformation();
allDiets()

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
console.log("soy id ", id)
  try {
    const {data} = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    // const data = apiSpoon(id)
    // const data = await Recipe.findAll({
    //   where:{
    //     idOriginal: id,
    //   }
    // })
     if(!id) return res.status(400).send('not found');
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error en la busqueda de detalles").json(error);
  }
});

router.get('/recipesCreated', async (req, res)=>{
  console.log("hubo solicitud a recetas creadas")
  const created = await Recipe.findAll({
    where:{
      idOriginal:{
        [Op.eq]:716420
      }
    }
  })
  console.log("soy created ", created)
  try {
    if(!created) return res.status(400).send('no receta creada')
    return res.status(200).json(created)
  } catch (error) {
    return res.status(400).json(error)
  }
})

// if(name) {
//   const namedCountry = await Country.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}});
//   namedCountry ? res.send(namedCountry) : res.status(404).send("Country can't be found");
// } else {
//   Country.findAll()
//     .then((r) => res.send(r))
router.get("/recipes", async (req, res) => {
  const { name } = req.query;
if(name){
  try {
    const info = await Recipe.findOne({
      where: {
      //   include:{
      //     model:DietsTypes,attributes:['id', 'name'],
      //     through:{attributes:[]}
      //   },
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    
    return res.status(200).json(info); 
  } catch (error) {
    return res.status(400).json(error);
  }
}else{
  const info= await Recipe.findAll();
  return res.status(200).json(info);
}
});

router.post("/recipes", async (req, res) => {
  const {
    name,
    summary,
    healthScore,
    steps,
    image,
    diets,
    servings,
    cookingTime,
  } = req.body;
  console.log("name ", name);
  console.log("name ",name, "summary ", summary, "healthScore ", healthScore, "steps ", steps, "image ", image, "diets ", diets, "servings ", servings, "cookingTime ", cookingTime)
  if( !name || !summary || !healthScore || !steps || ! image || ! diets || ! servings )  return res.status(404).send("Falta enviar datos obligatorios")

  try {
    console.log("try");
    const receta = await Recipe.create(req.body);
    return res.status(200).json(receta);
  } catch (error) {
    console.log("catch", error);
    return res.status(402).json(error);
  }
});

router.get("/diets", async (req, res) => {
  const diets = await DietsTypes.findAll()//
  console.log(diets.length, "soy all diets")
  try {
    console.log("diets linea 83 " + diets.length);
      return res.status(200).json(diets)
  } catch (error) {
    return res.status(404).json(error)
  }
  
});

module.exports = router;

// {
// "name": "name",
//  "summary": "summary",
//  "healthScore": 9,
//  "steps": "lele",
//  "image": "yes",
//  "diets":"vegan",
//  "servings": 4,
//  "cookingTime":30,}
