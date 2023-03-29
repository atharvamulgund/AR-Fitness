import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LogoWithText from "../assets/images/logo-with-text.svg";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HomePageActivity, homePageDiet } from "../data/data";
import { logout } from "../firebase";
import HomeHeader from "../components/header/HomeHeader.react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const drawerWidth = `100%`;
export const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("uat")) {
      alert("Please Login");
      navigate("/login");
    }
  }, []);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      {/* Navbar */}

      <Container
        sx={{
          background: "#00040f",
          display: "flex",
          flexDirection: "column",
          justifyContent: { lg: "space-between", xs: "flex-start" },
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Link to="/home">
          <Box
            sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "flex" },
              justifyContent: {
                md: "flex-start",
                sm: "flex-start",
                xs: "flex-start",
              },
              alignItems: { md: "center", sm: "center", xs: "center" },
            }}
          >
            <img src={LogoWithText} alt="logo" width="50%"></img>
          </Box>
        </Link>
        <List
          sx={{
            width: "60%",
          }}
        >
          <a href="/home" className="link" onClick={handleDrawerToggle}>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </a>
          <a href="#diet" className="link" onClick={handleDrawerToggle}>
            <ListItemButton>
              <ListItemText primary="Diet" />
            </ListItemButton>
          </a>
          <a href="#workout" className="link" onClick={handleDrawerToggle}>
            <ListItemButton>
              <ListItemText primary="Workout" />
            </ListItemButton>
          </a>
          <Divider
            color="#fff"
            sx={{
              width: "50%",
            }}
          />
          <Link to="/Login" className="link" onClick={handleDrawerToggle}>
            <ListItemButton>
              <Button variant="contained" color="secondary" onClick={logout()}>
                Logout
              </Button>
            </ListItemButton>
          </Link>
        </List>
      </Container>
      {/* Navbar */}
    </>
  );
  return (
    <>
      <HomeHeader />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { lg: "100vh", sm: "100%", xs: "100%" },
            marginTop: "1rem",
          }}
        >
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            className="text-gradient"
            sx={{
              textAlign: "center",
              fontSize: { lg: "5rem", xs: "2rem" },
            }}
          >
            Welcome to the AR Fitness!
          </Typography>
          <a href="#diet">
            <Typography variant="h4" component="div" gutterBottom>
              <KeyboardArrowDownIcon
                color="primary"
                fontSize="large"
                className="icon"
              />
            </Typography>
          </a>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { lg: "100vh", sm: "100%", xs: "100%" },
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className="text-gradient"
          sx={{
            fontSize: { lg: "5rem", xs: "2rem" },
          }}
        >
          Select Your Desire Goal
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            flexWrap: "wrap",
            widht: "100%",
            gap: "2rem",
          }}
          id="diet"
        >
          {homePageDiet.map((item, index) => {
            return (
              <Link to={item.route} className="link-primary">
                <CardActions>
                  <Card
                    sx={{ maxWidth: 345, textDecoration: "none" }}
                    key={index}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        className="wrap"
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActions>
              </Link>
            );
          })}
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { lg: "100vh", sm: "100%", xs: "100%" },
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className="text-gradient"
          sx={{
            fontSize: { lg: "5rem", xs: "2rem" },
          }}
        >
          Select Your Desire Activity
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { lg: "100vh", xs: "100%" },
            textAlign: "center",
            flexWrap: "wrap",
            widht: "100%",
            gap: "2rem",
          }}
          id="workout"
        >
          {HomePageActivity.map((item, index) => {
            return (
              <Link to={item.route} className="link-primary">
                <CardActions>
                  <Card
                    sx={{ maxWidth: 345, textDecoration: "none" }}
                    key={index}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      sx={{
                        maxHeight: "250px",
                      }}
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        className="wrap"
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActions>
              </Link>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;
