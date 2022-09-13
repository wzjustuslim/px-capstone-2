import React from "react";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const CartItem = ({
  id,
  name,
  price,
  image,
  totalQty,
  onAddOne,
  onRemoveOne,
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
            flex: "2",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}>
          <ListItemText
            sx={{ justifyContent: "center" }}
            primary={"   x" + totalQty}
          />
          <ListItemButton
            onClick={onRemoveOne}
            sx={{
              justifyContent: "center",
              width: "1rem",
              bgcolor: "#ffebee",
              borderRadius: "2rem",
            }}>
            <RemoveIcon />
          </ListItemButton>
          <ListItemButton
            onClick={onAddOne}
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
            flex:"1",
            flexDirection: "row",
            margin: "0 1rem",
          }}>
          <CurrencyBitcoinIcon />
          <ListItemText primary={price} />
        </Box>
      </ListItem>
      <Divider height={5} sx={{ margin:"0.5rem",bgcolor:"lightblue"}} />
    </>
  );
};

export default CartItem;
