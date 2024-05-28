import { useEffect } from "react";
import { application_config } from "../../services/application_config";
import { Typography } from "@mui/material";

function Forms() {
  useEffect(() => {
    document.title = `${application_config.application_name} - Forms`;
    console.log(
      "[%cDebug%c] Navigated to Forms",
      "color: purple; font-weight: bold;",
      "color: black;"
    );
  }, []);

  return (
    <Typography variant="h3" component="div">
      Forms
    </Typography>
  );
}

export default Forms;
