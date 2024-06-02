import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";
import { api_operations } from "../../services/api";
import Loading from "../../components/TextBased/Loading";
import ErrorMessage from "../../components/TextBased/ErrorMessage";

function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState("Checking...");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    document.title = `${application_config.application_name} - Home`;
    Log.debug("Navigated to Home.");

    async function testServer() {
      try {
        await api_operations.testConnection();
        setLoading(false);
        setServerStatus("Server is up and running");
      } catch (error) {
        setLoading(false);
        setError(true);
        setServerStatus("Server Down or Unresponsive");
      }
    }

    testServer();

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (error) {
    return (
      <ErrorMessage
        message="Server Down or Unresponsive"
        stack="Contact ArciFS developer for assistance."
      />
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Box className="home-main-div" p={1}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Home Page
      </Typography>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 5 }}>
            <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
              Server Status
            </Typography>
            <Typography variant="body1">{serverStatus}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 5 }}>
            <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
              Current Time
            </Typography>
            <Typography variant="body1">{currentTime.toLocaleTimeString()}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
