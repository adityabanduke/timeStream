const express = require("express");
const router = express.Router();
const {
  addCompound,
  getCompounds,
  getCompound,
  updateCompound,
  deleteCompound,
  getLimitedCompounds,
} = require("../controllers/compoundController");

router.post("/addCompound", addCompound);
router.get("/getCompounds", getCompounds);
router.get("/getCompound/:id", getCompound);
router.put("/updateCompound/:id", updateCompound);
router.delete("/deleteCompound/:id", deleteCompound);
router.get("/getLimitedCompounds", getLimitedCompounds);

module.exports = router;
