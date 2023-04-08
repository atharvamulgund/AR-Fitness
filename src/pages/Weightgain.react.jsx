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
const Weightgain = () => {
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
          src="https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Diet"
          width="100%"
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
          Weight Gain diet plan
        </Typography>
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "2px",
          }}
        >
          If you’re looking to gain weight, it’s very important to do it right.
          Consuming soda, donuts, and other junk foods may help you gain weight
          initially, but it can increase your risk of heart disease, diabetes,
          and cancer . A healthy approach to gaining weight involves gaining a
          balanced amount of muscle mass and subcutaneous fat rather than a lot
          of unhealthy belly fat . A recent animal study suggests that belly fat
          may be correlated with increased cancer risk . A high percentage of
          body fat also increases your chances of developing type 2 diabetes and
          other health problems, even if you are not overweight. To gain weight
          safely, focus on eating more nutrient-dense foods and living an
          overall healthy lifestyle that involves exercising, getting enough
          sleep, and reducing stress, if you can. This article outlines simple
          strategies to quickly gain weight — without increasing your risk of
          disease.
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
            Basic rules to gain weight
          </Typography>

          <Box
            sx={{
              marginLeft: { lg: "1rem", xs: "0" },
            }}
          >
            <li> Avoid drinking water before meals.</li>
            <li> Try weight gainer shakes</li>
            <li> Eat your protein and fat source first</li>
            <li> Get quality sleep</li>
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
            src="https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            Different strategies for gaining weight!
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
                Increase your caloric intake
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Create a calorie surplus
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you want to gain weight slowly and steadily, aim for{" "}
                <span style={{ color: "#f15a24" }}>300–500 calories</span> more
                than you burn each day according to the calculator. If you want
                to gain weight fast, aim for around{" "}
                <span style={{ color: "#f15a24" }}> 700–1,000 calories</span>{" "}
                above your maintenance level.
                <br />
                <br />
                Keep in mind that calorie calculators only provide estimates.
                Your needs may vary by several hundred calories per day, give or
                take.
                <br />
                <br />
                You don’t need to count calories for the rest of your life, but
                it can help to do it for the first few days or weeks to get a
                feel for how many calories you’re eating. There are many great
                tools out there to help you.
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
                Increase your protein intake
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                high quality proteins
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To promote skeletal and muscle growth and physical strength in
                healthy adults with minimal to intense physical activity, the
                Recommended Dietary Allowance of protein is between 1 to 1.6
                grams of protein per kilogram of body weight per day.
                <br />
                <br />
                Up to 2 grams per kilogram of body weight of protein per day may
                be safe for healthy adults, with the upper limit at 3.5 grams
                per kilogram of body weight per day.
                <br />
                <br />
                High protein foods include meats, fish, eggs, some dairy
                products, legumes, nuts, and others. Protein supplements like
                whey protein can also be useful it is difficult for you to get
                enough protein in your diet.
                <br />
                <br />
                However, protein may also reduce your hunger and appetite
                significantly, making it harder to get in enough calories.{" "}
                <br />
                <br />
                Eating too much protein may also increase your risk of heart
                disease.
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
                Increase your intake of carbs and fat
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Eat plenty of high carb and high fat foods
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Many people try restricting either carbs or fat when trying to
                lose weight.
                <br />
                <br />
                This may make it hard to gain weight, as it will make it harder
                to get in enough calories.
                <br />
                <br />
                Eat plenty of high carb and high fat foods if weight gain is a
                priority for you. It is best to eat plenty of protein, fat, and
                carbs at each meal.
                <br />
                <br />
                You may want to avoid eating plans such as intermittent fasting.
                This eating plan can be useful for weight loss and other
                benefits but can make it much harder to eat enough calories to
                gain weight.
                <br />
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
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
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Increase your intake of energy-dense foods
              </Typography>
              <Typography sx={{ color: "secondary" }}>
                Important to eat mostly whole foods
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It’s very important to eat mostly whole foods, like fruits,
                vegetables, whole grains, and legumes.
                <br />
                <br />
                However, these foods tend to be more filling than processed junk
                foods, making it harder to get in enough calories.
                <br />
                <br />
                Using plenty of spices, sauces, and condiments can help with
                this. The tastier your food is, the easier it may be to eat a
                lot of it. Toppings may also add additional calories.
                <br />
                <br />
                Also, try to emphasize energy-dense foods as much as possible.
                These are foods that contain many calories relative to their
                weight.
                <br />
                <br />
                Here are some energy-dense foods that may help you gain weight:
                <li>
                  Nuts: almonds, walnuts, macadamia nuts, and peanuts
                </li>{" "}
                <br />
                <li>Dried fruit: raisins, dates, prunes, and others</li> <br />
                <li>
                  High fat dairy: whole milk, full-fat yogurt, cheese, and cream
                </li>{" "}
                <br />
                <li>Fats and oils: extra virgin olive oil, avocado oil</li>{" "}
                <br />
                <li>Grains: oats, brown rice</li> <br />
                <li>
                  Meat: chicken, beef, pork, and lamb; you can also choose
                  fattier cuts
                </li>{" "}
                <br />
                <li>Tubers: potatoes, sweet potatoes, and yams</li> <br />
                <li>
                  Other energy-dense foods: dark chocolate, avocados, peanut
                  butter, coconut milk, granola, and trail mix
                </li>{" "}
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
            Eat plenty of high protein foods, such as meat, fish, eggs, dairy,
            legumes, and nuts.
          </li>

          <li>
            Eat plenty of high carb and high fat foods, such as potatoes, sweet
            potatoes, rice, pasta, oats, whole grain bread, fruits.
          </li>

          <li>
            Eat plenty of energy-dense foods, such as nuts, seeds, avocados,
            dried fruit, and whole grains.
          </li>

          <li>
            Eat plenty of whole foods, such as fruits, vegetables, whole grains,
            and legumes.
          </li>
        </Typography>
      </Container>
    </>
  );
};

export default Weightgain;
