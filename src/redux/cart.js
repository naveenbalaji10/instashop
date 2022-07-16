import { createSlice} from "@reduxjs/toolkit";

const initialState={
    cartitems:[]
}

const getItemIndex = (state, id) => {
    const ids = state.cartitems.map(item => item.id);
    return ids.indexOf(id);
}

export const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
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
        return state.cartitems.filter((item) => item.id !== action.payload.id );
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
          return state.cartitems.filter((item) => item.id !== action.payload.id);
        }
    },
    }
})

export const { additem,removeFromCart,incrementQuantity,decrementQuantity} = cartslice.actions