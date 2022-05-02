import React from 'react'
import { NavLink } from "react-router-dom";
import {Button} from "react-bootstrap"
import "./navx.css"
function UserNavBar() {
  return (
    <div className="navx">
      <NavLink to="create-user">
        <Button className="button">Create User</Button>
      </NavLink>
      <NavLink to="all-user">
        <Button className="button">All User's List</Button>
      </NavLink>
      <NavLink to="products">
        <Button className="button">Products List</Button>
      </NavLink>
      <NavLink to="user-login">
        <Button className="button">User Login</Button>
      </NavLink>
    </div>
  );
}

export default UserNavBar