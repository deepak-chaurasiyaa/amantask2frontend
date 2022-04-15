import React from "react";
import "../styles/createAdmin.css";
import axios from "axios";
var flag = false;
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
    alert("Hello")
    console.log(inputs)
    axios
      .post("http://localhost:3000/admin", inputs)
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
      <div className="loginpagebanner">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className = "hs2">Sign Up</h2>
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
              Already registered <a href="#">sign in?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateAdmin;
