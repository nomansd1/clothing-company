import React, { useState } from 'react'
import ProductDrawer from '../components/ProductDrawer'

function TestDrawer() {
    const [showDrawer, setShowDrawer] = useState(false);
    const productImg = [
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    ]
  return (
    <div className='!overflow-hidden '>
        <h1 className='text-5xl'>hello drom drawer</h1>
        <button onClick={() => setShowDrawer(!showDrawer)} className='bg-black p-2 text-white'>open drawer</button>
        <ProductDrawer 
            show={showDrawer}
            setShow={setShowDrawer}
            img={productImg}
        />
    </div>
  )
}

export default TestDrawer
