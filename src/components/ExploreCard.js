import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";


export default function ExploreCard({ item }) {
  const { itemImage, itemName, itemPrice } = item;
  return (
    <Grid xs={6} sm={4} md={3} lg={2}>
      <Card
        className="explore-card"
        raised
        sx={{
          borderRadius: '12px',
        }}
      >
        <CardActionArea>
          <CardContent sx={{ pb: 1 }}>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <img src={itemImage} alt={itemName} className="explore-card-media" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography
                align="left"
                variant="subtitle2"
                sx={{
                  fontWeight: '700',
                  mb: '12px'
                }}
              >
                {itemName}
              </Typography>
              <Typography
                align="left"
                variant="caption"
                sx={{
                  fontWeight: '700',
                  
                }}
              >
                Price
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <CurrencyBitcoinIcon sx={{ ml: '-6px'}} />
                <Typography
                  align="left"
                  variant="subtitle1"
                >
                  {itemPrice}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions
            className="explore-card-actions"
            sx={{
              bgcolor: 'primary.main',
              display: 'flex',
              justifyContent: 'center',
              
            }}
          >
            <Typography
              align="center"
              variant="subtitle2"
              color="white"
              sx={{
                fontWeight: '700',
              }}
            >
              Buy now
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  )
}