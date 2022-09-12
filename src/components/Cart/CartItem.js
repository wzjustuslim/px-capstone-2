import React from "react";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

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
    </>
  );
};

export default CartItem;
