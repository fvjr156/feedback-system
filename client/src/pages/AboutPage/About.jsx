import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";

function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    console.log('[%cDebug%c] Navigated to About', 'color: purple; font-weight: bold;', 'color: black;');
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        This app is an application built on a memorandum on the Lorem Ipsum
        framework. Good vibrations, from Toshiki (Punpun, not Kadomatsu).
      </Typography>
    </Container>
  );
}

export default About;
