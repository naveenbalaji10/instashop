import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  commerce  from '../lib/commerce';
const initialState={
    loading:false,
    products:[],
    error:''
}

export const fetchProducts =createAsyncThunk('products/fetchProducts', () => {
   return commerce.products.list()
})

export const productsslice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchProducts.fulfilled ,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false;
            state.error="404 error not found"
        })

    }
})
