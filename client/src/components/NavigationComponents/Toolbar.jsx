import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { application_config } from "../../services/application_config";

function AppToolbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open_state) => () => {
    setOpen(open_state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: 7 }} elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, mt: -0.2 }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Sidebar toggleDrawer={toggleDrawer} setOpen={setOpen} />
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 800, fontSize: 26}}
          >
            {application_config.application_longname}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppToolbar;
