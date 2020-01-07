import React, { useState } from 'react';
import { Route, Redirect, Link } from "react-router-dom";
import axios from 'axios';
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


/*const Signup = (props) =>  {

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
          <Button>Sign Up</Button>*/

const Signup = (props) => {

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
          <h1>Sign Up</h1>
        <Form onSubmit={handelSignUp}>
          <Input
              type="text"
              name="textfield"
              placeholder="User Name"
              value={signUp.username}
              onChange={handleInput}
            />
          {/* <Input
              type="text"
              name="textfield"
              placeholder="Last Name"
            />
            <Input
              type="text"
              name="textfield"
              placeholder="User Name"

              /> */}
            <Input
              type="text"
              name="textfield"
              placeholder="Password"
              value={signUp.password}
              onChange={handleInput}
              />
            {/* <Input
              type="text"
              name="textfield"
              placeholder="Confirm Password"
              /> */}
          <Button className="CreateAcc">Create Account</Button>
      </Form>
      <Span>Already have an ___ account? <Link to="/login">Log in</Link> </Span>
        </SecondWrap>
        <footer>
        <Footer/>
        </footer>
    </Wrapper>
    )
}

export default Signup;