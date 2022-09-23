const getInfo = function (obj) {
  return {
    idOriginal: obj.id,
    name: obj.title,
    summary: obj.summary,
    healthScore: obj.healthScore,
    steps:
      obj.analyzedInstructions[0] &&
      obj.analyzedInstructions[0].steps.map((obj) => {
        obj.number, obj.step;
      }),
    image: obj.image,
    createdByUser: false,
    diets: obj.diets && obj.diets.map((obj) => obj),
    servings: obj.servings,
    cookingTime: obj.readyInMinutes,
  };
};
module.exports = { getInfo };
