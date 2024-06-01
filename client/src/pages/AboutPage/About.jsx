import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";

function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");
  }, []);

  return (
    <div className="about-main-div">
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1"></Typography>
    </div>
  );
}

export default About;
