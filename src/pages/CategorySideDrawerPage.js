import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CategoryDrawer from "../components/CategoryDrawer";
import ItemCard from "../components/ItemCard";

const CategoryPage = () => {
  const params = useParams();
  // const [pokemartItems, setPokeMartItems] = useState([]);
  
  // useEffect(() => {
  //   const asyncStuff = async () => {
  //     const res = await axios.get(
  //       "https://pokemartdb-backend.herokuapp.com/api/items"
  //     );
  //     // const res = await axios.get('https://pokeapi.co/api/v2/item-category/loot')
  //     setPokeMartItems(res.data);
  //     console.log(res.data);
  //   };

  //   asyncStuff();
  // }, []);
  return (
    <>
      <Container maxWidth='xl' sx={{ pt: "68.5px" }}>
        <Grid container spacing={0}>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                px: 8,
              }}>
              <Typography
                component='h1'
                variant='h3'
                align='left'
                gutterBottom
                sx={{
                  fontWeight: 900,
                }}>
                {params.category}
              </Typography>
              <Typography
                variant='h5'
                align='left'
                sx={{
                  color: "text.secondary",
                  mb: 6,
                }}>
                Select your items from below
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            {/* Image size is not response at xs */}
            <Box sx={{ py: 8, pl: 16 }}>
              <Paper className='hero-img' sx={{ borderRadius: 4 }}></Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <CategoryDrawer />
    </>
  );
};

export default CategoryPage;
