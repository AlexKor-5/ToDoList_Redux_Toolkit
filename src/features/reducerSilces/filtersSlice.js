import {initialFiltersState} from "../initialState";
import {createSlice} from "@reduxjs/toolkit";


const filtersReducer = createSlice({
    name: 'filters',
    initialState: initialFiltersState,
    reducers: {
        changeFilterStatus(state, action) {
            return {
                ...state,
                filterStatus: action.payload
            }
        },
        addColorToFilter(state, action) {
            return {
                ...state,
                filterColors: [
                    ...state.filterColors,
                    action.payload
                ]
            }
        },
        removeColorInFilter(state, action) {
            return {
                ...state,
                filterColors: state.filterColors.filter(color => color !== action.payload)
            }
        }
    }
})

export const {changeFilterStatus, addColorToFilter, removeColorInFilter} = filtersReducer.actions
export default filtersReducer.reducer