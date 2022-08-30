import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Img from "../static/images/pokeball-card.jpg";
import "./ItemCard.css";
export default function ItemCard({
  id,
  itemName,
  itemDesc,
  itemPrice,
  itemImg,
  itemCategory,
}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          className='item-img'
          component='img'
          height='100'
          src={itemImg}
        />
        <CardContent>
          <Typography variant='h4'>{itemName}</Typography>
          <Typography variant='caption'>{itemDesc}</Typography>
          <Typography variant='h5'>
            <CurrencyBitcoinIcon />
            {itemPrice}
          </Typography>
          <Typography variant='h6'>{itemCategory}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
