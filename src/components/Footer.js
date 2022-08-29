import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Divider from '@mui/material/Divider';

const Footer = () => {

  return (
    <footer>
      <Box sx={{ 
        bgcolor: 'primary.main'
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid xs={12} lg={4}>
              <Box sx={{ py: 6, pr: 16 }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  pt: 1
                }}>
                  <CatchingPokemonIcon fontSize="large" sx={{ color: "white" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.1rem',
                      color: 'white',
                      my: 1
                    }}
                  >
                    POKEMART
                  </Typography>
                  <Typography sx={{
                    variant: "subtitle2",
                    textAlign: "left",
                    color: "white",
                    fontWeight: 600
                  }}>
                    Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={6} md={3} lg={2}>
              <Box sx={{ py: 6 }}>
                <Box sx={{
                  display: "flex",
                  padding: 2
                }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Categories
                  </Typography>
                </Box>
                <List>
                  {
                    ['All Items', 'Art', 'Collectibles', 'Domain Names', 'Music', 'Photography', 'Sports', 'Trading Cards', 'Utility', 'Virtual Worlds'].map((value) => (
                      <ListItem>
                        <Link 
                          variant="subtitle2" 
                          color="white" 
                          href="#" 
                          underline="none"
                          sx={{
                            fontWeight: 600
                          }}
                        >
                          {value}
                        </Link>
                      </ListItem>

                    ))
                  }
                </List>
              </Box>
            </Grid>
            <Grid xs={6} md={3} lg={2}>
              <Box sx={{ py: 6 }}>
                <Box sx={{
                  display: "flex",
                  padding: 2
                }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    My Account
                  </Typography>
                </Box>
                <List>
                  {
                    ['Profile', 'Favorites', 'Watchlist', 'My Collections', 'Settings'].map((value) => (
                      <ListItem>
                        <Link 
                          variant="subtitle2" 
                          color="white" 
                          href="#" 
                          underline="none"
                          sx={{
                            fontWeight: 600
                          }}
                        >
                          {value}
                        </Link>
                      </ListItem>

                    ))
                  }
                </List>
                <Box sx={{
                  display: "flex",
                  pt: 6, 
                  px: 2,
                  pb: 2
                }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Stats
                  </Typography>
                </Box>
                <List>
                  {
                    ['Rankings', 'Activity'].map((value) => (
                      <ListItem>
                        <Link 
                          variant="subtitle2" 
                          color="white" 
                          href="#" 
                          underline="none"
                          sx={{
                            fontWeight: 600
                          }}
                        >
                          {value}
                        </Link>
                      </ListItem>

                    ))
                  }
                </List>
              </Box>
            </Grid>
            <Grid xs={6} md={3} lg={2}>
              <Box sx={{ py: 6 }}>
                <Box sx={{
                  display: "flex",
                  padding: 2
                }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Resources
                  </Typography>
                </Box>
                <List>
                  {
                    ['Help Center', 'Platform Status', 'Partners', 'Taxes', 'Blog', 'Docs', 'Newsletter'].map((value) => (
                      <ListItem>
                        <Link 
                          variant="subtitle2" 
                          color="white" 
                          href="#" 
                          underline="none"
                          sx={{
                            fontWeight: 600
                          }}
                        >
                          {value}
                        </Link>
                      </ListItem>

                    ))
                  }
                </List>
              </Box>
            </Grid>
            <Grid xs={6} md={3} lg={2}>
              <Box sx={{ py: 6 }}>
                <Box sx={{
                  display: "flex",
                  padding: 2
                }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Company
                  </Typography>
                </Box>
                <List>
                  {
                    ['About', 'Careers', 'Ventures', 'Grants'].map((value) => (
                      <ListItem>
                        <Link 
                          variant="subtitle2" 
                          color="white" 
                          href="#" 
                          underline="none"
                          sx={{
                            fontWeight: 600
                          }}
                        >
                          {value}
                        </Link>
                      </ListItem>

                    ))
                  }
                </List>
              </Box>
            </Grid>
          </Grid>
          <Divider></Divider>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 4
          }}>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontWeight: 600
                }}
              >© 2022 PokeMart</Typography>
            </Box>
            <Box>
              <Link
                variant="caption"
                color="white"
                href="#"
                underline="none"
                sx={{
                  fontWeight: 600,
                  mr: 2
                }}
              >
                Privacy Policy
              </Link>
              <Link
                variant="caption"
                color="white"
                href="#"
                underline="none"
                sx={{
                  fontWeight: 600
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  )
};
export default Footer;