import { createSlice } from '@reduxjs/toolkit'

export interface ListItem {
    id: number
    name: string
    price: number
    img: string
}


const initialState: ListItem[] = [
    {
        id: 1,
        name: 'p1',
        price: 500,
        img: 'uibfb'
    },
    {
        id: 2,
        name: 'p12',
        price: 1200,
        img: 'uibfb'
    },
    {
        id: 3,
        name: 'p3',
        price: 5560,
        img: 'uibfb'
    },
]

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        remove: (state, action) => {
            console.log(action)
            state.splice(action.payload, 1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { remove } = productListSlice.actions

export default productListSlice.reducer