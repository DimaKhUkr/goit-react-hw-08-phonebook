import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
        }}
      >
        <Typography
          variant="h4"
          style={{ fontFamily: 'Caveat', fontWeight: '600' }}
        >
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="standard"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              color: '#0f1111',
              background: '#008296',
            }}
          >
            Log In
          </Button>
        </Box>
        {/* <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form> */}
      </Box>
    </Container>
  );
};
