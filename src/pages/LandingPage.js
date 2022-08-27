import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LandingPage = () => {

  return (
    <main>
      <section>
        <Container maxWidth="xl" sx={{ mt: "68.5px" }}>
        <Grid container spacing={0}>
          <Grid xs={12} md={6}>
            <Box sx={{ 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              mx: 8
            }}>
              {/* Fontsize and alignment not response at xs size */}
              <Typography
                component="h1"
                variant="h3"
                align="left"
                gutterBottom="true"
                sx={{
                  fontWeight: 900,
                }}
              >
                Discover and buy the best Pokemon items
              </Typography>
              <Typography
                variant="h5"
                align="left"
                sx={{
                  color: "text.secondary",
                  mb: 6
                }}
              >
                The fastest way to level up your game
              </Typography>
              <Box sx={{
                display: "flex"
              }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    px: 6,
                    py: 2,
                    borderRadius: 3
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            {/* Image size is not response at xs */}
            <Paper className="hero-img" sx={{ m: 8, borderRadius: 4 }}>
            </Paper>
          </Grid>
        </Grid>
        </Container>
      </section>
      <section>
        <Container maxWidth="xl">
          <Grid container spacing={14} sx={{ mx: 0 }}>
            <Grid xs={12} md={6} lg={3}>
              <Typography>
                Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis. Sed consequat quis sapien in placerat.
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Typography>
                Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis. Sed consequat quis sapien in placerat.
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Typography>
                Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis. Sed consequat quis sapien in placerat.
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <Typography>
                Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis. Sed consequat quis sapien in placerat.
              </Typography>
            </Grid>
          </Grid>

        </Container>
      </section>
    </main>
  )
};
export default LandingPage;
