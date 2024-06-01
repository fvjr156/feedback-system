import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { Log } from "../../helpers/loghelpers";

function NotFound() {
  useEffect(() => {
    document.title = `Not Found`;
    Log.error("This page doesn't exist");
  }, []);

  return (
    <div className="nf-main-div">
      <Typography variant="h4" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for does not exist.
      </Typography>
    </div>
  );
}

export default NotFound;
