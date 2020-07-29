import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00796B', // purple.A100,
      main: '#009688', // purple.A400,
      dark: '#00796B', // purple.A700,
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFECB3', // orange.A100,
      main: '#FFC107', // orange.A400,
      dark: '#FFA000', // orange.A700,
      contrastText: '#fff',
      accentColor: '#607D8B',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
