import React from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const CartItem = ({
  id,
  name,
  price,
  image,
  amount,
  cartItemAddHandler,
  cartItemRemoveHandler,
}) => {
  /*<>
      <ListItem key={id} disablePadding>
        <ListItemButton>
          <Avatar alt={name} src={image} variant='square' />
          <ListItemText primary={"x" + qty + "\t" + name} />
          <ListItemText
            primary={price * qty}
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          />
        </ListItemButton>
      </ListItem>
      <Button variant="contained">-</Button>
      <Button variant="contained">+</Button>
          </>*/
  return (
    <>
      <ListItem
        key={id}
        disablePadding
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}>
        <Avatar alt={name} src={image} variant='square' sx={{ ml: "1rem" }} />
        <ListItemText primary={name} />
        <Box
          sx={{
            display: "flex",
            flex: "2",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}>
          <ListItemText
            sx={{ justifyContent: "center" }}
            primary={"   x" + amount}
          />
          {console.log("qty: " + amount)}
          <ListItemButton
            onClick={cartItemRemoveHandler}
            sx={{
              justifyContent: "center",
              width: "1rem",
              bgcolor: "#ffebee",
              borderRadius: "2rem",
            }}>
            <RemoveIcon />
          </ListItemButton>
          <ListItemButton
            onClick={cartItemAddHandler}
            sx={{
              justifyContent: "center",
              width: "1rem",
              bgcolor: "#f1f8e9",
              borderRadius: "2rem",
            }}>
            <AddIcon />
          </ListItemButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "row",
            margin: "0 1rem",
          }}>
          <CurrencyBitcoinIcon />
          {console.log("price: " + price)}
          <ListItemText primary={price} />
        </Box>
      </ListItem>
      <Divider height={5} sx={{ margin: "0.5rem", bgcolor: "lightblue" }} />
    </>
  );
};

export default CartItem;
