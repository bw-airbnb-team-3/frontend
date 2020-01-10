import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Yup from "yup";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  align-items: center;
`;

const ForgotPW = styled.a`
  color: #92badd;
  display: inline-block;
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
  background-color: #fd5c63;
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

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
<<<<<<< HEAD
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
=======
  });
  console.log(login)
};

const handelLogin = e => {
  e.preventDefault();
  axios
    .post("https://airbnb-bw.herokuapp.com/api/login", login)
    .then(res => {
      console.log(res);
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      props.history.push("/protected");
    })
    .catch(err =>
      console.log(
        err.message
      )
    );
};

    return (
>>>>>>> a36f83b50031cb568b1849ebce881b63417cee9c
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
        <ForgotDiv>
          <ForgotPW> Forgot Password?</ForgotPW>
        </ForgotDiv>
      </SecondWrap>
    </Wrapper>
  );
};

export default Login;
