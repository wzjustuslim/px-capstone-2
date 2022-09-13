import * as React from 'react';
import axios from "axios";
import Footer from '../components/Footer.js';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from "../contexts/UserContext"


const ProfilePage = () => {
  const [error, setError] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [userContext, setUserContext] = React.useContext(UserContext);
  console.log(`userContext = ${JSON.stringify(userContext)}`)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userContext.token}`
        },
        withCredentials: true
      };
      const data = await axios.get(url,config);
      console.log("Profile response: ", data);
      if (data) {
        setUserContext(oldValues => {
          return { ...oldValues, details: data }
        })
      }
      console.log(JSON.stringify(userContext));
    } catch (error) {
      setError("Something wrong happened while attempting to retrieve profile.");
    }

  }
  
  React.useEffect(() => {
    if (!userContext.details) {
      getUser()
    }
  },[userContext.details, getUser])

  const refetchHandler = () => {
    getUser()
  };

  return userContext.details == null ? (
    <div className="user-actions">
      <Button text="Show Profile" intent="primary" onClick={refetchHandler} />
    </div>
  ) : (
    <>
      <main>
        <Container maxWidth="md" sx={{ pt: "68.5px", minHeight: "100vh" }}>
          <Box sx={{ py: 8 }}>
            <Typography
              align="left"
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "text.secondary",
                pb: 8
              }}
            >
              Profile
            </Typography>
            <Accordion expanded={expanded === 'name-panel'} onChange={handleChange('name-panel')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="name-header"
              >
                <Box sx={{ 
                  display: "flex",
                  flexDirection: "column"
                }}>

                  <Typography
                    align="left"
                  >
                    Username
                  </Typography>
                  <Typography 
                    align="left"
                    variant="subtitle2"
                    sx={{
                      color: "text.secondary"
                    }}
                  >
                    {userContext.details.data.username}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="form">
                  <TextField
                    name="name"
                    value={userContext.details.data.username}
                    label="Full Name"
                    margin="normal"
                    type="text"
                    fullWidth
                    variant="outlined"
                    autofocus
                    required
                  />
                  <Box sx={{ display: "flex", py: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'email-panel'} onChange={handleChange('email-panel')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="email-header"
              >
                <Box sx={{ 
                  display: "flex",
                  flexDirection: "column"
                }}>

                  <Typography
                    align="left"
                  >
                    Email
                  </Typography>
                  <Typography 
                    align="left"
                    variant="subtitle2"
                    sx={{
                      color: "text.secondary"
                    }}
                  >
                    {userContext.details.data.email}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="form">
                  <TextField
                    name="email"
                    value={userContext.details.data.email}
                    label="Email Address"
                    margin="normal"
                    type="email"
                    fullWidth
                    variant="outlined"
                    autofocus
                    required
                  />
                  <Box sx={{ display: "flex", py: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'password-panel'} onChange={handleChange('password-panel')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="password-header"
              >
                <Box sx={{ 
                  display: "flex",
                  flexDirection: "column"
                }}>

                  <Typography
                    align="left"
                  >
                    Password
                  </Typography>
                  <Typography 
                    align="left"
                    variant="subtitle2"
                    sx={{
                      color: "text.secondary"
                    }}
                  >
                    Change your password here
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="form">
                  <TextField
                    name="password"
                    value="qwert"
                    label="Password"
                    margin="normal"
                    type="password"
                    fullWidth
                    variant="outlined"
                    autofocus
                    required
                  />
                  <Box sx={{ display: "flex", py: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            
          </Box>

        </Container>
      </main>
      <Footer />
    </>
  )
                  }
export default ProfilePage;