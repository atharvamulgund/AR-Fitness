import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Yoga from "./pages/Yoga";

import Counter from "./components/counter";
import Landing from "./pages/landing.react";
import Login from "./pages/Login.react";
import Register from "./pages/Register.react";
import Weightloss from "./pages/Weightloss.react";
import Weightgain from "./pages/Weightgain.react";
import Healthy from "./pages/Healthy.react";
import Virabhadrasana from "./components/virabhadrasana";
import Trikonasana from "./components/trikonasana";
import Workout from "./pages/Workout.react";
import AdhoMukhaSvanasana from "./components/AdhoMukhaSvanasana";
import { Container, Box, Typography } from "@mui/material";
import logo from "./assets/images/logo-with-text.svg";
import Diet from "./pages/Diet.react";
import ResetPassword from "./pages/ResetPassword.rect";
import BicepCurls from "./components/BicepCurls";
import PushUps from "./components/PushUps";
import Squats from "./components/Squats";

function App() {
  const location = window.location.pathname;
  if (location === "/yoga" && location === "/bicepcurl") {
    const videoOutput = document.getElementsByClassName("input_video");
    const canvas = document.getElementsByClassName("output_canvas");
    videoOutput.style.display = "flex";
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} exact />
        <Route path="/home" element={<Home />} exact />

        <Route path="/Diet" element={<Diet />} exact />
        <Route path="/yoga" element={<Yoga />} exact />

        <Route path="/weightloss" element={<Weightloss />} />
        <Route path="/weightgain" element={<Weightgain />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/bicepcurls" element={<BicepCurls />} />
        <Route path="/squats" element={<Squats />} exact />
        <Route path="/pushups" element={<PushUps />} exact />
        <Route
          path="/crunches"
          element={<Counter exercise={"crunches"} />}
          exact
        />
        <Route path="/workout" exact element={<Workout />} />
        <Route path="/virabhadrasana" element={<Virabhadrasana />} />
        <Route path="/trikonasana" element={<Trikonasana />} />
        <Route path="/AdhoMukhaSvanasana" element={<AdhoMukhaSvanasana />} />
      </Routes>
      {/* footer */}
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          color: "#fff",
          gap: "2rem",
        }}
        gutterBottom
      >
        <Box>
          <img src={logo} alt="logo" width="60%" />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "100" }}>
          © 2021 Ar Fitness. All rights reserved.
        </Typography>
      </Container>
    </BrowserRouter>
  );
}

export default App;
