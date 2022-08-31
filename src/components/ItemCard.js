import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import toProper from "../helper/toProper";
import Img from "../static/images/pokeball-card.jpg";
import "./ItemCard.css";

// Button will use router path to add to cart sidebar

export default function ItemCard({
  id,
  itemName,
  itemDesc,
  itemPrice,
  itemImage,
  itemCategory,
}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea disableRipple>
        <CardMedia
          className='item-img'
          component='img'
          height='160'
          image={itemImage}
          alt={toProper(itemName)}
          sx={{ scale: "1" }}
        />
        <CardContent>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
            }}>
            {toProper(itemName)}
          </Typography>
          <Typography variant='caption'>{itemDesc}</Typography>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
            }}>
            <CurrencyBitcoinIcon />
            {itemPrice}
          </Typography>
          <Typography variant='h6'>{itemCategory}</Typography>
          <Box component='span'>
            <TextField
              id='outlined-number'
              label='Qty'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: "7rem" }}
            />
            <Button
              component={RouterLink}
              to={`#`}
              variant='contained'
              size='large'
              sx={{
                px: 2,
                py: 2,
                borderRadius: 3,
              }}>
              Buy
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
