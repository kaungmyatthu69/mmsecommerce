import React from 'react'
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const navigate =useNavigate();
  return (
    <div className='mx-auto container flex justify-center '>
        <div className=' bg-gray-300 mb-3 w-96 p-10 rounded shadow-lg animate__animated animate__backInDown'>
            <h1 className='text-white tracking-wider text-2xl leading-10'>Thank For Purchasing</h1>
            <button className='bg-danger mt-5 text-white p-2 hover:scale-105 transition duration-500  active:scale-90 rounded shadow-lg' onClick={()=>navigate('/')}>go shopping</button>
        </div>
    </div>
  )
}

export default Success