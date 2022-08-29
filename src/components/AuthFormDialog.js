import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AuthFormDialog({ open, authType, setAuthType, handleClose }) {

  const handleTabs = (event, newValue) => {
    setAuthType(newValue);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Tabs
          value={authType}
          onChange={handleTabs}
        >
          <Tab value="login" label="Log in" />
          <Tab value="signup" label="Sign up" />
        </Tabs>
        {authType === "signup" 
          ? <Box component="form">
              {/* <DialogTitle>Sign up</DialogTitle> */}
              <DialogContent>
                <TextField
                  name="name"
                  helperText="Make sure it matches the name on your government ID."
                  label="Full Name"
                  margin="dense"
                  type="text"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  name="email"
                  helperText="We'll email you communications and receipts."
                  label="Email Address"
                  margin="dense"
                  type="email"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  name="password"
                  helperText="At least 8 characters."
                  label="Password"
                  margin="dense"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  name="cfm-password"
                  helperText="Repeat your password."
                  label="Confirm Password"
                  margin="dense"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                />
                <Box sx={{
                  p: 2
                }}>

                  <Typography
                    variant="caption"
                    sx={{ color: "text.disabled" }}
                  >
                    By selecting Agree and continue, I agree to PokeMart’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.
                  </Typography>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClose}
                >
                  Agree and Continue
                </Button>
              </DialogActions>
            </Box>
          : <Box>
              {/* <DialogTitle>Log in</DialogTitle> */}
              <DialogContent>
                <TextField
                  name="email"
                  label="Email Address"
                  margin="normal"
                  type="email"
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  name="password"
                  label="Password"
                  margin="normal"
                  type="password"
                  fullWidth
                  variant="outlined"
                  required
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClose}
                >
                  Log in
                </Button>
              </DialogActions>
            </Box>
        }
      </Dialog>
    </div>
  );
}
