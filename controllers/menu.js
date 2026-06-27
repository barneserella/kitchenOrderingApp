const Week = require('../models/Week')

module.exports = {
    getMenu: (req, res) => {
        res.render("menu_sub.ejs", { 
            name: null, 
            ingredients: null, 
            error: null,
            weekNumber: null, day: null, meal: null, component: null
         })
    },
    getCurrentOption: async (req, res) => {
        const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const { weekNumber, day, meal, component, componentIndex } = req.body;

        try {   
            // find week from database
            const menu = await Week.findOne({ weekNumber: Number(weekNumber) });
            if (!menu) return res.status(404).json({ error: 'Week not found' });
            // find day from that week from database
            const dayData = menu.days.find(d => d.dayName === day);
            if (!dayData) return res.status(404).json({ error: 'Day not found' });
            // get specific meal
            const mealData = dayData.meals[meal]
            if (!mealData || mealData.length === 0) return res.status(404).json({ error: 'Meal not found' });;
            // components from meal
            const mealEntry = mealData[0]
            const componentArray = mealEntry.components[component]
            if (!componentArray || componentArray.length === 0) return res.status(404).json({ error: 'Component not found' });;
            // get option
            const index = componentIndex ? Number(componentIndex) : 0;
            const selectedOption = componentArray[index];
            if (!selectedOption) return res.status(404).json({ error: 'Option not found' }); 

            res.render("menu_sub.ejs", {
                name: selectedOption.option,
                ingredients: selectedOption.ingredients,
                error: null,
                weekNumber, day, meal, component
            }
            )
        
                    
                } catch (err) {
                    console.error("Error fetching ingredients:", err);
                    res.render("menu_sub.ejs", {
                        name: null,
                        ingredients: null,
                        error: "Server error. Try again later.",
                    });
                }
            }
        };
                 

        
