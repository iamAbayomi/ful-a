import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const newOrderAdapter = createEntityAdapter()

const initialState = newOrderAdapter.getInitialState({
    showNewOrdersCheckbox: false,
    noOfOrdersSelected: 0,
    clearAllOrderSelected: true
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
        },
        resetNoOfOrder(state){
            state.noOfOrdersSelected = 0
        },
        clearAllOrderSelected(state){
            state.clearAllOrderSelected = !state.clearAllOrderSelected
        }
    }
})

export const {
    toggleNewOrdersCheckbox,
    increaseNoOfOrder,
    reduceNoOfOrder,
    resetNoOfOrder,
    clearAllOrderSelected
} = newOrderSlice.actions

export const getNewOrderCheckbox = (state : any) => {
    return state.newOrders.showNewOrdersCheckbox
}

export const getNoOfOrdersSelected = (state: any) => {
    return state.newOrders.noOfOrdersSelected
}

export const getOrderSelectedState = (state: any) => {
    return state.newOrders.clearAllOrderSelected
}

export default newOrderSlice.reducer