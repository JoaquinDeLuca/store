import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

export interface CounterState {
  product: TProduct[],
  totalprice: number,
  TotalQuantity: number
}

const initialState:CounterState = {
  product: [],
  totalprice: 0,
  TotalQuantity: 0
}

export const counterSlice = createSlice({
  name: 'speaker',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<TProduct>) => {

      const productOne = state.product.find( item => item.id === action.payload.id)

      if(productOne){

        productOne.amount ? productOne.amount++ : 0;
        // let total = productOne.amount * productOne.price
        state.totalprice += action.payload.price; // sumando el precio total 
        state.TotalQuantity++ // incrementando la cantidad total de productos siempre

      } else {
        state.product.push({...action.payload, amount: 1})
        state.totalprice += action.payload.price;
        state.TotalQuantity++
      }
      
    },
    decrement: (state) => {
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, } = counterSlice.actions

// Select Value
export const selectState = (state: RootState) => state.stateSpeakers; 
export const TotalQuantity = (state: RootState) => state.stateSpeakers.TotalQuantity; 

export default counterSlice.reducer