import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './reducerSlices/todosReducer'

const store = configureStore({
    reducer: {
        todos: todosSlice
    }
})

export default store
