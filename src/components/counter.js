import React, { useState, useEffect } from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef } from "react";
import angleBetweenThreePoints from "./angle";
import { Button } from "@material-ui/core";

import crunches from "../assets/images/crunches.png";
import imgURL from "../assets/images/Crunch.gif";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import Cookies from "js-cookie";
const exrInfo = {
  crunches: {
    index: [12, 24, 26],
    ul: 130,
    ll: 50,
  },
};

let count = 0;
let dir = 0;
let angle = 0;

const speech = window.speechSynthesis;
const speak = (count) => {
  const object = new SpeechSynthesisUtterance(count);
  object.lang = "en-US";
  speech.speak(object);
};
function Counter(props) {
  //const [exr, setExr] = useState("bicepCurls");

  let imgSource;

  // Get Time
  useEffect(() => {
    const startTime = new Date();
    const startTimeSec = startTime.getSeconds();

    localStorage.setItem("crunchesStartTime", startTimeSec);
    console.log(startTime);
  }, []);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //const count = useRef(null);
  //const dir = useRef(null);
  //let angle = useRef();

  const countTextbox = useRef(null);
  const previousValue = useRef("");
  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;

      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo[props.exercise].index;

      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }
      //console.log(upadatedPos)
      angle = Math.round(angleBetweenThreePoints(upadatedPos));
      //console.log("Angle is getting updated ",angle)

      // Count reps
      //0 is down, 1 is up
      if (angle > exrInfo[props.exercise].ul) {
        //console.log("test angle ",angle)
        if (dir === 0) {
          //count.current = count.current + 0.5
          console.log(count, " ", dir, " decrement ", angle);
          dir = 1;
        }
      }
      if (angle < exrInfo[props.exercise].ll) {
        if (dir === 1) {
          count = count + 1;
          speak(count);
          console.log(count, " ", dir, " increment ", angle);
          dir = 0;
        }
      }

      //console.log(count.current)
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      canvasCtx.font = "40px aerial";
      canvasCtx.fillText(angle, upadatedPos[1].x + 10, upadatedPos[1].y + 40);
      canvasCtx.restore();
    }
  }
  const [cameraWidth, setCamera] = useState("");
  const cameraRef = useRef(null);
  useEffect(() => {
    let camera = null;
    console.log("rendered");
    count = 0;
    dir = 0;

    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          countTextbox.current.value = count;
          //console.log(count, dir)
          //console.log("hello",countTextbox.current.value)
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });
  //console.log(props)
  function resetCount() {
    console.log("clicked");
    count = 0;
    dir = 0;
  }
  const handleClick = () => {
    const ID = Cookies.get("userID");
    const docRef = doc(db, `user/${ID}/crunches`, uuidv4());
    const startTimeStamp = localStorage.getItem("crunchesStartTime");
    const endTimeVar = new Date();
    const endTimeStamp = endTimeVar.getSeconds();
    const timeSpent = endTimeStamp - startTimeStamp;
    const repsCounter = setDoc(docRef, {
      reps: count,
      startTimeStamp: startTimeStamp,
      endTimeStamp: endTimeStamp,
      timeSpent: Math.abs(timeSpent),
      exceriseName: "Crunches",
      uid: ID,
    });
    console.log(repsCounter);
  };
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "2rem",
          flexDirection: { lg: "row", xs: "column" },
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            borderRadius: "2rem",
            width: "100%",
          }}
        >
          <Webcam ref={webcamRef} className="full-width" />
          <canvas
            ref={canvasRef}
            className="full-width"
            style={{
              position: "absolute",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "2rem",
            width: { lg: "40%", xs: "100%" },
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            style={{ textTransform: "capitalize" }}
          >
            Crunches
          </Typography>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={imgURL} width="100%" alt="Crunches"></img>
          </Box>
          <br></br>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                padding: "1rem",
              }}
            >
              <Typography variant="h6" color="secondary">
                Count
              </Typography>
              <input
                variant="filled"
                ref={countTextbox}
                value={count}
                textAlign="center"
                style={{
                  height: 50,
                  fontSize: 20,
                  width: 80,
                  padding: "1rem",
                  border: "2px solid orange",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                borderRadius: "2rem",
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={resetCount}
              >
                Reset Counter
              </Button>
              <Link
                to="/workout"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  back
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Counter;
