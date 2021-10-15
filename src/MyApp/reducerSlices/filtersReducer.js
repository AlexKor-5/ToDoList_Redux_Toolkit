import { createSlice } from '@reduxjs/toolkit'
import { initialFiltersState } from '../initialStates/initialStates'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload
    },
    checkColor(state, action) {
      const { color, checked } = action.payload
      if (checked) {
        state.colors = state.colors.filter(col => col !== color)
      } else {
        state.colors.push(color)
      }
    }
  }
})

export const { changeStatus, checkColor } = filtersSlice.actions
export default filtersSlice.reducer

export const selectChosenStatus = state => state.filters.status
export const selectChosenColors = state => state.filters.colors
