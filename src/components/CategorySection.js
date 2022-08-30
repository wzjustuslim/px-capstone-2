import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CategoryCard from "../components/CategoryCard.js";
import CategoryImg from "../static/images/pokeball-card.jpg";

const CategorySection = ({ categories }) => {
  return (
    <Container maxWidth='lg' sx={{ pb: 8 }}>
      <Grid container spacing={4}>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 6,
            }}>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 700,
              }}>
              Browse by category
            </Typography>
          </Box>
        </Grid>
        {categories.map((category) => (
          <Grid key={category} xs={12} sm={6} lg={4}>
            <CategoryCard
              categoryName={category.name}
              categoryImg={CategoryImg}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default CategorySection;
