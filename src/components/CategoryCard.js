import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

export default function CategoryCard({ categoryName, categoryImg }) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          className='category-img'
          component='img'
          height='140'
          src={categoryImg}
        />
        <CardContent>
          <Typography
            variant='h6'
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
