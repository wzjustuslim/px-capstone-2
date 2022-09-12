import React, { useContext, useRef, useState } from "react";
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
export default function ExploreCard({ item }) {
  const { _id, itemImage, itemName, itemPrice } = item;
  // const qtyItemRef = useRef();
  const cartCtx = useContext(CartContext);
  // const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);

  const addItemToCartHandler = (qty) => {
    cartCtx.addItem({
      id: _id,
      name: toProper(itemName),
      image: itemImage,
      qty: qty,
      price: itemPrice,
    });
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    // console.log(qtyItemRef);
    // console.log(qtyItemRef.current.value);
    // const enteredQty = qtyItemRef.current.value;
    // const enteredQtyNum = +enteredQty;

    // if (enteredQty.trim().length === 0) {
    //   setEnteredAmountIsValid(false);
    //   return;
    // }
    // setEnteredAmountIsValid(true);
    addItemToCartHandler(1);
  };

  return (
    <Grid xs={6} sm={4} md={3} lg={2}>
      <Card
        className='explore-card'
        raised
        sx={{
          borderRadius: "12px",
        }}>
        <CardActionArea onClick={addToCartHandler}>
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
          {false ? (
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
          ) : (
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
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
}
