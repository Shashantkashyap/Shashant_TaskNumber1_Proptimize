const express =require("express");
const router = express.Router();

const {showAllData, evenData, oddData, findDataById} = require("../controllers/data");

router.get("/showAll",showAllData);
router.get("/even", evenData);
router.get("/odd", oddData);
router.post("/dataById", findDataById);


module.exports = router;