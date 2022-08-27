import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RedeemIcon from '@mui/icons-material/Redeem';

const LandingPage = () => {

  return (
    <main>
      <section>
        <Container maxWidth="xl" sx={{ pt: "68.5px" }}>
        <Grid container spacing={0}>
          <Grid xs={12} md={6}>
            <Box sx={{ 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              px: 8
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
            <Box sx={{ py: 8, pl: 16 }}>
              <Paper className="hero-img" sx={{ borderRadius: 4 }}></Paper>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </section>
      <section>
        <Box className="instruction-section">
          <Container maxWidth="xl" sx={{ pb: 16 }}>
            <Grid container spacing={0}>
              <Grid xs={12}>
                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  py: 6
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    How to get started
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <Box sx={{
                  px: 6
                }}>
                  <LoginIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
                  <Typography
                    variant="subtitle1"
                    gutterBottom="true"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    Sign up
                  </Typography>
                  <Typography>
                    Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <Box sx={{
                  px: 6
                }}>
                  <AccountBalanceWalletIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
                  <Typography
                    variant="subtitle1"
                    gutterBottom="true"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    Top up your wallet
                  </Typography>
                  <Typography>
                    Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <Box sx={{
                  px: 6
                }}>
                  <LocalMallIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
                  <Typography
                    variant="subtitle1"
                    gutterBottom="true"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    Buy your items
                  </Typography>
                  <Typography>
                    Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <Box sx={{
                  px: 6
                }}>
                  <RedeemIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
                  <Typography
                    variant="subtitle1"
                    gutterBottom="true"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    Redeem items in-game
                  </Typography>
                  <Typography>
                    Sed varius venenatis turpis varius tempor. Phasellus faucibus a erat eu mattis. Cras tincidunt accumsan scelerisque. In semper lorem sit amet eros accumsan mattis.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

          </Container>
        </Box>
      </section>
    </main>
  )
};
export default LandingPage;
