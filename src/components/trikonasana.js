import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";
import yoga1 from "../assets/images/trikonasana.png";
import { Box, Container, Typography } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { v4 } from "uuid";
import Cookies from "js-cookie";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Trikonasana = () => {
  const navigate = useNavigate();
  if (!Cookies.get("userID")) {
    alert("Please Login");
    navigate("/");
  }
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  var t = new Date().getTime();
  const speech = window.speechSynthesis;
  const speak = (count) => {
    const object = new SpeechSynthesisUtterance(count);
    object.lang = "en-US";
    speech.speak(object);
  };
  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      // index 12,14,16 11,13,15, range 125,145
      const leftHand = [];
      const rightHand = [];
      for (let i = 11; i < 17; i++) {
        let obj = {};
        obj["x"] = position[i].x * width;
        obj["y"] = position[i].y * height;
        if (i % 2 === 0) {
          rightHand.push(obj);
        } else {
          leftHand.push(obj);
        }
      }

      // index 12,24,26, range 125,145
      const back = [];
      const indexBack = [12, 24, 26];
      for (let i = 0; i < 3; i++) {
        let obj = {};
        obj["x"] = position[indexBack[i]].x * width;
        obj["y"] = position[indexBack[i]].y * height;
        back.push(obj);
      }

      const angleBack = Math.round(angleBetweenThreePoints(back));
      const angleLeftHand = Math.round(angleBetweenThreePoints(leftHand));
      const angleRightHand = Math.round(angleBetweenThreePoints(rightHand));

      let inRangeBack;
      let inRangeLeftHand;
      let inRangeRightHand;
      if (angleBack >= 120 && angleBack <= 140) {
        inRangeBack = true;
      } else {
        inRangeBack = false;
      }
      if (angleLeftHand >= 165 && angleLeftHand <= 195) {
        inRangeLeftHand = true;
      } else {
        inRangeLeftHand = false;
      }
      if (angleRightHand >= 165 && angleRightHand <= 195) {
        inRangeRightHand = true;
      } else {
        inRangeRightHand = false;
      }

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.lineWidth = 8;

        canvasCtx.moveTo(back[i].x, back[i].y);
        canvasCtx.lineTo(back[i + 1].x, back[i + 1].y);
        if (inRangeBack) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        canvasCtx.beginPath();
        canvasCtx.moveTo(leftHand[i].x, leftHand[i].y);
        canvasCtx.lineTo(leftHand[i + 1].x, leftHand[i + 1].y);
        if (inRangeLeftHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();

        canvasCtx.beginPath();
        canvasCtx.moveTo(rightHand[i].x, rightHand[i].y);
        canvasCtx.lineTo(rightHand[i + 1].x, rightHand[i + 1].y);
        if (inRangeRightHand) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();
      }

      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        //right hand
        canvasCtx.arc(rightHand[i].x, rightHand[i].y, 8, 0, Math.PI * 2);
        //left hand
        canvasCtx.arc(leftHand[i].x, leftHand[i].y, 8, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();

        canvasCtx.beginPath();
        canvasCtx.arc(back[i].x, back[i].y, 8, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }

      if (!(inRangeBack && inRangeLeftHand && inRangeRightHand)) {
        t = new Date().getTime();
      }

      canvasCtx.fillStyle = "green";
      canvasCtx.font = "30px aerial";
      canvasCtx.fillText(angleLeftHand, leftHand[1].x + 20, leftHand[1].y + 20);
      canvasCtx.fillText(
        angleRightHand,
        rightHand[1].x - 120,
        rightHand[1].y + 20
      );
      canvasCtx.fillText(angleBack, back[1].x, back[1].y + 40);

      canvasCtx.font = "30px aerial";
      canvasCtx.fillStyle = "white";
      const timer = canvasCtx.fillText(
        "Seconds holded: ".concat(
          String(Math.round((new Date().getTime() - t) / 1000))
        ),
        10,
        40
      );

      canvasCtx.restore();
      speak(timer);
    }
  }

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });
  const handleClick = () => {
    const ID = Cookies.get("userID");
    const userTime = onResult();
    const docRef = doc(db, `user/${ID}/trikonasana`, v4());
    const repsCounter = setDoc(docRef, {
      timer: userTime,
      timeStamp: serverTimestamp(),
      uid: ID,
    });
    console.log(repsCounter);
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { lg: "space-between", sm: "center", xs: "center" },
          height: "100vh",
          width: "100%",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
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
              width: "80%",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "secondary",
            backgroundColor: "#fff",
            borderRadius: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: "center", padding: "1rem" }}
            color="primary"
          >
            Try to mimic this posture to perform Trikonasana
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={yoga1} alt="Yoga 2" width="100%"></img>
          </Box>
          <Link to="/yoga" className="link">
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{ cursor: "pointer", background: "#f15a24" }}
              onClick={handleClick}
            >
              back
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Trikonasana;
