import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gettotal } from '../../redux/cart'
import './Navbar.scss'


const Navbar = ({setFilteredItems}) => {
  const dispatch=useDispatch()

  const {cartitems,totalCount}=useSelector((state)=>state.cart)
  const products=useSelector((state)=>state.product.products.data)
  

  const [query,setQuery]=useState('')

  useEffect(()=>{
    dispatch(gettotal())
  },[cartitems])

  const filter=(value)=>{
    setQuery(value)


    if(query !== ""){
      const items=products.filter((item)=>{
        return item.name.toLowerCase().includes(query.toLowerCase())
      }
       )
       setFilteredItems(items)
    }else{
      setFilteredItems([])
    }

  }



  return (
    <div className='w-100 d-flex align-items-center navcontainer'>
       <div className='cont-1 d-flex'>
         <h1>Instacart</h1>
       </div>
       <div className='cont-2 d-flex align-items-center'>
           <input className='p-2' type={"search"} value={query} onChange={(e)=>{filter(e.target.value)}} placeholder="Search Products"/>
           <i className='fa fa-search p-1 search'/>
           <Link to='/cart' className='cartlink'>
           <i className="fa fa-cart-plus cart"/>
           <div className='round'>{totalCount}</div>
           </Link>
           
        </div>
    </div>
  )
}

export default Navbar