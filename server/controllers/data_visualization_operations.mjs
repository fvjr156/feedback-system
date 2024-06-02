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

const extractDataValues = function (responses) {
  return responses.map((response) => response.dataValues);
};

const daily_responses = async function () {
  const responses = await FormResponse.findAll();
  const extractedResponses = extractDataValues(responses);
  const responsesCountByDate = countResponsesByDate(extractedResponses);
  return responsesCountByDate;
};

const form_responses_answers = async function (formId) {
  const formresponses = await FormResponse.findAll({
    where: { msforms_form_id: formId },
  });

  const groupedForms = {};

  formresponses.forEach((formresponse) => {
    const formId = formresponse.msforms_form_id;
    if (!groupedForms[formId]) {
      groupedForms[formId] = {};
    }

    for (const [key, value] of Object.entries(formresponse.response_data)) {
      if (!groupedForms[formId][key]) {
        groupedForms[formId][key] = {
          question: value.question,
          question_type: value.question_type,
          order: parseInt(value.order[key]),
          answers: [],
        };
      }
      groupedForms[formId][key].answers.push(value.answer);
    }
  });

  for (const formId in groupedForms) {
    const questionsArray = Object.entries(groupedForms[formId]).map(
      ([key, value]) => value
    );
    questionsArray.sort((a, b) => a.order - b.order);

    groupedForms[formId] = questionsArray;
  }

  const groupedAnswersJson = JSON.stringify(groupedForms, null, 2);
  return groupedForms;
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

const responsesPageStats = async function (msforms_form_id) {
  const groupedResponses = await form_responses_answers(msforms_form_id);
  return groupedResponses;
};

export const GET_FormsPageStats = async function (req, res) {
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

export const GET_ResponsesPageStats = async function (req, res) {
  try {
    const msforms_form_id = req.query.id;
    if (!msforms_form_id) {
      return res.status(404).send("Where id?");
    }
    const stats = await responsesPageStats(msforms_form_id);
    res.status(200).json(stats);
  } catch (error) {
    console.error(
      "[error] An error occurred while attempting GET_ResponsesPageStats\n\n",
      error
    );
    res
      .status(500)
      .send("An error occurred while attempting GET_ResponsesPageStats");
  }
};
