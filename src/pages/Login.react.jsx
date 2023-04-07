import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Box, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import login from "../assets/images/login.svg";
import Header from "../components/header/header.react";
import CircularProgress from "@mui/material/CircularProgress";
function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      <CircularProgress />;
      return;
    }
    if (user) navigate("/home");
  }, [user, loading, navigate]);
  const handleClick = async () => {
    // const userData = await signInWithGoogle();
    // console.log(userData);
    // const uid = Cookies.get("userId");
    // localStorage.setItem("userID", userData.uid);
    // localStorage.setItem("uat", userData.accessToken);
    // const docRef = doc(db, "bochya", uid);
    // const userDataLog = await setDoc(docRef, {
    //   userID: uid,
    //   timeStamp: serverTimestamp(),
    // });
    // console.log(userDataLog);
    signInWithGoogle();
  };
  return (
    <>
      <Header />
      <Container
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: { lg: "80%", sm: "80%", xs: "80%" },
          borderRadius: "24px",
        }}
        className="glassmorphism"
      >
        <Box
          sx={{
            width: { lg: "40%", sm: "50%", xs: "100%" },
          }}
        >
          <img src={login} alt="login" width="100%" />
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
          <Typography
            variant="h4"
            color="secondary"
            sx={{
              fontSize: { lg: "2rem", xs: "1.5rem" },
            }}
          >
            Verify Identity
          </Typography>
          <Typography
            variant="h6"
            color="#fff"
            sx={{
              textAlign: "center",
              fontSize: { lg: "1.5rem", xs: "1rem" },
            }}
          >
            Verify your identity to securely access your account
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                display: "flex",
                gap: "0.5rem",
              }}
              onClick={handleClick}
              size="small"
            >
              <GoogleIcon />
              Login with Google
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Login;
