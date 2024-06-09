import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            productList: ProductSlice
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']