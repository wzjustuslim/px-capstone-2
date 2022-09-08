import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ExploreCard from "../components/ExploreCard.js";

import Banner from "../static/images/explore-banner1.jpg";
import Pokeball from "../static/images/pokeball-card.jpg";

const ExplorePage = () => {  

  const [items, setItems] = useState([]);

  useEffect(() => {

    const getAllItems = async () => {
      const res = await axios.get('https://pokemartdb-backend.herokuapp.com/api/items');

      const { data: { data: itemsArray } } = res;
      
      setItems(itemsArray);

      await console.log(items)
      
    }

    getAllItems()

  },[]);
  

  return (
    <>
      <main>
        <section>
          <Box
            className='banner-container'
            sx={{
              height: '37.5vh',
            }}
          >
            <img className='explore-banner' src={Banner} alt='explore-banner'></img>
          </Box>
          <Container maxWidth='xl'>
            <Box
              sx={{
                height: '3rem',
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Box
                className='brand-container'
                sx={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '1rem',
                  backgroundColor: 'primary.dark',
                }}
              >
                <img className='pokeball-brand' src={Pokeball} alt='Pokeball'></img>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box>
                <Typography
                  variant='h4'
                  align='left'
                  sx={{
                    fontWeight:'700',
                  }}
                >
                  Pokemon Items
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='subtitle1'
                  align='left'
                  sx={{
                    fontWeight:'700',
                  }}
                >
                  By Pokemart
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: '50%',
                }}
              >
                <Typography
                  variant='subtitle2'
                  align='left'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: '3rem',
              }}
            ></Box>
          </Container>
        </section>
        <section>
          <Container maxWidth='xl'>
            <Grid container spacing={3}>
              {
                items.map((item, index) => (
                  <ExploreCard key={index} item={item} />
                ))
              }
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
};
export default ExplorePage;