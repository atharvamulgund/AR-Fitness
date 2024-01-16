import React, { useState,useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { homePageDiet } from "../data/data";

import HomeHeader from "../components/header/HomeHeader.react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Diet = () => {
  const [foodDiet, setFoodDiet] = useState([])
  const url = 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies';
const options = {
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': process.env.REACT_APP_RECIEPE_API_KEY,
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

  useEffect(() => {
 const fetchData = async () => {
  try {
	const response = await fetch(url, options);
	const result = await response.json();
	setFoodDiet(result)
} catch (error) {
	console.error(error);
}
}
fetchData()
  }, [])
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
          height: { lg: "100%", sm: "100%", xs: "100%" },
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
          {foodDiet?.hits?.map((item, index) => {
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
                      maxWidth='420px'
                      image={item?.recipe?.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.recipe?.label}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.8rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {item?.recipe?.healthLabels?.slice(0, 5)?.map((hl) => (
                          <Chip key={hl} label={hl} />
                        ))}
                      </Box>
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
                      <CardActions>
                        <Button size="small">Explore <ArrowForward/></Button>
                      </CardActions>
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
