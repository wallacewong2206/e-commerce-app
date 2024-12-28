// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // Increment amount if item already exists
                state[itemIndex].amount += 1;
            } else {
                // Add new item with amount = 1
                state.push({ ...action.payload, amount: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state[itemIndex].amount > 1) {
                    state[itemIndex].amount -= 1; // Decrease quantity
                } else {
                    state.splice(itemIndex, 1); // Remove item if amount = 1
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
