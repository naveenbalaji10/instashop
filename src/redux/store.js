import {configureStore} from '@reduxjs/toolkit'
import { cartslice } from './cart'
import {productsslice} from './products'

const store=configureStore({
    reducer:{
      product:productsslice.reducer,
      cart:cartslice.reducer
    }
})

export default store