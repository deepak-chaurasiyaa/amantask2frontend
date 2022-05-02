import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navx.css"

const NavBar = () => {
  return (
    <>
      <div className="navx" >
        <NavLink to="create-admin">
          <Button className="button">Create Admin</Button>
        </NavLink>
        <NavLink to="all-admin">
          <Button className="button">All Admin List</Button>
        </NavLink>
        <NavLink to="all-user">
          <Button className="button">All User's List</Button>
        </NavLink>
        <NavLink to="admin-login">
          <Button className="button">Admin Login</Button>
        </NavLink>
        <NavLink to="create-product">
          <Button className="button">Create Products</Button>
        </NavLink>
      </div>
    </>
  );
};
export default NavBar;
