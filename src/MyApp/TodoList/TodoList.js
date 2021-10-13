import React from 'react'
import { useSelector } from 'react-redux'
import {
    selectAllTodos,
    selectById,
    selectEntities,
    selectIds,
    selectTotal
} from '../reducerSlices/todosReducer'

const TodoList = () => {
    console.log(useSelector(selectAllTodos))
    console.log(useSelector(selectTotal))
    console.log(useSelector(selectIds))
    console.log(useSelector(selectEntities))
    console.log(useSelector(state => selectById(state, '345-654')))

    return <ul className="todo-list">{''}</ul>
}
export default TodoList
