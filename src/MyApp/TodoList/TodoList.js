import React from 'react'
import { useSelector } from 'react-redux'
import { selectIdsTodos } from '../reducerSlices/todosReducer'
import TodoLIstItem from '../TodoListItem/TodoLIstItem'
import { isArray } from '../typeCheckers'

const TodoList = () => {
  const allIds = useSelector(selectIdsTodos)
  const mappingOverIds = (ids = []) => {
    if (!isArray(ids)) return

    return ids.map(id => <TodoLIstItem key={id} id={id} />)
  }
  return <ul className="todo-list">{mappingOverIds(allIds)}</ul>
}
export default TodoList
