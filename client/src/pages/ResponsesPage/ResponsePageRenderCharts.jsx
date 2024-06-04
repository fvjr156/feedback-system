import React from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function DonutChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }));
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

function SimplePieChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }));
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

function VerticalBarChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }));
  return (
    <ResponsiveContainer width="90%" height={200}>
      <BarChart
        data={chartData}
        layout="horizontal"
        margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="number" />
        <XAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function HorizontalBarChart({ data }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }));
  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ top: 20, right: 20, left: 50, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function AnswerList({ answers }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Short Answers
      </Typography>
      <Paper elevation={3} sx={{ height: "10em", p: 2, overflowY: "auto" }}>
        <List>
          {answers.map((answer, index) => (
            <ListItem key={index}>
              <ListItemText primary={answer} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

function aggregateCheckboxAnswers(answers) {
  const aggregatedAnswers = answers
    .map((answer) => JSON.parse(answer))
    .flat()
    .reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
  return aggregatedAnswers;
}

export function VisualizeAnswerData({ data }) {
  let answerCounts = {};

  if (data.question_type === "mch_ba") {
    answerCounts = aggregateCheckboxAnswers(data.answers);
  } else {
    answerCounts = data.answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
  }
  switch (data.question_type) {
    case "mch_d":
      return <DonutChart data={answerCounts} />;
    case "mch_p":
      return <DonutChart data={answerCounts} />;
    case "mch_b":
      return <VerticalBarChart data={answerCounts} />;
    case "mch_ba":
      return <VerticalBarChart data={answerCounts} />;
    case "ans_s":
      return <AnswerList answers={data.answers} />;
    default:
      return null;
  }
}
