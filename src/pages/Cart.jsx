import React from 'react'
import { useStateContext } from '../context/StateContext';
import { v4 as uuidv4 } from "uuid"
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';

const Cart = () => {
    const { state: { cart }, dispatch } = useStateContext();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const checkoutHandler = () => {
        dispatch({ type: "CART_EMPTY" });
        navigate('/success');

    }

 useEffect(()=>{
  setTotal(cart.reduce((p,c)=>p+c.price,0))

 },[cart])
    return (
        <>
            {
                cart.length > 0 &&
                <div className='grid grid-cols-4 container mx-auto'>
                    <div className='col-span-3'>
                        <div className='flex flex-col gap-3'>
                            {
                                cart?.map((item) => {
                                    return (
                                        <div className=" container mx-auto flex gap-5 items-center" key={uuidv4()}>
                                            <img src={item.image} className="w-36 border-2 shadow-lg p-3" alt="" />
                                            <div className='flex flex-col gap-3'>
                                                <h1 className='text-header font-semibold text-2xl'>{item.title.substring(0, 25) + '....'}</h1>
                                                <p>${item.price}</p>





                                                <button className='text-danger font-bold text-2xl  ' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })} ><AiFillDelete /></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='p-10 bg-gray-50 shadow-lg '>
                            <h1 className='text-info font-semibold text-2xl mt-5'>Total Price - ${total}</h1>
                            <button onClick={checkoutHandler} className='uppercase bg-info active:scale-90 transition  text-white p-2 rounded my-5'>Check Out</button>
                        </div>
                        <button onClick={() => dispatch({ type: "CART_EMPTY" })} className='bg-danger px-1 py-2 my-5 w-40 mx-auto rounded text-white active:scale-90 transition'>Cart Empty</button>


                    </div>
                </div>
            }
            {
                !cart.length > 0 &&
                <div className='mx-auto container flex justify-center '>
                    <div className=' bg-gray-300 mb-3 w-96 p-10 rounded shadow-lg animate__animated animate__backInDown'>
                        <h1 className='text-white tracking-wider text-2xl leading-10'>Your Cart is Empty</h1>
                        <button className='bg-danger mt-5 text-white p-2 hover:scale-105 transition duration-500  active:scale-90 rounded shadow-lg' onClick={() => navigate('/')}>go shopping</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart