import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CategoryCard from "../components/CategoryCard.js";
import ItemCard from "./ItemCard.js";

const CategoryTagsPageItemSection = ({ items }) => {
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
            {/* <Typography
              variant='h5'
              sx={{
                fontWeight: 700,
              }}>
              Browse by category
            </Typography> */}
          </Box>
        </Grid>
        {items.map((item) => (
          <Grid key={item.id} xs={12} sm={6} lg={4}>
            <ItemCard
              id={item.id}
              itemCategory={item.itemCategory}
              itemName={item.itemName}
              itemDesc={item.itemDesc}
              itemPrice={item.itemPrice}
              itemImage={item.itemImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryTagsPageItemSection;
