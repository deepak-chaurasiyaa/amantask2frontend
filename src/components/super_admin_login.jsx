import { useState } from "react";
import axios from "axios";
import React from "react";
import styled from 'styled-components';
const Style = styled.header`
.form input{
    width: 99.6%;
    font-size: 22px;
    margin-bottom: 20px;
  
}
body{
    background-color: #0d6efd;
}

.secondform{
    width: 80%;
    margin-left: 10%;
}
.hs2{
    text-align: center;
    margin-top: 10px;
    margin-bottom:20px;
    
}
.loginpagebanner{
    border-radius: 29px;
    margin-top: 180px;
    width:30%;
    margin-left:35%;
    height:370px;
    background-color:white
}
.submit{
    width:99.6%;
}

.form label{
    font-size: 18px;
}
.checkboxtext{
    margin-left:-160px;
}
.forgot-password{
    float:right;
    margin-top:9px;
}
.checkbox{
    margin-left: -168px;
    width: 20px;
    height: 20px;
    margin-bottom: -10px;
}`
var flag = false;
const SuperAdminLogin = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name !== "" && value !== ""){
        flag = false;
    }
     if(value === "" ){
        flag = false;
    }
    if(value !== "" && name !== ""){
        flag = true;
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/super-admin/login", inputs)
      .then((res) => {
        alert("Login Successful!");
        return res;
      })
      .catch((err) => {
        alert("No Super-User Found, Please Provide valid details!");
        console.log(err);
        return err;
      });
  };
  return (
    <>
      <Style>
      <div className="loginpagebanner">
        <form onSubmit={handleSubmit} className="form">
          <div className="loginpage">
            <h2 className="hs2">Super Admin login</h2>
            <div className="secondform">
              <div className="form-group">
                <label>Email address</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input checkbox"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label checkboxtext"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              {flag && (
                <button
                  type="submit"
                  className="btn btn-primary btn-block submit"
                >
                  Submit
                </button>
              )}
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
      </Style>
    </>
  );
};
export default SuperAdminLogin;
