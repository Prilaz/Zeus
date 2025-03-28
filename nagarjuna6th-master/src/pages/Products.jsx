import { Money, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  ListItem,
  Typography,
  Link,
  RadioGroup,
  Rating,
  Radio,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <>
      <Grid2 container>
        <Grid2
          item
          size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
          bgcolor={"#edf4f9"}
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
              underline="hover"
              fontWeight={"bold"}
            >
              TopDeals
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              fontSize={20}
              color="success"
              underline="hover"
              fontWeight={"bold"}
            >
              Flash Sale
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              fontSize={20}
              fontWeight={"bold"}
              color="success"
              underline="hover"
            >
              Most Popular
            </Link>
          </ListItem>

          <Typography
            variant="h4"
            color="secondary"
            fontWeight={"bold"}
            underline="hover"
          >
            Genre
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label="Fantasy"
            />
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label="Romance"
            />
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label="Adventure"
            />
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label="Biography"
            />
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label="Sci-fi"
            />
          </FormGroup>

          <Typography
            variant="h4"
            color="secondary"
            fontWeight={"bold"}
            underline="hover"
          >
            Prices
          </Typography>

          <RadioGroup>
            <FormControlLabel
              name="q"
              control={<Radio size="medium" />}
              label="150-250"
              value={1}
            />
          </RadioGroup>
          <RadioGroup>
            <FormControlLabel
              name="w"
              control={<Radio size="medium" />}
              label="250-350"
              value={2}
            />
          </RadioGroup>
          <RadioGroup>
            <FormControlLabel
              name="e"
              control={<Radio size="medium" />}
              label="350-450"
              value={3}
            />
          </RadioGroup>

          <Typography
            variant="h4"
            color="secondary"
            fontWeight={"bold"}
            underline="hover"
          >
            Avg.Customer Review
          </Typography>

          <ListItem>
            <Link href="#">
              <Rating readonly value={1} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readonly value={2} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readonly value={3} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readonly value={4} precision={1} max={5} />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Rating readonly value={5} precision={1} max={5} />
            </Link>
          </ListItem>
        </Grid2>

        <Grid2
          item
          size={{ xs: 12, sm: 6, md: 8, lg: 10 }}
          bgcolor={"#c1d1e1"}
          p={3}
        >
          <Typography variant="h4" color="primary" fontWeight={"bold"} className="">
            TOP DEALS
          </Typography>
          <div className="flex flex-wrap ml-10">
            <Card
              className="flex-col justify-items-center"
              sx={{
                maxWidth: 260,
                height: 400,
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
                marginRight: 3,
                marginBottom: 5,
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
          </div>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Products;
