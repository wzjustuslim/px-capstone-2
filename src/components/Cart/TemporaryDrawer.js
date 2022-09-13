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

  const totalAmount = `${cartCtx.totalAmount}`;
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
        console.log("Clicked outside of TempDrawer");
        break;
    }
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const list = (anchor) => (
    <Box sx={{ width: 450 }} role='presentation'>
      {authCtx.isLoggedIn && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant='subtitle2'
              sx={{ ml: "1rem", fontWeight: 700 }}>
              Item
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant='subtitle2'>
              Quantity
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
                amount={item.amount}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
              />
            ))}
          </List>
          <Box>
            {!hasItems && (
              <Typography variant='h3'>Cart has no items.</Typography>
            )}
            {hasItems && (
              <>
                <Divider />
                <Typography variant='body1' sx={{ fontWeight: 700 }}>
                  Total Price:{totalAmount}
                </Typography>
              </>
            )}
            <Box
              sx={{
                mt: "2rem",
                display: "flex",
                justifyContent: "space-around",
              }}>
              {hasItems && (
                <Button
                  onClick={toggleDrawer(anchor, false)}
                  variant='contained'
                  size='large'
                  sx={{
                    px: 2,
                    py: 2,
                    borderRadius: "2rem",
                    display: "flex",
                    padding: "1rem 2rem",
                  }}>
                  Order
                </Button>
              )}
              <Button
                onClick={toggleDrawer(anchor, false)}
                variant='contained'
                size='large'
                sx={{
                  px: 2,
                  py: 2,
                  borderRadius: "2rem",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1rem 2rem",
                }}>
                Close
              </Button>
            </Box>
          </Box>
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
