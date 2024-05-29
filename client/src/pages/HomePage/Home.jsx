import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";

function Home() {
  useEffect(() => {
    document.title = `${application_config.application_name} - Home`;
    Log.debug("Navigated to Home.");
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1">Hello World!</Typography>
    </Container>
  );
}

export default Home;
