import {
    createSlice,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit'
import { initialToDosState } from '../initialStates/initialStates'
import { v4 } from 'uuid'

const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState(initialToDosState)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                const id = action.payload.id
                todosAdapter.addOne(state, {
                    id: id,
                    text: action.payload.text,
                    completed: false
                })
            },
            prepare(text) {
                return {
                    payload: { id: v4(), text }
                }
            }
        }
    }
})
export const { addTodo } = todosSlice.actions

const selectTodos = state => Object.values(state.entities)

export const { selectAll } = todosAdapter.getSelectors(state => state)
console.log(todosAdapter.getSelectors())

export default todosSlice.reducer
