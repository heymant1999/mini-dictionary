import styled from 'styled-components';
import { TextField,InputAdornment, IconButton} from '@mui/material';  
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
width: 50%;
`


const LoginForm = styled.div`
display : flex;
flex-direction: column;
direction : vertical;
row-gap : 10px;
max-width : 200px;
align-items : center;
padding: 20px;
`;

const EyeIcon = styled.i`
"margin-left: -30px;
cursor: pointer;
`;


const Input = styled.input`
border: none;
&:focus {
  outline: none;
  border: none;
}
&:hover {
  outline: none;
  border: none;
}

`;
const ButtonIcon = styled.button`
border: none;
background-color:transparent;
`;

function App() {
  return (
    <LoginForm>
      <Input error="error" placeholder="username" />
      <TextField
          label="password"
          id="outlined-start-adornment"
          variant="outlined"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton>
                <VisibilityOff/>
              </IconButton>
            </InputAdornment>,
          }}
        />
      <Button>Log In</Button>
    </LoginForm>
  );
}

export default App;
