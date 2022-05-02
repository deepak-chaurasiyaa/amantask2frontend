import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { NavLink,useHistory } from "react-router-dom";
const myStyle = {
  backgroundImage:
    "url('https://static.vecteezy.com/system/resources/thumbnails/002/016/085/original/colorful-gradient-background-free-video.jpg')",
  height: "1800px",
  width: "100%",
  marginTop:-14,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Products() {
  const history = useHistory();
  const [data, setData] = React.useState([{ image: "" }]);
  const [cartItem, setCartItem] = React.useState("");
  const [userName, setUserName] = React.useState(null);
 
  const token = localStorage.getItem("token");
  const product = ()=>{
    axios
      .get("http://localhost:3000/user/product")
      .then((response) => {
        let data = response.data.data;
      
        setData(data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/by-token", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserName(res.data.data.firstName + " " + res.data.data.lastName);
      })
      .catch((err) => {
        console.log(err);
      });
 },[])
  const cart = () => {
    axios
      .get("http://localhost:3000/cart/get-users-cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if(res.data.data.length === undefined){
          setCartItem(0)
        }
        else{

          setCartItem(res.data.data.length);
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  cart();
  useEffect(() => {
    product()
  }, []);

  const addToCart = (productId) => {
    if(!token){
     history.push("/user-login");
    }
    let data = { productId: productId, quantity: 1 };
    axios
      .post("http://localhost:3000/cart/addToCart", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        cart();
        alert("Product added successfully !");
        return response
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const clearToken = ()=>{
    localStorage.removeItem("token");
    setUserName(null)
    
  }
  return (
    <>

      <div style={myStyle}>
        <div
          style={{ width: "90%", height: 15, margin: "auto", marginTop: 15 }}
        >
          {userName && (
            <div>
              <NavLink to="/user-data">
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile Pic"
                ></img>
              </NavLink>
              <span>
                <h6
                  style={{
                    float: "right",
                    position: "absolute",
                    marginTop: "-35px",
                    marginLeft: 30,
                  }}
                >
                  &nbsp;{userName}
                  <Button
                    onClick={() => clearToken()}
                    style={{ marginLeft: 10 }}
                  >
                    Log Out
                  </Button>
                </h6>
              </span>
              <NavLink to="/cart">
                {/* <img src = ""></img> */}
                <Button style={{ float: "right" }}>
                  Cart Item :&nbsp;{cartItem}
                </Button>
              </NavLink>
            </div>
          )}
        </div>
        <br />
        <div style={{ width: "100%", borderRadius: 50 }}>
          {data.map((data) => (
            <div
              key={data.id}
              style={{
                width: "22%",
                float: "left",
                margin: "1.5%",
                borderRadius: 50,
              }}
            >
              <Card style={{ boxShadow: "5px 5px #adb1bd" }}>
                <Card.Img
                  style={{ height: 150 }}
                  variant="top"
                  src={`http://localhost:3000/public/image/${
                    data.image.split("\\image\\")[1]
                  }`}
                />
                <Card.Body>
                  <Card.Title>{data.productName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Price - {data.price}</ListGroupItem>
                  <ListGroupItem>Rating - {data.rating}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button>Buy Now</Button>

                  <Button
                    style={{ float: "right" }}
                    key={data.id}
                    onClick={() => addToCart(data.id)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
