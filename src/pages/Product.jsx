import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../component/Card';
import Loader from '../component/loader/Loader';
import { useStateContext } from '../context/StateContext'
import Swal from 'sweetalert2'
const Product = () => {
  const {state:{products,cart,isfire}} = useStateContext();
  const onfire=()=>{
    Toast.fire({
      icon: 'warning',
      title: 'Item is  already added'
    })
  }

  const fire=()=>{
    if (cart.length>0) {
      
      Toast.fire({
        icon: 'success',
        title: `${cart.length} items are added`
      })
    }

  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

 
 
  useEffect(()=>{
    if (cart.length>0) {
      
      fire()
    }
  },[cart.length])


  return (
    <div className='flex flex-wrap gap-3 container mx-auto justify-center relative '>
      {
        isfire && onfire()
      }
    
      
      {
      
        products.length>0?products?.map(
          product=>{
            return(
              
              

             <Card key={product.id}  product={product} />
            )
          }
          ):<Loader/>
      }

    </div>
  )
}

export default Product