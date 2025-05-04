const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredients");


router.get("/", ingredientsController.getIngredients);
// router.post('/', (req, res) => {
//     const { inputValue } = req.body;
//     console.log('Received input value:', inputValue);

//     res.json({ message: 'Received!', inputValue })
// })
router.post("/ingredients", ingredientsController.showIngredients);

module.exports = router;