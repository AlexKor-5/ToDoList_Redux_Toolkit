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
            todosAdapter.updateOne(state, { id, changes: { completed: !completed } })
        },
        removeTodo(state, action) {
            todosAdapter.removeOne(state, action.payload)
        },
        addColor(state, action) {
            const { id, color } = action.payload
            todosAdapter.updateOne(state, { id, changes: { color } })
        }
    }
})
export const { addTodo, markCompleted, removeTodo, addColor } = todosSlice.actions
export const {
    selectAll: selectAllTodos,
    selectTotal: selectTotalTodos,
    selectIds: selectIdsTodos,
    selectEntities: selectEntitiesTodos,
    selectById: selectByIdTodos
} = todosAdapter.getSelectors(state => state.todos)
export default todosSlice.reducer
