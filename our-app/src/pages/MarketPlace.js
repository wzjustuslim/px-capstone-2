import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


export default function MarketPlace() {

    const sampleArray = [
        {
            itemID: "10001",
            itemName: "Safari Pokeball",
            itemDemo: "Safari Pokeballs for sale",
            itemTags: ["pokeball", "sunbadge"],
            itemPrice: 30,
            itemImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png"
        },
        {
            itemID: "10002",
            itemName: "Great Pokeball",
            itemDemo: "Great Pokeballs cheap made in China",
            itemTags: ["pokeball", "moonbadge"],
            itemPrice: 5,
            itemImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png"
        },
        {
            itemID: "10003",
            itemName: "Water Pokeball",
            itemDemo: "Water Based Pokeballs",
            itemTags: ["pokeball", "moonbadge", "water"],
            itemPrice: 15,
            itemImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png"
        },
        {
            itemID: "10004",
            itemName: "Repellant",
            itemDemo: "Basic Repellant, good for 200 steps",
            itemTags: ["repellant", "consumables"],
            itemPrice: 15,
            itemImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repel.png"
        },
        {
            itemID: "10005",
            itemName: "Berry",
            itemDemo: "All Natural no preservertives, I am making this message extra long to test the layout",
            itemTags: ["berry", "consumables"],
            itemPrice: 5,
            itemImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png"
        },
        {
            itemID: "10006",
            itemName: "Pokemon NFT",
            itemDemo: "Join the NFT Bandwagon",
            itemTags: ["nft"],
            itemPrice: 10,
            itemImage: "https://lh3.googleusercontent.com/7J_BcZm85BdhXbz3iQxkY2DWF9PwCt-HUAeZMGwXRXCC3L-OaHy-lPAgN8arI8LaYoPRJkLZ0D4pkttF2hCBVcXkDmwMOrt3KR0Ejw"
        },
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {sampleArray.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item.itemID}>
                        <Box onClick = {() => alert("Item ID = " + item.itemID)} sx={{
                            '&:hover': {
                                backgroundColor: 'lightgrey',
                                opacity: [0.9, 0.8, 0.7],
                            },
                            boxShadow: 3,
                            borderRadius: 4
                        }}>
                            <img
                                className="d-block w-75"
                                src={item.itemImage}
                                alt={item.itemName}
                                class="center"
                            />
                            <Typography variant="h5" textAlign="center" noWrap>{item.itemName} </Typography>
                            <Typography textAlign="center" noWrap>{item.itemDemo} </Typography>
                            <Typography textAlign="center" noWrap>${item.itemPrice}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <div>
            INSERT PAGINATION HERE
            </div>
        </Box>
    );
}
