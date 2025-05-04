const Week = require("../models/Week");

module.exports = {

    getIngredients: (req, res) => {
       
            res.render("get_ingredients.ejs", { ingredients: null, error: null });
        
    },

    showIngredients: async (req, res) => {
       
        const weekNumber = req.body.inputValue;

        try {     
            const week = await Week.findOne( weekNumber ).lean();

            if(!week){
                return res.render("get_ingredients.ejs", {
                    ingredients: null,
                    error: "Week not found.",
                });
            }

            // Ingredients Map for gathering all ingredients for the week
            const ingredientsMap  = {};

            
                week.days.forEach((day) => {
                    ['breakfast', 'lunch', 'supper'].forEach(mealType => {
                        const meals = day.meals[mealType] || [];
            
                        meals.forEach(meal => {
                            // const components = meal.components;
            
                            // Iterate over each component group: protein, starch, etc.
                            Object.values(meal.components).forEach(componentArray => {
                                // console.log('componentArray:', componentArray);

                                componentArray.forEach(option => {
                                    const ingredients = option.ingredients || [];
                                    ingredients.forEach(ingredient => {
                                        const key = `${ingredient.name} - ${ingredient.unit}`;
                                        if (ingredientsMap[key]) {
                                            ingredientsMap[key].quantity += ingredient.quantity;
                                        } else {
                                            ingredientsMap[key] = { ...ingredient };
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            
               
            

            // week.days.forEach((day) => {
            //     ['breakfast', 'lunch', 'supper'].forEach(mealType => {
            //         for(const meals in mealType){
            //             meals.forEach(meal => {
            //                 for(const meal in component)
            //             })
            //         }
            //         // const meals = day.meals[mealType]
                    
            //         meals.forEach(meal => {
            //             for(const element in component) {
            //                 element.map(option => option.ingredients.forEach(ingredient => {
            //                     const key = `${ingredient.name} - ${ingredient.unit}`;
            //                         if(ingredientsMap[key]) {
            //                             ingredientsMap[key].quantity += ingredient.quantity;
            //                         }else{
            //                             ingredientsMap[key] = { ...ingredient };
            //                         }
            //                 }));

            //             };
            //         });

            //     });
            // });


            // week.days.forEach((day) => {
            //     ["breakfast", "lunch", "supper"].forEach(mealType => {
            //         const meals = day.meals[mealType]

            //         meals.forEach(meal => {
            //             console.log(Object.entries(meal.components))
            //             Object.values(meal.components).forEach(componentArray => {
            //                 console.log(Object.entries(componentArray).map((entry) => entry.forEach(console.log(entry))))
            //                 // componentArray.forEach
            //                 Object.entries(componentArray).map                            ((option) => {
            //                     option.ingredients.forEach(ingredient => {
            //                         const key = `${ingredient.name} - ${ingredient.unit}`;
            //                         if(ingredientsMap[key]) {
            //                             ingredientsMap[key].quantity += ingredient.quantity;
            //                         }else{
            //                             ingredientsMap[key] = { ...ingredient };
            //                         }
            //                     });
            //                 });
            //             });
            //         });
            //     });
            // });

            const totalIngredients = Object.values(ingredientsMap);
            res.render("get_ingredients.ejs", { 
                weekNumber: weekNumber,
                ingredients: totalIngredients,
                error: null,
             });

        } catch (err) {
            console.error("Error fetching ingredients:", err);
            res.render("get_ingredients.ejs", {
                ingredients: null,
                error: "Server error. Try again later.",
            });
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

};