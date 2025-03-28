import {
  Category,
  Favorite,
  FavoriteBorder,
  Money,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2,
  Link,
  ListItem,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/prouductAPI";
import CategoriesCheckbox from "../components/CategoryCheckbox";
import PriceRadio from "../components/PriceRadio";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [filters, setFilters] = useState({ Category: [], product_price: [] });

  const handleFilters = (filter, filterBy) => {
    setFilters({ ...filters, [filterBy]: filter });
    console.log(filter);
  };

  useEffect(() => {
    getAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  }, []);

  return (
    <>
      <Grid2 container>
        <Grid2
          item
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          bgcolor={"#f1d1c1"}
          p={3}
        >
          <Typography variant="h4" color="secondary" fontWeight={"bold"}>
            DEALS
          </Typography>
          <ListItem>
            <Link
              href="#"
              fontSize={20}
              color="success"
              fontWeight={"bold"}
              underline="hover"
            >
              TOP DEALS
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              fontSize={20}
              color="error"
              fontWeight={"bold"}
              underline="hover"
            >
              MOST POPULAR
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              fontSize={20}
              color="warning"
              fontWeight={"bold"}
              underline="hover"
            >
              FLASH SALES
            </Link>
          </ListItem>

          <Typography variant="h4" color="secondary" fontWeight={"bold"} mt={3}>
            DEPARTMENTS
          </Typography>
          <FormGroup>
            <CategoriesCheckbox />
          </FormGroup>

          <Typography variant="h4" color="secondary" fontWeight={"bold"} mt={3}>
            PRICES
          </Typography>
          <RadioGroup>
            <PriceRadio handleFilters={handleFilters} />
          </RadioGroup>

          <Typography variant="h4" color="secondary" fontWeight={"bold"} mt={3}>
            Avg. Customer Review
          </Typography>
          <ListItem>
            <Link href="#">
              <Rating readOnly value={1} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readOnly value={2} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readOnly value={3} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readOnly value={4} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readOnly value={5} precision={1} max={5} />
            </Link>
          </ListItem>
        </Grid2>
        <Grid2
          item
          size={{ xs: 12, sm: 6, md: 8, lg: 9 }}
          p={3}
          bgcolor={"#c1d1e1"}
          container
        >
          {products.length > 0 &&
            products.map((product) => {
              return (
                <Grid2 size={{ xs: 12, md: 4, xl: 3 }} padding={2}>
                  <ProductCard item={product} />
                </Grid2>
              );
            })}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Products;
