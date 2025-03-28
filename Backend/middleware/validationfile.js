const { check, validationResult } = require("express-validator");

exports.categoryCheck = [
  check("category_name", "Category name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Category must be at least 3 character"),
];

exports.validationScript = (req, res, next) => {
  console.log(req.body);
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

exports.addProductCheck = [
  check("product_name", "Product name is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 character"),
  check("product_description", "Product description is required")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Product description must be at least 20 character"),
  check("product_price", "Product price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Product price must be a number"),
  check("count_in_stock", "Product price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Product price must be a number"),
  check("category", "Category is required")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid Category"),
];

exports.updateProductCheck = () => [
  check("product_name")
    .optional()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Product name must be at least 3 character"),
  check("product_description")
    .optional()
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Product description must be at least 20 character"),
  check("product_price", "Product price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Product price must be a number"),
  check("count_in_stock", "Product price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Product price must be a number"),
  check("category", "Category is required")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid Category"),
];
