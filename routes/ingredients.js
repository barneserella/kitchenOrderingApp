const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredients");


router.get("/", ingredientsController.getIngredients);
router.get("/ingredients/:weekNumber", ingredientsController.showIngredients);

module.exports = router;