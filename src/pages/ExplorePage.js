import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Banner from "../static/images/explore-banner1.jpg";
import Pokeball from "../static/images/pokeball-card.jpg";

const ExplorePage = () => {  

  const [items, setItems] = useState([]);

  useEffect(() => {

    const getAllItems = async () => {
      const res = await axios.get('https://pokemartdb-backend.herokuapp.com/api/items')

      console.log(res.data)
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
          </Container>
        </section>
        <section></section>
      </main>
    </>
  )
};
export default ExplorePage;