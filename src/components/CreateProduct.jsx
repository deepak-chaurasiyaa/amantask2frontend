import { useState } from "react";
import axios from "axios";
const CreateProduct = () => {
  const [file, setfile] = useState(null);
  const [name,setProductName]  = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null)
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    // console.log("file", file);
    formData.append("productName", name);
    formData.append("price", price);
    let rating = (Math.random() * 5) + 1;
    rating = rating.toFixed(1)
    formData.append("rating", rating);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = "http://localhost:3000/product/";
    console.log("formdata: " + JSON.stringify(formData));
    axios
      .post(url, formData, config)
      .then((response) => {
        alert("Product Created Successfully!!");
      })
      .catch((error) => {
        alert(error)
        console.log("error", error);
      });
  };

  const onInputChange = (e) => {
    setfile(e.target.files[0]);
  };
  return (
    <div  style = {{width:"30%", margin:"auto",padding:"25px"}}>
      <form onSubmit={onFormSubmit}>
        <h1 style = {{textAlign:"center",padding:"25px"}}>Create Product</h1>
        <label>Product Name</label>
        <input 
          style = {{fontSize:"22", marginBottom:"20px"}} 
          required =  "true" className="form-control" type = "text" 
          placeholder = "Enter Product Name"
          onChange={e => setProductName(e.target.value)} 
        />
        <label>Price</label>
        <input
          style = {{fontSize:"22", marginBottom:"20px"}}  
          required = "true" className="form-control" 
          placeholder = "Enter Product Amount"type = "name"
          onChange={e => setPrice(e.target.value)} 
        />
        <input
          style = {{fontSize:"22", marginBottom:"20px"}} 
          class="form-control form-control-lg"
          id="formFileLg"
          type="file"
          name="photo"
          onChange={onInputChange}
        />
        <button style ={{width:"100%"}}type="submit">Create Product</button>
      </form>
    </div>
  );
};
export default CreateProduct;
