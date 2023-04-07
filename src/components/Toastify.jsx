import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Toastify = ({ status, message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity={status}>
        {message}
      </Alert>
    </Stack>
  );
};

export default Toastify;
