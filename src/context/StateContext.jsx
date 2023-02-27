import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { FaLaptopHouse } from "react-icons/fa";
import { getData } from "../api";

export const StateContext=createContext();

export const StateContextProvider=({children})=>{
    const [productList,setProductList]=useState([]);
    const [search,setSearch]=useState("");
    
   
    const initialState={
        products:[],
        cart:[],
      isfire:false
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "GET_PRODUCTS":
                return {...state,products:action.payload};
            case "ADD_TO_CART":
                const additem=action.payload;
                const isExisted=state.cart.find((item)=>item.id === additem.id);
                if(isExisted){
                    return(
                        {...state,cart:[...state.cart],isfire:true}
                    )
                }else{
                    return{...state,cart:[...state.cart,{...additem}],isfire:false}
                }
             
                // return{...state,cart:[...state.cart,{Existed,qty:1}]}    ;
            case "REMOVE_FROM_CART":
                return{...state,cart:[...state.cart.filter((item)=>item.id !== action.payload)]}
            case "CART_EMPTY":
                return{...state,cart:[]}
            default :
            return state;
        }
    }
    const [state,dispatch]= useReducer(reducer,initialState);

    const getProducts=async()=>{
        const data=await getData('/products');
        setProductList(data);
    }
    useEffect(()=>{
        getProducts();
        
    },[])
    useEffect(()=>{
        dispatch({type:'GET_PRODUCTS',payload:productList})
        const filterProducts=productList.filter(pd=>pd.title.toLowerCase().includes(search.toLowerCase()));
        dispatch({type:"GET_PRODUCTS",payload:filterProducts})
    },[productList,search])

    const data={state,search,setSearch,dispatch}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);