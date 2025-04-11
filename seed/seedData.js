const week = new Week({
    weekNumber: 1,
    days: [
        {
            dayName: 'Monday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'egg', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'honey mustard chicken breast', 
                                ingredients: [
                                    { name: 'frozen chicken breast', quantity: 3, unit: 'boxes' },
                                    { name: 'honey mustard sauce', quantity: 2, unit: 'jugs'}
                                ]
                            },
                            {
                                option: 'bahmi',
                                ingredients: [
                                    { name: 'bacon bits', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'bahmi',
                                ingredients : [
                                    { name: 'medium egg noodle', quantity: 8, unit: 'litres'},
                                    { name: 'bahmi spice', quantity: 1, unit: 'cups'},
                                    { name: 'barbeque sauce', quantity: 1, unit: 'cups'},
                                    { name: 'soy suace', quantity: 1, unit: 'cups'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'Spinach Medley',
                                ingredients: [
                                    { name: 'frozen spinach nuggets', quantity: 10, unit: 'kilograms'},
                                    { name: 'frozen red pepper', quantity: 4, unit: 'kilograms'},
                                    { name: 'canned mushrooms', quantity: 2, unit: 'cans'}
                                ],
                                option: 'honeydew melon',
                                ingredients: [
                                    { name: 'fresh honeydew melon', quantity: 4, unit: 'buckets'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'mocha pudding with whipped cream',
                                ingredients: [
                                    { name: 'vanilla pudding powder', quantity: 2, unit: 'bags'},
                                    { name: 'coffee', quantity: 1, unit: 'bag'},
                                    { name: 'milk', quantity: 4, unit: 'bags'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'apricot halves',
                                ingredients: [
                                    { name: 'canned apricot halves', quantity: 3, unit: 'cans'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'cod nugget',
                                ingredients: [
                                    { name: 'frozen cod nuggets', quantity: 2, unit: 'boxes'},
                                    { name: 'frozen blue cod', quantity: 1, unit: 'boxes'},
                                    { name: 'tartar sauce', quantity: 4, unit: 'litres'}
                                ],
                                option: 'bologna sandwich',
                                ingredients: [
                                    { name: 'sliced bologna', quantity: 2, unit: 'boxes'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'rice pilaf',
                                ingredients: [
                                    { name: 'rice pilaf', quantity: 3, unit: 'boxes'}
                                ],
                                option: 'bologna sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'mexican mix',
                                ingredients: [
                                    { name: 'frozen red pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen green pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen corn', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen zucchini', quantity: 2, unit: 'kilograms'}
                                ],
                                option: 'carrot salad',
                                ingredients: [
                                    { name: 'frozen diced carrot', quantity: 8, unit: 'kilograms'},
                                    { name: 'mayonaise', quantity: 1, unit: 'buckets'},
                                    { name: 'plain yogurt', quantity: 1, unit: 'bags'},
                                    { name: 'dill', quantity: 1, unit: 'each'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'lime jello with whipped cream',
                                ingredients: [
                                    { name: 'lime jello powder', quantity: 1, unit: 'bags'},
                                    { name: 'rainbow sorbet', quantity: 1, unit: 'each'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'cream of broccoli',
                                ingredients: [
                                    { name: 'cream of broccoli soup mix', quantity: 8, unit: 'bags'},
                                    { name: 'frozen broccoli', quantity: 1, unit: 'kilograms'},
                                    { name: 'frozen spinach nuggets', quantity: 1, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'red lentils', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Tuesday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'egg', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'cinnamon bun',
                                ingredients: [
                                    { name: 'cinnamon bun', quantity: 30, unit: 'buns'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'beef and pork sausage', 
                                ingredients: [
                                    { name: 'beef and pork sausage', quantity: 4, unit: 'boxes' }
                                ]
                            },
                            {
                                option: 'honey garlic chicken stir fry',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 5.5, unit: 'kilograms'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'brown rice',
                                ingredients : [
                                    { name: 'brown rice', quantity: 3, unit: 'litres'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'PEI Mix',
                                ingredients: [
                                    { name: 'frozen green beans', quantity: 5, unit: 'kilograms'},
                                    { name: 'frozen diced carrots', quantity: 5, unit: 'kilograms'},
                                    { name: 'frozen wax beans', quantity: 5, unit: 'kilograms'}
                                ],
                                option: 'honey garlic chicken stir fry',
                                ingredients: [
                                    { name: 'frozen stir fry vegetable', quantity: 4, unit: 'kilograms'},
                                    { name: 'honey garlic sauce', quantity: 1, unit: 'jugs'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'banana cream pie',
                                ingredients: [
                                    { name: 'banana cream pie', quantity: 3, unit: 'boxes'}
                                ],
                                option: 'sliced strawberries',
                                ingredients: [
                                    { name: 'frozen sliced strawberries', quantity: 1, unit: 'boxes'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'garden',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh cucumber', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'},
                                    { name: 'fresh tomato', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'pulled pork poutine',
                                ingredients: [
                                    { name: 'frozen pulled pork', quantity: 2.5, unit: 'boxes'},
                                    { name: 'barbecue sauce', quantity: 1, unit: 'jugs'}
                                ],
                                option: 'tuna salad sandwich',
                                ingredients: [
                                    { name: 'tuna', quantity: 3, unit: 'pouches'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'french fries',
                                ingredients: [
                                    { name: 'frozen french fries', quantity: 4, unit: 'bags'},
                                    { name: 'instant mashed potatoes', quantity: 1, unit: 'bags'}
                                ],
                                option: 'tuna salad sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'dill pickle slices',
                                ingredients: [
                                    { name: 'fresh sliced pickles', quantity: 2, unit: 'buckets'}
                                ],
                                option: 'bean salad',
                                ingredients: [
                                    { name: 'bean salad', quantity: 3, unit: 'tubs'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'raspberry mousse',
                                ingredients: [
                                    { name: 'raspberry mousse powder', quantity: 2, unit: 'bags'},
                                    { name: 'milk', quantity: 2, unit: 'bags'}
                                ],
                                option: 'fresh orange',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'harvest tomato vegetable',
                                ingredients: [
                                    { name: 'harvest tomato vegetable soup mix', quantity: 8, unit: 'bags'},
                                    { name: 'frozen diced carrots', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen celery', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'barley', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Wednesday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'scrambled egg with bacon and cheese', 
                                ingredients: [
                                    { name: 'bacon bits', quantity: 1, unit: 'bags' },
                                    { name: 'frozen liquid egg', quantity: 5, unit: 'bags' },
                                    { name: 'shredded cheddar cheese', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'herbed salmon', 
                                ingredients: [
                                    { name: 'frozen salmon filets', quantity: 4, unit: 'boxes' },
                                    { name: 'salmon seasoning', quantity: 1, unit: 'container'}
                                ]
                            },
                            {
                                option: 'lasagna',
                                ingredients: [
                                    { name: 'frozen lasagna', quantity: 10, unit: 'each'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'roasted potato',
                                ingredients: [
                                    { name: 'frozen diced potato', quantity: 4, unit: 'bags'},
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'lasagna',
                                ingredients : [
                                    { name: 'frozen lasagna', quantity: 10, unit: 'each'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'squash',
                                ingredients: [
                                    { name: 'frozen squash', quantity: 16, unit: 'kilograms'}
                                ],
                                option: 'asparagus tips',
                                ingredients: [
                                    { name: 'frozen asparagus tips', quantity: 8, unit: 'kilograms'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'lemon pudding with whipped cream',
                                ingredients: [
                                    { name: 'lemon pudding powder', quantity: 2, unit: 'bags'},
                                    { name: 'milk', quantity: 4, unit: 'bags'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'peaches',
                                ingredients: [
                                    { name: 'canned peaches', quantity: 3, unit: 'cans'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'chicken fingers',
                                ingredients: [
                                    { name: 'frozen chicken strips', quantity: 3, unit: 'boxes'},
                                    { name: 'frozen diced chicken', quantity: 1, unit: 'boxes'},
                                    { name: 'plum sauce', quantity: 1, unit: 'jugs'}
                                ],
                                option: 'black forest ham sandwich',
                                ingredients: [
                                    { name: 'sliced black forest ham', quantity: 2, unit: 'boxes'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'potato salad',
                                ingredients: [
                                    { name: 'fresh potatoes', quantity: 1.5, unit: 'pots'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh green pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh red onion', quantity: 2, unit: 'each'},
                                    { name: 'fresh green onion', quantity: 2, unit: 'each'},
                                    { name: 'hard boiled egg', quantity: 12, unit: 'each'}
                                ],
                                option: 'black forest ham sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'california mix',
                                ingredients: [
                                    { name: 'frozen broccoli', quantity: 4, unit: 'kilograms'},
                                    { name: 'frozen cauliflower', quantity: 4, unit: 'kilograms'},
                                    { name: 'frozen diced carrot', quantity: 4, unit: 'kilograms'}
                                ],
                                option: 'diced tomato',
                                ingredients: [
                                    { name: 'fresh tomato', quantity: 15, unit: 'each'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'brownie',
                                ingredients: [
                                    { name: 'frozen brownie', quantity: 3, unit: 'slabs'}
                                ],
                                option: 'fresh apple',
                                ingredients: [
                                    { name: 'fresh apple', quantity: 20, unit: 'each'},
                                    { name: 'canned apple', quantity: 1, unit: 'cans'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'dutch meatball',
                                ingredients: [
                                    { name: 'frozen meatballs', quantity: 1, unit: 'boxes'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen celery', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 2, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'barley', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Thursday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'egg', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit:'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'smoked sausage', 
                                ingredients: [
                                    { name: 'frozen smoked sausage', quantity: 11, unit: 'kilograms' }
                                ]
                            },
                            {
                                option: 'cheddar cheese',
                                ingredients: [
                                    { name: 'sliced cheddar cheese', quantity: 3, unit: 'packages'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'boerenkool',
                                ingredients: [
                                    { name: 'fresh potato', quantity: 2.5, unit: 'pots'}
                                ],
                                option: 'banana bread',
                                ingredients : [
                                    { name: 'flour', quantity: 3, unit: 'litres'},
                                    { name: 'sugar', quantity: 2, unit: 'litres'},
                                    { name: 'puree banana', quantity: 3, unit: 'litres'},
                                    { name: 'margarine', quantity: 4.5, unit: 'cups'},
                                    { name: 'fresh eggs', quantity: 12, unit: 'each'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'boerenkool',
                                ingredients: [
                                    { name: 'kale', quantity: 9, unit: 'cans'}
                                ],
                                option: 'cantaloupe',
                                ingredients: [
                                    { name: 'fresh cantaloupe melon', quantity: 4, unit: 'buckets'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'yogurt with berry sauce',
                                ingredients: [
                                    { name: 'vanilla yogurt', quantity: 8, unit: 'bags'},
                                    { name: 'pie filling', quantity: 1, unit: 'buckets'}
                                ],
                                option: 'mango',
                                ingredients: [
                                    { name: 'frozen mango', quantity: 4, unit: 'bags'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'italian meatballs',
                                ingredients: [
                                    { name: 'frozen ground beef', quantity: 15, unit: 'kilograms'},
                                    { name: 'panko breadcrumbs', quantity: 1, unit: 'bags'},
                                    { name: 'fresh eggs', quantity: 15, unit: 'each'},
                                    { name: 'beef broth concentrate', quantity: 1, unit: 'boxes'}
                                ],
                                option: 'smoked turkey sandwich',
                                ingredients: [
                                    { name: 'sliced smoked turkey', quantity: 2, unit: 'boxes'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'smoked turkey sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: '',
                                ingredients: [
                                    { name: 'frozen red pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen green pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen corn', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen zucchini', quantity: 2, unit: 'kilograms'}
                                ],
                                option: 'creamy beet salad',
                                ingredients: [
                                    { name: 'canned diced beets', quantity: 3, unit: 'cans'},
                                    { name: 'mayonaise', quantity: 1, unit: 'buckets'},
                                    { name: 'sugar', quantity: 1, unit: 'bags'},
                                    { name: 'vinegar', quantity: 1, unit: 'each'},
                                    { name: 'fresh red onion', quantity: '1', unit: 'each'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'vanilla pudding with whipped cream',
                                ingredients: [
                                    { name: 'vanilla pudding powder', quantity: 2, unit: 'bags'},
                                    { name: 'milk', quantity: 3, unit: 'bags'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'chicken noodle',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 1, unit: 'boxes'},
                                    { name: 'frozen diced carrot', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen celery', quantity: 2, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'barley', quantity: 4, unit: 'cups'},
                                    { name: 'chicken broth concentrate', quantity: 1, unit: 'boxes'},
                                    { name: 'noodles', quantity: 1, unit: 'boxes'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Friday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'egg', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit:'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'cream of wheat',
                                ingredients: [
                                    { name: 'wheatlets', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'chicken pot pie', 
                                ingredients: [
                                    { name: 'frozen chicken pot pie', quantity: 5, unit: 'boxes' }
                                ]
                            },
                            {
                                option: 'baked ham',
                                ingredients: [
                                    { name: 'ham roast', quantity: 3, unit: 'each'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'chicken pot pie',
                                ingredients: [
                                    { name: 'chicken pot pie', quantity: 5, unit: 'boxes'}
                                ],
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'oriental mix',
                                ingredients: [
                                    { name: 'frozen stir fry', quantity: 12, unit: 'kilograms'}
                                ],
                                option: 'corn',
                                ingredients: [
                                    { name: 'frozen corn', quantity: 10, unit: 'kilograms'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'cheesecake with chocolate drizzle',
                                ingredients: [
                                    { name: 'frozen cheesecake', quantity: 1.5, unit: 'boxes'},
                                    { name: 'chocolate sauce', quantity: 6, unit: 'bottles'}
                                ],
                                option: 'apricot halves',
                                ingredients: [
                                    { name: 'canned apricot halves', quantity: 3, unit: 'cans'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'tossed',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'krunchy perch',
                                ingredients: [
                                    { name: 'frozen krunchy perch', quantity: 2, unit: 'boxes'},
                                    { name: 'frozen blue cod', quantity: 1, unit: 'boxes'},
                                    { name: 'tartar sauce', quantity: 4, unit: 'litres'}
                                ],
                                option: 'roast beef sandwich',
                                ingredients: [
                                    { name: 'sliced roast beef', quantity: 2, unit: 'boxes'},
                                ]
                            }],
                        starch:
                            [{
                                option: 'sweet potato mash',
                                ingredients: [
                                    { name: 'fresh sweet potato', quantity: 6, unit: 'bags'}
                                ],
                                option: 'roast beef sandwich',
                                ingredients: [
                                    { name: 'whole wheat bread', quantity: 12, unit: 'loaves'},
                                    { name: 'frozen bread puree', quantity: 3, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'peas & carrots',
                                ingredients: [
                                    { name: 'frozen peas', quantity: 6, unit: 'kilograms'},
                                    { name: 'frozen diced carrots', quantity: 6, unit: 'kilograms'},
                                ],
                                option: 'balsamic tomato and cucumber salad',
                                ingredients: [
                                    { name: 'fresh tomato', quantity: 4, unit: 'litres'},
                                    { name: 'fresh cucumber', quantity: 4, unit: 'litres'},
                                    { name: 'fresh onion', quantity: 2, unit: 'litres'},
                                    { name: 'balsamic dressing', quantity: 1, unit: 'each'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'strawberry jello with whipped cream',
                                ingredients: [
                                    { name: 'strawberry jello powder', quantity: 1, unit: 'bags'},
                                    { name: 'rainbow sorbet', quantity: 1, unit: 'each'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'vegetable florentine',
                                ingredients: [
                                    { name: 'vegetable florentine soup mix', quantity: 8, unit: 'bags'},
                                    { name: 'frozen diced carrot', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen  onion', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen  celery', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'barley', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Saturday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'vegetable quiche', 
                                ingredients: [{ name: 'vegetable quiche', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 1, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'croquette', 
                                ingredients: [
                                    { name: 'frozen croquette', quantity: 3, unit: 'boxes' },
                                    { name: 'frozen ground beef', quantity: 7.5, unit: 'lbs'}
                                ]
                            },
                            {
                                option: 'sweet and sour chicken',
                                ingredients: [
                                    { name: 'frozen diced chicken', quantity: 5.5, unit: 'kilograms'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'jasmine rice',
                                ingredients : [
                                    { name: 'jasmine rice', quantity: 8, unit: 'litres'},
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'harvard beets',
                                ingredients: [
                                    { name: 'canned diced beets', quantity: 18.7, unit: 'kilograms'},
                                    { name: 'brown sugar', quantity: 2.75, unit: 'cups'},
                                    { name: 'vinegar', quantity: 2.75, unit: 'cups'},
                                    { name: 'spices', quantity: 1, unit: 'each'}
                                ],
                                option: 'sweet and sour chicken',
                                ingredients: [
                                    { name: 'frozen red pepper', quantity: 4, unit: 'kilograms'},
                                    { name: 'frozen green pepper', quantity: 4, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 4, unit: 'kilograms'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'rice pudding with whipped cream',
                                ingredients: [
                                    { name: 'canned rts rice pudding', quantity: 4, unit: 'cans'},
                                    { name: 'milk', quantity: 1, unit: 'bags'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'diced pears',
                                ingredients: [
                                    { name: 'canned pears', quantity: 3, unit: 'cans'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'garden',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'honey garlic sausage on a bun',
                                ingredients: [
                                    { name: 'frozen honey garlic sausage', quantity: 3, unit: 'boxes'}
                                ],
                                option: 'spinach and feta quiche',
                                ingredients: [
                                    { name: 'frozen liquid egg', quantity: 3, unit: 'bags'},
                                    { name: 'frozen spinach nuggets', quantity: 4, unit: 'kilograms'},
                                    { name: 'feta cheese', quantity: 4, unit: 'cups'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'honey garlic sausage on a bun',
                                ingredients: [
                                    { name: 'hotdog bun', quantity: 65, unit: 'buns'}
                                ],
                                option: 'spinach and feta quiche',
                                ingredients: [
                                    { name: 'frozen pie shells', quantity: 15, unit: 'each'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'garden salad',
                                ingredients: [
                                    { name: 'iceburg lettuce', quantity: 8, unit: 'heads'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red pepper', quantity: 2, unit: 'each'},
                                    { name: 'fresh carrot', quantity: 3, unit: 'each'}
                                ],
                                option: 'french beans',
                                ingredients: [
                                    { name: 'frozen french beans', quantity: 10, unit: 'kilograms'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'strawberry mousse',
                                ingredients: [
                                    { name: 'strawberry mousse powder', quantity: 2, unit: 'bags'},
                                    { name: 'milk', quantity: 2, unit: 'bags'}
                                ],
                                option: 'fresh orange',
                                ingredients: [
                                    { name: 'fresh orange', quantity: 20, unit: 'each'},
                                    { name: 'canned mandarins', quantity: 2, unit: 'cans'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'vegetable beef barley',
                                ingredients: [
                                    { name: 'vegetavble beef barley soup mix', quantity: 8, unit: 'bags'},
                                    { name: 'frozen diced carrot', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen  onion', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'frozen  celery', quantity: 1.5, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'barley', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
            dayName: 'Sunday',
            meals: {
                breakfast: [{
                    components: {
                        protein: 
                            [{ option: 'soft boiled egg', 
                                ingredients: [{ name: 'egg', quantity: 90, unit: 'each' },
                                              { name: 'frozen liquid egg', quantity: 2, unit: 'bags' }]
                            }],
                        starch:
                            [{ option: 'whole wheat bread', 
                                ingredients: [{ name: 'whole wheat bread', quantity: 10, unit: 'loaves' },
                                              { name: 'frozen bread puree', quantity: 3, unit: 'rolls'}],
                                option: 'raisin bread',
                                ingredients: [
                                    { name: ' raisin bread', quantity: 6, unit: 'loaves'},
                                    { name: 'apple spice bread puree', quantity: 1, unit: 'rolls'}
                                ],
                                option: 'oatmeal',
                                ingredients: [
                                    { name: 'oats', quantity: 6, unit: 'litres'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'}
                                ]
                            }],
                        vegetable:
                            [{ 
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 50, unit: 'each'},
                                    { name: 'banana puree', quantity: 3, unit: 'bags'}
                                ]
                            }]
                    }                
                }],
                lunch: [{
                    components: {
                        protein: 
                            [{ 
                                option: 'pollock fingers', 
                                ingredients: [
                                    { name: 'frozen pollock fingers', quantity: 2, unit: 'boxes' },
                                    { name: 'frozen blue cod', quantity: 1, unit: 'boxes'},
                                    { name: 'tartar sauce', quantity: 4, unit: 'litres'}
                                ]
                            },
                            {
                                option: 'pork rollade',
                                ingredients: [
                                    { name: 'frozen pork rollade roast', quantity: 4, unit: 'each'}
                                ]
                            }],
                        starch: 
                            [{
                                option: 'mashed potatoes',
                                ingredients: [
                                    { name: 'instant mashed potato', quantity: 4, unit: 'bags'},
                                    { name: 'margarine', quantity: 2, unit: 'cups'},
                                    { name: 'cream', quantity: 1, unit: 'litres'}
                                ],
                                option: 'au gratin potatoes',
                                ingredients : [
                                    { name: 'au gratin potatoes', quantity: 3, unit: 'boxes'}                                    
                                ]
                            }],
                        vegetable: 
                            [{
                                option: 'roasted squash',
                                ingredients: [
                                    { name: 'frozen squash', quantity: 16, unit: 'kilograms'},
                                    { name: 'cinnamon', quantity: 1, unit: 'each'},
                                    { name: 'canola oil', quantity: 1, unit: 'each'}
                                ],
                                option: 'broccoli and cauliflower',
                                ingredients: [
                                    { name: 'frozen broccoli', quantity: 6, unit: 'kilograms'},
                                    { name: 'frozen cauliflower', quantity: 6, unit: 'kilograms'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'blueberry pie with whipped cream',
                                ingredients: [
                                    { name: 'frozen blueberry pie', quantity: 15, unit: 'each'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'mandarin oranges',
                                ingredients: [
                                    { name: 'canned mandarins', quantity: 3, unit: 'cans'}
                                ]
                            }],
                        salad:
                            [{
                                option: 'ceaser',
                                ingredients: [
                                    { name: 'romaine lettuce', quantity: 1, unit: 'case'},
                                    { name: 'fresh spinach', quantity: 0.25, unit: 'bags'},
                                    { name: 'fresh red onion', quantity: 2, unit: 'each'}
                                ]
                            }]
                    }
                }],
                supper: [{
                    components: {
                        protein: 
                            [{
                                option: 'maple bacon chicken thigh',
                                ingredients: [
                                    { name: 'chicken thigh', quantity: 70, unit: 'each'},
                                    { name: 'frozen diced chicken', quantity: 1, unit: 'boxes'}
                                ],
                                option: 'gouda cheese on a raisin bun',
                                ingredients: [
                                    { name: 'gouda cheese', quantity: 8, unit: 'packages'},
                                    { name: 'cheese whiz', quantity: 6, unit: 'flats'}
                                ]
                            }],
                        starch:
                            [{
                                option: 'roasted potato with sour cream',
                                ingredients: [
                                    { name: 'frozen diced potato', quantity: 4, unit: 'bags'},
                                    { name: 'sour cream', quantity: 1, unit: 'tubs'}
                                ],
                                option: 'gouda cheese on a raisin bun',
                                ingredients: [
                                    { name: 'raisin bun', quantity: 90, unit: 'each'},
                                    { name: 'frozen apple spice bread puree', quantity: 4, unit: 'rolls'},
                                    { name: 'margarine cups', quantity: 1, unit: 'box'}
                                ]                            
                            }],
                        vegetable:
                            [{
                                option: 'mixed vegetables',
                                ingredients: [
                                    { name: 'frozen red pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen green pepper', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen corn', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen onion', quantity: 2, unit: 'kilograms'},
                                    { name: 'frozen zucchini', quantity: 2, unit: 'kilograms'}
                                ],
                                option: 'stewed apples',
                                ingredients: [
                                    { name: 'canned apple slices', quantity: 4, unit: 'cans'}
                                ]
                            }],
                        dessert:
                            [{
                                option: 'vanilla ice cream',
                                ingredients: [
                                    { name: 'vanilla ice cream cups', quantity: 6, unit: 'boxes'},
                                    { name: 'rainbow sorbet', quantity: 1, unit: 'each'},
                                    { name: 'whipped cream', quantity: 6, unit: 'bags'}
                                ],
                                option: 'banana',
                                ingredients: [
                                    { name: 'fresh banana', quantity: 20, unit: 'each'},
                                    { name: 'banana puree', quantity: 1, unit: 'bags'}
                                ]
                            }],
                        soup: 
                            [{
                                option: 'cream of broccoli',
                                ingredients: [
                                    { name: 'cream of broccoli soup mix', quantity: 8, unit: 'bags'},
                                    { name: 'frozen broccoli', quantity: 1, unit: 'kilograms'},
                                    { name: 'frozen spinach nuggets', quantity: 1, unit: 'kilograms'},
                                    { name: 'flax flour', quantity: 3, unit: 'cups'},
                                    { name: 'red lentils', quantity: 4, unit: 'cups'}
                                ]
                            }]
                    }
                }]
            },
        }
    ]
})