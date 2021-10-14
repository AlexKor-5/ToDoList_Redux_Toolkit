import React, { useState } from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setOfColors } from '../data-colors'
import { addColor, markCompleted, removeTodo, selectByIdTodos } from '../reducerSlices/todosReducer'
import { isArray, isObject, isString, isUndefined } from '../typeCheckers'

const TodoListItem = ({ id }) => {
  console.log('TodolistItem render')
  const todo = useSelector(state => selectByIdTodos(state, id))
  const { text, color, completed } = todo
  const [inputColor, setInputColor] = useState(color)
  const dispatch = useDispatch()

  const displayColorNames = (setOfColors = []) => {
    if (!isArray(setOfColors)) return

    return setOfColors.map((color, index) => {
      return (
        <option key={index} value={color}>
          {color.toUpperCase()}
        </option>
      )
    })
  }

  const insertColorToStates = (e, id) => {
    if (!isObject(e) || !isString(id)) return

    setInputColor(e.target.value)
    dispatch(addColor({ id, color: e.target.value }))
  }

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            readOnly={true}
            onClick={() => dispatch(markCompleted({ id, completed }))}
          />
          <div className="todo-text">{text}</div>
        </div>

        <div className="segment buttons">
          <select
            className="colorPicker"
            defaultValue={color}
            onChange={e => insertColorToStates(e, id)}
            style={{ color: inputColor }}
          >
            {displayColorNames(setOfColors)}
          </select>

          <button className="destroy" onClick={() => dispatch(removeTodo(id))}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default React.memo(TodoListItem)
