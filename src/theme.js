import { red, purple, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple.A100,
      main: purple.A400,
      dark: purple.A700,
      contrastText: '#fff',
    },
    secondary: {
      light: orange.A100,
      main: orange.A400,
      dark: orange.A700,
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
