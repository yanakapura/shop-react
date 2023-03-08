import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item)=>item.id === newItem.id);
            state.totalQuantity += newItem.quantity;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    colors: newItem.colors || [],
                    sizes: newItem.sizes || [],
                })
            } else {
                existingItem.quantity = newItem.quantity || existingItem.quantity;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice