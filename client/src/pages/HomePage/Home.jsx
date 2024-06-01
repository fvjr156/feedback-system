import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";
import { api_operations } from "../../services/api";
import Loading from "../../components/TextBased/Loading";
import ErrorMessage from "../../components/TextBased/ErrorMessage";

function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${application_config.application_name} - Home`;
    Log.debug("Navigated to Home.");

    async function testServer() {
      try {
        await api_operations.testConnection();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    testServer();
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
    <div className="home-main-div">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Home Page
      </Typography>
      
    </div>
  );
}

export default Home;
