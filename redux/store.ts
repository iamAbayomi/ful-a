import { configureStore } from "@reduxjs/toolkit";
import newOrderReducer from './reducers/NewOrderSlice'

export const store = configureStore({
    reducer: {
        newOrder: newOrderReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch