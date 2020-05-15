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


const primary = orange[500];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
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
