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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

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
  cartState,
  setCartState,
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
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {authCtx.isLoggedIn && (
        <Box>
          <Box>
            <List>
              {cartState.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    secondaryAction={
                      <>
                        <Button
                          onClick={() => {
                            item.itemQty++
                            setCartState([...cartState])
                          }}
                          sx={{ mr: 3 }}
                          size="small"
                          variant="outlined"
                        >
                          +
                        </Button>
                          {item.itemQty}
                        <Button
                          onClick={() => {
                            item.itemQty--
                            if (!item.itemQty) {
                              cartState.splice(index, 1)
                            }
                            setCartState([...cartState])
                          }}
                          sx={{ ml: 3 }}
                          size="small"
                          variant="outlined"
                        >
                          -
                        </Button>
                      </>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar alt="" src={item.itemImage} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.itemName}
                      secondary={<><Box sx={{ display: 'flex' }}><CurrencyBitcoinIcon /><Typography>{item.itemPrice * item.itemQty}</Typography></Box></>}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
          <Box sx={{ p: 1 }}>
            <Button sx={{ mr: 1 }} variant="contained">Buy</Button>
            <Button onClick={() => setCartState([])}>Clear</Button>
          </Box>
        </Box>
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
