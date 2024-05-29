import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";

function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        
      </Typography>
    </Container>
  );
}

export default About;
