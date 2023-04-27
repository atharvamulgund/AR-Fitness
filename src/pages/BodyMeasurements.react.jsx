import React, { useState } from "react";
import initialImgURL from "../assets/images/initialIMG.svg";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import Cookies from "js-cookie";
import Toastify from "../components/Toastify";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/header/HomeHeader.react";
import { v4 } from "uuid";

const BodyMeasurements = () => {
  const navigate = useNavigate();
  const uid = Cookies.get("userID");
  const userData = Cookies.get("profile");

  const [weight, setWeight] = useState("");
  const [weightGoal, setWeightGoal] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmiGoal, setBmiGoal] = useState("");
  const [bodyTypeGoal, setBodyTypeGoal] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setBodyTypeGoal(event.target.value);
  };

  //   BMI Calculator
  const bmiVar = weight / ((height / 100) * (height / 100));

  const initialMeasurement = async () => {
    const data = {
      weight,
      height,
      bmi: bmiVar,
      age: age,
      bodyType:
        bmiVar > 30
          ? "obese"
          : bmiVar >= 20 && bmiVar <= 25
          ? "Healthy"
          : bmiVar >= 18.5 && bmiVar <= 20
          ? "Fit"
          : bmiVar < 18.5
          ? "Underweight"
          : "Overweight",
    };
    const docRef = doc(db, `user/${uid}/initialMeasurements`, uid);
    await setDoc(docRef, {
      data,
      timestamp: serverTimestamp(),
    });
    const sevenDaysdocRef = doc(db, `user/${uid}/sevenDays`, v4());
    await setDoc(sevenDaysdocRef, {
      data,
      timestamp: serverTimestamp(),
      id: v4(),
    });
  };
  const goalMeasurement = async () => {
    const data = {
      weightGoal,

      bmiGoal,
      bodyTypeGoal,
    };
    const docRef = doc(db, `user/${uid}/goals`, uid);
    await setDoc(docRef, {
      data,
      timestamp: serverTimestamp(),
    });
  };
  const handleClick = () => {
    if (
      weight === "" ||
      height === "" ||
      weightGoal === "" ||
      age === "" ||
      bmiGoal === "" ||
      bodyTypeGoal === ""
    ) {
      setStatus("error");
      setMessage("Please fill all the fields");
    } else {
      initialMeasurement();
      goalMeasurement();
      setStatus("success");
      setMessage("Your details were noted");
      navigate("/home");
    }
  };
  return (
    <>
      <HomeHeader />
      {status !== "" ? <Toastify status={status} message={message} /> : null}
      <Container
        sx={{
          display: "flex",
          justifyContent: { lg: "space-around", xs: "center" },
          height: { lg: "100vh" },
          alignItems: "center",
          flexDirection: { lg: "row", sm: "row", xs: "column" },
          padding: "2rem",
          position: "relative",
        }}
        maxWidth="flase"
        className="gradient__bg_white"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "40%", sm: "50%", xs: "100%" },
          }}
        >
          <img src={initialImgURL} alt="Let's Go" width="100%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              color="secondary"
              sx={{ fontSize: { lg: "2.5rem", sm: "2rem", xs: "1.5rem" } }}
            >
              Lets Begin with Basics
            </Typography>
            <Typography variant="h6" color="#fff">
              Enter your body measurements
            </Typography>
          </Box>
          {/*  Height */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TextField
              label="Height(CM)"
              variant="outlined"
              type="number"
              color="secondary"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
              onChange={(e) => setHeight(e.target.value)}
            />
            <TextField
              label="Age"
              variant="outlined"
              type="number"
              color="secondary"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          {/*  Weight */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TextField
              label="Weight(KG)"
              type="number"
              variant="outlined"
              color="secondary"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              label="Weight Goal(KG)"
              variant="outlined"
              type="number"
              color="secondary"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
              onChange={(e) => setWeightGoal(e.target.value)}
            />
          </Box>
          {/* BMI */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TextField
              label="BMI"
              value={bmiVar ? bmiVar.toFixed(2) : "Enter Weight and Height"}
              variant="standard"
              color="success"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
            />
            <TextField
              label="BMI GOAL"
              variant="outlined"
              color="secondary"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
              onChange={(e) => setBmiGoal(e.target.value)}
            />
          </Box>
          {/* Body Type */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <TextField
              label="Body Type"
              value={
                bmiVar > 30
                  ? "obese"
                  : bmiVar >= 20 && bmiVar <= 25
                  ? "Healthy"
                  : bmiVar >= 18.5 && bmiVar <= 20
                  ? "Fit"
                  : bmiVar < 18.5
                  ? "Underweight"
                  : "Overweight"
              }
              variant="standard"
              color="success"
              className="placeholder"
              sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexDirection: { lg: "row", sm: "row", xs: "column" },
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "#fff" }}>
                Goal Body Type:
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bodyTypeGoal}
                onChange={handleChange}
                sx={{
                  input: { color: "#000" },
                  label: { color: "#fff" },
                  background: "#fff",
                }}
              >
                <MenuItem value="Fit">Fit</MenuItem>
                <MenuItem value="Muscular">Muscular</MenuItem>
                <MenuItem value="Lean">Lean</MenuItem>
              </Select>
            </Box>
          </Box>

          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BodyMeasurements;
