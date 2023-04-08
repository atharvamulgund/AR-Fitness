import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Header from "../components/header/header.react";
import heroImg from "../assets/images/hero-section-arm.svg";
import { Icon } from "@mui/material";
import features from "../data/data";
import about from "../assets/images/reminder.svg";
import impFeature from "../assets/images/tracking.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import user from "../assets/images/people02.png";
import quotes from "../assets/images/quotes.svg";
import { testimonial } from "../data/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Landing = () => {
  const navigate = useNavigate();

  if (Cookies.get("uat")) {
    navigate("/home");
  }
  if (!Cookies.get("userID")) {
    navigate("/");
  }

  return (
    <>
      <Header />
      {/* Hero Section */}

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column-reverse" },
          position: "relative",
          backgroundColor: "transparent",
        }}
        maxWidth="false"
      >
        <Box
          className="gradient__bg_down"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: "100vh",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100vh",
            width: "100%",
            color: "#fff",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{
              display: { lg: "flex", sm: "flex", xs: "none" },
              fontSize: "2rem",
            }}
          >
            Get Fit Together!
          </Typography>
          <Typography
            variant="h2"
            className="text-gradient"
            sx={{
              fontWeight: "bold",
              fontSize: { lg: "6rem", sm: "4rem", xs: "2rem" },
            }}
          >
            Train <br />
            Different
          </Typography>
          <Typography
            varient="h6"
            sx={{
              fontSize: { lg: "1.5rem", sm: "1rem" },
            }}
          >
            With our AI powered fitness app, it will guide you with the best
            program to help you get a healthy and ideal body.
          </Typography>
          <Link to="/login" className="link">
            <Button variant="contained" color="secondary">
              Get Started
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            width: { lg: "80%", sm: "95%", xs: "100%" },
            height: { lg: "100%", xs: "100vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <img src={heroImg} alt="gif" width="100%" />
        </Box>
        <Typography
          variant="h5"
          color="secondary"
          sx={{
            display: { lg: "none", sm: "none", xs: "flex" },
            fontSize: "2rem",
            marginTop: { lg: "0", xs: "1rem" },
          }}
        >
          Get Fit Together!
        </Typography>
      </Container>
      {/* Features */}
      <Container
        sx={{
          display: "flex",
          justifyContent: { lg: "space-between", sm: "center", xs: "center" },
          alignItems: "center",
          height: { lg: "100vh", sm: "100vh", xs: "100%" },
          width: "100%",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          color: "#fff",
          gap: "1rem",
          position: "relative",
          padding: { lg: "2rem", xs: "0" },
        }}
        maxWidth="false"
      >
        <Box
          className="gradient__bg_down"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: { lg: "100vh", xs: "100%" },
            rotate: "180deg",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: { lg: "left", sm: "center", xs: "center" },
              fontSize: { lg: "6rem", sm: "4rem", xs: "1.5rem" },
              width: "100%",
              paddingTop: { lg: 0, xs: "2rem" },
            }}
            className="text-gradient"
          >
            Why AR Fitness?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { lg: "1.5rem", sm: "1rem" },
              width: { lg: "60%", sm: "80%", xs: "90%" },
              textAlign: { lg: "left", sm: "center", xs: "center" },
            }}
          >
            You need to ensure your form is correct without the supervision of a
            gym instructor, otherwise injuries may occur
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            mb: "1rem",
            width: "80%",
            flexWrap: "wrap",
          }}
        >
          {features.map((feature, key) => (
            <Box
              sx={{
                display: "flex",
                columnGap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%" },
              }}
              key={key}
            >
              <Icon color="secondary" fontSize="large">
                {feature.icon}
              </Icon>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h5"
                  color="secondary"
                  sx={{
                    fontWeight: "bold",
                    fontize: { lg: "2rem", sm: "1.5rem", xs: "1rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { lg: "1.5rem", sm: "1rem", xs: "0.8rem" } }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      {/* About */}
      <Container
        id="about"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { lg: "100vh", sm: "100vh", xs: "100%" },
          width: "100%",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          color: "#fff",
          position: "relative",
          padding: { lg: "2rem", xs: "1rem" },
        }}
        maxWidth="false"
      >
        <Box
          className="gradient__bg_up"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: { lg: "100vh", xs: "100%" },
            rotate: "180deg",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: { lg: "50%", sm: "60%", xs: "100%" },
          }}
        >
          <img src={about} alt="about" width="100%"></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: { lg: "50%", xs: "80%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: { lg: "left", sm: "center", xs: "center" },
              fontSize: { lg: "6rem", sm: "4rem", xs: "2rem" },
              width: "100%",
              paddingTop: { lg: 0, xs: "2rem" },
            }}
            className="text-gradient"
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { lg: "1.5rem", xs: "1rem" },
              fontWeight: "100",
              textAlign: { lg: "left", sm: "center", xs: "justify" },
              width: "100%",
            }}
          >
            Our goal is to detect a person from a perfect side view and measure
            from neck to torso inclination to some reference axis. By monitoring
            the inclination angle when the person bends below a certain
            threshold angle. Other features include measuring the time of a
            particular posture and the camera alignment. Hence the alignment
            feature is required and integrate this functionality on a website
            which provides pattern in which the task
          </Typography>
        </Box>
      </Container>
      {/* USP */}
      <Container
        id="services"
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            sm: "space-around",
            xs: "center",
          },
          alignItems: "center",
          height: { lg: "100vh", sm: "100vh", xs: "100vh" },
          width: "100%",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          color: "#fff",
          position: "relative",
          gap: "2rem",
          padding: { lg: "2rem", xs: "1rem" },
        }}
        maxWidth="false"
      >
        <Box
          className="gradient__bg_up"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: { lg: "100vh", xs: "100%" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: { lg: "40%", xs: "100%" },
          }}
        >
          <img src={impFeature} alt="Automatic tracking" width="100%"></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { lg: "flex-start", xs: "center" },
            width: { lg: "50%", xs: "100%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textAlign: { lg: "left", sm: "center", xs: "center" },
              fontSize: { lg: "6rem", sm: "4rem", xs: "1.5rem" },
              width: "100%",
              paddingTop: { lg: 0, xs: "2rem" },
            }}
            className="text-gradient"
          >
            Automatic tracking
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { lg: "1.5rem", xs: "1rem" },
              fontWeight: "100",
            }}
          >
            Ar Fitness counts reps, mistakes and saving all data in a training
            report and in a general progress log.
          </Typography>
        </Box>
      </Container>
      {/* Testimonial */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { lg: "100vh", xs: "100%" },
          width: "100%",
          gap: "5rem",
          position: "relative",
          padding: "2rem",
        }}
        maxWidth="false"
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "2rem" },
          }}
          className="text-gradient"
        >
          Effective workouts at home without a personal trainer!
        </Typography>
        <Box
          className="gradient__bg_center"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            width: "100%",
            height: { lg: "100vh", xs: "100%" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {testimonial.map((item, key) => {
            return (
              <Card
                sx={{
                  maxWidth: 345,
                  height: 350,
                  backgroundColor: "#00040f",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.9)",
                  borderRadius: "1rem",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: "40px",
                  }}
                >
                  <img src={quotes} alt="quotes"></img>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1rem",
                    color: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img src={user} alt="user" width="100%" />
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className="text-gradient"
                    sx={{
                      textAlign: "center",
                    }}
                    key={key}
                  >
                    {item.name}
                  </Typography>

                  <Typography variant="body2" color="#fff" className="wrap">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    {item.role}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Landing;
