import React, { useState, useEffect } from "react";
import { p1 } from "../../assets/images/index";
import { useAddNewOrderMutation } from "../../apis/companyManager/index";
function CartTab() {
  const [addNewOrder, response] = useAddNewOrderMutation();
  const [cartProducts, setCartProducts] = useState([]);
  console.log("res", response);
  const orderBodyConvert = (cartProducts) => {
    debugger;
    // let total=cartProducts.map(val=>val.map(value=>value.productPrice))
    // val.slider.showProducts[0].products
    // console.log("total>>>",total)

    return cartProducts.map((val) => {
      let total = val.slider.showProducts[0].products.map(
        (val) => val.productPrice
      );
      total = total.reduce((previousScore, currentScore, index) =>  previousScore + currentScore, 0);
      console.log("total/>>", total);

      return {
        employeeId: val.id,
        products: val.slider.showProducts[0].products,
        companyName: "ajjs",
        bill: total,
        quantity: 5,
        companyId: "642971e096ff3d9f02f81b00",
        comment: "Hi I have creted order, plz connect with me ",
      };
    });
  };
  const createOrder = () => {
    let orderData = orderBodyConvert(cartProducts);
    console.log("orer?", orderData);
    if (orderData.length > 0) {
      alert("Order Created");
      //  remove cart item on rder created
      addNewOrder(orderData)
        .unwrap()
        .then((res) => {
          console.log("res", res);
          alert("Order created");
        })
        .then((error) => {
          console.log(error);
        });
    } else {
      alert("Add Item First ");
    }
  };
  const removeCartItem = (id) => {
    debugger;
    let getLocalStorageCartData = JSON.parse(localStorage.getItem("addToCart"));
    if (getLocalStorageCartData != null) {
      // getLocalStorageCartData = JSON.parse(getLocalStorageCartData);
      let RemoveItem = getLocalStorageCartData.filter((val) => val.id !== id);
      localStorage.setItem("addToCart", JSON.stringify(RemoveItem));
      setCartProducts(RemoveItem);
    }
  };
  useEffect(() => {
    let getLocalStorageCartData = JSON.parse(localStorage.getItem("addToCart"));
    // getLocalStorageCartData = JSON.parse(getLocalStorageCartData);
    console.log("get", getLocalStorageCartData);
    if (
      getLocalStorageCartData != undefined ||
      getLocalStorageCartData != null
    ) {
      console.log("addtocart>>>>", getLocalStorageCartData);
      setCartProducts(getLocalStorageCartData);
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Cart</h1>
      {cartProducts.map((item, index) => {
        console.log("add to cart ", item);
        return (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between rounded-lg bg-gray-200 my-2 border-b border-gray-200 py-4 px-2"
          >
            <div className="flex flex-col md:flex-row lg:flex-row">
              {/* <img className="h-16 w-16 object-contain rounded-md mr-4" src={item.productImg} alt="" /> */}
              <div className="flex flex-col ">
                {/* <h2 className="text-lg font-bold text-gray-700"> {item.productName} </h2> */}
                {/* <p className="text-sm text-gray-500">Product Size: {item.productSize} </p> */}
                <p className="text-sm  text-gray-500">
                  Employee Name: {item.name}{" "}
                </p>
                {/* <p className="text-sm text-gray-500">Gender: {item.gender} </p> */}
                {item?.slider?.showProducts[0].products.map((val) => {
                  return (
                    <div className="mt-2">
                      <h2 className="text-lg font-bold text-gray-700">
                        {" "}
                        {val.productName}{" "}
                      </h2>

                      <p className="text-sm text-gray-500 ">
                        Price : {val.productPrice}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  removeCartItem(item.id);
                }}
              >
                Remove Item
              </button>
            </div>
            {/* <div className="flex items-center mt-4 sm:mt-0">
              <div className="flex flex-col items-center mr-4">
                <p className="text-sm text-gray-500">Budget</p>
              </div>
              <div className="flex flex-col items-center">
                <label className="text-sm text-gray-500 mb-1" for="quantity">
                  Quantity:
                </label>
                <div className="flex items-center bg-black text-white rounded-lg">
                  <button
                    className="px-3 py-1 rounded-l-lg"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-3"> {quantity} </span>
                  <button className="px-3 py-1" onClick={increaseQuantity}>
                    +
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        );
      })}
      <div className="border-b border-gray-200 py-4 px-2">
        <label className="text-sm mb-2 font-semibold" for="detailed-info">
          Additional Information:
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md h-[100px]"
          id="detailed-info"
          name="detailed-info"
        ></textarea>
        <button
          className="py-1.5 px-3 bg-black text-white mt-2 rounded-lg cursor-pointer"
          onClick={() => createOrder()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CartTab;
