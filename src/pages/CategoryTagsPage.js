import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import CategoryTagsPageItemSection from "../components/CategoryTagsPageItemSection";
import Img from "../static/images/pokeball-card.jpg";

import "../components/loading.css";
import toProper from "../helper/toProper";

const splashImageUrl = `../static/images/hero-image.jpg`;
const mockData = [
  {
    itemTags: ["special-balls"],
    _id: "123123123",
    itemName: "Luxury Ball",
    itemDemo: "A cozy ball",
    itemPrice: 3000,
    itemImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png",
  },
  {
    itemTags: ["ice-heal"],
    _id: "123123123",
    itemName: "Ice Heal",
    itemDemo: "Defrosts a frozen pokemon",
    itemPrice: 200,
    itemImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png",
  },
  {
    itemTags: ["healing"],
    _id: "12312323s123",
    itemName: "Super Potion",
    itemDemo: "Restore by 40 hp",
    itemPrice: 300,
    itemImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
  },

  {
    itemTags: ["healing"],
    _id: "123a23s123",
    itemName: "Potion",
    itemDemo: "Restore by 20 hp",
    itemPrice: 200,
    itemImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
  },

  {
    itemTags: ["healing"],
    _id: "12d12223s123",
    itemName: "Ultra Potion",
    itemDemo: "Restore by 60 hp",
    itemPrice: 400,
    itemImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png",
  },
];

export default function CategoryTagsPage() {
  const params = useParams();
  const category = params.category;

  const [loading, setLoading] = useState(true);
  const [allPokeItems, setAllPokeItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  const usingBackend = true;

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
    },
  };
  useEffect(() => {
    const getAllItemsFromDB = async () => {
      setLoading(true);
      if (usingBackend) {
        try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/api/items`;
      // const url = "https://pokemartdb-backend.herokuapp.com/api/items";
          const res = await axios.get(url, config);
          if (res.data.success) {
            const transformedItems = res.data.data.map((pokeItems) => {
              return {
                id: pokeItems._id,
                itemCategory: pokeItems.itemTags[0],
                itemName: pokeItems.itemName,
                itemDesc: pokeItems.itemDemo,
                itemPrice: pokeItems.itemPrice,
                itemImage: pokeItems.itemImage,
              };
            });
            setAllPokeItems(transformedItems);
          }
        } catch (error) {
          console.error(error.message);
        }
      } else {
        // comment this after check is done
        const transformedItems = mockData.map((pokeItems) => {
          return {
            id: pokeItems._id,
            itemCategory: pokeItems.itemTags[0],
            itemName: pokeItems.itemName,
            itemDesc: pokeItems.itemDemo,
            itemPrice: pokeItems.itemPrice,
            itemImage: pokeItems.itemImage,
          };
        });
        console.log(transformedItems);
        setAllPokeItems(transformedItems);
      }
      setLoading(false);

      //   console.log(res.data);
    };
    getAllItemsFromDB();
  }, []);

  //filter to selected category
  useEffect(() => {
    loading
      ? console.log("Loading items from DB")
      : setCategoryItems(
          allPokeItems.filter((items) => items.itemCategory === category)
        );
  }, [loading, allPokeItems, category]);

  return (
    <>
      <main>
        <section>
          <Box
            component='div'
            sx={{
              bgcolor: "#cfe2fc",
              height: "10rem",
              display: "flex",
              alignItems: "flex-end",
            }}></Box>
          <Box
            component='div'
            sx={{
              px: 2,
              height: "0rem",
            }}>
            <Avatar
              alt={toProper(category)}
              src={Img}
              sx={{ width: "10rem", height: "10rem" }}
            />
          </Box>
          <Box
            component='div'
            sx={{
              bgcolor: "#cfe2fc",
              height: "15rem",
              display: "flex",
              alignItems: "flex-end",
            }}>
            <Typography
              component='h1'
              variant='h3'
              align='left'
              gutterBottom
              sx={{
                px: 2,
                fontWeight: 900,
              }}>
              <br />
              {toProper(category)}
            </Typography>
          </Box>

          <Box
            component='div'
            sx={{
              height: "100%",
            }}></Box>
        </section>
        <section>
          {loading && (
            <div className='container'>
              <div className='pokeball'></div>
            </div>
          )}
          {!loading && <CategoryTagsPageItemSection items={categoryItems} />}
        </section>
      </main>
    </>
  );
}
