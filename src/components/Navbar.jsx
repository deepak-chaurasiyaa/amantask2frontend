import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div>
        <NavLink to="/super-admin-login">
        <button className="button">Administration login</button>
        </NavLink>
       <NavLink to="create-admin">
       <button className="button">Create Admin</button>
       </NavLink>
       <NavLink to="all-admin">
       <button className="button">All Admin List</button>
       </NavLink>
       <NavLink to="admin-login">
       <button className="button">Admin Login</button>
       </NavLink>
       <NavLink to="create-user">
       <button className="button">Create User</button>
       </NavLink>
       <NavLink to="all-user">
       <button className="button">All User's List</button>
       </NavLink>
       <NavLink to="user-data">
       <button className="button">User after siginup</button>
       </NavLink>
       <NavLink to="products">
       <button className="button">Products List</button>
       </NavLink>
       <NavLink to="user-login">
       <button className="button">User Login</button>
       </NavLink>
       <NavLink to="create-product">
       <button className="button">Create Products</button>
       </NavLink>
      </div>
    </>
  );
};
export default NavBar;
