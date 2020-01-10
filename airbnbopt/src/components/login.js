import React, { useState } from "react";
import { Link }from "react-router-dom";
import axios from "axios";
import styled from "styled-components";



const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15% 0%;
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
  background-color: #fd5c63;
  border: none;
  color: white;
  padding: 5px 60px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  width: 100%;
  max-width:250px;
  height: 55px;
  border-radius: 5px;
  margin-top: 10px;
`;

const SignUp = styled.div`
color:gray;
text-decoration: none;
display:inline-block;
margin: 35px 0px;
`;

const Span = styled.span`
color:#FEBDC0;
font-weight: 900;
`;







const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log(login);
  };

  const handelLogin = e => {
    e.preventDefault();
    axios
      .post("https://airbnb-bw.herokuapp.com/api/auth/login", login)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err.message));
  };

  return (
    <Wrapper>
      <SecondWrap>
        <h1>Login</h1>
        <Form onSubmit={handelLogin}>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleInput}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleInput}
            required
          />
          <Button
            onClick={e => {
              e.target.style.background = "#FEBDC0";
            }}
            onMouseOver={e => {
              e.target.style.cursor = "pointer";
            }}
          >
            Log in
          </Button>
        </Form>
        <Span>Don't have an LaOpt account? <Link to="/signup"><SignUp>Sign Up</SignUp></Link> </Span>
      </SecondWrap>
    </Wrapper>
  );
};

export default Login;
