import { createSlice } from "@reduxjs/toolkit";
import AddAdress from "../../screens/AddAdress";

export const AddressSlice = createSlice({
    name:'address',
    initialState:{
        data:[],
    },
    reducers:{
        addAdress(state,action){
            state.data.push(action.payload);
        },

    }
})

export const {addAdress} = AddressSlice.actions;
export default AddressSlice.reducer;