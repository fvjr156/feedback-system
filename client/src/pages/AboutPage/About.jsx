import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";

function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");
  }, []);

  return (
    <Container sx={{ backgroundColor: '#BAB9AF', borderRadius: 3, marginTop: 1, height: 650, minWidth: 1420, padding: 2}}>
      <Typography variant="h3" gutterBottom sx={{fontSize: 26}}>
        Automated Response Collection and Monitoring System with Microsoft Forms and <br/> Power Automate Integration <br/> Codename: ArciFs
      </Typography>
      <Box sx={{backgroundColor: 'white', width: 180, height: 45, borderRadius: 1, textAlign: 'center'}}>
      <Typography variant="body1" sx={{marginTop: 55}}>
         <a href="https://github.com/Promatues/feedback-system.git"> Github Repository</a>
      </Typography>
      </Box>
    </Container>
  );
}

export default About;
