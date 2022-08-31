import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "@mui/material/Link";

const pages = ["Stats"];
const guestSettings = ["Log in", "Sign up"];
const userSettings = ["Profile", "My Items", "Wallet", "Log out"];

const ResponsiveAppBar = ({
  isUser,
  toggleDrawer,
  handleClickOpen,
  setAuthType,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userWalletBalance, setUserWalletBalance] = React.useState(1000);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    console.log("im running", setting);
    switch (setting) {
      case "Log in":
        setAuthType("login");
        handleClickOpen();
        break;
      case "Sign up":
        setAuthType("signup");
        handleClickOpen();
        break;
      // default:
      //   setAuthType('signup')
      //   handleClickOpen()
      //   break;
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link color='inherit' component={RouterLink} to='/'>
            <CatchingPokemonIcon
              fontSize='large'
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
          </Link>
          <Link underline='none' color='inherit' component={RouterLink} to='/'>
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                letterSpacing: "0.1rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              POKEMART
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}>
            <Link color='inherit' component={RouterLink} to='/'>
              <CatchingPokemonIcon
                fontSize='large'
                sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
              />
            </Link>
            <Link
              underline='none'
              color='inherit'
              component={RouterLink}
              to='/'>
              <Typography
                variant='h6'
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  alignSelf: "center",
                  flexGrow: 1,
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                POKEMART
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexDirection: "row-reverse",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: 600,
                  mr: 2,
                  my: 2,
                  color: "white",
                  display: "block",
                }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Account'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 2 }}>
                <AccountCircleOutlinedIcon
                  fontSize='large'
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {isUser
                ? userSettings.map((setting) => (
                    <Link
                      key={setting}
                      color='text.primary'
                      underline='none'
                      component={RouterLink}
                      to={`/${setting.toLowerCase().replaceAll(" ", "-")}`}>
                      <MenuItem
                        onClick={() => {
                          handleCloseUserMenu(setting);
                        }}>
                        <Typography textAlign='center'>{setting}</Typography>
                      </MenuItem>
                    </Link>
                  ))
                : guestSettings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu(setting);
                      }}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
          {isUser ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Wallet'>
                <IconButton sx={{ p: 2 }}>
                <AccountBalanceWalletIcon fontSize='large'
                    sx={{ color: "white" }}/>
                  <CurrencyBitcoinIcon
                    fontSize='small'
                    sx={{ color: "white" }}
                  />
                  <Typography textAlign='center' sx={{ color: "white" }}>{userWalletBalance}</Typography>
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            console.log("false")
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Cart'>
              <IconButton onClick={toggleDrawer("right", true)} sx={{ p: 0 }}>
                <ShoppingCartOutlinedIcon
                  fontSize='large'
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
