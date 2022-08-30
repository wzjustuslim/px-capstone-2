import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Img from '../static/images/pokeball-card.jpg';

export default function ItemCard({itemName, itemDesc, itemPrice, itemImg, itemCategory}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          className="item-img"
          component="img"
          height="140"
          src={itemImg}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700
            }}
          >
            {itemName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
