import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { application_config } from "../../services/application_config";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Link,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loading from "../../components/TextBased/Loading";
import { useTheme } from "@emotion/react";
import { Log } from "../../helpers/loghelpers";
import { api_operations } from "../../services/api";
import "../../styles/page_styles.css";
import ErrorMessage from "../../components/TextBased/ErrorMessage";

function Forms() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [forms, setForms] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dailyResponses, setDailyResponses] = useState([]);
  const [responseCount, setResponseCount] = useState(0);
  const [formCount, setFormCount] = useState(0);

  const gotoResponses = function (msforms_form_id, form_name) {
    navigate("/responses", {
      state: { msforms_form_id: msforms_form_id, form_name: form_name },
    });
  };

  useEffect(() => {
    document.title = `${application_config.application_name} - Forms`;
    Log.debug("Navigated to Forms.");

    const fetchData = async () => {
      try {
        const formsResponse = await api_operations.getForms();
        const statsResponse = await api_operations.getStats.forms();

        setForms(formsResponse.data);
        setFormCount(statsResponse.data.total_forms);
        setResponseCount(statsResponse.data.total_responses);

        const rechartsData = Object.entries(
          statsResponse.data.daily_responses
        ).map(([date, count]) => ({
          timestamp: date,
          count: count,
        }));
        setDailyResponses(rechartsData);

        setLoading(false);
        Log.success("Forms retrieved successfully.");
      } catch (error) {
        console.error("Error fetching forms:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} stack={error.stack} />;
  }

  return (
    <div className="forms-main-div">
      <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
        Forms
      </Typography>
      <Typography variant="h6" component="div">
        Click on the form name to check the form's responses.
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box
          sx={{ backgroundColor: theme.palette.secondary.light, flex: 2, p: 2 }}
          className="forms-stat-box-1"
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
              Number of Forms:
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {formCount}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
              Number of Responses:
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              {responseCount}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ backgroundColor: "white", flex: 3, p: 2 }}
          className="forms-stat-box-2"
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mb: 1, fontWeight: 400 }}
          >
            Daily Response Count:
          </Typography>
          <Box sx={{ mx: 5 }}>
            <ResponseLineGraph data={dailyResponses} />
          </Box>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ borderRadius: "1em", mt: 3 }}>
        <Table className="forms-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Form Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forms.map((form) => (
              <TableRow key={form.id}>
                <TableCell>{form.id}</TableCell>
                <TableCell>
                  <Link
                    onClick={() => {
                      gotoResponses(form.msforms_form_id, form.form_name);
                    }}
                    sx={{
                        color: "black",
                        cursor: "pointer",
                        '&:hover': {
                            color: theme.palette.secondary.main
                        }
                    }}
                  >
                    {form.form_name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function ResponseLineGraph({ data }) {
  useEffect(() => {
    Log.success("Daily Response Count rendered successfully.");
  }, []);
  return (
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
  );
}

export default Forms;
