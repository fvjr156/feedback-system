import React from "react";
import {
  Typography,
  Box,
  Paper,
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

const data = {
  Q97QyABtNEWjxl_CIYWrmwHypepq4k1ElL_6lzc9HCZUMkdMWDRQSkRCTjMxSDFRNVpXVUs4SlpSTS4u: [
    {
      question: "How would you rate the atmosphere of our restaurant?",
      question_type: "mch_d",
      order: 1,
      answers: ["Average", "Average", "Very poor"],
    },
    {
      question:
        "How satisfied were you with the cleanliness of our restaurant?",
      question_type: "mch_d",
      order: 2,
      answers: [
        "Somewhat satisfied",
        "Somewhat satisfied",
        "Very dissatisfied",
      ],
    },
    {
      question:
        "How would you rate the knowledge and professionalism of our staff?",
      question_type: "mch_d",
      order: 3,
      answers: ["Average", "Average", "Very poor"],
    },
    {
      question:
        "Were you satisfied with the quality and taste of the dishes you ordered?",
      question_type: "mch_p",
      order: 4,
      answers: ["Satisfied", "Satisfied", "Very dissatisfied"],
    },
    {
      question:
        "Do you feel that our menu offers a fair price for the quality of food served?",
      question_type: "mch_p",
      order: 5,
      answers: ["Neutral", "Strongly Agree", "Strongly Disagree"],
    },
    {
      question: "Would you recommend our restaurant to others?",
      question_type: "mch_b",
      order: 6,
      answers: ["Probably", "Not Sure", "Definitely not"],
    },
    {
      question:
        "Overall, how satisfied were you with your dining experience at our restaurant?",
      question_type: "mch_b",
      order: 7,
      answers: [
        "Somewhat satisfied",
        "Somewhat satisfied",
        "Very dissatisfied",
      ],
    },
    {
      question:
        "Do you have any suggestions for how we can improve our restaurant?",
      question_type: "ans_s",
      order: 8,
      answers: ["none", "none", "no"],
    },
  ],
};

function DonutChart({ data }) {
    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
  
  function SimplePieChart({ data }) {
    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
  
  function HorizontalBarChart({ data }) {
    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

function renderChart(question) {
    const answerCounts = question.answers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
      }, {});

  switch (question.question_type) {
    case "mch_d":
      return <DonutChart data={answerCounts} />;
    case "mch_p":
      return <SimplePieChart data={answerCounts} />;
    case "mch_b":
      return <HorizontalBarChart data={answerCounts} />;
    case "ans_s":
    default:
      return null;
  }
}

function Forms() {
  const questions = data.Q97QyABtNEWjxl_CIYWrmwHypepq4k1ElL_6lzc9HCZUMkdMWDRQSkRCTjMxSDFRNVpXVUs4SlpSTS4u;

  const sortedQuestions = questions.sort((a, b) => a.order - b.order);

  return (
    <Box>
      {sortedQuestions.map((question) => (
        <Paper key={question.order} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h6">{question.question}</Typography>
          {renderChart(question)}
        </Paper>
      ))}
    </Box>
  );
}

export default Forms;
