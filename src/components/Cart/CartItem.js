import React from "react";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({
  id,
  name,
  price,
  image,
  qty,
  amount,
  cartItemAddHandler,
  cartItemRemoveHandler,
}) => {
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
            flex: "3",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}>
          <ListItemText
            sx={{ justifyContent: "center" }}
            primary={"   x" + qty}
          />
          <ListItemButton
            sx={{
              justifyContent: "center",
              width: "1rem",
              bgcolor: "#ffebee",
              borderRadius:"2rem"
            }}>
            <RemoveIcon />
          </ListItemButton>
          <ListItemButton
            sx={{
              justifyContent: "center",
              width: "1rem",
              bgcolor: "#f1f8e9",
              borderRadius:"2rem"
            }}>
            <AddIcon />
          </ListItemButton>
        </Box>
        <ListItemText
          primary={price * qty}
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            mr: "1rem",
          }}
        />
      </ListItem>
    </>
  );
};

export default CartItem;
