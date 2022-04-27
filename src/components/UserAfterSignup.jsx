import React from 'react'
import axios from "axios";
import { NavLink } from "react-router-dom";
import {useState,useEffect,useRef}from "react"
import { Card ,ListGroup,ListGroupItem,Button,Modal,Form} from 'react-bootstrap';
var flag = false;
function MyVerticallyCenteredModal(props) {
 
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
    
    let data = props.data;
    const token = localStorage.getItem('token')
    data.token = token;
    console.log("data",data)
    setInputs(data)
    data[name] = value;
    setInputs(data);
  };
  const handleSubmit = (event) => {
    console.log("INNNNNNNN",inputs)
    const token = localStorage.getItem('token')
    axios.put('http://localhost:3000/user/',inputs,{ headers: {"Authorization" : `Bearer ${token}`} })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Edit your details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">first name</Form.Label>
        <Form.Control
        defaultValue={props.data.firstName}
            type="text"
            name = "firstName"
            onChange={handleChange}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">last name</Form.Label>
        <Form.Control
         defaultValue={props.data.lastName}
         onChange={handleChange}
          name = "lastName"
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">gender</Form.Label>
        <Form.Control
       defaultValue={props.data.gender}
            onChange={handleChange}
            type="text"
            name = "gender"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">number</Form.Label>
        <Form.Control
         defaultValue={props.data.number}
            onChange={handleChange}
            type="number"
            name = "number"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
function UserAfterSignup() {
    const [data,setData]=useState([])
    const [modalShow, setModalShow] = React.useState(false);
 
    useEffect(()=>{
        const getDataByToken =()=>{
  const  token = localStorage.getItem("token")
  // console.log(token)
            axios.get("http://localhost:3000/user/by-token" , { headers: {"Authorization" : `Bearer ${token}`} })
            .then((res)=>{
              // console.log("token-data",res);
              setData(res.data.data)
              }).catch((error) => {
                console.log("error",error)
              });
      }
      getDataByToken()  
    },[])
  return (
    <div style={{width:"20%",margin:"auto",marginTop:'50px'}}><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg" />
    <Card.Body>
        
      <Card.Title>{data.firstName}&nbsp;&nbsp;{data.lastName}</Card.Title>
      
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{data.gender}</ListGroupItem>
      <ListGroupItem>{data.email}</ListGroupItem>
      <ListGroupItem>{data.number}</ListGroupItem>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" onClick={() => setModalShow(true)}>Edit</Button>
    <MyVerticallyCenteredModal
   
data={data}
show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <NavLink to="/products">
    <Button style={{float: 'right'}}>Shop Now</Button>
    </NavLink>
    </Card.Body>
  </Card>
  
 
  
  
  </div>
  )
}

export default UserAfterSignup