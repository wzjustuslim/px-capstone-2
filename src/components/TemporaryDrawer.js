import * as React from "react";
import { useState, useContext } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import CartContext from "../contexts/cart-context";
import { Avatar } from "@mui/material";

const menuList = [
  {
    id: "324erw",
    name: "pokeball",
    qty: 5,
  },
  {
    id: "14er2w",
    name: "Super Heal",
    qty: 6,
  },
];
export default function TemporaryDrawer({ drawerState, toggleDrawer }) {
  const cartCtx = useContext(CartContext);

  const list = (anchor) => (
    <Box
      sx={{ width: 450 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Box sx={{ display: "flex", justifyContent:'space-between' }}>
        <Typography
          variant='subtitle2'
          sx={{ml:'1rem', fontWeight: 700,}}>
          Qty
        </Typography>
        <Typography
          sx={{ fontWeight: 700}}
          variant='subtitle2' >
          Item
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{mr:'1rem', fontWeight: 700}}>
          Amount
        </Typography>
      </Box>
      <Divider />
      <List>
        {cartCtx.items.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <Avatar alt={item.name} src={item.image} variant="square" />
              <ListItemText primary={"x" + item.qty + "\t" + item.name} />
              <ListItemText
                primary={item.price}
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button
        // component={}
        to={`#`}
        variant='contained'
        size='large'
        sx={{
          px: 2,
          py: 2,
          borderRadius: 3,
          display: "flex",
          margin: "0rem 3rem",
        }}>
        Order
      </Button>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor='right'
        open={drawerState["right"]}
        onClose={toggleDrawer("right", false)}>
        {list("right")}
      </Drawer>
    </>
  );
}
