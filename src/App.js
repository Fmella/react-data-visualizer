import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

import Grid from '@mui/material/Unstable_Grid2';
import MiniDrawer from './components/MiniDrawer';
import SpeedChart from './components/SpeedChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  useEffect(() => {
    let ignore = false;
    fetch('https://mockly.app/api/38534cce-0c18-4043-94a6-21b0ae62f48a/speed')
      .then((response) => response.json())
      .then((newData) => {
        if (!ignore) {
          setData(newData);
          setLoading(false);
        }
      });
      
      return () => {
        ignore = true;
      }
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MiniDrawer darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Grid container spacing={2}>
            <Grid xs={11}>
              <SpeedChart data={data} isLoading={loading} />
            </Grid>
          </Grid>
        </MiniDrawer>
      </ThemeProvider>
    </>
  );
}
