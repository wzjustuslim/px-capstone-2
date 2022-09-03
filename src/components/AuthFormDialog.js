import React, { useState, useContext} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AuthContext from "../contexts/auth-context";

export default function AuthFormDialog({
  open,
  authType,
  setAuthType,
  setIsUser,
  handleClose,
  navigate,
}) {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [loggedInUser, setLoggedInUser] = useState();
  const authCtx = useContext(AuthContext);

  const handleTabs = (event, newValue) => {
    setAuthType(newValue);
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsUser(true);
    // password validation
    if (newPassword !== newConfirmPassword) {
      setNewPassword("");
      setNewConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match!");
    }
    // post new user into db
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://pokemartdb-backend.herokuapp.com/api/register",
        {
          email: newEmail,
          username: newUsername,
          password: newPassword,
        },
        config
      );

      sessionStorage.setItem("userInfo", JSON.stringify(data));
      navigate.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    // show log in successful screen
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsUser(true);
    // post new user into db
    if (sessionStorage.getItem("userInfo"))
      navigate.push("/login");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://pokemartdb-backend.herokuapp.com/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        },
        config
      );
    } catch (error) {
      sessionStorage.removeItem("userInfo");
      setError("Username password combination is wrong, please try again.")
    }
    // show log in successful screen
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Tabs value={authType} onChange={handleTabs}>
          <Tab value='login' label='Log in' />
          <Tab value='signup' label='Sign up' />
        </Tabs>
        {authType === "signup" ? (
          <Box component='form' onSubmit={handleSignUp}>
            {/* <DialogTitle>Sign up</DialogTitle> */}
            {error && (
              <Typography variant='body2' sx={{ color: "red" }}>
                {error}
              </Typography>
            )}
            <DialogContent>
              <TextField
                name='username'
                helperText='Choose a cool name for yourself'
                label='Username'
                margin='dense'
                type='text'
                fullWidth
                variant='outlined'
                required
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <TextField
                name='email'
                helperText="We'll email you communications and receipts."
                label='Email Address'
                margin='dense'
                type='email'
                fullWidth
                variant='outlined'
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <TextField
                name='password'
                helperText='At least 8 characters.'
                label='Password'
                margin='dense'
                type='password'
                fullWidth
                variant='outlined'
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                name='cfm-password'
                helperText='Repeat your password.'
                label='Confirm Password'
                margin='dense'
                type='password'
                fullWidth
                variant='outlined'
                required
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
              />
              <Box
                sx={{
                  p: 2,
                }}>
                <Typography variant='caption' sx={{ color: "text.disabled" }}>
                  By selecting Agree and continue, I agree to PokeMart’s Terms
                  of Service, Payments Terms of Service, and Nondiscrimination
                  Policy and acknowledge the Privacy Policy.
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                variant='contained'
                size='large'
                type='submit'
                onClick={handleSignUp}>
                Agree and Register
              </Button>
            </DialogActions>
          </Box>
        ) : (
          <Box>
            {/* <DialogTitle>Log in</DialogTitle> */}
            <DialogContent>
              <TextField
                name='email'
                label='Email Address'
                margin='normal'
                type='email'
                fullWidth
                variant='outlined'
                required
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
              />
              <TextField
                name='password'
                label='Password'
                margin='normal'
                type='password'
                fullWidth
                variant='outlined'
                required
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant='contained' size='large' onClick={handleLogin}>
                Log in
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </div>
  );
}
