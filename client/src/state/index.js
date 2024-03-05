import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {  //action.payload is the item we want to add to our cart
            state.items = action.payload;            
        },
        addToCart: (state, action) =>{   //action.payload is the id of the product that we want to add
            state.cart = [...state.cart, action.payload.item];
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            })
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            })
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { 
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;