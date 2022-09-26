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
  