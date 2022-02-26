import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const newOrderAdapter = createEntityAdapter()

const initialState = newOrderAdapter.getInitialState({
    showNewOrdersCheckbox: false,
    noOfOrdersSelected: 0
})


const newOrderSlice = createSlice({
    name: 'New Order',
    initialState,
    reducers: {
        toggleNewOrdersCheckbox(state, action){
            state.showNewOrdersCheckbox = !state.showNewOrdersCheckbox
        },
        increaseNoOfOrder(state, action){
            state.noOfOrdersSelected = ++state.noOfOrdersSelected
        },
        reduceNoOfOrder(state, action){
            state.noOfOrdersSelected = --state.noOfOrdersSelected
        }
    }
})

export const {
    toggleNewOrdersCheckbox,
    increaseNoOfOrder,
    reduceNoOfOrder
} = newOrderSlice.actions

export const getNewOrderCheckbox = (state : any) => {
    return state.newOrders.showNewOrdersCheckbox
}

export const getNoOfOrdersSelected = (state: any) => {
    return state.newOrders.noOfOrdersSelected
}

export default newOrderSlice.reducer