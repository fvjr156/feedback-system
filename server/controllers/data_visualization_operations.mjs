import { Form, FormResponse } from "../models/database_model.mjs";

function countResponsesByDate(data) {
  const dateCounts = {};

  data.forEach((response) => {
    const utcDate = new Date(response.submit_timestamp);
    const date = utcDate.toISOString().split("T")[0];
    if (dateCounts[date]) {
      dateCounts[date]++;
    } else {
      dateCounts[date] = 1;
    }
  });

  return dateCounts;
}

function extractDataValues(responses) {
  return responses.map((response) => response.dataValues);
}

const daily_responses = async function () {
  const responses = await FormResponse.findAll();
  const extractedResponses = extractDataValues(responses);
  const responsesCountByDate = countResponsesByDate(extractedResponses);
  return responsesCountByDate;
};

const total_forms = async function () {
  const forms = await Form.findAll();
  return forms.length;
};

const total_responses = async function () {
  const responses = await FormResponse.findAll();
  return responses.length;
};

const formsPageStats = async function () {
  const dailyResponses = await daily_responses();
  const totalForms = await total_forms();
  const totalResponses = await total_responses();

  return {
    daily_responses: dailyResponses,
    total_forms: totalForms,
    total_responses: totalResponses,
  };
};

export const GET_FormsPageStats = async (req, res) => {
  try {
    const stats = await formsPageStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error(
      "[error] An error occurred while attempting GET_FormsPageStats\n\n",
      error
    );
    res
      .status(500)
      .send("An error occurred while attempting GET_FormsPageStats");
  }
};
