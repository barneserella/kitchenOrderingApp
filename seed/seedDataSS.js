const mongoose = require('mongoose');
const Week = require('../models/Week');



async function seedDatabase() {

    await mongoose.connect('mongodb+srv://girlthisismycodingemail:R93WdrEvpbVyaytg@groceryorder.hzrh2.mongodb.net/?retryWrites=true&w=majority&appName=groceryOrder');
    
    console.log(`MongoDB Connected`);
    
    // Clear the collection before seeding
    // await Week.deleteMany({});
    
    const week3 = new Week({
        weekNumber: 3,
        days: [
            {
                dayName: 'Monday',
                meals: {
                    breakfast: [{
                        components: {
                            protein: 
                                [{ option: 'soft boiled egg', 
                                    ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh'},
                                                  { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen'}]
                                }],
                            starch:
                                [{ option: 'whole wheat bread', 
                                    ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: 'raisin bread', quantity: 6, unit: 'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Potato Crusted Cod', 
                                ingredients: [
                                    { name: 'frozen potato crusted cod filets', quantity: 4, unit: 'boxes', group: 'frozen'},
                                    { name: 'lemon dill sauce', quantity: 4, unit: 'litres', group: 'seasoning'}
                                ]
                            },
                            {
                                option: 'Fajita Bowl',
                                ingredients: [
                                    { name: 'frozen ground beef', quantity: 10, unit: 'lbs', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'French Fries',
                                ingredients : [
                                    { name: 'frozen french fries', quantity: 4, unit: 'bags', group: 'frozen'},
                                ],
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Brown Rice',
                                ingredients : [
                                    { name: 'brown rice', quantity: 3, unit: 'litres', group: 'pantry'},
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Diced Carrot',
                                ingredients: [
                                    { name: 'frozen diced carrot', quantity: 16, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Fajita Bowl',
                                ingredients: [
                                    { name: 'frozen green pepper', quantity: 4, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen red pepper', quantity: 4, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 4, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'lemon pudding with whipped cream',
                                ingredients: [
                                    { name: 'lemon pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'coffee', quantity: 1, unit: 'bag', group: 'pantry'},
                                    { name: 'milk', quantity: 4, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Cherries',
                                ingredients: [
                                    { name: 'frozen cherries', quantity: 4, unit: 'bags', group: 'frozen'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Stuffed Turkey Meatball',
                                ingredients: [
                                    { name: 'frozen ground turkey', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'dry stuffing mix', quantity: 1, unit: 'bag', group: 'pantry'},
                                    { name: 'fresh egg', quantity: 20, unit: 'each', group: 'fresh'}
                                ],
                                option: 'Salami Sandwich',
                                ingredients: [
                                    { name: 'salami', quantity: 2, unit: 'rolls', group: 'fresh'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Au Gratin Potatoes',
                                ingredients: [
                                    { name: 'au gratin potatoes', quantity: 4, unit: 'boxes', group: 'pantry'}
                                ],
                                option: 'Salami Sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Roasted Squash',
                                ingredients: [
                                    { name: 'fresh butternut squash', quantity: 16, unit: 'kilograms', group: 'fresh'},
                                    { name: 'cinnamon', quantity: 1, unit: 'cups', group: 'seasoning'},
                                    { name: 'oil', quantity: 2, unit: 'cups', group: 'pantry'}
                                ],
                                option: 'Bean salad',
                                ingredients: [
                                    { name: 'fresh bean salad', quantity: 3, unit: 'tubs', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'raspberry mousse',
                                ingredients: [
                                    { name: 'raspberry mousse powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 7, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Split Pea with Ham Soup',
                                ingredients: [
                                    { name: 'frozen split pea with ham soup', quantity: 4, unit: 'boxes', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'red lentils', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Tuesday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen'}]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'carrot muffin',
                                ingredients: [
                                    { name: 'frozen carrot muffins', quantity: 30, unit: 'each', group: 'frozen'},
                                    { name: 'frozen carrot cake bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Smoked Sausage', 
                                ingredients: [
                                    { name: 'frozen smoked sausage', quantity: 2, unit: 'boxes', group: 'frozen'}
                                ]
                            },
                            {
                                option: 'Cheddar Cheese',
                                ingredients: [
                                    { name: 'cheddar cheese slices', quantity: 3, unit: 'packs', group: 'fresh'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Boerenkool',
                                ingredients: [
                                    { name: 'fresh potatoes', quantity: 2.5, unit: 'pots', group: 'produce'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'}
                                ],
                                option: 'Applesauce Loaf',
                                ingredients : [
                                    { name: 'applesauce', quantity: 3, unit: 'litres', group: 'pantry'},
                                    { name: 'raisins', quantity: 3, unit: 'litres', group: 'pantry'},
                                    { name: 'flour', quantity: 3, unit: 'litres', group: 'pantry'},
                                    { name: 'sugar', quantity: 3, unit: 'litres', group: 'pantry'},
                                    { name: 'cocoa powder', quantity: 1, unit: 'litres', group: 'pantry'},
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Boerenkool',
                                ingredients: [
                                    { name: 'canned kale', quantity: 9, unit: 'cans', group: 'pantry'}
                                ],
                                option: 'Watermelon',
                                ingredients: [
                                    { name: 'fresh watermelon', quantity: 4, unit: 'each', group: 'produce'},
                                    { name: 'canned fruit cocktail', quantity: 2, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Strawberry Ice Cream',
                                ingredients: [
                                    { name: 'strawberry ice cream cups', quantity: 120, unit: 'each', group: 'frozen'},
                                    { name: 'strawberry ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF strawberry ice cream', quantity: 1, unit: 'boxes', group: 'frozen'},
                                ],
                                option: 'sliced strawberries',
                                ingredients: [
                                    { name: 'frozen sliced strawberries', quantity: 1, unit: 'boxes', group: 'frozen'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'garden',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh cucumber', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'},
                                    { name: 'fresh tomato', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Shepherds Pie',
                                ingredients: [
                                    { name: 'frozen ground beef', quantity: 22.5, unit: 'lbs', group: 'frozen'},
                                    { name: 'worcestershire', quantity: 2, unit: 'bottles', group: 'pantry'},
                                    { name: 'mustard', quantity: 1, unit: 'jar', group: 'pantry'}
                                ],
                                option: 'Egg Salad',
                                ingredients: [
                                    { name: 'fresh egg', quantity: 100, unit: 'each', group: 'fresh'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Sherpherds Pie',
                                ingredients: [
                                    { name: 'instant mashed potatoes', quantity: 1, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'croissant',
                                ingredients: [
                                    { name: 'frozen croissant', quantity: 70, unit: 'each', group: 'frozen'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Peas and Carrots',
                                ingredients: [
                                    { name: 'frozen peas', quantity: 8, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen carrots', quantity: 8, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Diced Tomato',
                                ingredients: [
                                    { name: 'fresh tomatoes', quantity: 1, unit: 'flat', group: 'produce'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Lemon Bar',
                                ingredients: [
                                    { name: 'lemon bar', quantity: 4, unit: 'slabs', group: 'frozen'}
                                ],
                                option: 'Fresh Orange',
                                ingredients: [
                                    { name: 'fresh orange', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned mandarins', quantity: 1, unit: 'can', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Chicken Noodle Soup',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced carrots', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'chicken broth concentrate', quantity: 5, unit: 'cups', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Wednesday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'scrambled egg with bacon and cheese', 
                                ingredients: [
                                    { name: 'bacon bits', quantity: 1, unit: 'bags', group: 'frozen'},
                                    { name: 'frozen liquid egg', quantity: 5, unit: 'bags', group: 'frozen'},
                                    { name: 'shredded cheddar cheese', quantity: 1, unit: 'bags', group: 'fresh'}
                                ]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Lemon Pepper Chicken Thigh', 
                                ingredients: [
                                    { name: 'frozen chicken thigh', quantity: 90, unit: 'each', group: 'frozen'},
                                    { name: 'lemon pepper seasoning', quantity: 1, unit: 'container', group: 'seasoning'}
                                ]
                            },
                            {
                                option: 'Pulled Pork',
                                ingredients: [
                                    { name: 'frozen pulled pork', quantity: 3, unit: 'boxes', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Mashed Potato',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'kaiser roll',
                                ingredients : [
                                    { name: 'fresh kaiser roll', quantity: 80, unit: 'each', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Bean Blend',
                                ingredients: [
                                    { name: 'frozen bean blend', quantity: 16, unit: 'kilograms', group: 'fresh'}
                                ],
                                option: 'Oil & Vinegar Coleslaw',
                                ingredients: [
                                    { name: 'fresh oil and vinegar coleslaw', quantity: 4, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'vanilla pudding with whipped cream',
                                ingredients: [
                                    { name: 'vanilla pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 4, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'pears',
                                ingredients: [
                                    { name: 'fresh pear', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned diced pears', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Krunchie Haddock',
                                ingredients: [
                                    { name: 'frozen krunchie haddock', quantity: 3, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen blue cod', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'tartar sauce', quantity: 4, unit: 'litres', group: 'pantry'}
                                ],
                                option: 'Hot Beef and Gravy',
                                ingredients: [
                                    { name: 'frozen beef rollade', quantity: 2, unit: 'each', group: 'frozen'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Tater Tots',
                                ingredients: [
                                    { name: 'frozen tater tots', quantity: 4, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Whole Wheat Bread',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Scandinavian Mix',
                                ingredients: [
                                    { name: 'frozen broccoli', quantity: 4, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen cauliflower', quantity: 4, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 4, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Harvard Beets',
                                ingredients: [
                                    { name: 'canned diced beets', quantity: 4, unit: 'cans', group: 'pantry'},

                                ]
                            }],
                        dessert:
                            [{
                                option: 'Tiramisu',
                                ingredients: [
                                    { name: 'frozen tiramisu', quantity: 4, unit: 'slabs', group: 'frozen'}
                                ],
                                option: 'fresh apple',
                                ingredients: [
                                    { name: 'fresh apple', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned apple', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Cream Of Potato Bacon Soup',
                                ingredients: [
                                    { name: 'cream of potato bacon soup mix', quantity: 8, unit: 'each', group: 'pantry'},
                                    { name: 'frozen bacon bits', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'lentils', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Thursday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh'},
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen'}]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit:'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Dutch Meatballs', 
                                ingredients: [
                                    { name: 'frozen ground beef', quantity: 30, unit: 'lbs', group: 'frozen'}
                                ]
                            },
                            {
                                option: 'Greek Chicken Pasta',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 4, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'}
                                ],
                                option: 'Greek Chicken Pasta',
                                ingredients : [
                                    { name: 'dry penne noodles', quantity: 3, unit: 'litres', group: 'pantry'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Brussels Sprouts',
                                ingredients: [
                                    { name: 'frozen brussels sprouts', quantity: 16, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Greek Chicken Pasta',
                                ingredients: [
                                    { name: 'fresh green pepper', quantity: 4, unit: 'each', group: 'produce'},
                                    { name: 'fresh tomato', quantity: 4, unit: 'each', group: 'produce'},
                                    { name: 'fresh onion', quantity: 4, unit: 'each', group: 'produce'},
                                    { name: 'greek feta dressing', quantity: 1, unit: 'jugs', group: 'pantry'},
                                    { name: 'fresh feta cheese', quantity: 4, unit: 'cups', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Yogurt with Blueberry Sauce',
                                ingredients: [
                                    { name: 'vanilla yogurt', quantity: 8, unit: 'bags', group: 'fresh'},
                                    { name: 'blueberry pie filling', quantity: 1, unit: 'buckets', group: 'fresh'}
                                ],
                                option: 'Pineapple Tidbits',
                                ingredients: [
                                    { name: 'canned pineapple tidbits', quantity: 3, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Apple Braised Pork Chop',
                                ingredients: [
                                    { name: 'frozen pork chops', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'canned applesauce', quantity: 1, unit: 'cans', group: 'pantry'},
                                    { name: 'vinegar', quantity: 1, unit: 'jug', group: 'pantry'}
                                ],
                                option: 'Pollock Fish Burger',
                                ingredients: [
                                    { name: 'frozen fish burger', quantity: 3, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen blue cod', quantity: 1, unit: 'box', group: 'frozen'},
                                    { name: 'tartar sauce', quantity: 4, unit: 'litres', group: 'pantry'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Hamburger Bun',
                                ingredients: [
                                    { name: 'hamburger bun', quantity: 80, unit: 'each', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Baked Beans',
                                ingredients: [
                                    { name: 'canned baked beans in tomato sauce', quantity: 12, unit: 'cans', group: 'pantry'}
                                ],
                                option: 'creamy coleslaw',
                                ingredients: [
                                    { name: 'creamy coleslaw', quantity: 3, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'banana pudding with whipped cream',
                                ingredients: [
                                    { name: 'banana pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 3, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh pear', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned diced pears', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Dutch Meatball Soup',
                                ingredients: [
                                    { name: 'frozen italian meatballs', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'},
                                    { name: 'beef broth concentrate', quantity: 1, unit: 'boxes', group: 'pantry'},
                                    { name: 'noodles', quantity: 1, unit: 'boxes', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Friday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh'},
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen'}]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit:'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Creamy Dill Salmon', 
                                ingredients: [
                                    { name: 'frozen dill salmon filets', quantity: 5, unit: 'boxes', group: 'frozen'}
                                ]
                            },
                            {
                                option: 'Hotdog On A Bun',
                                ingredients: [
                                    { name: 'hotdog', quantity: 100, unit: 'each', group: 'frozen'},
                                    { name: 'hotdog bun', quantity: 80, unit: 'each', group: 'fresh'},
                                    { name: 'frozen puree bread roll', quantity: 3, unit: 'rolls', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Potato Salad',
                                ingredients: [
                                    { name: 'fresh potatoes', quantity: 1.5, unit: 'pots', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh green pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh red onion', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'hard boiled egg', quantity: 12, unit: 'each', group: 'fresh'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'San Francisco Blend',
                                ingredients: [
                                    { name: 'frozen stir fry', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Tomato & Onion',
                                ingredients: [
                                    { name: 'fresh sliced tomato ', quantity: 2, unit: 'buckets', group: 'Fresh Start'},
                                    { name: 'fresh diced onion ', quantity: 2, unit: 'buckets', group: 'Fresh Start'},
                                    
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Vanilla Ice Cream',
                                ingredients: [
                                    { name: 'vanilla ice cream', quantity: 12, unit: 'boxes', group: 'frozen'},
                                    { name: 'vanilla ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF vanilla ice cream', quantity: 1, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'Mango',
                                ingredients: [
                                    { name: 'frozen mango', quantity: 3, unit: 'bags', group: 'frozen'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Honey Garlic Chicken Breast',
                                ingredients: [
                                    { name: 'frozen chicken breast', quantity: 100, unit: 'each', group: 'frozen'}
                                ],
                                option: 'Bacon, Lettuce, Tomato on Whole Wheat Toast',
                                ingredients: [
                                    { name: 'frozen sliced bacon', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen bacon puree rolls', quantity: 3, unit: 'rolls', group: 'frozen'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Roasted Potato',
                                ingredients: [
                                    { name: 'frozen diced potato', quantity: 4, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'BLT on Whole Wheat Toast',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Creamed Spinach',
                                ingredients: [
                                    { name: 'frozen spinach nugget', quantity: 16, unit: 'kilograms', group: 'frozen'},
                                    { name: 'creamy white sauce', quantity: 4, unit: 'litres', group: 'fresh'},
                                ],
                                option: 'Dill Pickle Spears',
                                ingredients: [
                                    { name: 'fresh dill pickle spears', quantity: 2, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'lemon jello with whipped cream',
                                ingredients: [
                                    { name: 'strawberry jello powder', quantity: 1, unit: 'bags', group: 'pantry'},
                                    { name: 'rainbow sorbet', quantity: 1, unit: 'each', group: 'frozen'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Butternut Squash Soup',
                                ingredients: [
                                    { name: 'butternut squash soup mix', quantity: 8, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Saturday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'Garden Vegetable Quiche', 
                                ingredients: [{ name: 'garden vegetable quiche', quantity: 90, unit: 'each', group: 'frozen'},
                                              { name: 'frozen liquid egg', quantity: 1, unit: 'bags', group: 'frozen'}]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh'},
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Pineapple Glazed Ham', 
                                ingredients: [
                                    { name: 'fresh ham roast', quantity: 2, unit: 'each', group: 'fresh'},
                                    { name: 'canned pineapple', quantity: 1, unit: 'can', group: 'pantry'}
                                ]
                            },
                            {
                                option: 'Tuna Macaroni Salad',
                                ingredients: [
                                    { name: 'tuna pouch', quantity: 3, unit: 'each', group: 'pantry'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Scalloped Potato',
                                ingredients: [
                                    { name: 'scalloped potato', quantity: 4, unit: 'boxes', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'}
                                ],
                                option: 'Tuna Macaroni Salad',
                                ingredients : [
                                    { name: 'dry macaroni noodles', quantity: 8, unit: 'litres', group: 'pantry'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Asparagus Tips',
                                ingredients: [
                                    { name: 'frozen asparagus tips', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Watermelon',
                                ingredients: [
                                    { name: 'fresh watermelon', quantity: 4, unit: 'each', group: 'produce'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'banana pudding with whipped cream',
                                ingredients: [
                                    { name: 'banana pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 3, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Fruit Cocktail',
                                ingredients: [
                                    { name: 'canned fruit cocktail', quantity: 3, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'garden',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Veal Parmesan',
                                ingredients: [
                                    { name: 'frozen veal schnitzel', quantity: 3, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'Smoked Chicken Wrap',
                                ingredients: [
                                    { name: 'smoked chicken roast', quantity: 3, unit: 'each', group: 'fresh'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Smoked Chicken Wrap',
                                ingredients: [
                                    { name: 'frozen tortilla', quantity: 50, unit: 'each', group: 'frozen'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Yellow Beans',
                                ingredients: [
                                    { name: 'frozen yellow beans', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Carrot Salad',
                                ingredients: [
                                    { name: 'frozen diced carrot', quantity: 8, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Wildberry Macaroon ',
                                ingredients: [
                                    { name: 'wildberry macaroon', quantity: 3, unit: 'slabs', group: 'frozen'}
                                    
                                ],
                                option: 'fresh orange',
                                ingredients: [
                                    { name: 'fresh orange', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned mandarins', quantity: 2, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'tomato beef soup',
                                ingredients: [
                                    { name: 'tomato sauce', quantity: 2, unit: 'cans', group: 'pantry'},
                                    { name: 'frozen diced beef', quantity: 7.5, unit: 'lbs', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 1.5, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 1.5, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 1.5, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            }}, {
            dayName: 'Sunday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh'},
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: 'raisin bread', quantity: 6, unit: 'loaves', group: 'fresh'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls', group: 'frozen'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each', group: 'produce'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags', group: 'pantry'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'Roast Turkey', 
                                ingredients: [
                                    { name: 'frozen turkey roast', quantity: 4, unit: 'each', group: 'frozen' }
                                ]
                            },
                            {
                                option: 'Fried Onions and Bacon Perogies',
                                ingredients: [
                                    { name: 'frozen bacon bits', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'sour cream', quantity: 1, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Sweet Potato Mash',
                                ingredients: [
                                    { name: 'fresh sweet potato', quantity: 12, unit: 'kilograms', group: 'fresh'},
                                    { name: 'cinnamon', quantity: 1, unit: 'cups', group: 'seasoning'},
                                    { name: 'nutmeg', quantity: 1, unit: 'cups', group: 'seasoning'}
                                ],
                                option: 'Fried Onions and Bacon Perogies',
                                ingredients : [
                                    { name: 'frozen perogies', quantity: 3, unit: 'boxes', group: 'frozen'}                                    
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Cauliflower',
                                ingredients: [
                                    { name: 'frozen cauliflower', quantity: 16, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Fried Onions and Bacon Perogies',
                                ingredients: [
                                    { name: 'frozen onions', quantity: 6, unit: 'kilograms', group: 'frozen'},
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Strawberry Rhubarb pie with whipped cream',
                                ingredients: [
                                    { name: 'frozen strawberry rhubarb pie', quantity: 15, unit: 'each', group: 'frozen'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'mandarin oranges',
                                ingredients: [
                                    { name: 'canned mandarins', quantity: 3, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'ceaser',
                                ingredients: [
                                    { name: 'romaine lettuce', quantity: 1, unit: 'case', group: 'produce'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags', group: 'produce'},
                                    { name: 'fresh red onion', quantity: 2, unit: 'each', group: 'produce'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'Parmesan Herb Tilapia',
                                ingredients: [
                                    { name: 'frozen parmesan herb tilapia filets', quantity: 100, unit: 'each', group: 'frozen'}
                                ],
                                option: 'gouda cheese on a raisin bun',
                                ingredients: [
                                    { name: 'gouda cheese', quantity: 8, unit: 'packages', group: 'fresh'},
                                    { name: 'cheese whiz', quantity: 6, unit: 'flats', group: 'pantry'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'Mashed Potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'gouda cheese on a raisin bun',
                                ingredients: [
                                    { name: 'raisin bun', quantity: 90, unit: 'each', group: 'fresh'},
                                    { name: 'frozen apple spice bread puree', quantity: 4, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Sunrise Mix Vegetables',
                                ingredients: [
                                    { name: 'frozen sunrise mix', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Cantaloupe',
                                ingredients: [
                                    { name: 'fresh cantaloupe', quantity: 4, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'chocolate ice cream',
                                ingredients: [
                                    { name: 'chocolate ice cream cups', quantity: 12, unit: 'boxes', group: 'frozen'},
                                    { name: 'chocolate ice cream bulk', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF chocolate ice cream bulk', quantity: 1, unit: 'cartons', group: 'frozen'}
                                ],
                                option: 'apple',
                                ingredients: [
                                    { name: 'fresh apple', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned apple slices', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Italian Wedding Soup',
                                ingredients: [
                                    { name: 'beef broth concentrate', quantity: 5, unit: 'cups', group: 'pantry'},
                                    { name: 'frozen italian meatballs', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen spinach nuggets', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            },
            }
    ]
});
try{
await week3.save();
console.log("Seed data for week 3 added!");
mongoose.connection.close();
}catch(err){
    console.error("Error saving week 3:", err.message);
}

};



// Run the function
seedDatabase();