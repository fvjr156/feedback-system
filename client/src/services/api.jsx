import axios from "axios";
import { Log } from "../helpers/loghelpers";

const backend = "http://shiner-genuine-fawn.ngrok-free.app";
const local_backend = "http://localhost:3000";

const api_url = local_backend;

export const api_operations = {
  getForms: async function () {
    try {
      this.testConnection()
      const forms = await axios.get(`${api_url}/forms`);
      return forms;
    } catch (error) {
      console.error("[error] Failed to fetch forms:", error.message);
      throw error;
    }
  },
  getResponses: async function () {
    try {
      this.testConnection()
      const responses = await axios.get(`${api_url}/responses`);
      return responses;
    } catch (error) {
      console.error("[error] Failed to fetch responses:", error.message);
      throw error;
    }
  },
  getFormByID: async function (msforms_form_id) {
    try {
      this.testConnection()
      const form = await axios.get(`${api_url}/formbyid?id=${msforms_form_id}`);
      return form;
    } catch (error) {
      console.error(`[error] Failed to fetch form by ID ${msforms_form_id}:`, error.message);
      throw error;
    }
  },
  getResponseByID: async function (msforms_form_id) {
    try {
      this.testConnection()
      const responses = await axios.get(
        `${api_url}/responsebyid?id=${msforms_form_id}`
      );
      return responses;
    } catch (error) {
      console.error(`[error] Failed to fetch response by ID ${msforms_form_id}:`, error.message);
      throw error;
    }
  },
  testConnection: async function () {
    try {
      await axios.get(`${api_url}`);
      Log.success("Server is up.")
    } catch (error) {
      Log.error("Server is down.")
    }
  },
};
