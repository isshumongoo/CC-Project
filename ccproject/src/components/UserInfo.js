import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
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
    secondary: {
      main: '#286090',
    },
  },
});

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
          height: 50,
          width: 250,
          mb: 1,
        }}
        alt="Christiana Care Logo"
        src="https://i.ibb.co/fSPDwqF/christianacarelogo.png"
      />

          <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 180, height: 180}}>
            <PersonRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" style={{fontWeight: 'bold'}}>
            Patient Personal Information
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1">
                  Username
                </Typography>
                <TextField
                  name="username"
                  fullWidth
                  id="username"
                  label="@JohnDoe"
                  inputProps={fontColor}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <Typography align="left" variant="subtitle1">
                  Email
                </Typography>
                <TextField
                  name="email"
                  fullWidth
                  id="email"
                  label="JohnDoe1985@gmail.com"
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
              <Typography align="left" variant="subtitle1">
                  Full Name
                </Typography>
                <TextField
                  name="fullname"
                  fullWidth
                  id="fullname"
                  label="John Doe"
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
              <Typography align="left" variant="subtitle1">
                  Phone Number
                </Typography>
                <TextField
                  name="phone number"
                  fullWidth
                  id="phone number"
                  label="555-555-5555"
                  disabled
                />
              </Grid>
            </Grid>
            <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              href="/Account"
              sx={{ mt: 2, mb: 2 }}
            >
              <Typography color="secondary" >
                Back to My Account
              </Typography>
            </Button>
            <br></br>
            <Button
              color="white"
              type="submit"
              halfWidth
              variant="contained"
              href='/'
              sx={{ mt: 0, mb: 2 }}
            >
              <Typography color="secondary">
                Back to Home
              </Typography>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  edit
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}