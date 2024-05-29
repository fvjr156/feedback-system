import { useEffect, useState } from "react";
import { application_config } from "../../services/application_config";
import { Container, Typography } from "@mui/material";
import { api_operations } from "../../services/api";
import { Log } from "../../helpers/loghelpers";

function Forms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    document.title = `${application_config.application_name} - Forms`;
    Log.debug("Navigated to Forms.");
  }, []);

  useEffect(() => {
    async function get() {
      try {
        const result = await api_operations.getForms();
        setForms(result.data);
        Log.success("Forms retrieved successfully.");
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    }
    get();
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="div">
        Forms
      </Typography>
      {forms.length > 0 &&
        forms.map((form, index) => (
          <Typography key={index} variant="body1" component="div">
            {form.msforms_form_id}
          </Typography>
        ))}
      {forms.length < 1 && (
        <Typography variant="h6" component="div">
          There's nothing here...
        </Typography>
      )}
    </Container>
  );
}

export default Forms;
