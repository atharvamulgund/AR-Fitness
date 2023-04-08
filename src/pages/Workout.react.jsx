import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import HomeHeader from "../components/header/HomeHeader.react";
import { WorkoutVariation } from "../data/data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
const Workout = () => {
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { lg: "100vh", sm: "100%", xs: "100%" },
          textAlign: "center",
          gap: "2rem",
        }}
        maxWidth="false"
      >
        <Typography variant="h3" className="text-gradient">
          Workout
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            flexWrap: "wrap",
          }}
        >
          {WorkoutVariation.map((item, index) => {
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
                        height: 140,
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

export default Workout;
