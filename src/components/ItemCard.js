import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Img from "../static/images/pokeball-card.jpg";
import "./ItemCard.css";

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
      <CardActionArea>
        <CardMedia
          className='item-img'
          component='img'
          height='160'
          image={itemImage}
          alt={itemName}
        />
        <CardContent>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 700,
            }}>
            {itemName}
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
          <Button
            component={RouterLink}
            to={`#`}
            variant='contained'
            size='large'
            sx={{
              px: 6,
              py: 2,
              borderRadius: 3,
            }}>Buy</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
