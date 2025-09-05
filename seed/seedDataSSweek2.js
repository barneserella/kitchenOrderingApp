const mongoose = require('mongoose');
const Week = require('../models/Week');



async function seedDatabase() {

    await mongoose.connect('mongodb+srv://girlthisismycodingemail:R93WdrEvpbVyaytg@groceryorder.hzrh2.mongodb.net/?retryWrites=true&w=majority&appName=groceryOrder');
    
    console.log(`MongoDB Connected`);
    
    // Clear the collection before seeding
    // await Week.deleteMany({});
    
    const week2 = new Week({
        weekNumber: 2,
        days: [
            {
                dayName: 'Monday',
                meals: {
                    breakfast: [{
                        components: {
                            protein: 
                                [{ option: 'soft boiled egg', 
                                    ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh' },
                                                  { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                                }],
                            starch:
                                [{ option: 'whole wheat bread', 
                                    ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'Honey Garlic Pork Bites', 
                                ingredients: [
                                    { name: 'frozen pork bites', quantity: 3, unit: 'boxes', group: 'frozen' },
                                    { name: 'honey garlic sauce', quantity: 2, unit: 'jugs', group: 'pantry'}
                                ]
                            },
                            {
                                option: 'Almond Crusted Sole',
                                ingredients: [
                                    { name: 'frozen almond sole filets', quantity: 5, unit: 'boxes', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Rice Pilaf',
                                ingredients: [
                                    { name: 'rice pilaf', quantity: 4, unit: 'boxes', group: 'pantry'}
                                ],
                                option: 'Mashed Potatoes',
                                ingredients : [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Sauteed Pepper and Onion',
                                ingredients: [
                                    { name: 'frozen green pepper', quantity: 8, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen red pepper', quantity: 8, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 4, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Niagara Blend',
                                ingredients: [
                                    { name: 'frozen niagara blend', quantity: 10, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Chocolate pudding with whipped cream',
                                ingredients: [
                                    { name: 'chocolate pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 4, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
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
                                option: 'Beef and Pork Sausage',
                                ingredients: [
                                    { name: 'frozen beef and pork sausage', quantity: 3, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'Turkey Parmesan on a Bun',
                                ingredients: [
                                    { name: 'frozen turkey schnitzel', quantity: 3, unit: 'boxes', group: 'frozen'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Hutspot',
                                ingredients: [
                                    { name: 'fresh diced potato', quantity: 2, unit: 'pots', group: 'produce'}
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
                                option: 'Hutspot',
                                ingredients: [
                                    { name: 'frozen diced carrot', quantity: 4, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 4, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Diced Cucumber',
                                ingredients: [
                                    { name: 'fresh cucumber', quantity: 10, unit: 'each', group: 'produce'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Orange jello with whipped cream',
                                ingredients: [
                                    { name: 'orange jello powder', quantity: 1, unit: 'bags', group: 'pantry'},
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
                                option: 'Chicken and Rice Soup',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced carrots', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onions', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'brown rice', quantity: 1.5, unit: 'litres', group: 'pantry'},
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
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}],
                                option: 'Lemon Cranberry Muffin',
                                ingredients: [
                                    { name: 'lemon cranberry muffin', quantity: 30, unit: 'each', group: 'frozen'},
                                    { name: 'apple spice bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}
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
                                option: 'Pineapple Chicken Thigh', 
                                ingredients: [
                                    { name: 'Chicken Thigh', quantity: 6, unit: 'boxes', group: 'frozen' },
                                    { name: 'frozen diced chicken', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'canned pineapple tidbits', quantity: 1, unit: 'cans', group: 'pantry'},
                                ]
                            },
                            {
                                option: 'Pepperoni Pizza',
                                ingredients: [
                                    { name: 'frozen pepperoni pizza planks', quantity: 80, unit: 'each', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Pepperoni Pizza',
                                ingredients : [
                                    { name: 'frozen pepperoni pizza planks', quantity: 20, unit: 'each', group: 'frozen'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Asparagus Tips',
                                ingredients: [
                                    { name: 'frozen asparagus tips', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Dill Pickle Spears',
                                ingredients: [
                                    { name: 'fresh dill pickle spears', quantity: 2, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Vanilla Ice Cream',
                                ingredients: [
                                    { name: 'vanilla ice cream', quantity: 12, unit: 'boxes', group: 'frozen'},
                                    { name: 'vanilla ice cream bulk', quantity: 3, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF vanilla ice cream bulk', quantity: 1, unit: 'cartons', group: 'frozen'}
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
                                option: 'Homemade Quiche Lorraine',
                                ingredients: [
                                    { name: 'frozen liquid egg', quantity: 3, unit: 'bags', group: 'frozen'},
                                    { name: 'frozen bacon bits', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'shredded cheddar cheese', quantity: 1, unit: 'bags', group: 'fresh'}
                                ],
                                option: 'Corned Beef on Whole Wheat',
                                ingredients: [
                                    { name: 'sliced corned beef', quantity: 3, unit: 'boxes', group: 'fresh'},
                                    { name: 'swiss cheese', quantity: 1, unit: 'boxes', group: 'fresh'},
                                    { name: 'sauerkraut', quantity: 1, unit: 'buckets', group: 'fresh'},

                                ]
                            }],
                        starch:
                            [{
                                option: 'Homemade Quiche Lorraine',
                                ingredients: [
                                    { name: 'frozen pie shells', quantity: 15, unit: 'each', group: 'frozen'}
                                ],
                                option: 'Corned Beef on Whole Wheat',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Cantaloupe',
                                ingredients: [
                                    { name: 'fresh diced cantaloupe', quantity: 5, unit: 'buckets', group: 'fresh'}
                                ],
                                option: 'bean salad',
                                ingredients: [
                                    { name: 'fresh bean salad', quantity: 3, unit: 'tubs', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'peach mousse',
                                ingredients: [
                                    { name: 'peach mousse powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 2, unit: 'bags', group: 'dairy'}
                                ],
                                option: 'fresh orange',
                                ingredients: [
                                    { name: 'fresh orange', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned mandarins', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Tomato Bisque',
                                ingredients: [
                                    { name: 'frozen tomato bisque', quantity: 4, unit: 'boxes', group: 'frozen'}
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
                                    { name: 'frozen bacon bits', quantity: 1, unit: 'bags', group: 'frozen' },
                                    { name: 'frozen liquid egg', quantity: 5, unit: 'bags', group: 'frozen' },
                                    { name: 'shredded cheddar cheese', quantity: 1, unit: 'bags', group: 'fresh'}
                                ]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'Dutch Meatloaf', 
                                ingredients: [
                                    { name: 'frozen ground beef', quantity: 32, unit: 'lbs', group: 'frozen' },
                                    { name: 'gehakt seasoning', quantity: 1, unit: 'container', group: 'seasoning'},
                                    { name: 'beef broth concentrate', quantity: 1, unit: 'container', group: 'pantry'},
                                    { name: 'panko breadcrumbs', quantity: 1, unit: 'bags', group: 'pantry'},
                                    { name: 'fresh egg', quantity: 32, unit: 'each', group: 'fresh'}

                                ]
                            },
                            {
                                option: 'Butter Chicken',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 10, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Scalloped Potato',
                                ingredients: [
                                    { name: 'scalloped potato', quantity: 4, unit: 'boxes', group: 'pantry'}
                                ],
                                option: 'Jasmine Rice',
                                ingredients : [
                                    { name: 'jasmine rice', quantity: 3, unit: 'litres', group: 'pantry'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Creamed Spinach',
                                ingredients: [
                                    { name: 'frozen spinach nugget', quantity: 20, unit: 'kilograms', group: 'frozen'},
                                    { name: 'milk', quantity: 4, unit: 'litres', group: 'dairy'},
                                    { name: 'nutmeg', quantity: 1, unit: 'each', group: 'seasoning'}
                                ],
                                option: 'Green Peas',
                                ingredients: [
                                    { name: 'frozen peas', quantity: 8, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'butterscotch pudding with whipped cream',
                                ingredients: [
                                    { name: 'butterscotch pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 4, unit: 'bags', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Fruit Salad',
                                ingredients: [
                                    { name: 'fresh fruit salad', quantity: 3, unit: 'buckets', group: 'fresh'}
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
                                option: 'Mushroom Pork Chops',
                                ingredients: [
                                    { name: 'frozen pork chops', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced pork', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'canned cream of mushroom soup', quantity: 2, unit: 'cans', group: 'pantry'}
                                ],
                                option: 'Pollock Fish Soft Taco',
                                ingredients: [
                                    { name: 'frozen pollock fingers', quantity: 2, unit: 'boxes', group: 'frozen'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Mashed Potato',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 3, unit: 'bags', group: 'pantry'},
                                    { name: 'margarine', quantity: 2, unit: 'cups', group: 'fresh'},
                                    { name: 'cream', quantity: 1, unit: 'litres', group: 'dairy'}
                                ],
                                option: 'Tortilla',
                                ingredients: [
                                    { name: 'small tortilla', quantity: 14, unit: 'packs', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'fall medley',
                                ingredients: [
                                    { name: 'frozen turnips', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen parsnips', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'fresh sweet potato', quantity: 3, unit: 'kilograms', group: 'fresh'},
                                ],
                                option: 'Oil & Vinegar Coleslaw',
                                ingredients: [
                                    { name: 'fresh oil and vinegar coleslaw', quantity: 4, unit: 'buckets', group: 'fresh'},
                                    { name: 'salsa', quantity: 4, unit: 'kilograms', group: 'pantry'},
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Lemon Bar',
                                ingredients: [
                                    { name: 'frozen lemon bar', quantity: 4, unit: 'slabs', group: 'frozen'}
                                ],
                                option: 'fresh apple',
                                ingredients: [
                                    { name: 'fresh apple', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned apple', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Turkey Noodle Soup',
                                ingredients: [
                                    { name: 'frozen diced turkey', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'}
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
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'Krunchy Haddock', 
                                ingredients: [
                                    { name: 'frozen krunchy haddock filets', quantity: 4, unit: 'boxes', group: 'frozen' },
                                    { name: 'tartar sauce', quantity: 2, unit: 'jugs', group: 'pantry'},
                                ]
                            },
                            {
                                option: 'Beef Macaroni',
                                ingredients: [
                                    { name: 'frozen italian meatballs', quantity: 2, unit: 'boxes', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Roasted Potato',
                                ingredients: [
                                    { name: 'frozen diced potato', quantity: 4, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Beef Macaroni',
                                ingredients : [
                                    { name: 'macaroni noodles', quantity: 2, unit: 'bags', group: 'pantry'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'PEI Mix',
                                ingredients: [
                                    { name: 'frozen diced carrot', quantity: 5, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen green bean', quantity: 5, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen wax bean', quantity: 5, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Beef Macaroni',
                                ingredients: [
                                    { name: 'canned mushrooms', quantity: 1, unit: 'cans', group: 'pantry'},
                                    { name: 'canned tomato sauce', quantity: 2, unit: 'cans', group: 'pantry'},
                                ]
                            }],
                        dessert:
                            [{
                                option: 'yogurt with cherry sauce',
                                ingredients: [
                                    { name: 'vanilla yogurt', quantity: 8, unit: 'bags', group: 'fresh'},
                                    { name: 'cherry pie filling', quantity: 1, unit: 'buckets', group: 'fresh'}
                                ],
                                option: 'Sliced Strawberries',
                                ingredients: [
                                    { name: 'fresh strawberries', quantity: 1, unit: 'flat', group: 'fresh'}
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
                                option: 'Chicken Fingers',
                                ingredients: [
                                    { name: 'frozen chicken strips', quantity: 3, unit: 'boxes', group: 'frozen'},
                                    { name: 'plum sauce', quantity: 1, unit: 'jugs', group: 'pantry'}
                                ],
                                option: 'Liverworst',
                                ingredients: [
                                    { name: 'fresh liverworst', quantity: 3, unit: 'rolls', group: 'fresh'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'Potato salad',
                                ingredients: [
                                    { name: 'fresh diced potatoes', quantity: 2, unit: 'pots', group: 'produce'},
                                    { name: 'hard boiled egg', quantity: 13, unit: 'each', group: 'fresh'},
                                    { name: 'fresh red pepper', quantity: 3, unit: 'each', group: 'produce'},
                                    { name: 'fresh green pepper', quantity: 3, unit: 'each', group: 'produce'},
                                    { name: 'fresh green onion', quantity: 3, unit: 'bunches', group: 'produce'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each', group: 'produce'},
                                    { name: 'mayonnaise', quantity: 4, unit: 'litres', group: 'pantry'}
                                ],
                                option: 'Liverworst sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'California Mix',
                                ingredients: [
                                    { name: 'frozen broccoli', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen cauliflower', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Pickled Beets',
                                ingredients: [
                                    { name: 'canned pickled beets', quantity: 2, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Raspberry Jello',
                                ingredients: [
                                    { name: 'raspberry jello powder', quantity: 1, unit: 'bags', group: 'pantry'},
                                    { name: 'frozen rainbow sorbet', quantity: 3, unit: 'each', group: 'frozen'}
                                ],
                                option: 'Fresh Pear',
                                ingredients: [
                                    { name: 'fresh pear', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned diced pears', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Dutch Meatball',
                                ingredients: [
                                    { name: 'frozen italian meatballs', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced celery', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'barley', quantity: 4, unit: 'cups', group: 'pantry'},
                                    { name: 'beef broth concentrate', quantity: 1, unit: 'boxes', group: 'pantry'},
                                    { name: 'egg noodles', quantity: 1, unit: 'boxes', group: 'pantry'}
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
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'BBQ Ribette', 
                                ingredients: [
                                    { name: 'frozen ribette', quantity: 4, unit: 'boxes', group: 'frozen' }
                                ]
                            },
                            {
                                option: 'Chicken Alfredo w/ Peppers',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 2, unit: 'boxes', group: 'frozen'}
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
                                option: 'Chicken Alfredo',
                                ingredients: [
                                    { name: 'penne noodles', quantity: 2, unit: 'bags', group: 'pantry'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Roasted Squash',
                                ingredients: [
                                    { name: 'fresh butternut squash', quantity: 20, unit: 'kilograms', group: 'fresh'}
                                ],
                                option: 'Chicken Alfredo w/ Peppers',
                                ingredients: [
                                    { name: 'frozen green pepper', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen red pepper', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onion', quantity: 2, unit: 'kilograms', group: 'frozen'},
                                    { name: 'alfredo sauce', quantity: 2, unit: 'jugs', group: 'pantry'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Strawberry Ice Cream ',
                                ingredients: [
                                    { name: 'strawberry ice cream cups', quantity: 12, unit: 'boxes', group: 'frozen'},
                                    { name: 'strawberry ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF strawberry ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'apricot halves',
                                ingredients: [
                                    { name: 'canned apricot halves', quantity: 3, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads', group: 'produce'},
                                    { name: 'fresh green onion ', quantity: 1, unit: 'bunches', group: 'produce'},
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
                                option: 'Salisbury Steak',
                                ingredients: [
                                    { name: 'frozen steakettes', quantity: 3, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'chicken salad',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 1, unit: 'boxes', group: 'frozen'},
                                    { name: 'fresh diced celery', quantity: 1, unit: 'cups', group: 'fresh'},
                                    { name: 'fresh onion', quantity: 1, unit: 'cups', group: 'produce'},
                                    { name: 'mayonnaise', quantity: 1, unit: 'tubs', group: 'pantry'},
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
                                option: 'Dinner Roll',
                                ingredients: [
                                    { name: 'frozen dinner rolls', quantity: 80, unit: 'each', group: 'frozen'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Creamed Turnip',
                                ingredients: [
                                    { name: 'frozen diced turnip', quantity: 6, unit: 'kilograms', group: 'frozen'},
                                    { name: 'milk', quantity: 4, unit: 'litres', group: 'dairy'},
                                ],
                                option: 'balsamic tomato and cucumber salad',
                                ingredients: [
                                    { name: 'fresh tomato', quantity: 4, unit: 'litres', group: 'produce'},
                                    { name: 'fresh cucumber', quantity: 4, unit: 'litres', group: 'produce'},
                                    { name: 'fresh onion', quantity: 2, unit: 'litres', group: 'produce'},
                                    { name: 'balsamic dressing', quantity: 1, unit: 'each', group: 'pantry'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Vanilla Pudding with whipped cream',
                                ingredients: [
                                    { name: 'vanilla pudding powder', quantity: 1, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 13.5, unit: 'litres', group: 'dairy'},
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
                                option: 'Cream of Leek',
                                ingredients: [
                                    { name: 'cream of potato leek soup mix', quantity: 8, unit: 'bags', group: 'pantry'},
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
            dayName: 'Saturday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'Western Omelette', 
                                ingredients: [{ name: 'western omelette', quantity: 110, unit: 'each', group: 'frozen' },
                                              { name: 'frozen liquid egg', quantity: 1, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'Chicken Pot Pie', 
                                ingredients: [
                                    { name: 'frozen chicken pot pie', quantity: 3, unit: 'boxes', group: 'frozen' }
                                ]
                            },
                            {
                                option: 'Nasi Goreng',
                                ingredients: [
                                    { name: 'frozen bacon bits', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen egg patty', quantity: 70, unit: 'each', group: 'frozen'},
                                    
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Chicken Pot Pie',
                                ingredients: [
                                    { name: 'frozen chicken pot pie', quantity: 2, unit: 'boxes', group: 'frozen' }
                                ],
                                option: 'Nasi Goreng',
                                ingredients : [
                                    { name: 'rice pilaf', quantity: 4, unit: 'kilograms', group: 'pantry'},
                                    { name: 'soy sauce', quantity: 1, unit: 'cups', group: 'pantry'},
                                    { name: 'nasi seasoning', quantity: 3, unit: 'cups', group: 'seasoning'},
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Oriental Mix',
                                ingredients: [
                                    { name: 'frozen stir fry vegetables', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Nasi Goreng',
                                ingredients: [
                                    { name: 'frozen green peppers', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen red peppers', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'frozen diced onions', quantity: 3, unit: 'kilograms', group: 'frozen'},
                                    { name: 'fresh green onion', quantity: 1, unit: 'cups', group: 'produce'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'banana pudding with whipped cream',
                                ingredients: [
                                    { name: 'banana pudding powder', quantity: 2, unit: 'bags', group: 'pantry'},
                                    { name: 'milk', quantity: 16, unit: 'litres', group: 'dairy'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'diced peaches',
                                ingredients: [
                                    { name: 'canned peaches', quantity: 3, unit: 'cans', group: 'pantry'}
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
                                option: 'Pulled Chicken',
                                ingredients: [
                                    { name: 'frozen shredded chicken', quantity: 4, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'Pastrami Sandwich',
                                ingredients: [
                                    { name: 'sliced pastrami', quantity: 3, unit: 'boxes', group: 'fresh'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'Macaroni and Cheese',
                                ingredients: [
                                    { name: 'macaroni noodles', quantity: 6, unit: 'litres', group: 'pantry'},
                                    { name: 'cheese sauce', quantity: 2, unit: 'bags', group: 'pantry'},
                                ],
                                option: 'Pastrami Sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves', group: 'fresh'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls', group: 'frozen'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box', group: 'fresh'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'Broccoli w/ Cheese Sauce',
                                ingredients: [
                                    { name: 'frozen broccoli', quantity: 12, unit: 'kilograms', group: 'frozen'},
                                    { name: 'cheese sauce', quantity: 1, unit: 'bags', group: 'pantry'}
                                ],
                                option: 'Dill Pickle Spears',
                                ingredients: [
                                    { name: 'fresh dill pickle spears', quantity: 2, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Chocolate Eclair',
                                ingredients: [
                                    { name: 'chocolate eclair', quantity: 2, unit: 'boxes', group: 'frozen'}
                                ],
                                option: 'fresh orange',
                                ingredients: [
                                    { name: 'fresh orange', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned mandarins', quantity: 2, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Minestrone Soup',
                                ingredients: [
                                    { name: 'minestrone soup mix', quantity: 8, unit: 'bags', group: 'pantry'},
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
                                ingredients: [{ name: 'fresh egg', quantity: 90, unit: 'each', group: 'fresh' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags', group: 'frozen' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves', group: 'fresh' },
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
                                option: 'Dutch Beef Rollade', 
                                ingredients: [
                                    { name: 'frozen beef rollade roasts', quantity: 3, unit: 'roasts', group: 'frozen' }
                                ]
                            },
                            {
                                option: 'Teriyaki Chicken Stir Fry',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 2, unit: 'boxes', group: 'frozen'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'Au Gratin potatoes',
                                ingredients: [
                                    { name: 'au gratin potato', quantity: 3, unit: 'boxes', group: 'pantry'}
                                ],
                                option: 'Jasmine Rice',
                                ingredients : [
                                    { name: 'jasmine rice', quantity: 2, unit: 'litres', group: 'pantry'}                                    
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Green Beans',
                                ingredients: [
                                    { name: 'frozen green beans', quantity: 12, unit: 'kilograms', group: 'frozen'}
                                ],
                                option: 'Teriyaki Chicken Stir Fry',
                                ingredients: [
                                    { name: 'frozen stir fry mix', quantity: 10, unit: 'kilograms', group: 'frozen'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'Key Lime Pie with whipped cream',
                                ingredients: [
                                    { name: 'frozen key lime pie', quantity: 15, unit: 'each', group: 'frozen'},
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
                                option: 'Octoberfest Sausage',
                                ingredients: [
                                    { name: 'frozen octoberfest sausage', quantity: 100, unit: 'each', group: 'frozen'}
                                ],
                                option: 'gouda cheese on a raisin bun',
                                ingredients: [
                                    { name: 'gouda cheese', quantity: 8, unit: 'packages', group: 'fresh'},
                                    { name: 'cheese whiz', quantity: 6, unit: 'flats', group: 'pantry'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'mashed potatoes',
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
                                option: 'Dutch Red Cabbage',
                                ingredients: [
                                    { name: 'fresh red cabbage', quantity: 12, unit: 'kilograms', group: 'fresh'}
                                ],
                                option: 'Fruit Salad',
                                ingredients: [
                                    { name: 'fresh fruit salad', quantity: 4, unit: 'buckets', group: 'fresh'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'butterscotch ice cream',
                                ingredients: [
                                    { name: 'butterscotch ice cream cups', quantity: 12, unit: 'boxes', group: 'frozen'},
                                    { name: 'butterscotch ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'LF butterscotch ice cream bulk', quantity: 2, unit: 'boxes', group: 'frozen'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags', group: 'frozen'}
                                ],
                                option: 'Fresh Pear',
                                ingredients: [
                                    { name: 'fresh pear', quantity: 20, unit: 'each', group: 'produce'},
                                    { name: 'canned diced pear', quantity: 1, unit: 'cans', group: 'pantry'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'Cauliflower and Cheese',
                                ingredients: [
                                    { name: 'cream of cauliflower soup mix', quantity: 8, unit: 'bags', group: 'pantry'},
                                    { name: 'frozen cauliflower', quantity: 1, unit: 'kilograms', group: 'frozen'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups', group: 'pantry'},
                                    { name: 'red lentils', quantity: 4, unit: 'cups', group: 'pantry'}
                                ]
                            }]
                    }
                }]
            },
            }
    ]
});
try{
await week2.save();
console.log("Seed data for week 2 added!");
mongoose.connection.close();
}catch(err){
    console.error("Error saving week 1:", err.message);
}

};



// Run the function
seedDatabase();