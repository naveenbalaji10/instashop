import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import './Cart.scss'
import { useDispatch,useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity,removeFromCart } from '../../redux/cart'

const Cart = () => {


const dispatch=useDispatch()
const cartitems=useSelector((state)=>state.cart.cartitems)
const {totalPrice}=useSelector((state)=>state.cart)

useEffect(()=>{
 console.log(cartitems)
},[cartitems])


  return (
    <div className='cartouter d-flex flex-column align-items-center'>
         <div className='cartcontainer mt-5 d-flex align-items-center'>
                    <div className='snohead text-center'>Sno</div>
                    <div className='imagehead text-center'>Image</div>
                    <div className='namehead text-center'>Name</div>
                    <div className='qtyhead text-center'>Quantity</div>
                    <div className='pricehead text-center'>price</div>
          </div>
          {
          cartitems !== undefined &&   cartitems.map((item,i)=>(
          
              <div className='itemcontainer d-flex align-items-center mt-3'>
                    <div className='sno1 text-center'><h4>{i + 1}</h4></div>
                    <div className= 'image1 d-flex justify-content-center'><img src={item.image.url} /></div>
                    <div className='name1 text-center'><h4>{item.name}</h4></div>
                    <div className='qty1 d-flex align-items-center text-center'>
                      <div>
                      <button  onClick={()=>{dispatch(decrementQuantity(item))}} >
                        -
                      </button>
                      </div>
                     <div>
                      <h4>{item.quantity}</h4>
                     </div>
                      <div>
                      <button  onClick={()=>{ dispatch(incrementQuantity(item))}}>
                        +
                      </button>
                      </div>
                      <div>
                      <button className="pl-2" onClick={()=>{dispatch(removeFromCart(item))}}><i className="fa fa-trash" /></button>
                      </div>
                      </div>
                    <div className='price1 text-center'><h4>${item.price.raw * item.quantity}</h4></div>
              </div>
            ))
          }
          <div className='d-flex totalcontainer mt-5 '>
              <button className='buy'>Buy Now</button>
              <h3>Total: {totalPrice}</h3>
          </div>
      </div>
  )
}

export default Cart