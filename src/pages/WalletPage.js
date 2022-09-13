import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import UserProfileContext from "../contexts/userprofile-context";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const WalletPage = ({ walletAmount, setWalletAmount }) => {
  const userCtx = React.useContext(UserProfileContext);
  const walletTopUpRef = useRef();
  //   useEffect(() => {
  //     console.log("first");
  //   }, []);

  const topUpHandler = (e) => {
    e.preventDefault();
    const enteredAmount = walletTopUpRef.current.value;
    const enteredAmountNum = +enteredAmount

    setWalletAmount(enteredAmountNum + walletAmount);
  };

  return (
    <>
      <Box sx={{ mt: "5rem" }}>
        <Typography variant='h5'>
          Hi, {JSON.parse(sessionStorage.getItem("authToken")).username}
        </Typography>
        <Typography variant='h5'>
          You have: {<CurrencyBitcoinIcon />}
          {walletAmount}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography variant='body1'>Top up:</Typography>
          <TextField
            inputRef={walletTopUpRef}
            id='outlined-number'
            label='$'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={1000}
            sx={{ width: "5rem" }}
          />
          <Button
          variant="contained"
            sx={{
              fontWeight: 600,
              mr: 2,
              my: 2,
              color: "white",
              display: "block",
            }}
            onClick={topUpHandler}>
            Top Up
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WalletPage;
