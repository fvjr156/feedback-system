import { Form, FormResponse } from "../models/database_model.mjs";

const GroupByFormID = (data) => {
  const grouped_data = {};
  for (const entry of data) {
    const form_id = entry.msforms_form_id;
    if (!grouped_data[form_id]) {
      grouped_data[form_id] = [];
    }
    grouped_data[form_id].push(entry);
  }
  return grouped_data;
};

export const DB_AddSubmittedForm = async (
  form_name,
  form_id,
  response_id,
  submit_timestamp,
  respondent_email,
  question_response
) => {
  try {
    const existing_form = await Form.findOne({
      where: {
        msforms_form_id: form_id,
      },
    });

    if (existing_form === null) {
      await Form.create({
        form_name: form_name,
        msforms_form_id: form_id,
      });
      console.log("[success] Submitted form is inserted into the database.");
    } else {
      existing_form.form_name = form_name;
      await existing_form.save();
      console.log("[success] Form name and questions updated.");
    }

    const existing_formresponse = await FormResponse.findOne({
      where: {
        msforms_form_id: form_id,
        msforms_response_id: response_id,
      },
    });

    if (existing_formresponse === null) {
      await FormResponse.create({
        msforms_form_id: form_id,
        msforms_response_id: response_id,
        submit_timestamp: submit_timestamp,
        submit_respondent_email: respondent_email,
        question_response: question_response,
      });
    } else {
      console.log(
        `[info] Form response already exists in the database.\nForm Name: ${form_name}\nResponse ID: ${response_id}`
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
    const grouped_responses = GroupByFormID(form_data);
    return grouped_responses;
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};

export const DB_GetFormByFormID = async (msforms_form_id) => {
  try {
    const form = Form.findAll({
        where: {
            msforms_form_id: msforms_form_id
        }
    })
    return form
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};

export const DB_GetResponseByFormID = async (msforms_form_id) => {
  try {
    const form = FormResponse.findAll({
        where: {
            msforms_form_id: msforms_form_id
        }
    })
    return form
  } catch (error) {
    console.error("[error] Can't fetch data.", error);
    throw error;
  }
};
