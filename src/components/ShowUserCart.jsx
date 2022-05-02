import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
function ShowUserCart() {
  const history = useHistory();
  const [data, setCartItem] = React.useState([]);
  const [abc, Setabc] = React.useState([]);
  const [sorting, setSorting] = React.useState("Price High to low order");
  const [high, setHigh] = React.useState(false);
  const updateCart = ({ productId, sum }) => {
    const token = localStorage.getItem("token");
    let data = { productId: productId, quantity: sum };
    axios
      .post("http://localhost:3000/cart/addToCart", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //  ShowUserCart();
        run();
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const SortLTH = () => {
    let newData = data.sort((a, b) => {
      return Number(a.totalPrice) - Number(b.totalPrice);
    });

    // Setabc(newData);

    if (high) {
      setSorting("Price High to Low order");
      setHigh(false);
      setCartItem(newData);
      Setabc([]);
    }
    if (!high) {
      let newData1 = data.sort((a, b) => {
        return Number(b.totalPrice) - Number(a.totalPrice);
      });
      setSorting("Price Low to High Order");
      setHigh(true);
      setCartItem(newData1);
      Setabc([]);
    }

    // Setabc(newData);
  };
  let sum = 0;
  function run() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/cart/get-users-cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setCartItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    run();
  }, []);

  const deleteCartProduct = ({ productId }) => {
    const token = localStorage.getItem("token");
    const data = { productId: productId };

    axios
      .delete(`http://localhost:3000/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        run();
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("productId11", productId);
  };
  const placeOrder = () => {
    const token = localStorage.getItem("token");

    axios
      .post(`http://localhost:3000/place-order`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        run();
        alert("Order Placed!");
        history.push("/products");
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {data && (
        <div>
          {/* <Button style = {{position: "relative",float: "right",top:-30,bottom:30}}>Previous Orderd history</Button> */}
          <div style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
            <Button style={{ marginBottom: 20 }} onClick={SortLTH}>
              {sorting}
            </Button>

            <Table striped hover>
              <thead>
                <tr>
                  <th>
                    <h3>Product</h3>
                  </th>
                  <th>
                    <h3>Product Name</h3>
                  </th>
                  <th>
                    <h3>Quantity</h3>
                  </th>
                  <th>
                    <h3>Price</h3>
                  </th>
                  <th>
                    <h3>Total Price</h3>
                  </th>
                  <th>
                    <h3>Action</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {console.log("===========-------->",data)} */}
                {data.map((item) => {
                  sum += Number(item.totalPrice);
                  return (
                    <tr key={item.id}>
                      <td>
                        <img
                          style={{ width: 200, height: 100 }}
                          src={`http://localhost:3000/public/image/${
                            item.image.split("\\image\\")[1]
                          }`}
                          alt="product"
                        ></img>
                      </td>
                      <td>
                        <h4>{item.productName}</h4>
                      </td>
                      <td>
                        <h4>
                          <Button
                            key={data.id}
                            onClick={() =>
                              updateCart({ productId: item.id, sum: -1 })
                            }
                          >
                            -
                          </Button>
                          &nbsp;&nbsp;
                          {item.quantity}&nbsp;&nbsp;
                          <Button
                            key={data.id}
                            onClick={() =>
                              updateCart({ productId: item.id, sum: 1 })
                            }
                          >
                            +
                          </Button>
                        </h4>
                      </td>
                      <td>
                        <h4>{item.price}</h4>
                      </td>
                      <td>
                        <h4>{item.totalPrice}</h4>
                      </td>
                      <td>
                        <Button
                          onClick={() =>
                            deleteCartProduct({ productId: item.id })
                          }
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <h1 style={{ float: "right" }}>Total Price : {sum}</h1>
            <Button
              onClick={() => placeOrder()}
              style={{
                width: "35%",
                height: "45px",
                marginTop: 50,

                marginLeft: 150,
                position: "absolute",
                float: "right",
              }}
            >
              Place Order
            </Button>
            <div style={{ marginBottom: 150 }}></div>
          </div>
        </div>
      )}

      {!data && <h1>No Item In Your Cart!</h1>}
    </>
  );
}

export default ShowUserCart;
