import React, { useEffect, useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { application_config } from "../../services/application_config";
import { Log } from "../../helpers/loghelpers";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReactMarkdown from "react-markdown";

function About() {
  useEffect(() => {
    document.title = `${application_config.application_name} - About Page`;
    Log.debug("Navigated to About.");
  }, []);

  const redirectToGithubRepo = () => {
    window.open("https://github.com/fvjr156/feedback-system.git", "_blank");
  };
  const redirectToMSFormsLink = () => {
    window.open("https://server.arcifs.versatily.website/survey", "_blank");
  };
  const redirectToPAFlowLink = () => {
    window.open(
      "https://make.powerautomate.com/environments/Default-c8d0de43-6d00-4534-a3c6-5fc22185ab9b/flows/88ca697e-7542-4a21-8e77-ddb7bc2f4284/details?v3=false",
      "_blank"
    );
  };

  return (
    <Box className="about-main-div" p={1}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
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
          <AboutContent />
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
        <Typography variant="body2" sx={{mt: 5}}>
          ArciFS v1.1 (240604)
        </Typography>
      </Paper>
    </Box>
  );
}

function AboutContent() {
  return (
    <>
      <p>
        Created for the STI College Marikina's Senior High School Exposition
        2024<br/>and for the Customer Satisfaction Survey for Cucina de Marquina
      </p>
      <br/>
      <p>Made with &lt;3 by: </p>
      <ul style={{ marginLeft: "3em" }}>
        <li>
          Villanueva, Fernando Jr. (application design, fullstack development){" "}
        </li>
        <li>Gutang, Glenniel (application frontend designing)</li>
        <li>Macasilhig, Khyle Myrvin (application frontend designing)</li>
      </ul>
      <br />
      <p>ARCMS (Feedback System) Research Team: </p>
      <ul style={{ marginLeft: "3em" }}>
        <li>Baltazar, Janine (research lead)</li>
        <li>Alina, Ronnel Joseph</li>
        <li>Gutang, Glenniel</li>
        <li>Iturrios, Foilan Routhe</li>
        <li>Macapagal, Christian Jay</li>
        <li>San Miguel, Lance Aryton</li>
        <li>Tomaneng, John Michael</li>
        <li>Villanueva, Fernando Jr.</li>
        <li>Ymata, Lance Gabriel</li>
      </ul>
      <br/>
      <p>students of IT-MAWD strand of AY 2023-2024</p>
    </>
  );
}

export default About;
