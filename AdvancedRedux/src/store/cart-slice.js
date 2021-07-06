import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        add(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price,
                    title: newItem.title
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.total + newItem.price;
            }
        },
        remove(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.total = existingItem.total - existingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;