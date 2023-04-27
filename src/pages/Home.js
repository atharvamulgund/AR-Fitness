import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
} from "@mui/material";

import activityImgURL from "../assets/images/cookies.svg";
import HomeHeader from "../components/header/HomeHeader.react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Chip from "@mui/material/Chip";
import reminderImgURL from "../assets/images/reminder_dashboard.svg";
import popular from "../assets/images/popular.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import motivation from "../assets/images/motivation.svg";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  AutoGraphOutlined,
  DonutLargeOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
ChartJS.register(...registerables);

export const Home = () => {
  const navigate = useNavigate();
  const uid = Cookies.get("userID");
  const name = localStorage.getItem("name");

  const photo = localStorage.getItem("photo");

  // // console.log(userObject);
  if (!Cookies.get("userID")) {
    alert("Please Login");
    navigate("/");
  }
  const [initialMeasuremnets, setInitialMeasuremnets] = useState("");
  const [goalsMeasuremnet, setGoalsMeasuremnets] = useState("");
  const [bicepsstartTimeCol, setBicepsStartTimeCol] = useState("");
  const [pushUpstartTimeCol, setPushUpStartTimeCol] = useState("");
  const [squatsstartTimeCol, setSquatsStartTimeCol] = useState("");
  const [crunchesstartTimeCol, setCrunchesStartTimeCol] = useState("");
  const [quotes, setQuotes] = useState("");
  const [sevenDaysData, setSevenDaysData] = useState("");
  const [bicepLength, setBicepLength] = useState("");
  const [pushUpLength, setPushUpLength] = useState("");
  const [squatsLength, setSquatsLength] = useState("");
  const [crunchesLength, setCrunchesLength] = useState("");
  const [favExcerise, setFavExcerise] = useState("");
  useEffect(() => {
    async function initialMeasurementeData() {
      const initiaMeasuremnetCol = collection(
        db,
        `user/${uid}/initialMeasurements`
      );
      // console.log(measuremnetCol);
      const initialCollectionSnapshot = await getDocs(initiaMeasuremnetCol);
      // console.log(collectionSnapshot);
      const measuremnets = initialCollectionSnapshot.docs.map((doc) =>
        doc.data()
      );
      setInitialMeasuremnets(measuremnets);
    }
    async function goalMeasurementeData() {
      const weightCol = collection(db, `user/${uid}/goals`);
      // console.log(measuremnetCol);
      const sevenDaysSnapshot = await getDocs(weightCol);
      // console.log(collectionSnapshot);
      const data = sevenDaysSnapshot.docs.map((doc) => doc.data());
      setGoalsMeasuremnets(data);
    }

    const sevenDaysData = async () => {
      const sevenDaysCol = collection(db, `user/${uid}/sevenDays`);

      const sevenDaysSnapshot = await getDocs(sevenDaysCol);

      const data = sevenDaysSnapshot.docs.map((doc) => doc.data());
      setSevenDaysData(data);
    };
    const fetchBicepTime = async () => {
      const uid = Cookies.get("userID");
      const timeCol = collection(db, `user/${uid}/bicepsCurls`);
      const timeCollectionSnapshot = await getDocs(timeCol);
      const initalTime = timeCollectionSnapshot.docs.map((doc) => doc.data());
      setBicepLength(initalTime);
      setBicepsStartTimeCol(initalTime);
    };
    const fetchPushUpTime = async () => {
      const uid = Cookies.get("userID");
      const timeCol = collection(db, `user/${uid}/pushups`);
      const timeCollectionSnapshot = await getDocs(timeCol);
      const initalTime = timeCollectionSnapshot.docs.map((doc) => doc.data());
      setPushUpLength(initalTime);
      setPushUpStartTimeCol(initalTime);
    };
    const fetchSquatsTime = async () => {
      const uid = Cookies.get("userID");
      const timeCol = collection(db, `user/${uid}/squats`);
      const timeCollectionSnapshot = await getDocs(timeCol);
      const initalTime = timeCollectionSnapshot.docs.map((doc) => doc.data());
      setSquatsLength(initalTime);
      setSquatsStartTimeCol(initalTime);
    };
    const fetchCrunchesTime = async () => {
      const uid = Cookies.get("userID");
      const timeCol = collection(db, `user/${uid}/crunches`);
      const timeCollectionSnapshot = await getDocs(timeCol);
      const initalTime = timeCollectionSnapshot.docs.map((doc) => doc.data());
      setCrunchesLength(initalTime);
      setCrunchesStartTimeCol(initalTime);
    };
    const fetchQuotes = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_QUOTES_API_KEY,
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
      };

      fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
        .then((response) => response.json())
        .then((response) => setQuotes(response))
        .catch((err) => console.error(err));
    };
    fetchBicepTime();
    fetchPushUpTime();
    fetchSquatsTime();
    fetchCrunchesTime();
    initialMeasurementeData();
    goalMeasurementeData();
    sevenDaysData();
    fetchQuotes();
  }, []);

  console.log(favExcerise);

  const [bicepsTime, setBicepsTime] = useState("");
  const [pushUpTime, setPushUpTime] = useState("");
  const [squatsTime, setSquatsTime] = useState("");
  const [crunhesTime, setCrunhesTime] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [weightData, setWeightData] = useState("");
  const [bmiData, setBmiData] = useState("");
  useEffect(() => {
    if (Array.isArray(bicepsstartTimeCol)) {
      // Biceps
      const bicepTimeObj = bicepsstartTimeCol.map((item) => {
        return item.timeSpent;
      });

      const bicepTimeSpent = bicepTimeObj.reduce((acc, value) => {
        return acc + value;
      }, 0);

      setBicepsTime(bicepTimeSpent);
    }
    if (Array.isArray(pushUpstartTimeCol)) {
      // Push Ups
      const pushUpTimeObj = pushUpstartTimeCol.map((item) => {
        return item.timeSpent;
      });
      const pushUpTimeSpent = pushUpTimeObj.reduce((acc, value) => {
        return acc + value;
      }, 0);
      // console.log("PsuhUpTime:", pushUpTimeSpent);
      setPushUpTime(pushUpTimeSpent);
    }
    if (Array.isArray(squatsstartTimeCol)) {
      // Squats
      const squatsTimeObj = squatsstartTimeCol.map((item) => {
        return item.timeSpent;
      });
      const squatsTimeSpent = squatsTimeObj.reduce((acc, value) => {
        return acc + value;
      }, 0);
      // console.log("SquatTime:", squatsTimeSpent);
      setSquatsTime(squatsTimeSpent);
    }
    if (Array.isArray(crunchesstartTimeCol)) {
      // Crunches
      const crunchesTimeObj = crunchesstartTimeCol.map((item) => {
        return item.timeSpent;
      });
      const crunchesTimeSpent = crunchesTimeObj.reduce((acc, value) => {
        return acc + value;
      }, 0);
      // console.log("CrunchesTime:", crunchesTimeSpent);
      setCrunhesTime(crunchesTimeSpent);
    }
    if (Array.isArray(initialMeasuremnets)) {
      const weightObj = initialMeasuremnets.map((item) => {
        return item.data.weight;
      });

      setWeight(weightObj);
    }
    if (Array.isArray(goalsMeasuremnet)) {
      const weightGoalObj = goalsMeasuremnet.map((item) => {
        return item.data.weightGoal;
      });

      setGoalWeight(weightGoalObj);
    }
    // for bmi
    if (Array.isArray(sevenDaysData)) {
      const progressObj = sevenDaysData.map((item) => {
        return item.data.bmi;
      });

      setBmiData(progressObj);
    }
    // for weight
    if (Array.isArray(sevenDaysData)) {
      const weightObj = sevenDaysData.map((item) => {
        return item.data.weight;
      });

      setWeightData(weightObj);
    }
    if (
      bicepLength.length > pushUpLength.length &&
      bicepLength.length > squatsLength.length &&
      bicepLength.length > crunchesLength.length
    ) {
      setFavExcerise("Biceps");
      console.log(favExcerise);
    }
    if (
      pushUpLength.length > bicepLength.length &&
      pushUpLength.length > squatsLength.length &&
      pushUpLength.length > crunchesLength.length
    ) {
      setFavExcerise("Push Ups");
      console.log(favExcerise);
    }
    if (
      squatsLength.length > bicepLength.length &&
      squatsLength.length > pushUpLength.length &&
      squatsLength.length > crunchesLength.length
    ) {
      setFavExcerise("Squats");
      console.log(favExcerise);
    }
    if (
      crunchesLength.length > bicepLength.length &&
      crunchesLength.length > pushUpLength.length &&
      crunchesLength.length > squatsLength.length
    ) {
      setFavExcerise("Crunches");
      console.log(favExcerise);
    }
  }, [
    bicepsstartTimeCol,
    pushUpstartTimeCol,
    squatsstartTimeCol,
    crunchesstartTimeCol,
    initialMeasuremnets,
    goalsMeasuremnet,
    sevenDaysData,
    bicepLength,
    pushUpLength,
    squatsLength,
    crunchesLength,
    favExcerise,
  ]);
  const timeSpent = (bicepsTime + pushUpTime + squatsTime + crunhesTime) * 60;
  const percentageWeight = Math.abs((goalWeight / weight) * 100);
  const bicepPoints = bicepLength.length * 5;

  const pushUpPoints = pushUpLength.length * 5;

  const squatsPoints = squatsLength.length * 20;

  const crunchesPoints = crunchesLength.length * 10;

  const totalPoints =
    bicepPoints + pushUpPoints + squatsPoints + crunchesPoints;

  const cookiesPercentage = (totalPoints * 100) / 1000;
  // Pie Chart data
  const pieData = {
    labels: ["Goal", "Current", "Progress"],
    datasets: [
      {
        label: "Weight DataSet",
        data: [goalWeight, weight, percentageWeight],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
    option: [{ type: "doughnut" }],
  };
  // Line Graph Data for weight
  const weightLineGraphData = {
    labels: ["Day 7", "Day 14", "Day 21", "Day 28"],
    datasets: [
      {
        label: "Weight DataSet",
        data: weightData,
        backgroundColor: ["#fff"],
        borderColor: ["#F15C26"],
        hoverOffset: 4,
      },
    ],
    option: [{ type: "line" }],
  };
  // Line Graph Data for weight
  const bmiLineGraphData = {
    labels: ["Day 7", "Day 14", "Day 21", "Day 28"],
    datasets: [
      {
        label: "BMI DataSet",
        data: bmiData,
        backgroundColor: ["#fff"],
        borderColor: ["#F15C26"],
        hoverOffset: 4,
      },
    ],
    option: [
      {
        type: "line",
      },
    ],
  };
  return (
    <>
      <HomeHeader donutCount={totalPoints} />
      {/* 3 Container Column */}
      <Container
        sx={{
          display: "flex",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
        maxWidth="false"
      >
        {/* 3 Column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "column", sm: "column", xs: "column" },
            justifyContent: { lg: "space-between", sm: "center", xs: "center" },
            alignItems: "center",
            gap: "1rem",
            marginTop: "2rem",
            width: { lg: "90%", sm: "100%", xs: "100%" },
            // height: { lg: "100vh", sm: "100%", xs: "100%" },
          }}
        >
          {/* Welcome Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              background: "#fff",
              borderRadius: "24px",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  fontWeight: "700",
                  fontSize: { lg: "2rem", sm: "1.5rem", xs: "1rem" },
                }}
              >
                Welcome to AR FITNESS!
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: { lg: "1.5rem", sm: "1rem", xs: "1rem" },
                }}
              >
                <Avatar
                  src={photo}
                  alt={name}
                  sx={{
                    width: { lg: "3rem", sm: "2rem", xs: "1.5rem" },
                    height: { lg: "3rem", sm: "2rem", xs: "1.5rem" },
                  }}
                />
                {name}
              </Typography>
              <Typography variant="body1" color="primary">
                Staying active is key to a healthy lifestyle, and we're here to
                support you every step of the way.
              </Typography>
            </Box>
          </Box>
          {/* 3 Small Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", sm: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: { lg: "300px", sm: "300px", xs: "100%" },
                width: "100%",
                borderRadius: "24px",
              }}
              className="glassmorphism"
            >
              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  marginTop: "1rem",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Activity <AutoGraphOutlined />
              </Typography>
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                  width: "170px",
                  height: "170px",
                }}
              >
                <img src={activityImgURL} alt="Activity" width="100%" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.5rem",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    paddingBottom: "1rem",
                  }}
                >
                  You are{" "}
                  <span style={{ color: "#F15C26" }}>{cookiesPercentage}%</span>{" "}
                  away from having another Cookie! Perform an excerise to
                  increase that number faster now!
                </Typography>
                <Link to="/workout" className="link">
                  <Button variant="contained" color="secondary">
                    Get more Closer!!!
                  </Button>
                </Link>
              </Box>
            </Box>
            {weight.length === 0 || goalWeight.length === 0 ? (
              <Typography
                variant="h6"
                color="secondary"
                className="glassmorphism"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "24px",
                  padding: "0.5rem",
                  gap: "1rem",
                }}
              >
                Please fill the measuremnet form to get your analysis
                <Link to="/bm" className="link">
                  <Button variant="contained" color="secondary">
                    Measurement
                  </Button>
                </Link>
              </Typography>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  maxWidth: { lg: "300px", sm: "300px", xs: "100%" },
                  width: "100%",
                  borderRadius: "24px",
                  padding: "1rem",
                }}
                className="glassmorphism"
              >
                <Typography variant="h5" color="secondary">
                  Your Progress <DonutLargeOutlined />
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: "0.7rem",
                  }}
                >
                  <Pie
                    data={pieData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: true,
                          position: "right",
                        },
                      },
                      title: {
                        display: true,

                        color: "#fff",
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    padding: "1rem",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  You have accomplished{" "}
                  <span style={{ color: "#F15C26" }}>
                    {percentageWeight.toFixed(2)}%
                  </span>{" "}
                  of your goal
                </Typography>
                <Link to="/workout" className="link">
                  <Button variant="contained" color="secondary">
                    Burn more 🔥
                  </Button>
                </Link>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: { lg: "300px", sm: "300px", xs: "100%" },
                width: "100%",
                borderRadius: "24px",
                maxHeight: { lg: "500px", sm: "300px", xs: "100%" },
                height: "100%",
                padding: "1rem",
              }}
              className="glassmorphism"
            >
              <Typography variant="h5" color="secondary">
                Motivation Check <EmojiEmotionsOutlined />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "150px",
                  height: "150px",
                }}
              >
                <img src={motivation} alt="Activity" width="100%" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", padding: "0.5rem 0.5rem 0 0.5rem" }}
                  className="wrap-5"
                >
                  {quotes.content}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Graph Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: {
                lg: "space-between",
                sm: "center",
                xs: "center",
              },
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
              width: { lg: "100%", sm: "100%", xs: "100%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                width: { lg: "100%", sm: "100%", xs: "100%" },
                borderRadius: "24px",
                padding: "1rem",
              }}
              className="glassmorphism"
            >
              <Box>
                <Typography variant="h5" color="secondary">
                  Checklist before you Kick off !
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { lg: "100%", sm: "50%", xs: "100%" },
                  flexDirection: { lg: "row", sm: "column", xs: "column" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: { lg: "60%", sm: "60%", xs: "100%" },
                  }}
                >
                  <img src={reminderImgURL} alt="reminder" width="100%" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Water"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Towel"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Yoga Mat"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Dumble"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Headphones"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                  <Chip
                    icon={<Checkbox color="success" sx={{ color: "#fff" }} />}
                    label="Motivation"
                    variant="outlined"
                    sx={{
                      color: "#fff",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* 2 Column */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { lg: "space-around", xs: "center" },
            alignItems: "center",
            width: { lg: "40%", sm: "80%", xs: "100%" },
            padding: "1rem",
            // height: { lg: "100vh", sm: "100%", xs: "100%" },
          }}
        >
          {weight.length === 0 || goalWeight.length === 0 ? (
            <Typography
              variant="h6"
              color="secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              Please fill the measuremnet form to get your analysis
              <Link to="/bm" className="link">
                <Button variant="contained" color="secondary">
                  Measurement
                </Button>
              </Link>
            </Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",

                borderRadius: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  width: { lg: "100%", sm: "100%", xs: "80%" },
                  borderRadius: "24px",
                  background: "#fff",
                  color: "#00040f",
                  padding: "1rem",
                }}
                className="glassmorphism"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    width: { lg: "100%", sm: "100%", xs: "100%" },
                    borderRadius: "24px",
                    background: "#fff",
                    color: "#00040f",
                    padding: "1rem",
                  }}
                >
                  <Line
                    data={weightLineGraphData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          ticks: {
                            font: {
                              size: 15,
                              color: "#00040f",
                            },
                          },
                        },
                        y: {
                          ticks: {
                            font: {
                              size: 15,
                              color: "#00040f",
                            },
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          display: true,
                          position: "top",
                        },
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ textAlign: "center" }}
                >
                  Discover your body's story with our easy-to-use BMI checker
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  width: { lg: "100%", sm: "100%", xs: "80%" },
                  borderRadius: "24px",
                  background: "#fff",
                  color: "#00040f",
                  padding: "1rem",
                }}
                className="glassmorphism"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    width: { lg: "100%", sm: "100%", xs: "100%" },
                    borderRadius: "24px",
                    background: "#fff",
                    color: "#00040f",
                    padding: "1rem",
                  }}
                >
                  <Line
                    data={bmiLineGraphData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          ticks: {
                            font: {
                              size: 15,
                              color: "#00040f",
                            },
                          },
                        },
                        y: {
                          ticks: {
                            font: {
                              size: 15,
                              color: "#00040f",
                            },
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          display: true,
                          position: "top",
                        },
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ textAlign: "center" }}
                >
                  Track your weight changes with us and celebrate every
                  milestone along the way!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  width: { lg: "100%", sm: "100%", xs: "80%" },
                  backgroundColor: "#ffff",
                  borderRadius: "24px",
                  padding: "1rem",
                  flexDirection: "column",
                }}
                className="glassmorphism"
              >
                <Typography variant="h5" color="primary">
                  Popular Excerise of the week
                </Typography>
                <Box
                  sx={{
                    width: { lg: "100%", xs: "100%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      width: { lg: "50%", xs: "100%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={popular} alt="popular" width="100%" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      gap: "0.5rem",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" color="primary">
                      {favExcerise === "" ? (
                        "Refresh after some time"
                      ) : (
                        <Typography variant="body1" color="primary">
                          Congratulations on making{" "}
                          <span
                            style={{ color: "#F15C26", fontWeight: "bold" }}
                          >
                            {favExcerise}
                          </span>{" "}
                          your go-to workout - your dedication and hard work are
                          truly inspiring!
                        </Typography>
                      )}
                    </Typography>
                    <Link to="/workout">
                      <Button variant="contained" color="primary">
                        Start
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Home;
