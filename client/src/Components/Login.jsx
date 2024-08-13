import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import axios
import './Login.css';
import { useNavigate } from 'react-router-dom';

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

export default function SignIn() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const nav = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/user');
      const fetchedData = response.data; 
      const matchingUser = fetchedData.find(user => user.mail === email && user.password === password );
      if (matchingUser) {
        localStorage.setItem('id', matchingUser.id);
        localStorage.setItem('name', matchingUser.firstname);
        localStorage.setItem('uemail', email);
        localStorage.setItem('upass', password);
        localStorage.setItem('loged', true);
        console.log("signed in ");
        nav('/');
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      <ThemeProvider theme={defaultTheme}>
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
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                backdropFilter: 'blur(8px) saturate(120%)',
                borderRadius: 8,
                padding: 3,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin:'auto' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#e2ded7' } }}
                inputProps={{ style: { color: '#e2ded7' } }}
                sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#e2ded7' } }}
                inputProps={{ style: { color: '#e2ded7' } }}
                sx={{ '& .MuiFilledInput-root': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: '#e2ded7' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading} // Disable button while loading
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#bbb6ae',
                  color: '#4b4b4b',
                  '&:hover': {
                    backgroundColor: '#8d8d8d',
                    color: '#fff',
                  },
                }}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#e4e4e4' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" sx={{ color: '#e4e4e4' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
