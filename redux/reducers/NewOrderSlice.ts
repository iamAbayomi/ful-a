import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const newOrderAdapter = createEntityAdapter()

const initialState = newOrderAdapter.getInitialState({
    showNewOrdersCheckbox: false
})


const newOrderSlice = createSlice({
    name: 'New Order',
    initialState,
    reducers: {
        toggleNewOrdersCheckbox(state, action){
            state.showNewOrdersCheckbox = !state.showNewOrdersCheckbox
        }
    }
})

export const {
    toggleNewOrdersCheckbox 
} = newOrderSlice.actions

export const getNewOrderCheckbox = (state : any) => {
    return state.newOrders.showNewOrdersCheckbox
}

export default newOrderSlice.reducer