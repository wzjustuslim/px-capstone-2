import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Img from "../static/images/pokeball-card.jpg";

export default function CategoryCard({ categoryName, categoryImg }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          className='category-img'
          component='img'
          height='160'
          src={Img}
        />
        <CardContent>
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontWeight: 700,
            }}>
            {categoryName}
          </Typography>
          <Button
            component={RouterLink}
            to={`/categories/${categoryName}`}
            variant='contained'
            size='large'
            sx={{
              px: 6,
              py: 2,
              borderRadius: 3,
            }}>View</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
