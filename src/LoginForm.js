import styled from 'styled-components';
import { TextField, InputAdornment, IconButton, Button, Stack, Grid, Container, Paper, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { green, red, grey } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CustomPaper = styled.div`
display:flex;
border-radius: 16px;
padding: 24px;
height: 500px;
width: 50%;
margin: 2rem;
align-items: center;
  opacity: 1;
  background: linear-gradient(to top right, #000000,#000000, transparent), url("https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg")  no-repeat top center;
  `;


export function LoginForm() {
  const navigate = useNavigate()
  const loginData = {
    email: '',
    password: '',
  };

  const loginDataSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(45).required('Email is required'),
    password: Yup.string().max(45).min(6, 'password must be at least 6 characters').required('Password is required')
  });
  const formik = useFormik({
    initialValues: loginData,
    validationSchema: loginDataSchema,
    onSubmit: () => {
      localStorage.setItem('USER', JSON.stringify(formik.values));
      alert(JSON.stringify(formik.values, null, 2));
      navigate('/home');

    }
  });

 

  return (
    <CustomPaper >
      <Stack maxWidth={400} spacing={2} >
        <Grid item xs={12} md={4} >
          <TextField
            size="small"
            {...formik.getFieldProps('email')}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ borderBlockColor: 'red' }}
            label="email"
            fullWidth
            id="outlined-start-adornment"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <EmailIcon style={{ color: grey[500] }} />
              </InputAdornment>,
            }}
          />
        </Grid>
        <TextField
          size="small"
          fullWidth
          {...formik.getFieldProps('password')}
          label="password"
          id="outlined-start-adornment"
          variant="outlined"
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton style={{ color: grey[500] }} >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>,
          }}
        />
        <Grid container justifyContent="center">
          <Button
            type="submit"
            onClick={formik.handleSubmit}
            sx={{ borderRadius: "16px", textTransform: 'none' }}
            variant="contained"><Typography>Log In</Typography></Button>
        </Grid>
      </Stack>
    </CustomPaper>
  );
}
