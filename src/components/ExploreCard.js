import React, { useContext, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import toProper from "../helper/toProper";
import CartContext from "../contexts/cart-context";
import AuthContext from "../contexts/auth-context";

export default function ExploreCard({ toggleDrawer, item }) {
  const { _id, itemImage, itemName, itemPrice } = item;
  const [isInCart, setIsInCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  // const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);

  const cartHandler = (e) => {
    if (authCtx.isLoggedIn) {
      e.preventDefault();
      if (isInCart) {
        // cartCtx.removeItem(_id);
        setIsInCart(false);
      } else {
        cartCtx.addItem({
          id: _id,
          name: toProper(itemName),
          image: itemImage,
          qty: 1,
          price: itemPrice,
        });
        setIsInCart(true);
      }
    } else {
      toggleDrawer("right", true);
    }
  };

  return (
    <Grid xs={6} sm={4} md={3} lg={2}>
      <Card
        className='explore-card'
        raised
        sx={{
          borderRadius: "12px",
        }}>
        <CardActionArea onClick={cartHandler}>
          <CardContent sx={{ pb: 1 }}>
            <Box
              sx={{
                display: "flex",
              }}>
              <img
                src={itemImage}
                alt={itemName}
                className='explore-card-media'
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography
                align='left'
                variant='subtitle2'
                sx={{
                  fontWeight: "700",
                  mb: "12px",
                }}>
                {itemName}
              </Typography>
              <Typography
                align='left'
                variant='caption'
                sx={{
                  fontWeight: "700",
                }}>
                Price
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}>
                <CurrencyBitcoinIcon sx={{ ml: "-6px" }} />
                <Typography align='left' variant='subtitle1'>
                  {itemPrice}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          {authCtx.isLoggedIn &&
            (isInCart ? (
              <CardActions
                className='explore-card-actions'
                sx={{
                  bgcolor: "red",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Typography
                  align='center'
                  variant='subtitle2'
                  color='white'
                  sx={{
                    fontWeight: "700",
                  }}>
                  Remove From Cart
                </Typography>
              </CardActions>
            ) : (
              <CardActions
                className='explore-card-actions'
                sx={{
                  bgcolor: "primary.main",
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Typography
                  align='center'
                  variant='subtitle2'
                  color='white'
                  sx={{
                    fontWeight: "700",
                  }}>
                  Add to Cart
                </Typography>
              </CardActions>
            ))}
          {!authCtx.isLoggedIn && (
            <CardActions
              className='explore-card-actions'
              sx={{
                bgcolor: "primary.main",
                display: "flex",
                justifyContent: "center",
              }}>
              <Typography
                align='center'
                variant='subtitle2'
                color='white'
                sx={{
                  fontWeight: "700",
                }}>
                Add to Cart
              </Typography>
            </CardActions>
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
}
