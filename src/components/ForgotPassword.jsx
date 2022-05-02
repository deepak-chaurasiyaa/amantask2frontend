import { useState } from "react";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Style = styled.header`
  .form input {
    width: 99.6%;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .secondform {
    width: 80%;
    margin-left: 10%;
  }
  .hs2 {
    text-align: center;
  }

  .loginpagebanner {
    border-radius: 29px;
    margin-top: 180px;
    width: 30%;
    margin-left: 35%;
    height: 370px;
    color: white;
    background-color: #153133;
  }
  .submit {
    width: 99.6%;
  }

  .form label {
    font-size: 18px;
  }
  .checkboxtext {
    margin-left: -160px;
  }
  .forgot-password {
    float: right;
    margin-top: 9px;
  }
  .checkbox {
    margin-left: -168px;
    width: 20px;
    height: 20px;
    margin-bottom: -10px;
  }
`;
var flag = false;
const PasswordResetMail = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name !== "" && value !== "") {
      flag = false;
    }
    if (value === "") {
      flag = false;
    }
    if (value !== "" && name !== "") {
      flag = true;
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("input,",inputs)

    axios
      .post("http://localhost:3000/password/reset-password-mail", inputs)
      .then((res) => {
          alert(
            "Reset Password Link has been sent successfully to your email! Check Your Email For set new password"
          );
        console.log("1", res);
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

                <button
                  type="submit"
                  className="btn btn-primary btn-block submit"
                >
                  Send Reset Password Mail
                </button>
              </div>
            </div>
          </form>
        </div>
      </Style>
    </>
  );
};
export default PasswordResetMail;
