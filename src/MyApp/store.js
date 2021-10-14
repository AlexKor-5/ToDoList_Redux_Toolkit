import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './reducerSlices/todosReducer'
import filtersSlice from './reducerSlices/filtersReducer'

const store = configureStore({
  reducer: {
    todos: todosSlice,
    filters: filtersSlice
  }
})

export default store
