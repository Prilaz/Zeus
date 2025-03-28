const {
  addCategory,
  getAllCategories,
  getCategoryDetails,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const { isLoggedIn, isAdmin } = require("../middleware/Auth");

const router = require("express").Router();

router.post(`/addcategory`, isAdmin, addCategory);
router.get("/getallcategories", getAllCategories);
router.get("/getcategorydetails/:id", getCategoryDetails);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

// router.post('/category', addCategory)
// router.get('/category', getAllCategories)
// router.get('/category/:id', getCategoryDetails)
// router.put('/category/:id', updateCategory)
// router.delete('/category/:id', deleteCategory)

module.exports = router;
