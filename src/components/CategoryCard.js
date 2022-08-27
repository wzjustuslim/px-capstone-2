import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CategoryImg from '../static/images/pokeball-card.jpg';

export default function CategoryCard() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          className="category-img"
          component="img"
          height="140"
          src={CategoryImg}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700
            }}
          >
            Standard Balls
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
