import React, { useState } from 'react'
import { Check } from '../assets/images';

function ProductDrawer(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(new Array(props.img.length).fill(1));

  const selectImage = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  }

  const increaseQuantity = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index]++;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index]--;
    if (newQuantity[index] < 1) {
      newQuantity[index] = 1;
    }
    setQuantity(newQuantity);
  };
  // onClick={() => props.setShow(!props.show)}
  return (
    <div className={`${props.show ? 'left-0' : 'left-[-100%]'} fixed top-0 flex z-50 justify-center items-center h-screen w-screen transition-all duration-500 ease-in-out bg-[rgba(0,0,0,.6)]`}>
      <div className='relative bg-white h-[90vh] w-[90vw] rounded-lg shadow-2xl p-2'>
        <div className='ml-1 mr-2 flex justify-between items-center'>
          <h1 className='text-2xl font-semibold'>Purchase Product</h1>
          <span class="material-symbols-rounded font-extrabold cursor-pointer" onClick={() => props.setShow(!props.show)}>
            close
          </span>
        </div>
        <div className=' relative h-[90%] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:flex flex-wrap overflow-y-auto justify-center mx-auto '>
          {props.img.map((item, index) => (
            <div key={index} className='relative bg-red-500 max-h-[15rem] max-w-xs rounded-lg m-2 flex justify-center items-center'>
              {selectedImage === index && (
                <div className='absolute top-2 right-2'>
                  <img src={Check} alt="" />
                </div>
              )}
              <img src={item.src} className={`h-full w-full cursor-pointer select-none ${selectedImage === index ? 'border-2 border-blue-500 ring-1 ring-blue-500' : ''}`} onClick={() => selectImage(index)} alt="" />
              {selectedImage === index && (
                <div className='absolute w-[90%] bottom-2 bg-black text-white flex items-center rounded-lg'>
                  {/* <button
                    className='px-3 py-1 rounded-l-lg'
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span className='px-3'>{quantity[index]}</span>
                  <button
                    className='px-3 py-1'
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button> */}
                  <button className='px-3 py-1.5 mx-auto rounded-l-lg'>Add to Cart</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDrawer
