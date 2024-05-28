import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";

function Home() {
  useEffect(() => {
    document.title = `${application_config.application_name} - Home`;
    console.log('[%cDebug%c] Navigated to the Homepage', 'color: purple; font-weight: bold;', 'color: black;');
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="div">
        Home Page
      </Typography>
      <Typography variant="body1"></Typography>
    </Container>
  );
}

export default Home;
