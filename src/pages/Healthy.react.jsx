import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import HomeHeader from "../components/header/HomeHeader.react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Healthy = () => {
  const navigate = useNavigate();

  if (!Cookies.get("userID")) {
    alert("Please Login");
    navigate("/");
  }

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <HomeHeader />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { lg: "50%", sm: "80%", xs: "100%" },
          flexDirection: "column",
        }}
        maxWidth="false"
      >
        <img
          src="https://images.pexels.com/photos/6942034/pexels-photo-6942034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Diet"
          width="80%"
        />
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className="text-gradient"
        >
          Balanced Diet
        </Typography>
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "2px",
          }}
        >
          A balanced diet supplies the nutrients your body needs to work
          effectively. Without balanced nutrition, your body is more prone to
          disease, infection, fatigue, and low performance. Children who don’t
          get enough healthy foods may face growth and developmental problems,
          poor academic performance, and frequent infections. They can also
          develop unhealthy eating habits that may persist into adulthood.
          Without exercise, they’ll also have a higher risk of obesity and
          various diseases that make up metabolic syndrome, such as type 2
          diabetes and high blood pressure. disease.
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          color: "#fff",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "2px",
            width: { lg: "50%", sm: "80%", xs: "80%" },
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            What is a balanced diet?
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            A balanced diet gives your body the nutrients it needs to function
            correctly. To get the nutrition you need, most of your daily
            calories should come from:
          </Typography>
          <Box
            sx={{
              marginLeft: { lg: "1rem", xs: "0" },
            }}
          >
            <li> Fresh fruits</li>
            <li> Fresh vegetables</li>
            <li> Whole grains</li>
            <li> Lean proteins</li>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "2px",
            width: "50%",
          }}
        >
          <img
            src="https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Avoid Junk"
            width="90%"
          />
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            gap: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            color: "#fff",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            className="text-gradient"
            sx={{
              textAlign: "center",
            }}
          >
            What to eat for a balanced diet?
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="gradient__bg_center"
            sx={{
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Fruits
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Fruits are nutritious
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fruits are nutritious, they make a tasty snack or dessert, and
                they can satisfy a sweet tooth.
                <br />
                <br />
                Local fruits that are in season are fresher and provide more
                nutrients than imported fruits.
                <br />
                <br />
                Fruits are high in sugar, but this sugar is natural. Unlike
                candies and many sweet desserts, fruits also provide fiber and
                other nutrients. This means they’re less likely to cause a sugar
                spike and they’ll boost the body’s supply of essential vitamins,
                minerals, and antioxidants.
                <br />
                <br />
                If you have diabetes, your doctor or dietitian can advise you on
                which fruits to choose, how much to eat, and when.
                <br />
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="gradient__bg_center"
            sx={{
              color: "#fff",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Veggies
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                They are a key source
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vegetables are a key source of essential vitamins, minerals, and
                antioxidants. Eat a variety of vegetables with different colors
                for a full range of nutrients.
                <br />
                <br />
                Dark, leafy greens are an excellent source of many nutrients.
                They include:
                <li>spinach</li>
                <li>kale</li>
                <li>green beans</li>
                <li>broccoli</li>
                <li>collard greens</li>
                <li>Swiss chard</li>
                <br />
                <br />
                Local, seasonal vegetables are often reasonable in price and
                easy to prepare. Use them in the following ways:
                <li>as a side dish</li>
                <li>roasted in a tray with a splash of olive oil</li>
                <li>as the base in soups, stews, and pasta dishes</li>
                <li>as a salad</li>
                <li>in purées</li>
                <li>in juices and smoothies</li>
                <br />
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="gradient__bg_center"
            sx={{
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Dairy
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Dairy products provide essential nutrients
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dairy products provide essential nutrients, including:
                <li>protein</li>
                <li>calcium</li>
                <li>vitamin D</li>
                <br />
                <br />
                They also contain fat. If you’re seeking to limit your fat
                intake, reduced fat options might be best. Your doctor can help
                you decide.
                <br />
                <br />
                For those following a vegan diet, many dairy-free milks and
                other dairy alternatives are now available, made from:
                <li>flax seed</li>
                <li>almonds and cashews</li>
                <li>soy</li>
                <li>oats</li>
                <li>coconut</li>
                These are often fortified with calcium and other nutrients,
                making them excellent alternatives to dairy from cows. Some have
                added sugar, so read the label carefully when choosing.
                <br />
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mt: 5, mb: 5 }}
          className="text-gradient"
        >
          SUMMARY
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 5, color: "#fff", textAlign: "left" }}
        >
          <li>
            A healthy diet will combine all the nutrients and foods groups
            mentioned above, but you need to balance them, too.
          </li>

          <li>
            Aim for around half your food to come from fruits and vegetables,
            around one quarter by protein, and whole grains.
          </li>

          <li>
            A balanced diet contains foods from the following groups: fruits,
            vegetables, dairy, grains, and protein.
          </li>
        </Typography>
      </Container>
    </>
  );
};

export default Healthy;
