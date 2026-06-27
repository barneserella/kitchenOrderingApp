const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menu");


router.get("/", menuController.getMenu);
router.post("/menusub", menuController.getCurrentOption);

module.exports = router;