import React, { useContext, useRef, useState, useMemo } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import toProper from "../helper/toProper";
import CartContext from "../contexts/cart-context";
import AuthContext from "../contexts/auth-context";
export default function ExploreCard({ _id, itemImage, itemName, itemPrice }) {
  const qtyItemRef = useRef();
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const [enteredAmountIsValid, setEnteredAmountIsValid] = useState(true);

  //Tip: amount is qty
  const addItemToCartHandler = (amount) => {
    console.log("Adding " + itemName);
    cartCtx.addItem({
      id: _id,
      name: toProper(itemName),
      image: itemImage,
      amount: amount,
      price: itemPrice,
    });
  };
  const removeItemFromCartHandler = (_id) => {
    // cartCtx.removeItem(_id);
  };

  const CartHandler = (e) => {
    if (authCtx.isLoggedIn) {
      e.preventDefault();
      const enteredQty = qtyItemRef.current.value;
      const enteredQtyNum = +enteredQty;

      if (enteredQty.trim().length === 0 || enteredQtyNum < 1) {
        setEnteredAmountIsValid(false);
        return;
      }
      setEnteredAmountIsValid(true);
      addItemToCartHandler(enteredQtyNum);
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
              justifyContent: "space-between",
            }}>
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
            <TextField
              inputRef={qtyItemRef}
              id='outlined-number'
              label='Qty'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={1}
              sx={{ width: "5rem" }}
            />
          </Box>
          <Typography sx={{ fontSize: "9" }}>
            {!enteredAmountIsValid && (
              <Typography variant='overline' display='block'>
                Please enter a valid number.
              </Typography>
            )}
          </Typography>
        </CardContent>
        {/* <CardActions
            className='explore-card-actions'
            onClick={CartHandler}
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
          </CardActions> */}
        <CardActions
          className='explore-card-actions'
          onClick={CartHandler}
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
      </Card>
    </Grid>
  );
}
