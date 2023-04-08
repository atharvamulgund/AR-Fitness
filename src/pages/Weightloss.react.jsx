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

const Weightloss = () => {
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
          src="https://images.pexels.com/photos/5842227/pexels-photo-5842227.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          Weight Loss diet plan
        </Typography>
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "2px",
          }}
        >
          Weight loss is a common goal for many individuals, and one of the most
          important concepts to understand when it comes to weight loss is
          calorie deficit. Put simply, in order to lose weight, you need to
          consume fewer calories than your body burns on a daily basis. This
          means creating a calorie deficit, which can be achieved by either
          reducing your caloric intake through dietary changes or increasing
          your physical activity levels to burn more calories. It's important to
          note that creating too large of a calorie deficit can be detrimental
          to your health and slow down your metabolism. Therefore, it's best to
          aim for a modest calorie deficit of{" "}
          <span style={{ color: "#f15a24" }}>500-750 calories per day</span>,
          which can lead to a sustainable{" "}
          <span style={{ color: "#f15a24" }}>
            {" "}
            weight loss of 1-2 pounds per week
          </span>
          . Additionally, incorporating strength training into your exercise
          routine can help preserve muscle mass while losing weight, leading to
          better overall health outcomes. Remember, sustainable weight loss is a
          marathon, not a sprint, so be patient and consistent with your efforts
          for long-term success.
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
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
            Basic rules to lose weight
          </Typography>

          <Box
            sx={{
              marginLeft: { lg: "1rem", xs: "0" },
            }}
          >
            <li>Eat a balanced diet</li>
            <li>Avoiding sugar</li>
            <li>Avoiding junk food</li>
            <li>Stay in Calorie Deficit</li>
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
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            How to reduce calorie intake?
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Eat more protein
              </Typography>
              <Typography sx={{ color: "secondary" }}>
                When it comes to losing weight, protein is incredibly important
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Protein may also help fight cravings. According to some
                research, high protein snacks help enhance feelings of fullness
                while decreasing hunger and appetite <br />
                <br />
                In addition to promoting weight loss, some research suggests
                that maintaining a high protein diet may prevent or reduce
                weight regain and help maintain muscle mass
                <br />
                <br />
                Therefore, if you want to achieve long-lasting, sustainable
                weight loss, consider increasing your protein intake by eating
                more eggs, meat, poultry, tofu, nuts, seeds, or legumes.
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
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Limit sugary drinks
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                limit your intake of sugar-sweetened
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your brain doesn’t register liquid calories the same way it does
                solid calories, so they affect your feelings of hunger and
                fullness less significantly.
                <br />
                <br />
                Additionally, studies associate drinking sugary beverages with
                an increased risk of obesity.
                <br />
                <br />
                The harmful effects of sugar also go far beyond weight gain. In
                fact, added sugar may contribute to other health issues,
                including heart disease, liver problems, and type 2 diabetes.
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
                Drink more water
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                One simple thing you can do for your health is to drink more
                water.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Adequate hydration is associated with improved brain health and
                weight management, as well as a reduced kidney stone risk <br />
                <br />. What’s more, drinking water immediately before meals may
                reduce hunger and help you eat fewer calories.
                <br />
                <br />
                When combined with a healthy diet, drinking more water —
                especially before meals — appears to be helpful if you need to
                lose weight. Try other unsweetened beverages like coffee, tea,
                and sparkling water to meet your hydration needs.
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
                Exercise
              </Typography>
              <Typography sx={{ color: "#fff" }}>
                Exercise is a powerful tool for weight loss.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Calorie restriction, especially significant calorie restriction,
                may slow your metabolic rate and increase appetite. Plus,
                cutting calories too severely may lead to muscle loss, which can
                harm your overall health and lower your metabolic rate.
                <br />
                <br />
                Resistance-training activities like weightlifting have been
                shown to limit muscle loss, which may help minimize metabolic
                changes during long-term calorie restriction.
                <br />
                <br />
                If you can’t get to a gym, consider doing bodyweight exercises,
                such as pushups, squats, and situps, at home.
                <br />
                <br />
                Cardio exercises, such as walking, swimming, or jogging, are
                also important — both for increasing weight loss and supporting
                overall health.
                <br />
                <br />
                Additionally, exercise has a variety of other benefits that go
                beyond weight loss, such as increased longevity, enhanced energy
                levels, improved mental health, and a decreased risk of chronic
                disease.
                <br />
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
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
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                Reduce your intake of refined carbs and ultra-processed foods
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The term “refined carbs” refers to grains that have lost their
                bran and germ, including white bread, pasta, crackers, and white
                rice. It also includes sugar and other sweeteners.
                <br />
                <br />
                Refined grains typically lack fiber, which supports weight loss
                by decreasing your appetite and increasing feelings of fullness.
                <br />
                <br />
                Eating fewer carbs, including fewer refined carbs, may also
                promote weight loss by altering levels of specific hormones that
                regulate your appetite, such as peptide YY.
                <br />
                <br />
                While a low carb or ketogenic diet definitely isn’t right for
                everyone, replacing refined carbs with a variety of
                nutrient-dense, fiber-rich carb sources — such as whole grains,
                root vegetables, nuts, seeds, and legumes — may be beneficial.
                <br />
                <br />
                It’s also best to avoid ultra-processed foods, which include
                fast food, packaged snacks, candies, and sugary beverages. These
                items not only pack refined carbs but also preservatives,
                sugars, unhealthy fats, salt, and other ingredients you should
                limit in your diet.
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
            The best way to lose weight is to eat fewer calories than you burn.
          </li>
          <li>
            This can be done by reducing your intake of refined carbs and
            ultra-processed foods.
          </li>
          <li>
            Exercise is also important for weight loss, as it can help you burn
            more calories and build muscle.
          </li>
          <li>
            However, you don’t need to exercise to lose weight on this plan. If
            you’re new to the gym, ask a trainer for some advice.
          </li>
          <li>
            If you’re already active, increase the intensity and duration of
            your workouts.
          </li>
        </Typography>
      </Container>
    </>
  );
};

export default Weightloss;
