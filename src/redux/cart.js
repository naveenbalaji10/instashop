import { createSlice} from "@reduxjs/toolkit";

const initialState={
    cartitems:[],
    totalPrice:0,
    totalCount:0
}

const getItemIndex = (state, id) => {
    const ids = state.cartitems.map(item => item.id);
    return ids.indexOf(id);
}

export const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
    gettotal:(state)=>{
     const {totalPrice,totalCount}=state.cartitems.reduce((carttotal,item)=>{
         const price=item.price.raw;
         const {quantity}=item;
         const total=price * quantity;
         carttotal.totalPrice += total;
         carttotal.totalCount += quantity;
         return carttotal;
     },{totalPrice:0,totalCount:0})
       
     state.totalCount=totalCount;
     state.totalPrice=totalPrice;


    },
    additem:(state,action)=>{
        const itemIndex = getItemIndex(state, action.payload.id);
        if (itemIndex && itemIndex < 0){
            const item={...action.payload,quantity:1}
            state.cartitems.push(item);
        }
          else{
                state.cartitems[itemIndex].quantity += 1;
    
        }
    },
    removeFromCart:(state, action)=>{
        state.cartitems= state.cartitems.filter((item) => item.id !== action.payload.id );
    },
    incrementQuantity:(state, action)=>{
        const itemIndex = getItemIndex(state, action.payload.id);
        state.cartitems[itemIndex].quantity += 1;
    },
    decrementQuantity:(state, action)=> {
        const itemIndex = getItemIndex(state, action.payload.id);
        
        if (state.cartitems[itemIndex].quantity > 1){
            state.cartitems[itemIndex].quantity -= 1;
        } else{
      state.cartitems = state.cartitems.filter((item)=> item.id != state.cartitems[itemIndex].id)
    }
    }
}
})

export const { additem,removeFromCart,incrementQuantity,decrementQuantity,gettotal} = cartslice.actions