import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateAdmin from "./components/create-admin-form";
import Products from "./components/Products"
import SuperAdminLogin from "./components/super_admin_login";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import allAdmin from "./components/allAdmin"
import AdminLogin from "./components/Admin-login"
import AllUser from "./components/AllUser"
import createUser from "./components/CreateUser"
import UserAfterSignup from "./components/UserAfterSignup"
import UserLogin from "./components/UserLogin"
import CreateProduct from "./components/CreateProduct"
import ShowUserCart from "./components/ShowUserCart";
import HomePage from "./components/HomePage";
import UserNavBar from "./components/UserNavBar";
import PasswordResetMail from "./components/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword";
const axios = require("axios");

axios.interceptors.request.use(
  (request) => {
    const admin_token = localStorage.getItem("token");
    request.headers["Authorization"] = `Bearer ${admin_token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  return response;
});

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Navbar exact path="/navbar" component={Navbar} />
        <Route path="/super-admin-login" component={SuperAdminLogin} />
        <Route path="/create-admin" component={CreateAdmin} />
        <Route path="/all-admin" component={allAdmin} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/all-user" component={AllUser} />
        <Route path="/create-user" component={createUser} />
        <Route path="/user-data" component={UserAfterSignup} />
        <Route path="/products" component={Products} />
        <Route path="/user-login" component={UserLogin} />
        <Route path="/create-product" component={CreateProduct} />
        <Route path="/cart" component={ShowUserCart} />
        <Route path="/user" component={UserNavBar} />
        <Route path="/password-reset-mail" component={PasswordResetMail} />
        <Route path="/set-new-password" component={SetNewPassword} />
      </Switch>
    </>
  );
}

export default App;
