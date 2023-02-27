import React from 'react';
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Card = ({ product }) => {
  const { title, price, image, rating, id} = product;
  const {dispatch} = useStateContext();
  return (
    <div className='w-72 border-2 p-5 my-2 rounded-lg hover:scale-110 transition duration-300'>
      <img src={image} alt="" className=' h-[200px] mx-auto my-3' />
      <h1 className='font-bold text-header' >{title.substring(0, 25)}</h1>
      <div className=' flex items-center  gap-1'>
        <AiFillStar className='text-orange-500' />
        <small>({rating.rate})</small>
      </div>
      <p className='text-gray-700 font-semibold'>${price}</p>
      <div className=''>
        <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className='bg-info active:scale-90 px-5 py-2 rounded-lg shadow-lg  inline-flex group overflow-hidden transition relative'>
          <span className='w-0 h-0 rounded bg-indigo-600 top-0 left-0  ease-out duration-500 absolute transition-all group-hover:w-full group-hover:h-full -z-1'></span>

          <span className='w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10'> Add To Cart</span>
        </button>

        <Link to={`/detail/${id}`} >
          <button className='bg-slate-900 px-5  py-2 rounded-lg ml-3 shadow-lg relative group overflow-hidden inline-flex text-white hover:scale-95 active:scale-90 transition'>
            <span className=' absolute w-0 h-0 rounded bg-indigo-600 top-0 left-0 duration-500 ease-out group-hover:w-full group-hover:h-full transition-all -z-1'>

            </span>
            <span className='w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10 '>

              Details
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card