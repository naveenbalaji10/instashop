import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Product.scss'
import { useDispatch, useSelector } from 'react-redux'
import { additem } from '../../redux/cart'

const Product = () => {

    const location=useLocation()
    const product=location.state;
    const dispatch=useDispatch()
    
    const cart=useSelector((state)=>state.cart)

    useEffect(()=>{
   console.log(cart)
    },[cart])

    useEffect(()=>{
     console.log(product)
    },[product])

const handleclick=()=>{
 dispatch(additem(product))
}

  return (
    <div className='d-flex align-items-center justify-content-center'>
        <div className='mt-5 d-flex align-items-center shadow-lg productwraper' >
           <div className='imgwraper d-flex align-items-center justify-content-center'>
               <div className='innerwrapper'>
               <img src={product.image.url} />
               </div>
           </div>
           <div className='content'>
              <div className='content-wrapper d-flex flex-column align-items-center text-left' >
                  <h3>{product.name}</h3>
                  <p className="desc">{product.description.slice(4,-5)}</p>
                  <h4 className='text-primary mt-2'>{product.price.formatted_with_symbol}</h4>
                  <button className='cartbutton mt-5' onClick={handleclick}>ADD TO CART</button>
              </div>        
           </div>
        </div>
    </div>
  )
}

export default Product