import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {

  const cartitems=useSelector((state)=>state.cart.cartitems)
 
  return (
    <div className='d-flex align-items-center navcontainer'>
       <div className='cont-1 d-flex'>
         <h1>Instacart</h1>
       </div>
       <div className='cont-2 d-flex align-items-center'>
           <input className='p-2'/>
           <i className='fa fa-search p-1 search' />
           <Link to='/cart'>
           <i className="fa fa-cart-plus cart"/>
           <div className='round'>{cartitems.length}</div>
           </Link>
           
        </div>
    </div>
  )
}

export default Navbar