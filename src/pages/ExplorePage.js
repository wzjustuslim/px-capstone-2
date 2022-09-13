import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
// import ListItem from '@mui/material/ListItem';
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';


import ExploreCard from "../components/ExploreCard.js";
import '../components/loading.css'
import Banner from "../static/images/explore-banner1.jpg";
import Pokeball from "../static/images/pokeball-card.jpg";

const ExplorePage = ({ toggleDrawer }) => {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [displayCategories, setDisplayCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllItems = async () => {
      setLoading(true);
      const url = `${process.env.REACT_APP_BACKEND_URL}/api/items`;
      const res = await axios.get(url);
      const {
        data: { data: allItems },
      } = res;

      const categoriesSet = new Set();
      allItems.forEach((item) => categoriesSet.add(item.itemTags[0]));
      const categoriesArr = Array.from(categoriesSet);
      categoriesArr.push("show-all");

      setItems(allItems);
      setDisplayItems(allItems);
      setDisplayCategories(categoriesArr);
      setLoading(false);
    };

    getAllItems();
  }, []);

  const handleChip = (category) => {
    if (category === "show-all") {
      setDisplayItems(items);
    } else {
      const filteredItems = items.filter(
        (item) => item.itemTags[0] === category
      );
      setDisplayItems(filteredItems);
    }
  };

  return (
    <>
      <main>
        <section>
          <Box
            className='banner-container'
            sx={{
              height: "37.5vh",
            }}>
            <img
              className='explore-banner'
              src={Banner}
              alt='explore-banner'></img>
          </Box>
          <Container maxWidth='xl'>
            <Box
              sx={{
                height: "3rem",
                display: "flex",
                justifyContent: "end",
              }}>
              <Box
                className='brand-container'
                sx={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "1rem",
                  backgroundColor: "primary.dark",
                }}>
                <img
                  className='pokeball-brand'
                  src={Pokeball}
                  alt='Pokeball'></img>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Box>
                <Typography
                  variant='h4'
                  align='left'
                  sx={{
                    fontWeight: "700",
                  }}>
                  Pokemon Items
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='subtitle1'
                  align='left'
                  sx={{
                    fontWeight: "700",
                  }}>
                  By Pokemart
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: "50%",
                }}>
                <Typography variant='subtitle2' align='left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "3rem",
              }}></Box>
          </Container>
        </section>
        <section>
          <Container maxWidth='xl'>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                pb: "3rem",
              }}>
              {displayCategories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => {
                    handleChip(category);
                  }}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          </Container>
        </section>
        <section>
          <Container maxWidth='xl'>
            <Grid container spacing={3} sx={{ pb: "3rem" }}>
              {loading ? (
                <div className="container">
                  <div className="pokeball" />
                </div>
              ) : (
                displayItems.map((item, index) => (
                  <ExploreCard
                    key={index}
                    item={item}
                    toggleDrawer={toggleDrawer}
                  />
                ))
              )}
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
};
export default ExplorePage;
