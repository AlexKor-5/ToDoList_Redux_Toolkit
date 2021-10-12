import React from 'react'
import { selectAll } from '../reducerSlices/todosReducer'

const TodoList = () => {
    console.log(selectAll())
    return <ul className="todo-list">{''}</ul>
}
export default TodoList
