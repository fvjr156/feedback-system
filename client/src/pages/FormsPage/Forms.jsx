import { useEffect } from "react";
import { application_config } from "../../services/application_config";
import { Container, Typography, Box } from "@mui/material";
import "./Forms.css";

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
    <div>
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

      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Box sx={{ display: 'flex', borderRadius: 1, border: 2, rowGap: 0 }}>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 150, backgroundColor: '#BAB9AF' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2, }}>
              Form Name
            </Typography>
            <Typography component="div" className="formName" sx={{ cursor:'pointer' }}>
              Customer Satisfaction Survey for Cucina de Marquina
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 300, textAlign: 'center', backgroundColor: '#BAB9AF' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2 }}>
              Responses
            </Typography>
            <Typography component="div" sx={{ fontSize: 30 }}>
              3
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#d9d9d9', padding: 2, minWidth: 250, backgroundColor: '#BAB9AF' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2 }}>
              Form ID
            </Typography>
            <Typography component="div" style={{ wordBreak: 'break-all' }}>
              Q97QyABtNEWjxl_CIVWrmvHypepq4kElL_6izc9HCZUMkdMWDRQ5kRCTjXMsDFRNvpXVUs4SjPSTs4u
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Forms;
