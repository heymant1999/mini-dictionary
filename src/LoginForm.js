import styled from 'styled-components';
import { TextField, InputAdornment, IconButton, Button, Stack, Grid, Container, Paper, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { green, red, grey } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';



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
      alert(JSON.stringify(formik.values, null, 2));
      navigate('/home');
      
    }
  });


  return (
    <Paper sx={{ p: 4 }} elevation={4}>
      <Stack maxWidth={400} spacing={2} >
        <Grid item xs={12} md={4} >
          <TextField
          {...formik.getFieldProps('email')}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{borderBlockColor:'red'}}
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
            sx={{ borderRadius: "16px",textTransform: 'none' }}
            variant="contained"><Typography>Log In</Typography></Button>
        </Grid>
      </Stack>
    </Paper>
  );
}
