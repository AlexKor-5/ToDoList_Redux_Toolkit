import {initialInputState} from "../initialState";
import {createSlice} from "@reduxjs/toolkit";

const inputReducer = createSlice({
    name: "input",
    initialState: initialInputState,
    reducers: {
        changeInput(state, action) {
            return action.payload
        },
        clearInput(state, action) {
            return action.payload
        }
    }
})
export const {changeInput, clearInput} = inputReducer.actions
export default inputReducer.reducer