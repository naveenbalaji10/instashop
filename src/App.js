import { useState,useEffect } from 'react';
import './App.scss';
import './sass/helper.scss'
import './sass/custom.scss'
import { Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'react-bootstrap';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';


function App() {

  const [filteredItems,setFilteredItems]=useState([]);


  useEffect(()=>{
 console.log(filteredItems)
  },[filteredItems])


  return (
    <Provider store={store}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">

    <div className="App">
     <Router>
       <Navbar setFilteredItems={setFilteredItems}/>
       <Routes>
         <Route path='/' index element={<Home filteredItems={filteredItems}/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/cart' element={<Cart/>} />
       </Routes>
     </Router>
    </div>
    </ThemeProvider>

    </Provider>


  );
}

export default App;
