import React from 'react';
import styled from "styled-components";
import Footer from "./Footer";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10% 0%;
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

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px;
&:hover .CreateAcc {
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
padding: 5px 60px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
font-size: 13px;
font-weight: 900;
width: 250px;
height: 55px;
border-radius: 5px;
margin-top: 10px;
`;

const Login = styled.a`
color:gray;
display:inline-block;
text-decoration: none;
margin: 35px 0px;
`;

const Span = styled.span`
color:#92badd;
font-weight: 900;

`;



export default Signup => {
    return (
    <Wrapper>
        <SecondWrap>
          <h1>Sign Up</h1>
        <Form>
          <Input
              type="text"
              name="textfield"
              placeholder="First Name"
   
            />
          <Input
              type="text"
              name="textfield"
              placeholder="Last Name"
            />
            <Input
              type="text"
              name="textfield"
              placeholder="Email Adress"
              />
            <Input
              type="text"
              name="textfield"
              placeholder="Password"
              />
            <Input
              type="text"
              name="textfield"
              placeholder="Confirm Password"
              />
          <Button className="CreateAcc">Create Account</Button>
      </Form>
      <Login>Already have an ___ account? <Span>Log in</Span></Login>
        </SecondWrap>
        <footer>
        <Footer/>
        </footer>
    </Wrapper>
    )
}