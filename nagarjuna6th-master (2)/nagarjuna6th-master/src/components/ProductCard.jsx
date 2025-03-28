import React from "react";
import { Money, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
                    sx={{ height: 140 }}
                    image={`${API}/${item.product_image}`}
                    title={item.product_name}
                /> */}
        <img
          style={{ height: 140 }}
          src={`${API}/${item.product_image}`}
          title={item.product_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.product_name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.product_description}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Rs.{item.product_price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" startIcon={<Money />} variant="contained">
            Buy Now
          </Button>
          <Button size="small" variant="outlined" endIcon={<ShoppingBag />}>
            <ShoppingCart />
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
