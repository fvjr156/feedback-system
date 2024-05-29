import { useEffect } from "react";
import { application_config } from "../../services/application_config";
import { Container, Typography, Box } from "@mui/material";

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
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Box sx={{ backgroundColor: '#c4bfac', borderRadius: 5, padding: 2, width: 900 }}>
        <Container sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Typography component="div" sx={{ marginRight: 12, fontWeight: 700, fontSize: 30 }}>
            Total no. of Forms:
            <Typography component="div" sx={{ fontSize:28 }}>
              0
            </Typography>
          </Typography>
          <Typography component="div" sx={{ fontWeight: 700, fontSize: 30 }}>
            Total no. of Responses:
            <Typography component="div" sx={{ fontSize:28 }}>
              0
            </Typography>
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}

export default Forms;
