import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'animate.css/animate.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@emotion/react';
import customTheme from './themes/customTheme';
import { CssBaseline } from '@mui/material';

const Root = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme(prefersDarkMode)}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
