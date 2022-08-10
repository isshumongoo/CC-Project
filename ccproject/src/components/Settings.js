import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const fontColor = {
  style: { color: "white", }
}

const theme = createTheme({
  palette: {
    white: {
      main: "white",
    },
    red: {
      main: "red",
    },
  },
});

export default function Settings() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Box
        component="img"
        sx={{
          height: 175,
          width: 175,
          mb: 1,
        }}
        alt="Christiana Care Logo"
        src="CDLogo.png"
      />
          <Typography component="h1" variant="h4" style={{fontWeight: 'bold'}}>
            Settings
          </Typography>
          <Box component="form" sx={{height: 30,
                width: 250,}}></Box>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Grid container spacing={2}>
             <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography color="secondary">
                Language
              </Typography>
            </Button>
            <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography color="secondary">
                Notifications
              </Typography>
            </Button> 
            </Grid>
            <Box component="form" sx={{height: 200,
                width: 250,}}></Box>
            <Grid>
            <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              href="/Account"
              sx={{ mt: 2, mb: 2 }}
            >

              <Typography color="secondary">
                Back To My Account
              </Typography>
            </Button> 
            </Grid>
            <Grid>
            <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              href="/"
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography color="secondary">
                Back To Home
              </Typography>
            </Button> 
            </Grid>
            <Grid>
            <Button
              color="red"
              type="submit"
              halfWidth
              variant="contained"
              href="/Login"
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography color="secondary">
                Log Out
              </Typography>
            </Button> 
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}