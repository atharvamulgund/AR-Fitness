import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../firebase";
import resetPasswordImg from "../assets/images/Reset password-cuate.svg";
import Header from "../components/header/header.react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          alignItems: "center",
          height: { lg: "100vh", xs: "100%" },
          width: { lg: "100%", sm: "80%", xs: "80%" },
          background: "#fff",
          borderRadius: "24px",
          mt: "1rem",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
          }}
        >
          <img src={resetPasswordImg} alt="Reset Password" />
        </Box>
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Reset Password
          </Typography>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            color="secondary"
          />
          <Button variant="contained" onClick={() => sendPasswordReset(email)}>
            Reset Email
          </Button>
          <Typography variant="h6" align="center">
            Don't have an account?{" "}
            <Link to="/register" className="link-secondary">
              Register
            </Link>{" "}
            now!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ResetPassword;
