import React from 'react'
import {FaShopify} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";
import {FiShoppingCart} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
const Navbar = () => {
  const {search,setSearch,state:{cart}}=useStateContext();
 
  return (
    <div className='container sticky top-0  mx-auto bg-primary py-2 flex z-50 justify-between rounded my-5 shadow-lg px-5'>
      <Link to={'/'}  >
      
        <div className='flex items-center gap-2'>
            <FaShopify className=' text-5xl text-danger '/>
            <h2 className='text-danger font-semibold text-xl '>MMS Shop</h2>

        </div>
      </Link>
        <div className='flex items-center gap-3'>
          <Link to={'/cart'}>
            <div className='flex items-center gap-2 bg-danger text-white px-3 py-2 rounded shadow-lg active:scale-90 transition transform'>
              <FiShoppingCart/>
              <p>{cart.length}</p>
            
            </div>
          </Link>
          <div className=' flex gap-2 items-center border-2 rounded-lg px-3 py-2 '>
            <FiSearch/>
            <input type="text"  onChange={(e)=>setSearch(e.target.value)} className='outline-none' placeholder='Search.....' />
          </div>

        </div>

    </div>
  )
}

export default Navbar