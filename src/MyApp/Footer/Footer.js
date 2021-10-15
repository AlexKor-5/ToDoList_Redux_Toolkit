import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markAllCompleted, removeCompleted, selectNumberOfRemainingTodos } from '../reducerSlices/todosReducer'
import { statuses } from '../data-statuses'
import { isArray, isString } from '../typeCheckers'
import {
  checkColor,
  changeStatus,
  selectChosenColors,
  selectChosenStatus
} from '../reducerSlices/filtersReducer'
import { setOfColors } from '../data-colors'

const RemainingTodos = ({ count }) => {
  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong>
    </div>
  )
}

const StatusFilter = () => {
  const chosenStatus = useSelector(selectChosenStatus)
  const dispatch = useDispatch()

  const statusItems = (statuses, currStatus) => {
    if (!isArray(statuses) || !isString(currStatus)) return

    return statuses.map((status, index) => {
      return (
        <li key={index}>
          <button
            className={currStatus === status ? 'selected' : ''}
            onClick={() => dispatch(changeStatus(status))}
          >
            {status}
          </button>
        </li>
      )
    })
  }

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{statusItems(Object.values(statuses), chosenStatus)}</ul>
    </div>
  )
}

const ColorFilters = () => {
  const dispatch = useDispatch()
  const chosenColors = useSelector(selectChosenColors)

  const displaySetOfColors = set => {
    if (!isArray(set)) return

    return set.map((color, index) => {
      if (color === '') return
      let checked = chosenColors.includes(color)

      return (
        <label key={index}>
          <input
            type="checkbox"
            name={color}
            defaultChecked={checked}
            onChange={() => dispatch(checkColor({ color, checked }))}
          />
          <span className="color-block" style={{ backgroundColor: color }}>
            {''}
          </span>
          {color}
        </label>
      )
    })
  }

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{displaySetOfColors(setOfColors)}</form>
    </div>
  )
}

const Footer = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectNumberOfRemainingTodos)
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={() => dispatch(markAllCompleted(true))}>
          Mark All Completed
        </button>
        <button className="button" onClick={() => dispatch(removeCompleted())}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={count} />
      <StatusFilter />
      <ColorFilters />
    </footer>
  )
}

export default Footer
