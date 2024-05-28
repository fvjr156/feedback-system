import { createTheme } from "@mui/material/styles";
import { lightenColor } from "./helpers/lightencolor";

export const colors = {
  tropical_night: {
    primary: {
      main: "#0b3d91", // dark blue
    },
    secondary: {
      main: "#4169e1", // royal blue
      light: lightenColor("#4169e1", 40),
    },
  },
  palm_green: {
    primary: {
      main: "#014421", // dark green
    },
    secondary: {
      main: "#228b22", // forest green
      light: lightenColor("#228b22", 40),
    },
  },
  midnight_sun: {
    primary: {
      main: "#191970", // midnight blue
    },
    secondary: {
      main: "#ff8c00", // dark orange
      light: lightenColor("#ff8c00", 40),
    },
  },
  beach_bonfire: {
    primary: {
      main: "#8b0000", // dark red
    },
    secondary: {
      main: "#b22222", // firebrick
      light: lightenColor("#b22222", 40),
    },
  },
  summer_night: {
    primary: {
      main: "#2c3e50", // dark blue-gray
    },
    secondary: {
      main: "#34495e", // dark slate blue
      light: lightenColor("#34495e", 40),
    },
  },
  sunset_splash: {
    primary: {
      main: "#dc7633", // dark orange
    },
    secondary: {
      main: "#e67e22", // carrot orange
      light: lightenColor("#e67e22", 40),
    },
  },
  ocean_depth: {
    primary: {
      main: "#1e5158", // dark teal
    },
    secondary: {
      main: "#008080", // teal
      light: lightenColor("#008080", 40),
    },
  },
  moonlit_meadow: {
    primary: {
      main: "#0e6251", // dark cyan
    },
    secondary: {
      main: "#0b5345", // dark greenish cyan
      light: lightenColor("#0b5345", 40),
    },
  },
  starry_sky: {
    primary: {
      main: "#2e4053", // dark slate gray
    },
    secondary: {
      main: "#273746", // dark blue-gray
      light: lightenColor("#273746", 40),
    },
  },
  arcifs_default: {
    primary: {
      main: "#c4bfac",
    },
    secondary: {
      main: "#c4bb9d",
      light: lightenColor("#c4bb9d", 10),
    },
  },
};

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontStyleItalic: "italic",
  },
  palette: {
    ...colors.arcifs_default,
    background: {
      default: "#d9d9d9",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          height: '100%',
        },
        body: {
          backgroundColor: "#d9d9d9",
        },
      },
    },
  },
});

export default theme;
