import { Form, FormResponse } from "../models/database_model.mjs";
import { groupByFormID } from "./helpers/groupByFormID.mjs";
import { groupQuestionData } from "./helpers/groupQuestionData.mjs";

export const DB_AddSubmittedForm = async (form_responses) => {
  try {
    const {
      response_data: { formId, responseId },
      respondent_email,
      submit_timestamp,
      form_name,
    } = form_responses;

    const questionData = groupQuestionData(form_responses);

    const existing_form = await Form.findOne({
      where: {
        msforms_form_id: formId,
      },
    });

    if (existing_form === null) {
      await Form.create({
        form_name: form_name,
        msforms_form_id: formId,
      });
      console.log("[success] Submitted form is inserted into the database.");
    } else {
      existing_form.form_name = form_name;
      await existing_form.save();
      console.log("[success] Form name and questions updated.");
    }

    const existing_formresponse = await FormResponse.findOne({
      where: {
        msforms_form_id: formId,
        msforms_response_id: responseId,
      },
    });

    if (existing_formresponse === null) {
      await FormResponse.create({
        msforms_form_id: formId,
        msforms_response_id: responseId,
        submit_timestamp: submit_timestamp,
        respondent_email: respondent_email,
        response_data: questionData,
      });
    } else {
      existing_formresponse.msforms_form_id = formId;
      existing_formresponse.msforms_response_id = responseId;
      existing_formresponse.submit_timestamp = submit_timestamp;
      existing_formresponse.respondent_email = respondent_email;
      existing_formresponse.response_data = questionData;
      await existing_formresponse.save();
      console.log(
        `[info] Form response already exists in the database.\nForm Name: ${form_name}\nResponse ID: ${responseId}`
      );
    }

    console.log("[success] Response saved to database.");
  } catch (error) {
    console.error("[error] Can't save response to database.", error);
    throw error;
  }
};

export const DB_GetForms = async () => {
  try {
    return await Form.findAll();
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};

export const DB_GetFormResponses = async () => {
  try {
    const form_data = await FormResponse.findAll();
    const grouped_responses = groupByFormID(form_data);
    return grouped_responses;
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};

export const DB_GetFormByFormID = async (formId) => {
  try {
    const form = Form.findAll({
      where: {
        msforms_form_id: formId,
      },
    });
    return form;
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};

export const DB_GetResponseByFormID = async (formId) => {
  try {
    const form = FormResponse.findAll({
      where: {
        msforms_form_id: formId,
      },
    });
    return form;
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};
