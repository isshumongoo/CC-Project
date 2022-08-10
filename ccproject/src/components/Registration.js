import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const initialValues = {username:"", email:"", firstName:"", lastName:"", password:"", rePass:""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors]);


  const validate = (values) => {
    const errors = {}
    const regrex= /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username = "Username is required"
    }
    if(!values.email){
      errors.email = "Email is required"
    } else if(!regrex.test(values.email)){
      errors.email = "Not a valid email format!"
    }
    if(!values.firstName){
      errors.firstName = "First Name is required"
    } else if (nameLength(values.firstName)){
      errors.firstName = "Less than 20 characters"
    } else if(hasNumber(values.firstName)){
      errors.firstName = "No numbers"
    }
    if(!values.lastName){
      errors.lastName = "Last Name is required"
    } else if (nameLength(values.lastName)){
      errors.lastName = "Less than 20 characters"
    } else if(hasNumber(values.lastName)){
      errors.lastName = "No numbers"
    }
    if(!values.password){
      errors.password = "Password is required"
    }
    if(!values.rePass){
      errors.rePass = "Re-enter Password is required"
    } else {
    if(values.rePass !== values.password){
      errors.rePass = "Please re-enter the same password"
    }
  }
    return errors;
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value});
  }

  function nameLength(myString) {
    var length = myString.length;
    var lengthTF = false
    if(length > 20){
      lengthTF = true
    } else {
      lengthTF = false
    }
    return lengthTF
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  return (
    
    <ThemeProvider theme={theme}>
            <img src = "CDLogo.png" alt="Christiana Care Logo" width="200"/>
            <p class="top" id='center'>Community Caregiver</p>
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
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Signed in successfully</div>) : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>} */}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label=" Username"
              name="username"
              autoComplete="username"
              value={formValues.username}
              onChange={handleChange}

            />
            <p id='error'>{ formErrors.username}</p>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              id="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p id='error'>{ formErrors.email}</p>
            <TextField
              margin='normal'
              required
              fullWidth
              name='firstName'
              label="First Name"
              id="firstName"
              autoComplete='firstName'
              value={formValues.firstName}
              onChange={handleChange}
            />
            <p id='error'>{ formErrors.firstName}</p>
            <TextField
              margin='normal'
              required
              fullWidth
              name='lastName'
              label="Last Name"
              id="lastName"
              autoComplete='lastName'
              value={formValues.lastName}
              onChange={handleChange}
            />
            <p id='error'>{ formErrors.lastName}</p>
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label="Password"
              id="password"
              autoComplete='password'
              value={formValues.password}
              onChange={handleChange}
            />

            <p id='error'>{ formErrors.password}</p>
            <TextField
              margin='normal'
              required
              fullWidth
              name='rePass'
              label="Re-enter Password"
              id="rePass"
              autoComplete='rePass'
              value={formValues.rePass}
              onChange={handleChange}
            />
            <p id='error'>{ formErrors.rePass}</p>
            <p id='center'>
            <Button
              type="submit"
              variant="contained"
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button 
              variant="contained"
              type="button"
              sx={{mb: 2}}  
            >
              Already have an account? Log In
            </Button>
            </p>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}