import { createSlice, createEntityAdapter, createSelector, current } from '@reduxjs/toolkit'
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
        },
        markCompleted(state, action) {
            const { id, completed } = action.payload
            // state.entities[id].completed = !completed
            todosAdapter.updateOne(state, { id, changes: { completed: !completed } })
        }
    }
})
export const { addTodo, markCompleted } = todosSlice.actions
export const {
    selectAll: selectAllTodos,
    selectTotal,
    selectIds,
    selectEntities,
    selectById
} = todosAdapter.getSelectors(state => state.todos)
export default todosSlice.reducer
