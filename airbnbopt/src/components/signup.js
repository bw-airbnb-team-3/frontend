import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-direction: column;
justify-content: center;
width:100%;
min-height: 100%;
padding: 20px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


`;

const SecondWrap = styled.div`
-webkit-border-radius: 10px 10px 10px 10px;
border-radius: 10px 10px 10px 10px;
background: #fff;
width: 50%;
max-width: 500px;
postion: relative;
padding: 0px;
-webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
text-align: center;
align-items: center;

`;

const ForgotPW = styled.a`
color:#92badd;
display:inline-block;
text-decoration: none;
font-weight: 900;
`;

const ForgotDiv = styled.div`
background-color: #f6f6f6;
border-top: 1px solid #dce8f1;
padding: 25px;
text-align: center;
-webkit-border-radius: 0 0 10px 10px;
border-radius: 0 0 10px 10px;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px;
`;

const Input = styled.input`
background-color: #f6f6f6;
border: none;
color: #0d0d0d;
padding: 15px 32px;
text-align: center;
text-decoration: none;
font-size: 16px;
margin: 10px;
width: 85%;
border: 2px solid #f6f6f6;
border-radius: 5px;
`;

const Button = styled.button`
background-color: #56baed;
border: none;
color: white;
padding: 15px 80px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
font-size: 13px;
width: 250px;
height: 55px;
border-radius: 5px;
margin-top: 10px;

`;



const Signup = (props) =>  {

 const [signUp, setsignUp] = useState(
  {
   username: '',
   password: '',
 }
);

const handleInput = e => {
  setsignUp({
      ...signUp,
      [e.target.name]: e.target.value
  });
  console.log(signUp)
};

const handelSignUp = e => {
  e.preventDefault();
  axios
    .post("https://airbnb-bw.herokuapp.com/api/auth/register", signUp)
    .then(res => {
      console.log(res);
      props.history.push("/login");
    })
    .catch(err =>
      console.log(
        err.message
      )
    );
};

    return (
    <Wrapper>
        <SecondWrap>
          <h1>Register</h1>
        <Form onSubmit={handelSignUp}>
          <Input
              type="text"
              name="username"
              placeholder="username"
              value={signUp.username}
              onChange={handleInput}
            />
          <Input
              type="password"
              name="password"
              placeholder="password"
              value={signUp.password}
              onChange={handleInput}
            />
          <Button>Sign Up</Button>
      </Form>
      <ForgotDiv>
        <ForgotPW> Forgot Password?</ForgotPW>
      </ForgotDiv>
        </SecondWrap>
    </Wrapper>
    )
}

export default Signup;