import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import versatily from "../../assets/versatily.svg";
import { application_config } from "../../services/application_config";
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import InfoIcon from "@mui/icons-material/Info"

function Sidebar({ toggleDrawer, setOpen }) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box sx={{ width: 320, height: '100%', backgroundColor: "#ddd" }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          py: 3,
          pl: 1,
          backgroundColor: theme.palette.secondary.light,
        }}
      >
        <Box sx={{ ml: 1 }}>
          <img
            src={versatily}
            alt="versatily"
            style={{ width: "40%", height: "auto" }}
          />
        </Box>
        <Typography
          variant="h5"
          component="div"
          sx={{ pl: 2, py: 1, fontWeight: 600 }}
        >
          {application_config.application_longname}
        </Typography>
      </Box>
      <Divider/>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/forms')}>
            <ListItemIcon>
              <InsertDriveFileIcon/>
            </ListItemIcon>
            <ListItemText primary="Forms"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/about')}>
            <ListItemIcon>
              <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="About"/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
