// {
// "name": "salada",
//  "summary": "put on a bit of oil and sald",
//  "healthScore": 9,
//  "steps": ["prueab", "prueba"],
//  "image": "no yet",
//  "diets":["prueab", "prueba"],
//  "servings": 4,
//  "cookingTime":30}

// console.log(
//   "name ",
//   name,
//   "summary ",
//   summary,
//   "healthScore ",
//   healthScore,
//   "steps ",
//   steps,
//   "image ",
//   image,
//   "diets ",
//   diets,
//   "servings ",
//   servings,
//   "cookingTime ",
//   cookingTime
// );


// const allDiets = async () => {
//   const { data } = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
//   );

//   const Diets = await data.results.filter((el) => {
//     arri.push(el.diets);
//   });
//   let s = arri.flat(1);
//   const dataArr = new Set(s);
//   let result = [...dataArr];
//   return result;
// };

// const  getInfo = function (obj){
//   return {
//       idOriginal: obj.id,
//       name: obj.title.toLowerCase(),
//       summary: obj.summary,
//       healthScore: obj.healthScore,
//       steps:
//       obj.analyzedInstructions[0] &&
//       obj.analyzedInstructions[0].steps.map((obj) => {
//           obj.number, obj.step;
//         }),
//       image: obj.image,
//       createdByUser: false,
//       diets: obj.diets && obj.diets.map((obj) => obj),
//       servings: obj.servings,
//       cookingTime: obj.readyInMinutes,
// }
// }

  // const { data } = await axios.get(
  //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  // )
//   const data = await Recipe.findAll({

//     include: [
//       { model:{id}, required:true}
//     ],
//   })
//   console.log(data.length, "data linea 51")
//     let uniqueValue= [...new Set (data.flat(1))];    

// try{
//     const Diets = DataTypes.bulkCreate(uniqueValue)
//     return Diets
  

require("dotenv").config();
const { default: axios } = require("axios");
const { Router } = require("express");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const {
  getAllApiInformation,
  allDiets,
} = require("../downloadData/downloading");
const { Recipe, DietsTypes } = require("../db");
const {getInfo} = require('../downloadData/reutilizable')

getAllApiInformation();
allDiets();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  console.log("soy id ", id);
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    // const data = apiSpoon(id)
    // const data = await Recipe.findAll({
    //   where:{
    //     idOriginal: id,
    //   }
    // })
    if (!id) return res.status(400).send("not found");
    return res.status(200).json(getInfo(data));
  } catch (error) {
    console.log(error);
    return res.status(400).send("error en la busqueda de detalles").json(error);
  }
});

router.get("/recipesCreated", async (req, res) => {
  const created = await Recipe.findAll({
    where: {
      idOriginal:123,
    },
  });
  try {
    if (!created) return res.status(400).send(" receta no  creada");
    return res.status(200).json(created);
  } catch (error) {
    console.log(error, " soy error de mostrar recetas creadas")
    return res.status(400).json(error);
  }
});


router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  try {

  if (name) {

  const diet = DietsTypes.findAll()
  if(diet)return res.status(200).json(diet);
  else  if(!diet){
    const recetas = await Recipe.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%`},
      },
      include: DietsTypes,
    });

    if(recetas){return res.status(200).json(recetas)}else{
      const info = await Recipe.findAll();
      return res.status(200).json(info);
    }
  }
  

  } else if(!name) 
 
      return res.status(200).json(info);      
    } catch (error) {
      console.log(error, " soy error de recipes")
      return res.status(400).json(error);
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

  
  if (
    !name ||
    !summary ||
    !healthScore ||
    !steps ||
    !diets ||
    !servings
  )
    return res.status(404).send("Faltan enviar datos obligatorios");
    diets.map(async(el)=>{
      const findDiet= await DietsTypes.findOrCreate({
        where:{
          name: el
        }
      })
    })

  try {
    const receta = await Recipe.create(req.body);
    return res.status(200).json(receta);
  } catch (error) {
    return res.status(402).json(error);
  }
});

router.get("/diets", async (req, res) => {
  const diets = await DietsTypes.findAll({
    include: Recipe,
  }); 
  try {
    return res.status(200).json(diets);
  } catch (error) {
    return res.status(404).json(error);
  }
});

module.exports = router;

    //   where:{name:el}
    //  })
    //  if(FindDiet){
    //   Recipe.addDietsTypes(el)
    //  }else{
    //   console.log("no se encontro receta con esa dieta")
    //  }
    // })
    // })
