import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredIds, selectFilteredTodos, selectIdsTodos } from '../reducerSlices/todosReducer'
import TodoLIstItem from '../TodoListItem/TodoLIstItem'
import { isArray } from '../typeCheckers'

const TodoList = () => {
  // const allIds = useSelector(selectIdsTodos)
  // console.log(useSelector(selectFilteredTodos))
  const todoIds = useSelector(selectFilteredIds)

  const mappingOverIds = ids => {
    if (!isArray(ids)) return

    return ids.map(id => <TodoLIstItem key={id} id={id} />)
  }
  return <ul className="todo-list">{mappingOverIds(todoIds)}</ul>
}
export default TodoList
