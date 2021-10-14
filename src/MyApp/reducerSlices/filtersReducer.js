import { createSlice } from '@reduxjs/toolkit'
import { initialFiltersState } from '../initialStates/initialStates'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload
    },
    addCheckedColor(state, action) {
      const { color, checked } = action.payload
      if (state.colors.includes(color)) return
      if (checked) {
        //delete
      } else {
        //add
        state.colors.push(color)
      }
    }
  }
})

export const { changeStatus, addCheckedColor } = filtersSlice.actions
export default filtersSlice.reducer

export const selectChosenStatus = state => state.filters.status
export const selectChosenColors = state => state.filters.colors
