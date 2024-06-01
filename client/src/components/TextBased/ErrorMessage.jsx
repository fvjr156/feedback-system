import React from "react";
import { Typography } from "@mui/material";

function ErrorMessage({ message, stack }) {
  return (
    <div className="error-box">
      <Typography variant="body1" component="div" color="error">
        Error: {message}
      </Typography>
      <Typography variant="body2" component="div" color="gray">
        Stack: {stack}
      </Typography>
    </div>
  );
}

export default ErrorMessage;
