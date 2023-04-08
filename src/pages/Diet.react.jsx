import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { homePageDiet } from "../data/data";

import HomeHeader from "../components/header/HomeHeader.react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Diet = () => {
  const navigate = useNavigate();

  if (!Cookies.get("userID")) {
    alert("Please Login");
    navigate("/");
  }
  return (
    <>
      <HomeHeader />
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
    </>
  );
};

export default Diet;
