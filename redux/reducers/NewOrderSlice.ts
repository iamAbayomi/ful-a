import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const newOrderAdapter = createEntityAdapter()

const initialState = newOrderAdapter.getInitialState({
    selectOrders: false
})


const newOrderSlice = createSlice({
    name: 'New Order',
    initialState,
    reducers: {
        selectOrders(state, action){
            state.selectOrders = !state.selectOrders
        }
    }
})

export const {
    selectOrders 
} = newOrderSlice.actions


export default newOrderSlice.reducer