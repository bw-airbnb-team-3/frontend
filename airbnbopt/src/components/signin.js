import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10%;
`;

const SecondWrap = styled.div`
border-radius: 10px 10px 10px 10px;
background: #fff;
width: 50%;
max-width: 500px;
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
text-align: center;
align-items: center;
`;

const ForgotPW = styled.a`
color:gray;
display:inline-block;
text-decoration: none;
font-weight: 900;
font-size: 13px;
`;


const SignUp = styled.a`
color:gray;
display:inline-block;
text-decoration: none;
margin: 35px 0px;
`;


const ForgotDiv = styled.div`
background-color: #f6f6f6;
border-top: 1px solid #dce8f1;
padding: 25px;
text-align: center;
-webkit-border-radius: 0 0 10px 10px;
border-radius: 0 0 10px 10px;
display: flex;
flex-direction: column;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px;
&:hover .LogIn {
  background-color: #f6f6f6;
  color: #56baed;
}

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

const Span = styled.span`
color:#92badd;
font-weight: 900;

`;



export default Signin => {
    return (
    <Wrapper>
        <SecondWrap>
          <h1>Login</h1>
        <Form>
          <Input
              type="text"
              name="textfield"
              placeholder="username"
   
            />
          <Input
              type="password"
              name="textfield"
              placeholder="password"

            />
          <Button className="LogIn">Log in</Button>
      </Form>
      <ForgotDiv>
        <ForgotPW> Forgot Password?</ForgotPW>
        <SignUp>Not a member? <Span>Sign up now</Span></SignUp>
      </ForgotDiv>
        </SecondWrap>
        <footer>
        <Footer/>
        </footer>
    </Wrapper>
    )
}