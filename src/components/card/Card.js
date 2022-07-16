import React from 'react'
import './Card.scss'
import { useNavigate } from 'react-router-dom'



const Card = ({item}) => {

    let navigate=useNavigate();

    const handleRoute=(item)=>{
      navigate("/product",{state:item})
    }

  return (
    <div className='cardscontainer shadow-lg d-flex flex-column align-items-center' onClick={()=>{handleRoute(item)}}>
        <div className='imagecontainer'>
         <img className='productimage' src={item.image.url} />
        </div>
        <h5 className='text-primary'>{item.name}</h5>
        <p className='text-primary'>{item.price.formatted_with_symbol}</p>
    </div>
  )
}

export default Card