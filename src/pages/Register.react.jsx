import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Header from "../components/header/header.react";
import registerImg from "../assets/images/register.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <>
      <Header />
      <Container
        maxwidth="false"
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { lg: "row-reverse", sm: "column", xs: "column" },
          alignItems: "center",
          height: "100%",
          width: { lg: "100%", sm: "80%", xs: "80%" },
          background: "#fff",
          borderRadius: "24px",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
          }}
        >
          <img src={registerImg} alt="register" width="100%" />
        </Box>
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            padding: "10px",
          }}
        >
          <Typography variant="h4" color="secondary">
            Register
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{
              textAlign: "center",
            }}
          >
            Not a user yet? Fill up the form below to register!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <TextField
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="email"
              color="secondary"
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              color="secondary"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              color="secondary"
            />
            <Button variant="contained" onClick={register}>
              Register
            </Button>
          </Box>
          <Box sx={{}}>
            <Button
              variant="contained"
              color="secondary"
              onClick={signInWithGoogle}
            >
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </Button>
          </Box>
          <Box>
            <Divider color="primary" />
            <Typography variant="h6" color="primary">
              Already have an account?{" "}
              <a href="/login" className="link-secondary">
                Login
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
