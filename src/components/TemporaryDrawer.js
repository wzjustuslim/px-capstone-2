import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";

const menuList = [
  {
    item: "324erw",
    name: "pokeball",
    qty: 5,
  },
  {
    item: "14er2w",
    name: "Super Heal",
    qty: 6,
  },
];
export default function TemporaryDrawer({ drawerState, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {menuList.map((item, index) => (
          <ListItem key={item.item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <CatchingPokemonIcon />
                ) : index === 1 ? (
                  <CategoryIcon />
                ) : (
                  <></>
                )}
              </ListItemIcon>
              <ListItemText primary={item.name} />
              <ListItemText
                primary={"x" + item.qty}
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse"
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
