import { createSlice } from '@reduxjs/toolkit'
import { initialToDosState } from '../initialStates/initialStates'

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialToDosState,
    reducers: {}
})
export default todosSlice.reducer
