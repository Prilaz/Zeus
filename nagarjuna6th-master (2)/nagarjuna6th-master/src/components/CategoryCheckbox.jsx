import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api/prouductAPI";

const CategoriesCheckbox = ({ handleFilters }) => {
  let [categories, setCategories] = useState([]);
  let [selected, setselected] = useState([]);

  const handleChange = (e) => {
    let newSelected = [...selected];
    let newCategory = e.target.value;
    let categoryExists = newSelected.findIndex(
      (category) => category == newCategory
    );
    if (categoryExists == -1) {
      newSelected.push(newCategory);
    } else {
      newSelected.splice(categoryExists, 1);
    }
    setselected(newSelected);
    handleFilters(newSelected, "Category_checkBox");
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  }, []);

  return (
    <>
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  size="medium"
                  value={category._id}
                  onChange={handleChange}
                />
              }
              label={category.category_name}
            />
          );
        })}
    </>
  );
};

export default CategoriesCheckbox;
