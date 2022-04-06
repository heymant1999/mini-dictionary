import styled from 'styled-components';

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

const TextField = styled.div`
border: 1px solid;
font-weight: 400;
font-size: 1rem;
line-height: 1.4375em;
letter-spacing: 0.00938em;
color: rgba(0, 0, 0, 0.87);
box-sizing: border-box;
cursor: text;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
position: relative;
border-radius: 4px;
padding-right: 14px;
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
      <TextField class="input-container">
        <Input placeholder="password" />
      </TextField>
      <TextField style={{display: "flex"}}>
        <Input placeholder='password'/>
        <ButtonIcon>
          <i class="far fa-eye" id="togglePassword" ></i>
        </ButtonIcon>
      </TextField>
      <Button>Log In</Button>
    </LoginForm>
  );
}

export default App;
