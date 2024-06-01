import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../components/TextBased/Loading";
import { useTheme } from "@emotion/react";
import { Log } from "../../helpers/loghelpers";
import { api_operations } from "../../services/api";
import "../../styles/page_styles.css";
import ErrorMessage from "../../components/TextBased/ErrorMessage";
import { application_config } from "../../services/application_config";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function Responses() {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationCheck, setLocationCheck] = useState(true);
  const [responses, setResponses] = useState(null);
  const [open, setOpen] = useState({});

  useEffect(() => {
    document.title = `${application_config.application_name} - Forms`;
    Log.debug("Navigated to Responses.");
    function getLocation() {
      try {
        Log.success(
          `Selected form:\nName: ${location.state.form_name}\nForm ID: ${location.state.msforms_form_id}`
        );
      } catch (error) {
        Log.error("Responses accessed illegally.");
        setLocationCheck(false);
        setLoading(false);
      }
    }
    getLocation();
    async function get() {
      try {
        const response = await api_operations.getResponseByID(
          location.state.msforms_form_id
        );
        setResponses(response.data);
        setLoading(false);
        Log.success("Response data fetched.");
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    get();
  }, []);

  const handleToggle = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  if (!locationCheck) {
    return (
      <ErrorMessage
        message="Illegal Access"
        stack="Navigate to, and click at a form name at the Forms page to view its responses."
      />
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} stack={error.stack} />;
  }

  return (
    <div className="responses-main-div">
      <Box sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>{location.state.form_name}</Typography>
        <Typography variant="body1">
          Click on a response's dropdown button to reveal responses to each form
          question.
        </Typography>
      </Box>
      <Box sx={{ m: 2 }}>
        <Typography variant="h6" component="div" sx={{ mx: 4 }}>
          Tabulated Responses
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "1em", mt: 3 }}>
          <Table className="forms-table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}
                ></TableCell>
                <TableCell
                  align="center"
                  style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}
                >
                  Response ID
                </TableCell>
                <TableCell
                  align="center"
                  style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}
                >
                  Timestamp
                </TableCell>
                <TableCell
                  align="center"
                  style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}
                >
                  Respondent Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {responses.map((response, index) => (
                <React.Fragment key={response.id}>
                  <TableRow
                    style={{
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                    }}
                  >
                    <TableCell align="center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => handleToggle(response.id)}
                      >
                        {open[response.id] ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      {response.msforms_response_id}
                    </TableCell>
                    <TableCell align="center">
                      {response.submit_timestamp}
                    </TableCell>
                    <TableCell align="center">
                      {response.respondent_email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse
                        in={open[response.id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box margin={1}>
                          <Typography variant="h6" gutterBottom component="div">
                            Response Details
                          </Typography>
                          <Table size="small" aria-label="response-details">
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  align="center"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Question
                                </TableCell>
                                <TableCell
                                  align="center"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Answer
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {Object.entries(response.response_data).map(
                                ([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell align="left">
                                      {value.question}
                                    </TableCell>
                                    <TableCell align="left">
                                      {value.answer}
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ m: 2, mt: 5 }}>
        <Typography variant="h6" component="div" sx={{ mx: 4 }}>
          Response Data Analysis
        </Typography>
      </Box>
    </div>
  );
}

/*

    function renderFormQuestions(question) {
        get questiontype
        render type
    }

 */

export default Responses;