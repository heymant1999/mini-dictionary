import styled from 'styled-components';
import { TextField, InputAdornment, IconButton, Button, Stack, Grid, Container, Paper, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { green, red, grey } from '@mui/material/colors';

export function LoginForm() {

  
  return (
    <Paper sx={{ p: 4 }} elevation={4}>
      <Stack maxWidth={400} spacing={2} >
        <Grid item xs={12} md={4} >
          <TextField
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
          label="password"
          id="outlined-start-adornment"
          variant="outlined"
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
            sx={{ borderRadius: "16px",textTransform: 'none' }}
            variant="contained"><Typography>Log In</Typography></Button>
        </Grid>
      </Stack>
    </Paper>
  );
}
