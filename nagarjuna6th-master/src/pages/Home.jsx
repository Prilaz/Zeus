import React from "react";
import MyCarousel from "../components/MyCarousel";
import MyCarousel2 from "../components/MyCarousel2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Rating,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  ArrowBackIosNew,
  ArrowForward,
  ArrowOutward,
  Money,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <MyCarousel2 />

      <div
        className="flex-col  ml-15 mr-15 mb-5 p-10  mt-0 "
        sx={{ borderRadius: 5 }}
      >
        <div className="flex justify-between mr-10  flex-wrap">
          <h1 className="m-10 font-serif">OUR BESTSELLER'S </h1>
          <Button variant="outlined" className="btn text-dark">
            View More
            <ArrowForward />
          </Button>
        </div>
        <Grid2 item size={{ xs: 12, sm: 6, md: 8, lg: 9 }} p={3}>
          <div className="flex flex-wrap  mt-10 ">
            <Card
              className="flex-col justify-items-center"
              sx={{
                maxWidth: 260,
                height: 400,
                marginRight: 3.5,
                marginLeft: 3.5,
                borderRadius: 5,
                padding: 1,
              }}
            >
              <CardMedia
                sx={{ height: 250, width: 190 }}
                image="./img/d.jpg"
                title="DragonBall Super"
              />
              <CardContent className="flex-col justify-content-center ">
                <Typography gutterBottom variant="h5" component="div">
                  DragonBall Super
                </Typography>
                <Typography></Typography>
                <Rating readOnly value={4.5} precision={0.25} max={5} />
                <Button
                  className="text-primary mt-2"
                  variant="outlined"
                  fullWidth
                  sx={{ borderRadius: 3 }}
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card
              className="flex-col justify-items-center"
              sx={{
                maxWidth: 260,
                height: 400,
                marginRight: 3.5,
                marginLeft: 3.5,
                borderRadius: 5,
                padding: 1,
              }}
            >
              <CardMedia
                sx={{ height: 250, width: 190 }}
                image="./img/o.jpg"
                title="One piece"
              />
              <CardContent className="flex-col justify-content-center">
                <Typography gutterBottom variant="h5" component="div">
                  One Piece
                </Typography>
                <Typography></Typography>
                <Rating readOnly value={4.5} precision={0.25} max={5} />
                <Button
                  className="text-primary mt-2"
                  variant="outlined"
                  fullWidth
                  sx={{ borderRadius: 3 }}
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card
              className="flex-col justify-items-center"
              sx={{
                maxWidth: 260,
                height: 400,
                marginRight: 3.5,
                marginLeft: 3.5,
                borderRadius: 5,
                padding: 1,
              }}
            >
              <CardMedia
                sx={{ height: 250, width: 190 }}
                image="./img/n.jpg"
                title="Naruto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Naruto
                </Typography>
                <Typography></Typography>
                <Rating readOnly value={4.5} precision={0.25} max={5} />
                <Button
                  className="text-primary mt-2"
                  variant="outlined"
                  sx={{ borderRadius: 3 }}
                  fullWidth
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>

            <Card
              className="flex-col justify-items-center"
              sx={{
                maxWidth: 260,
                height: 400,
                marginRight: 3.5,
                marginLeft: 3.5,
                borderRadius: 5,
                padding: 1,
              }}
            >
              <CardMedia
                sx={{ height: 250, width: 190 }}
                image="./img/b.jpg"
                title="Bleach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bleach
                </Typography>
                <Typography></Typography>
                <Rating readOnly value={4.5} precision={0.25} max={5} />
                <Button
                  className="text-primary mt-2"
                  variant="outlined"
                  fullWidth
                  sx={{ borderRadius: 3 }}
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </Grid2>
      </div>
      <div className="bg-blue-200 flex h-90 justify-center items-center justify-evenly flex-wrap">
        <div>
          <h1>Used Books Starting at Just Rs. 250/.</h1>
          <p>
            Explore a Wide Range of Popular Used Books in Excellent Condition.
          </p>
          <Button
            className="text-primary mt-2"
            variant="outlined"
            sx={{ borderRadius: 3 }}
          >
            Explore More
          </Button>
        </div>
        <div className="flex justify-center items-center flex-wrap  ">
          <img
            className="w-40 h-50 m-2"
            src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9781421580371%2F9781421580371-60.webp&w=1920&q=75"
          ></img>
          <img
            className="w-40 h-50 m-2"
            src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9781593077068%2Fimage_nAyYYD2_zrhfN0M.webp&w=1920&q=75"
          ></img>
          <img
            className="w-40 h-50 m-2"
            src="https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9781974710041%2Fimage_CkBlAbg.jpeg&w=1920&q=75"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
