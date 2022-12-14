import React, { useState, useContext } from "react";
import axios from "axios";

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
import { UserContext } from "../contexts/UserContext";

export default function AuthFormDialog({
  open,
  authType,
  setAuthType,
  setIsUser,
  setTokenState,
  handleLoginSucess,
  handleClose,
}) {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);
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
    // clear session store
    if (sessionStorage.getItem("authToken"))
      sessionStorage.removeItem("authToken");

    // post new user into db
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = {
      email: newEmail,
      username: newUsername,
      password: newPassword,
    };
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/register`;
      const { data } = await axios.post(url, body, config);
      const newUser = {
        email: newEmail,
        role: "user",
        token: data.token,
      };
      console.log(authCtx.isUseBackend);
      if (authCtx.isUseBackend && data.success) {
        console.log(data.token);
        const newUser = {
          username: newUsername,
          role: "user",
          token: data.token,
        };
        // using JWT token
        sessionStorage.setItem("authToken", JSON.stringify(newUser));
        console.log(
          "Successfully created account! Response from backend:",
          data.token
        );
      } else {
        sessionStorage.setItem("authToken", JSON.stringify(newUser));
      }
      setIsUser(true);
      handleLoginSucess();
      setTokenState(sessionStorage.getItem("authToken"));
      handleClose();
    } catch (e) {
      console.log(e);
      setError(e);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    // show log in successful screen
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsUser(true);
    // check sessionStorage if user is already saved as authenticated user
    if (sessionStorage.getItem("authToken") && authCtx.isLoggedIn) {
      setIsUser(true);
      handleLoginSucess();
      handleClose();
    } else {
      // post new user into db
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
        const data = await axios.post(
          url,
          {
            // email: enteredEmail,
            username: enteredUsername,
            password: enteredPassword,
          },
          config
        );
        console.log("Login response: ", data);
        setUserContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
        const loginUser = {
          // email: enteredEmail,
          username: enteredUsername,
          role: "user",
          token: data.token,
        };
        sessionStorage.setItem("authToken", JSON.stringify(loginUser));
        // sessionStorage.setItem("authToken", JSON.stringify(loginUser));
        console.log(`User ${enteredUsername} is logged in`);
        handleLoginSucess();
        setTokenState(sessionStorage.getItem("authToken"));
        handleClose();
        // }
      } catch (error) {
        // sessionStorage.removeItem("authToken");
        setError("Username password combination is wrong, please try again.");
      }
      // show log in successful screen
    }
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
                  By selecting Agree and continue, I agree to PokeMart???s Terms
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
              {/* <TextField
                name='email'
                label='Email Address'
                margin='normal'
                type='email'
                fullWidth
                variant='outlined'
                required
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
              /> */}
              <TextField
                name='username'
                label='Username'
                margin='normal'
                type='username'
                fullWidth
                variant='outlined'
                required
                value={enteredUsername}
                onChange={(e) => setEnteredUsername(e.target.value)}
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
