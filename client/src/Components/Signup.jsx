import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Mycontext from './Mycontext.jsx';
import axios from 'axios';
import './Login.css';

// Define the theme
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#bbb6ae',
    },
    secondary: {
      main: '#8d8d8d',
    },
    text: {
      primary: '#e2ded7',
      secondary: '#4b4b4b',
    },
  },
  typography: {
    h5: {
      color: '#e2ded7',
    },
    body2: {
      color: '#e4e4e4',
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const nav = useNavigate();
  const [cpass, setCpass] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [next, setNext] = React.useState(false);
  const { email, setEmail, password, setPassword } = React.useContext(Mycontext);
  const [vmail, setVmail] = React.useState(true);
  const [pcap, setPcap] = React.useState(true);
  const [psym, setPsym] = React.useState(true);
  const [plen, setPlen] = React.useState(true);
  const [pnum, setPnum] = React.useState(true);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,20}$/;
  
  const handlePost = async () => {
    const pdata = {
      mail: email,
      plan: "Free Plan",
      phone: phone,
      Premium: true,
      lastname: lname,
      password: password,
      firstname: fname
    };
    await axios.post('https://retoolapi.dev/5M2qFh/data', pdata);
  };
  
  const handleCheck = async () => {
    try {
      const response = await axios.get('https://retoolapi.dev/5M2qFh/data');
      const fetchedData = response.data; 
      const matchingUser = fetchedData.find(user => user.mail === email );
      return !!matchingUser;
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await handleCheck()) {
      alert("User already exists");
    } else {
      if (password === "" || cpass === "") {
        alert("Enter the password");
      } else if (password !== cpass) {
        alert("Check the password");
      } else {
        await handlePost();
        nav('/login');
      }
    }
  };
  
  const handlePass = (e) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^\w\s]/.test(password);
    const hasValidLength = password.length >= 6 && password.length <= 20;
    if (passRegex.test(password)) {
      setPlen(true);
      setPcap(true);
      setPnum(true);
      setPsym(true);
    } else {
      if (!hasUppercase) setPcap(false);
      if (!hasNumber) setPnum(false);
      if (!hasSymbol) setPsym(false);
      if (!hasValidLength) setPlen(false);
    }
    setPassword(e.target.value);
  };
  
  const handleCpass = (e) => {
    setCpass(e.target.value);
  };
  
  const handleMail = (e) => {
    setEmail(e.target.value);
    setVmail(emailRegex.test(e.target.value));
  };
  
  const handlefname = (e) => {
    setFname(e.target.value);
  };
  
  const handlelname = (e) => {
    setLname(e.target.value);
  };
  
  const handlephone = (e) => {
    setPhone(e.target.value);
  };
  
  const handlenxt = () => {
    if (fname && lname && phone) {
      setNext(true);
    } else {
      alert("Enter all the fields");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 8,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src='./Images/skct_logo1_pn.png' />
            <Typography component="h1" variant="h5">
              {next ? 'Sign Up' : 'Personal Details'}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 3,
                backdropFilter: 'blur(8px) saturate(120%)',
                borderRadius: 10,
                padding: 3,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {!next ? (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      id="firstname"
                      label="First Name"
                      name="firstname"
                      autoFocus
                      variant='filled'
                      value={fname}
                      onChange={handlefname}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      name="lastname"
                      variant='filled'
                      value={lname}
                      onChange={handlelname}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="filled-number"
                      label="Age"
                      type="number"
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Gender"
                      name='gender'
                      label="Gender"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mobilno"
                      label="Mobile"
                      name="mobilno"
                      variant='filled'
                      value={phone}
                      onChange={handlephone}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      variant='filled'
                      value={email}
                      onChange={handleMail}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                      error={!vmail}
                      helperText={!vmail ? "Invalid Email" : ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      variant='filled'
                      value={password}
                      onChange={handlePass}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                      error={!passRegex.test(password)}
                      helperText={!passRegex.test(password) ? "Password must contain an uppercase letter, a number, and a special character, and be between 6 to 20 characters long" : ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="cpassword"
                      label="Confirm Password"
                      type="password"
                      id="cpassword"
                      variant='filled'
                      value={cpass}
                      onChange={handleCpass}
                      InputLabelProps={{ style: { color: '#e2ded7' } }}
                      inputProps={{ style: { color: '#e2ded7' } }}
                      sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
                    />
                  </Grid>
                </Grid>
              )}
              <Box sx={{ mt: 2 }}>
                {!next ? (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handlenxt}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
