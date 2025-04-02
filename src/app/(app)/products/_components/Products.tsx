import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <>
        <div className='flex flex-col bg-black'> 
            <h1 className='text-white'>Products</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col bg-transparent border-2 border-white rounded-lg p-4'>
                    <Image src={}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products
