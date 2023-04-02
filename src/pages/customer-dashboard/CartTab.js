import React, { useState } from 'react'
import { p1 } from '../../assets/images/index'

function CartTab() {

  const cartProducts = [
    { id: 1, productImg: p1 , productName: 'T Shirt', productSize: 12, empName: 'Syed Noman Ali', gender: 'male', budget: 500 },
    { id: 2, productImg: p1 , productName: 'T Shirt', productSize: 14, empName: 'Syed Noman Ali', gender: 'male', budget: 600 },
    { id: 3, productImg: p1 , productName: 'T Shirt', productSize: 16, empName: 'Syed Noman Ali', gender: 'male', budget: 400 },
    { id: 4, productImg: p1 , productName: 'T Shirt', productSize: 21, empName: 'Syed Noman Ali', gender: 'male', budget: 200 },
    { id: 5, productImg: p1 , productName: 'T Shirt', productSize: 22, empName: 'Syed Noman Ali', gender: 'male', budget: 700 },
  ]

  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-2'>Cart</h1>
      {cartProducts.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-between rounded-lgro bg-gray-200 my-2 border-b border-gray-200 py-4 px-2">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <img className="h-16 w-16 object-contain rounded-md mr-4" src={item.productImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-700"> {item.productName} </h2>
            <p className="text-sm text-gray-500">Product Size: {item.productSize} </p>
            <p className="text-sm text-gray-500">Employee Name: {item.empName} </p>
            <p className="text-sm text-gray-500">Gender: {item.gender} </p>
          </div>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <div className="flex flex-col items-center mr-4">
            <p className="text-sm text-gray-500">Budget</p>
            <p className="text-lg font-bold text-gray-700"> ${item.budget} </p>
          </div>
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-500 mb-1" for="quantity">Quantity:</label>
            <div className="flex items-center bg-black text-white rounded-lg">
              <button
                className='px-3 py-1 rounded-l-lg'
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className='px-3'> {quantity} </span>
              <button
                className='px-3 py-1'
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}
      <div className="border-b border-gray-200 py-4 px-2">
        <label className="text-sm mb-2 font-semibold" for="detailed-info">Additional Information:</label>
        <textarea className="w-full border border-gray-300 p-2 rounded-md h-[100px]" id="detailed-info" name="detailed-info"></textarea>
        <button className='py-1.5 px-3 bg-black text-white mt-2 rounded-lg cursor-pointer'>Submit</button>
      </div>

    </div>
  )
}

export default CartTab