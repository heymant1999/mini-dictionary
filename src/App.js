import { Container , CssBaseline } from '@mui/material';
import { purple, deepOrange, grey, green, blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from 'styled-components';
import { LoginForm } from './LoginForm';
import { Router } from './routes';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
    divider: deepOrange[700],
    background: {
      default: deepOrange[900],
      paper: grey[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
    actions: {
      default: '#fff'
    },
    icon: {
      color: green[100],
    },
  },
  components: {
    MuiTextField: {
      // styleOverrides: {
      //   root: {
      //     borderBlockColor:'red',
      //     border:'solid 4px',
      //   },
      // },
    },
  },
},
);
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router /></ThemeProvider>
  );
}

export default App;
