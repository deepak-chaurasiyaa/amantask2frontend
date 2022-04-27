import React from "react";
import axios from "axios";
import styled from 'styled-components';

import {NavLink} from 'react-router-dom'
var flag = false;
const Style = styled.header`
.form input{
    width: 99.6%;
    font-size: 22px;
    margin-bottom: 20px;
  
}
.hs2{
    text-align: center;  
}
.secondform{
  width: 80%;
  margin-left: 10%;
}

.loginpagebanner{
  border-radius: 29px;
 
  width:30%;
  margin-left:35%;
  height:700px;
  color:white;
  background-color:#153133
}
.submit{
    width:99.6%;
}
a{
  color:#0d6efd;
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
const CreateAdmin = () => {
    const [inputs, setInputs] = React.useState({});

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
      .post("http://localhost:3000/admin", inputs)
      .then((res) => {
        alert("User Created Successfully!");
        return res;
      })
      .catch((err) => {
        alert("User Creation Failed!");
        console.log(err);
        return err;
      });
  };
  return (
    <>
     <Style>
     <div className="loginpagebanner">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className = "hs2">Create Admin</h2>
          <div className="secondform">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First name"
                value={inputs.firstName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last name"
                value={inputs.lastName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="gender"
                className="form-control"
                placeholder="Gender"
                name="gender"
                value={inputs.gender || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Mobile Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="number"
                value={inputs.number || ""}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block submit">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <NavLink to="/admin-login">sign in?</NavLink>
            </p>
          </div>
        </form>
      </div>
     </Style>
    </>
  );
};
export default CreateAdmin;
