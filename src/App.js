import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateAdmin from "./components/create-admin-form";
import SuperAdminLogin from "./components/super_admin_login";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
const axios = require("axios");

axios.interceptors.request.use((request, response) => {
  console.log("requesttttttttttt", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("responseeeeeeeeeeee", response);
  return response;
});
function App() {
  return (
    <>
      <Switch>
        {/* <Home></Home> */}
        <Route path="/" exact><SuperAdminLogin/></Route>
        <Route path="/login"><CreateAdmin/></Route>
      </Switch>
    </>
  );
}

export default App;
