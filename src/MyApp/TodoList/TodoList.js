import React from 'react'
import { useSelector } from 'react-redux'
import {
    selectAllTodos,
    selectById,
    selectEntities,
    selectIds,
    selectTotal
} from '../reducerSlices/todosReducer'
import TodoLIstItem from '../TodoListItem/TodoLIstItem'

const TodoList = () => {
    const allIds = useSelector(selectIds)
    const mappingOverIds = (ids = []) => ids.map(id => <TodoLIstItem key={id} id={id} />)
    return <ul className="todo-list">{mappingOverIds(allIds)}</ul>
}
export default TodoList
