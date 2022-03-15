import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

const theme = createTheme({
  colors: {
    mainWhite: '#f2f2f2',
    mainBlue: '#003049',
  },
});

const themeMUI = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const MUITheme = ({ children }) => (
  <MuiThemeProvider theme={themeMUI}>{children}</MuiThemeProvider>
);

export default Theme;
