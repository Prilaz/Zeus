const {
  addProduct,
  getAllProducts,
  getProductDetails,
  getAllProductsByCategory,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const upload = require("../middleware/fileUpload");
const {
  addProductCheck,
  validationScript,
} = require("../middleware/validationfile");
const ProductModel = require("../models/ProductModel");

const router = require("express").Router();

router.post(
  "/addproduct",
  upload.single("product_image"),
  addProductCheck,
  validationScript,
  addProduct
);
router.get("/getallproducts", getAllProducts);

router.get("/getproductdetails/:id", getProductDetails);
router.get("/getproductsbycategory/:categoryId", getAllProductsByCategory);

router.put("/updateproduct/:id", upload.single("product_image"), updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;
