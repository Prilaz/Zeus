const CategoryModel = require("../models/Category");

//add new category

exports.addCategory = async (req, res) => {
  let categoryExists = await CategoryModel.findOne({
    category_name: req.body.category_name,
  });
  if (categoryExists) {
    return res.status(400).json({ error: "Category already exist" });
  }

  let categoryToAdd = await CategoryModel.create({
    category_name: req.body.category_name,
  });

  if (!categoryToAdd) {
    return res.status(400).json({ error: "Something went wrong" });
  }

  res.send(categoryToAdd);
};

//get all categories
exports.getAllcategories = async (req, res) => {
  let categories = await CategoryModel.find();
  if (!categories) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(categories);
};

//get category details
exports.getCategoryDetails = async (req, res) => {
  let category = await CategoryModel.findById(req.params.id);
  if (!category) {
    return res.status(400).json({ Error: "Something went wrong" });
  }
  res.send(category);
};

//update category
exports.updateCategory = async (req, res) => {
  let categoryToUpdate = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      category_name: req.body.category_name,
    },
    { new: true }
  );
  if (!categoryToUpdate) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(categoryToUpdate);
};

//delete category
exports.deleteCategory = (req, res) => {
  CategoryModel.findByIdAndDelete(req.params.id).then((deleteCategory) => {
    if (deleteCategory) {
      return res.status(400).json({ Error: "Category not found" });
    }
    res.send({ message: "Category deleted successfully" });
  });
};

/*
to get data from user-
req.body - receive data using form 
req.params - receive data using url
req.query - recieve data using url

res.send(obj)-to send obj to client
res.json(obj)-to senf json object to client

status code - 400 : bad request

200 : OK(default)
300 : multiple choices
4XX : errors
401 : authorization error
404 : not found page
500/600 : server error\

CRUD :

Create:Model.create(obj)
Retrive:
    Model.Find() -> return all document in an array
    Model.find(filter) -> return all document in an array , that satisfies the filter obj
    Model.findOne(filter) -> return document that satisfies the filter
    Model.fintById(id) -> return the document with the given id

Update:
    MOdel.findByIdAndUpdate(id,obj) -> update the document with given id , set the  values provided in obj

Delete:
    Model.findByIdAndDelete(id) -> removes the document with the given id
*/
