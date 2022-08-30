import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ItemCard from "../components/ItemCard";
import CategoryTagsPageItemSection from "../components/CategoryTagsPageItemSection";

import '../components/spinner.css';

const splashImageUrl = "/static/images/hero-image.jpg";

export default function CategoryTagsPage() {
  const params = useParams();
  const category = params.category;

  const [loading, setLoading] = useState(true);
  const [allPokeItems, setAllPokeItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    const getAllItemsFromDB = async () => {
      setLoading(true);
      try {
        const url = "https://pokemartdb-backend.herokuapp.com/api/items";
        const res = await axios.get(url);
        // const res = await axios.get('https://pokeapi.co/api/v2/item-category/loot')
        const transformedItems = res.data.map((pokeItems) => {
          return {
            id: pokeItems._id,
            itemCategory: pokeItems.itemTags[0],
            itemName: pokeItems.itemName,
            itemDesc: pokeItems.itemDesc,
            itemPrice: pokeItems.itemPrice,
            itemImage: pokeItems.itemImage,
          };
        });
        setAllPokeItems(transformedItems);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
      //   console.log(res.data);
    };
    getAllItemsFromDB();
  }, []);

  //filter to selected category
  useEffect(() => {
    loading
      ? console.log()
      : setCategoryItems(
          allPokeItems.filter((items) => items.itemCategory === category)
        );
  }, [loading, allPokeItems, category]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box
          component='div'
          sx={{
            bgcolor: "#cfe8fc",
            height: "10vh",
          }}>
          <Box
            component='div'
            sx={{
              bgcolor: "#cfe2fc",
              height: "50vh",
              display: "flex",
              alignItems: "flex-end",
            }}></Box>
          <Box
            component='div'
            sx={{
              height: "10vh",
            }}>
            <Avatar
              alt={category}
              src={splashImageUrl}
              sx={{ width: 56, height: 56 }}
            />
          </Box>

          <Typography
            component='h1'
            variant='h3'
            align='left'
            gutterBottom
            sx={{
              fontWeight: 900,
            }}>
            <br />
            {category}
          </Typography>
        </Box>
      </Container>
      {!loading && <CategoryTagsPageItemSection items={categoryItems} />}
      {loading && <div className="loading-spinner"></div>}
    </>
  );
}
