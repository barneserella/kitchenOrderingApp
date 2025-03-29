const mongoose = require('mongoose');


const WeekSchema = new mongoose.Schema({
    weekNumber: Number,
    days: [
        {
            dayName: String,
            meals: {
                breakfast: [{
                    components: {
                        protein: [{ option: String, ingredients: [{name: String, quantity: Number, unit: String }]}],
                        starch: [{ option: String, ingredients: [{name: String, quantity: Number, unit: String}]}],
                        vegetable: [{option: String, ingredients: [{name: String, quantity: Number, unit: String}]}]
                    }
                }],
                lunch: [
                    {
                        components: {
                            protein:[{ option: String, ingredients: [{name: String, quantity: Number, unit: String}]}],
                            starch: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            vegetable: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            dessert: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            salad: [{ option: String, dressing: String, ingredients: [{ name: String, quantity: Number, unit: String }]}]
                        }
                    }
                ],
                supper: [
                    {
                        components: {
                            protein:[{ option: String, ingredients: [{name: String, quantity: Number, unit: String}]}],
                            starch: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            vegetable: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            dessert: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}],
                            soup: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String }]}]
                        }
                    }
                ]
            }
        }
    ]
})




module.exports = mongoose.model('Week', WeekSchema)