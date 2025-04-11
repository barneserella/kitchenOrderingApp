const Week = require("../models/Week");

module.exports = {

    getIngredients: (req, res) => {
        try{
            res.render("get_ingredients.ejs");
        }catch(err){
            console.log(err)
        }
    },

    showIngredients: async (req, res) => {
        const { weekNumber } = req.params;

        try {     
            const week = await Week.findOne({ weekNumber }).lean();

            if(!week){
                return res.status(404).send('Week not found');
            }

            // Ingredients Map for all ingredients
            const ingredientsMap  = {};

            week.days.forEach(day => {
                ["breakfast", "lunch", "supper"].forEach(mealType => {
                    const meals = day.meals[mealType]

                    meals.forEach(meal => {
                        const components = meal.components;

                        Object.values(components).forEach(componentArray => {
                            componentArray.forEach(option => {
                                option.ingredients.forEach(ingredient => {
                                    const key = `${ingredient.name} - ${ingredient.unit}`;
                                    if(ingredientMap[key]) {
                                        ingredientMap[key].quantity += ingredient.quantity;
                                    }else{
                                        ingredientMap[key] = { ...ingredient };
                                    }
                                });
                            });
                        });
                    });
                });
            });

            const totalIngredients = Object.values(ingredientMap);
            res.render("show_ingredients.ejs", { ingredients: totalIngredients});

        } catch (err) {
            console.err("Error fetching ingredients:", err);
            res.status(500).send("Server Error")
        }
    },

    // showWeekMenu: (req , res) => {
    //     try{

    //     }catch{

    //     }
    // },

    // showDayMenu: (req, res) => {
    //     try{

    //     }catch {

    //     }
    // }

}