const mongoose = require('mongoose');


const WeekSchema = new mongoose.Schema({
    weekNumber: Number,
    days: [
        {
            dayName: String,
            meals: {
                breakfast: [{
                    components: {
                        protein: [{ option: String, ingredients: [{name: String, quantity: Number, unit: String, group: String}]}],
                        starch: [{ option: String, ingredients: [{name: String, quantity: Number, unit: String, group: String}]}],
                        vegetable: [{option: String, ingredients: [{name: String, quantity: Number, unit: String, group: String}]}]
                    }
                }],
                lunch: [
                    {
                        components: {
                            protein:[{ option: String, ingredients: [{name: String, quantity: Number, unit: String, group: String}]}],
                            starch: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            vegetable: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            dessert: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            salad: [{ option: String, dressing: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}]
                        }
                    }
                ],
                supper: [
                    {
                        components: {
                            protein:[{ option: String, ingredients: [{name: String, quantity: Number, unit: String, group: String}]}],
                            starch: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            vegetable: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            dessert: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}],
                            soup: [{ option: String, ingredients: [{ name: String, quantity: Number, unit: String, group: String }]}]
                        }
                    }
                ]
            }
        }
    ]
})




module.exports = mongoose.model('Week', WeekSchema)