import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();


export default function Register() {
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
            <img src = "CDLogo.png" alt="Christiana Care Logo" width="150"/>
            <p class="top">Patient</p>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label=" Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              id="email"
              autoComplete="email"
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='fullname'
              label="Full Name"
              id="fullname"
              autoComplete='fullname'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label="Password"
              id="password"
              autoComplete='password'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='rePass'
              label="Re-enter Password"
              id="rePass"
              autoComplete='rePass'
            />
            
            <Button
              type="submit"
              variant="contained"
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button 
              variant="outlined"
              type="button"
              sx={{mb: 2}}  
              href='/Login'
            >
              Already have an account? Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}