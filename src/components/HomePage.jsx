import React from 'react'
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./img.css"
function HomePage() {
  return (
    <div className="img">
      <div>
        <img
          src="https://icon-library.com/images/admin-user-icon/admin-user-icon-4.jpg"
          alt=""
        />
        <NavLink to="/super-admin-login">
          <Button>Super Admin / Admin</Button>
        </NavLink>
      </div>
      <div>
        <img
          src="https://icon-library.com/images/admin-user-icon/admin-user-icon-4.jpg"
          alt=""
        />
        <NavLink to="/user">
          <Button>User</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage