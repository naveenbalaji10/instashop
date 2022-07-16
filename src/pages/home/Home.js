import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/products'
import {TailSpin} from 'react-loader-spinner' 
import Card from '../../components/card/Card'
import './Home.scss'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
   const dispatch=useDispatch()

   const productsdata=useSelector((state)=>state.product.products.data)
   const loading=useSelector((state)=>state.product.loading)


   useEffect(()=>{
       dispatch(fetchProducts())
   },[])

   useEffect(()=>{
   console.log(productsdata)
   },[productsdata])

   useEffect(()=>{
    console.log(loading)
    },[loading])

  return (
    <div className='d-flex flex-column align-items-center'>
        <h3 className='text-left'>Products</h3>
        <div className='container d-flex align-items-center justify-content-center mb-5'>

        <Row className='gy-5 gx-2'>
        {
            loading  ?
            <TailSpin   
            height="80"
           width="80"
           color='#5181cf'
           ariaLabel='loading'/>
           :

           productsdata?.map((item)=>(
               <Col xs={12} sm={4} lg={3} >
               <Card item={item}/>
               </Col>
           ))
        }
        </Row>
        </div>

    </div>
  )
}

export default Home