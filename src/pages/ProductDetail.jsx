import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getData } from '../api';
import { AiFillStar } from "react-icons/ai"
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';
import Loader from '../component/loader/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const {dispatch} = useStateContext();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const getSingleProduct = async () => {
    setProduct(await getData(`/products/${id}`));
  }

  const getCatProducts = async () => {

    setProducts(await getData(`/products/category/${product.category}`));
  }
  useEffect(() => {

    getSingleProduct();
  }, [])
  useEffect(() => {
    getCatProducts();
  }, [products])
  const productByCat=products.filter((pd)=>pd.title.toLowerCase()!=product.title.toLowerCase())

  return (
    <div className='container mx-auto'>
      {
        products.length>0?<div>
          <div className=' flex gap-5 items-start'>
        <img src={product?.image} className="h-96 border-2 shadow-lg p-10" alt="" />
        <div className='flex gap-5 flex-col'>
          <h1 className='font-semibold text-2xl text-header'>{product?.title}</h1>
          <h3 className=' font-bold' > <span className='text-lg'>Category </span >-  <span className='text-gray-700' >{product?.category}</span></h3>
          <h2 className='font-bold'>Descriptions</h2>
          <p className='text-gray-500'>{product.description}</p>
          <div className='flex gap-2 items-center'> <AiFillStar className="text-orange-500" /> <span>({product.rating?.rate})</span></div>
          <p className='text-gray-700 font-semibold' >${product?.price}</p>
          <div>
            <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className='bg-info py-2 w-40 rounded-lg  group relative overflow-hidden inline-flex text-white shadow-lg  transform transition active:scale-90 duration-300' >
              <span className=' w-0 h-0  bg-indigo-600 absolute top-0 left-0 group-hover:w-full ease-out transition-all duration-500 group-hover:h-full -z-1 '></span>
              <span className='w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 '>
                Add To Cart
              </span>
            </button>
            <Link to={'/success'} >
              <button className='bg-slate-900 px-5 py-2 rounded-lg ml-3 shadow-lg relative group overflow-hidden inline-flex text-white hover:scale-95 active:scale-90 transition'>
                <span className=' absolute w-0 h-0 rounded bg-indigo-600 top-0 left-0 duration-500 ease-out group-hover:w-full group-hover:h-full transition-all -z-1'>
                </span>
                <span className='w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black z-10 '>
                  Buy Now
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='my-20'>
        <h1 className='text-xl font-semibold text-header'>You May Also be Like</h1>
        <div className='flex flex-wrap gap-7 justify-around my-20' >

          {
            productByCat?.map((item) => {
              return (
                <div onClick={() => setProduct(item)} className='border-2  flex-col gap-3 w-72  shadow-xl flex justify-center p-5' key={item.id}>
                  <img src={item.image} className=' h-[200px] mx-auto my-3' alt="" />
                  <div className=''>
                    <h3 className='text-header font-semibold '>{item.title.substring(0, 25)}</h3>
                    <div className=' flex gap-1 items-center'>
                      <AiFillStar className='text-orange-500' />
                      <p>({item?.rating.rate})</p>
                    </div>

                  </div>

                </div>

              )
            })
          }

        </div>
      </div>

        </div>
      :<Loader/>
      }
    

    </div>
  )
}

export default ProductDetail