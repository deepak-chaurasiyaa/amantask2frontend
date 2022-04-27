import { useEffect,useState } from "react";
import { Table } from 'react-bootstrap';
var data;

const axios = require("axios");

const AllUser = () => {
    const [data,setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/")
      .then((res) => {
        setData(res.data.data);
        
      })
      .catch((err) => {
        alert("There is some error in request");
        console.log(err);
        return err;
      });


  },[]);
  console.log("111dddddddd", data);
  return (
    <div>
     
     <div style={{width:"60%",margin:"auto",marginTop:"50px"}}><Table striped bordered hover>
     <thead>
       <tr>
         
         <th>First Name</th>
         <th>Last Name</th>
         <th>Phone No.</th>
         <th>Email</th>
         <th>Gender</th>
       </tr>
     </thead>
     <tbody>
     {data.map((item) => (
       <tr key = {item.id}>
         <td>{item.firstName}</td>
         <td>{item.lastName}</td>
         <td>{item.number}</td>
         <td>{item.email}</td>
         <td>{item.gender}</td>
       </tr>
     ))}
      
     </tbody>
   </Table></div>   
      
     
    </div>
  );
};
export default AllUser;
