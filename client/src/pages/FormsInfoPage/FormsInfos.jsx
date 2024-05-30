import { useEffect, useState } from "react";
import { application_config } from "../../services/application_config";
import { Container, Typography, Box } from "@mui/material";
import "./FormsInfo.css";

function FormsInfos() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    document.title = `${application_config.application_name} - FormsInfo`;
    console.log(
      "[%cDebug%c] Navigated to Forms",
      "color: purple; font-weight: bold;",
      "color: black;"
    );
  }, []);

  const handleIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Box sx={{ backgroundColor: '#c4bfac', borderRadius: 5, padding: 2, width: 1200 }}>
          <Container sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Typography component="div" sx={{ marginRight: 30, fontWeight: 700, fontSize: 30 }}>
              Customer Satisfaction Survey for Cucina de Mariquina
            </Typography>
            <Typography className="FormResult" component="div" sx={{ fontWeight: 700, fontSize: 30, marginRight: 10, border: 2, borderRadius: 3, padding: 2, backgroundColor: '#A8A599' }}>
              Result
            </Typography>
          </Container>
        </Box>
      </Container>

      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Box sx={{ display: 'flex', rowGap: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2, minWidth: 150, backgroundColor: '#BAB9AF', cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80"
              viewBox="0 170 960 960"
              width="80"
              fill="currentColor"
              onClick={handleIconClick}
            >
              <path d="M480 616q-25 0-42.5-17.5T420 556q0-25 17.5-42.5T480 496q25 0 42.5 17.5T540 556q0 25-17.5 42.5T480 616zm0 320q-25 0-42.5-17.5T420 856q0-25 17.5-42.5T480 796q25 0 42.5 17.5T540 856q0 25-17.5 42.5T480 936zm0-160q-25 0-42.5-17.5T420 696q0-25 17.5-42.5T480 636q25 0 42.5 17.5T540 696q0 25-17.5 42.5T480 776z" />
            </svg>
          </Box>
          <Box sx={{ backgroundColor: '#BAB9AF', padding: 2, minWidth: 150 }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2, textAlign: 'center', fontWeight: 700 }}>
              Response ID
            </Typography>
            <Typography component="div" sx={{ fontSize: 25, textAlign: 'center' }}>
              1
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#BAB9AF', padding: 2, minWidth: 300, textAlign: 'center' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2, fontWeight: 700 }}>
              Timestamp
            </Typography>
            <Typography component="div" sx={{ fontSize: 30 }}>
              --
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: '#BAB9AF', padding: 2, minWidth: 350, textAlign: 'center' }}>
            <Typography component="div" variant="h5" sx={{ marginBottom: 2, fontWeight: 700 }}>
              Respondent Email
            </Typography>
            <Typography component="div" style={{ wordBreak: 'break-all', fontSize: 18, textAlign: 'center' }}>
              example@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>

      {dropdownVisible && (
        <Container sx={{ marginTop: 2 }}>
          <Box sx={{ backgroundColor: '#BAB9AF', borderRadius: 3, padding: 2 }}>
            <Typography component="div" sx={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
              Response Details
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, backgroundColor: '#A8A599', borderRadius: 3, padding: 2 }}>
              <Typography sx={{ fontWeight: 700 }}>Questions</Typography>
              <Typography sx={{ fontWeight: 700 }}>Answers</Typography>
              <Typography>Hello</Typography>
              <Typography>Hi</Typography>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
}

export default FormsInfos;
