import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

interface newOrderState {
    useRef : any
}

const newOrderAdapter = createEntityAdapter<newOrderState>({
    
})

const initialState = newOrderAdapter.getInitialState({
    showNewOrdersCheckbox: false,
    noOfOrdersSelected: 0,
    clearAllOrderSelected: false,
    useRef: "",
    singleCheckboxState: false
})


const newOrderSlice = createSlice({
    name: 'New Order',
    initialState,
    reducers: {
        toggleNewOrdersCheckbox(state){
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
        },
        passRef(state, action){
            state.useRef = action.payload
        },
        changeSingleCheckboxState(state){
            state.singleCheckboxState = !state.singleCheckboxState
        }
    }
})

export const {
    toggleNewOrdersCheckbox,
    increaseNoOfOrder,
    reduceNoOfOrder,
    resetNoOfOrder,
    clearAllOrderSelected,
    changeSingleCheckboxState
} = newOrderSlice.actions

export const getNewOrderCheckbox = (state : any) => {
    return state.newOrders.showNewOrdersCheckbox
}

export const getNoOfOrdersSelected = (state: any) => {
    return state.newOrders.noOfOrdersSelected
}

export const getAllOrderSelectedState = (state: any) => {
    return state.newOrders.clearAllOrderSelected
}

export const getRef = (state: any) =>{
    return state.newOrders.useRef
}

export const getSingleCheckboxState = (state: any) => {
    return state.newOrders.singleCheckboxState
}

export default newOrderSlice.reducer