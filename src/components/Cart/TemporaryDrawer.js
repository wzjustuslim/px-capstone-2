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

import CartContext from "../../contexts/cart-context";
import CartItem from "../Cart/CartItem";
import AuthContext from "../../contexts/auth-context";

// const menuList = [
//   {
//     id: "324erw",
//     name: "pokeball",
//     qty: 5,
//   },
//   {
//     id: "14er2w",
//     name: "Super Heal",
//     qty: 6,
//   },
// ];
export default function TemporaryDrawer({
  drawerState,
  toggleDrawer,
  handleClickOpen,
  setAuthType,
}) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(0)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleCloseUserMenu = (setting) => {
    // console.log("im running", setting);
    switch (setting) {
      case "Log in":
        setAuthType("login");
        handleClickOpen();
        break;
      case "Sign up":
        setAuthType("signup");
        handleClickOpen();
        break;
      // if user click outside of drop-down menu, instead of clicking on login/signup
      default:
        console.log();
        break;
    }
  };

  const cartItemAddHandler = (item) => {

  }
  const cartItemRemoveHandler = (id) => {

  }

  const list = (anchor) => (
    <Box
      sx={{ width: 450 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {authCtx.isLoggedIn && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant='subtitle2'
              sx={{ ml: "1rem", fontWeight: 700 }}>
              Qty
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant='subtitle2'>
              Item
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ mr: "1rem", fontWeight: 700 }}>
              Amount
            </Typography>
          </Box>
          <Divider />
          <List>
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
                amount={totalAmount}
                onAdd={cartItemAddHandler.bind(null,item.id)}
                onRemove={cartItemRemoveHandler(null,item)}
              />
            ))}
          </List>
          <Divider />
          {hasItems && (
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
          )}
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
                alignItems: "flex-end",
                margin: "0rem 3rem",
              }}>
              Close
            </Button>
        </>
      )}
      {!authCtx.isLoggedIn && (
        <>
          <Typography variant='h2' sx={{ margin: "3rem" }}>
            Hi Guest User
          </Typography>
          <Typography variant='h4' sx={{ margin: "3rem" }}>
            Please Sign up or Login to start buying items from store
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "3rem",
            }}>
            <Button
              variant='outlined'
              size='large'
              sx={{ marginInline: "1rem" }}
              onClick={() => handleCloseUserMenu("Sign up")}>
              Sign Up
            </Button>
            <Button
              variant='outlined'
              size='large'
              onClick={() => handleCloseUserMenu("Log in")}>
              Log in
            </Button>
          </Box>
        </>
      )}
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