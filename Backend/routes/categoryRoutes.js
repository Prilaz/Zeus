const {
  addCategory,
  getAllcategories,
  getCategoryDetails,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const {
  categoryCheck,
  validationScript,
} = require("../middleware/validationfile");

const router = require("express").Router();

router.post("/addcategory", categoryCheck, validationScript, addCategory);
router.get("/getallcategories", getAllcategories);
router.get("/getcategorydetails/:id", getCategoryDetails);

module.exports = router;
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);
