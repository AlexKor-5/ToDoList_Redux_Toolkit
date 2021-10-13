import React, { useState } from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { useDispatch, useSelector } from 'react-redux'
import setOfColors from '../data-colors'
import { markCompleted, selectById } from '../reducerSlices/todosReducer'

const TodoListItem = ({ id }) => {
    console.log('TodolistItem render')
    const todo = useSelector(state => selectById(state, id))
    const { text, color, completed } = todo
    const [inputColor, setInputColor] = useState(color)
    const dispatch = useDispatch()

    const displayColorNames = (setOfColors = []) => {
        return setOfColors.map((color, index) => {
            return (
                <option key={index} value={color}>
                    {color.toUpperCase()}
                </option>
            )
        })
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
                        onChange={e => setInputColor(e.target.value)}
                        style={{ color: inputColor }}
                    >
                        {displayColorNames(setOfColors)}
                    </select>

                    <button
                        className="destroy"
                        onClick={() => {
                            console.log('cross')
                        }}
                    >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
