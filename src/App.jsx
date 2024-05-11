import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Interface from './components/Interface';

const fontsTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 15
  }
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={fontsTheme}>
        <CssBaseline />
        <Interface />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
