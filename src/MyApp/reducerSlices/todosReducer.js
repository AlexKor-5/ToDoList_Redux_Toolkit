import { createSlice, createEntityAdapter, createSelector, current } from '@reduxjs/toolkit'
import { initialToDosState } from '../initialStates/initialStates'
import { v4 } from 'uuid'
import { statuses } from '../data-statuses'

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
    },
    markAllCompleted(state, action) {
      Object.values(state.entities).map(todo => (todo.completed = action.payload))
    },
    removeCompleted(state) {
      Object.values(state.entities).map(todo => {
        if (todo.completed !== true) return
        todosAdapter.removeOne(state, todo.id)
      })
    }
  }
})
export const { addTodo, markCompleted, removeTodo, addColor, markAllCompleted, removeCompleted } =
  todosSlice.actions

export const {
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
  selectIds: selectIdsTodos,
  selectEntities: selectEntitiesTodos,
  selectById: selectByIdTodos
} = todosAdapter.getSelectors(state => state.todos)
export default todosSlice.reducer

export const selectNumberOfRemainingTodos = state => {
  let counter = 0
  Object.values(state.todos.entities).map(todo => {
    if (todo.completed === false) counter++
  })
  return counter
}

export const selectFilteredTodos = state => {
  const todos = Object.values(state.todos.entities)
  const status = state.filters.status
  const colors = state.filters.colors

  const allStatus = status => status === statuses.all
  const completedStatus = status => status === statuses.completed // return TRUE if chosen status is "Completed"
  // or FALSE if it is not

  return todos.filter(todo => {
    const statusMatches = allStatus(status) || todo.completed === completedStatus(status)
    const colorMatches = colors.length === 0 || colors.includes(todo.color)
    return statusMatches && colorMatches
  })
}

export const selectFilteredIds = createSelector(selectFilteredTodos, todos => todos.map(todo => todo.id))
