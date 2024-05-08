import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cartlist',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToCart(state,action){
            let tempData = state.data
            let isItemExist = false
            tempData.map((item)=>{
                if(item.id == action.payload.id)
                    {
                        isItemExist = true
                        item.qty = item.qty+1
                    }
            })
            if(!isItemExist){
                tempData.push(action.payload)
            }
           
            state.data=tempData
        }
    }
})

export const {addItemToCart} =CartSlice.actions
export default CartSlice.reducer

