const Week = require("../models/Week");


module.exports = {
    getIngredients: (req, res) => {
        res.render("get_ingredients.ejs", { ingredients: null, error: null });
    },

    showIngredients: async (req, res) => {
        const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const { startDay, endDay, startWeek, endWeek } = req.body;

        function getDayRange(from, to) {
            const start = allDays.indexOf(from);
            const end = allDays.indexOf(to);

            if (start <= end) return allDays.slice(start, end + 1);
            return allDays.slice(start).concat(allDays.slice(0, end + 1));
        }

        async function getSelectedDaysAcrossWeeks(startDay, endDay, startWeek, endWeek) {
            const weeksToFetch = [];
            for (let i = Number(startWeek); i <= Number(endWeek); i++) {
                weeksToFetch.push(i);
            }

            console.log('Weeks to fetch:', weeksToFetch);

            const weeks = await Week.find({ weekNumber: { $in: weeksToFetch } });
            console.log('Weeks:', weeks);

            const selectedDays = [];

            for (const week of weeks) {
                let dayNamesForWeek = [];

                if (week.weekNumber === Number(startWeek) && week.weekNumber === Number(endWeek)) {
                    dayNamesForWeek = getDayRange(startDay, endDay);
                } else if (week.weekNumber === Number(startWeek)) {
                    dayNamesForWeek = getDayRange(startDay, 'Sunday');
                } else if (week.weekNumber === Number(endWeek)) {
                    dayNamesForWeek = getDayRange('Monday', endDay);
                } else {
                    dayNamesForWeek = allDays;
                }

                console.log(`Filtering days for week ${week.weekNumber}`);
                console.log("Looking for days:", dayNamesForWeek);
                console.log("Week has days:", week.days.map(d => d.dayName));

                selectedDays.push(
                    ...week.days.filter(day => dayNamesForWeek.includes(day.dayName))
                );
            }

            return selectedDays;
        }

        try {
            const selectedDays = await getSelectedDaysAcrossWeeks(startDay, endDay, startWeek, endWeek);
            console.log('Selected Days:', selectedDays);
            const ingredientsMap = {};

            selectedDays.forEach(day => {
                ['breakfast', 'lunch', 'supper'].forEach(mealType => {
                    const meals = day.meals[mealType];
                    if (!meals) return;

                    meals.forEach(meal => {
                        Object.values(meal.components).forEach(componentArray => {
                            componentArray.forEach(option => {
                                option.ingredients.forEach(ingredient => {
                                    const key = `${ingredient.name} - ${ingredient.unit}`;
                                    if (ingredientsMap[key]) {
                                        ingredientsMap[key].quantity += ingredient.quantity;
                                    } else {
                                        ingredientsMap[key] = ingredient.toObject();
                                    }
                                });
                            });
                        });
                    });
                });
            });

            const totalIngredients = Object.values(ingredientsMap).map(ingredient => ingredient.toObject ? ingredient.toObject() : ingredient);

            res.render("get_ingredients.ejs", {
                ingredients: totalIngredients,
                error: null,
                startWeek: startWeek,
                endWeek: endWeek,
                startDay: startDay,
                endDay: endDay,
            });
        } catch (err) {
            console.error("Error fetching ingredients:", err);
            res.render("get_ingredients.ejs", {
                ingredients: null,
                error: "Server error. Try again later.",
            });
        }
    }
};
