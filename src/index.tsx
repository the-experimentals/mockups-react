import React from 'react';
import './index.scss';
import App from './App';
import 'animate.css/animate.min.css';
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import customTheme from './themes/customTheme';
import { CssBaseline } from '@mui/material';


const Root = () =>{
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme(prefersDarkMode)}>
      <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
      
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />);