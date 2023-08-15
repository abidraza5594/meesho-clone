import { json } from 'react-router-dom';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            action.payload.quantity=1
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        increamentQuantity(state,action){
            // console.log(action.payload,"action payload")
            // console.log(JSON.parse(JSON.stringify(state)),"state ---")
            let currentProduct=state.find(item=>item.id==action.payload)
            currentProduct.quantity=currentProduct.quantity+1
            // console.log(JSON.parse(JSON.stringify(currentProduct)),"Curent Produsct------------------")
            return state
        },
        decreamentQuantity(state,action){
            let currentProduct=state.find(item=>item.id==action.payload)
            let newQuantity=currentProduct.quantity-1
            if(newQuantity===0){
                return state.filter((item) => item.id !== action.payload);
            }
            currentProduct.quantity=newQuantity
            
        },
    },
});

export const { add, remove ,increamentQuantity,decreamentQuantity} = cartSlice.actions;
export default cartSlice.reducer;