import React, { useEffect, useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReactMarkdown from "react-markdown";

function About() {

  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");

    fetch("/about.md")
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      })
      .catch((error) => {
        Log.error("Failed to fetch About content:", error);
      });

  }, []);

  const redirectToGithubRepo = () => {
    window.open("https://github.com/fvjr156/feedback-system.git", "_blank");
  };
  const redirectToMSFormsLink = () => {
    window.open("https://shiner-genuine-fawn.ngrok-free.app/survey", "_blank");
  };
  const redirectToPAFlowLink = () => {
    window.open(
      "https://make.powerautomate.com/environments/Default-c8d0de43-6d00-4534-a3c6-5fc22185ab9b/flows/88ca697e-7542-4a21-8e77-ddb7bc2f4284/details?v3=false",
      "_blank"
    );
  };

  return (
    <Box className="about-main-div" p={1}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        About {application_config.application_name}
      </Typography>
      <Paper elevation={5} sx={{ padding: 6, mx: 3, borderRadius: 5 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          ArciFS - Automated Response Collection and Monitoring System with
          Microsoft Forms and Power Automate Integration
        </Typography>
        <hr />
        <hr />
        <Typography
          variant="body1"
          component="div"
          sx={{ fontWeight: 500, mt: 2, mx: 6 }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Typography>
        <Paper
          elevation={5}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            width: "fit-content",
            p: 2,
            borderRadius: 5,
            mt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={redirectToGithubRepo}
        >
          <img src="/github-mark.svg" width={40} />
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: 600, mx: 3 }}
          >
            Access the Github repository here!
          </Typography>
          <OpenInNewIcon />
        </Paper>
        <Paper
          elevation={5}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            width: "fit-content",
            p: 2,
            borderRadius: 5,
            mt: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={redirectToMSFormsLink}
        >
          <img src="/msforms.svg" width={40} />
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: 600, mx: 3 }}
          >
            Access the Microsoft Forms form here!
          </Typography>
          <OpenInNewIcon />
        </Paper>
        <Paper
          elevation={5}
          sx={{
            cursor: "pointer",
            border: "1px solid black",
            width: "fit-content",
            p: 2,
            borderRadius: 5,
            mt: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={redirectToPAFlowLink}
        >
          <img src="/powerautomate.svg" width={40} />
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: 600, mx: 3 }}
          >
            Access the Power Automate flow here!
          </Typography>
          <OpenInNewIcon />
        </Paper>
      </Paper>
    </Box>
  );
}

export default About;
