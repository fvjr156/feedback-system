import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";

function NotFound() {
  useEffect(() => {
    document.title = `Not Found`;
    console.log('[%cDebug%c] This page doesn\'t exist', 'color: red; font-weight: bold;', 'color: black;');
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="body1">
        The page you're looking for does not exist.
      </Typography>
    </Container>
  );
}

export default NotFound;
