import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'features/store'

export interface State {
  products: TProduct[],
  totalprice: number,
  TotalQuantity: number
}

const initialState: State = {
  products: [],
  totalprice: 0,
  TotalQuantity: 0
}

export const counterSlice = createSlice({
  name: 'speaker',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<TProduct>) => {

      const productOne = state.products.find( item => item._id === action.payload._id)

      if(productOne){
        productOne.amount ? productOne.amount++ : 0;
        state.totalprice += productOne.price;
        state.TotalQuantity++ 
      } else {
        state.products.push({...action.payload, amount: 1})
        state.totalprice += action.payload.price;
        state.TotalQuantity++
      }
    },
    increase: (state, action:PayloadAction<TProductId>) => {
      let _id = action.payload;

      let product = state.products.find( item => item._id === _id)

      if(product && product.amount != 0){
        product.amount ? product.amount++ : 1
        state.TotalQuantity++
        state.totalprice += product.price

      } else if (product?.amount === 0){
        product.amount++
        state.TotalQuantity++
        state.totalprice += product.price
      }
    },
    decrease: (state, action:PayloadAction<TProductId>) =>  {
      const _id =  action.payload;

      let productFind = state.products.find( item => item._id === _id)

      if(productFind?.amount === 1 ){
        const newProducts = state.products.filter(item => item._id !== _id)
        state.TotalQuantity--
        state.totalprice -= productFind.price
        state.products = newProducts
      } else {
        productFind?.amount ? productFind.amount-- : 0
        state.TotalQuantity--
        state.totalprice -= productFind?.price ? productFind.price : 0
      }
    },
    remove: ( state, action:PayloadAction<TProduct> ) => {

      const productsFilter = state.products.filter(item => item._id !== action.payload._id)

      if(action.payload.amount){
        state.TotalQuantity -= action.payload.amount
        state.totalprice -= (action.payload.price) * (action.payload.amount)
      }
      state.products = productsFilter;
    },
    removeAll: (state) => {
      state.products = [],
      state.TotalQuantity = 0
      state.totalprice = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increase, decrease, remove, removeAll } = counterSlice.actions

// Select Value
export const selectState = (state: RootState) => state.stateSpeakers; 
export const TotalQuantity = (state: RootState) => state.stateSpeakers.TotalQuantity; 

export default counterSlice.reducer