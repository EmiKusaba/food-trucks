import React from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const primary = orange[500];
const secondary = blue[500];
const dark = 'rgba(0, 0, 0, 0.87)'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Montserrat",
    h1: {
      fontSize: 40,
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: dark,
      letterSpacing: "0.0075em",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    },
    h3: {
      fontSize: 25,
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: dark,
      letterSpacing: "0.0075em",
      verticalAlign: "middle",
      alignItems: "center",
      textAlign: "center"
    }
  }
},
)

function App() {
  return (
    <MuiThemeProvider theme={theme}>

      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
          <Footer />
        </BrowserRouter>
      </Provider>

    </MuiThemeProvider>
  )
}

export default App;
