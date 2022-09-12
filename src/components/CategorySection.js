import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CategoryCard from "../components/CategoryCard.js";
// import CategoryImg from "../static/images/pokeball-card.jpg";

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
              Browse by popular categories
            </Typography>
          </Box>
        </Grid>
        {categories.map((category) => (
          <Grid key={category.name} xs={12} sm={6} lg={4}>
            <CategoryCard
              categoryName={category.name}
              // categoryImg={category.categoryImg}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default CategorySection;
