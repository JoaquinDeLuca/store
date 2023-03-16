import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

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

      const productOne = state.products.find( item => item.id === action.payload.id)

      if(productOne){

        productOne.amount ? productOne.amount++ : 0;
        // let total = productOne.amount * productOne.price
        state.totalprice += action.payload.price; // sumando el precio total 
        state.TotalQuantity++ // incrementando la cantidad total de productos siempre

      } else {
        state.products.push({...action.payload, amount: 1})
        state.totalprice += action.payload.price;
        state.TotalQuantity++
      }
      
    },
    increase: (state, action) => {
      let id = action.payload;
      // action.payload.id
      let product = state.products.find( item => item.id === id)

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
    decrease: (state, action:PayloadAction<TProductId> ) =>  {
      const id =  action.payload;

      let product = state.products.find( item => item.id === id)

      if(product && product.amount != 0){
        product.amount ? product.amount-- : 0
        if(!(product.amount === 0 && state.totalprice === 0 && state.TotalQuantity === 0)){
          state.TotalQuantity--
          state.totalprice -= product.price
        }
      }

    },
    remove: ( state, action:PayloadAction<TProduct> ) => {

      const productsFilter = state.products.filter(item => item.id !== action.payload.id)

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