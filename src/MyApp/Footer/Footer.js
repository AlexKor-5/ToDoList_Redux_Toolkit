import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {markAllCompleted, clearCompleted} from "../reducerSilces/todosSlice";
import {addColorToFilter, removeColorInFilter} from "../reducerSilces/filtersSlice";
import useStatus from "../hooks/useStatus";
import setOfColors from "../data-colors";

const RemainingTodos = ({count}) => {
    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong>
        </div>
    )
}

const StatusFilter = () => {
    const selectCountOfStatuses = state => state.filters.filterCountOfStatuses;
    const selectCurrentStatus = state => state.filters.filterStatus;
    const statuses = useSelector(selectCountOfStatuses);
    const currentStatus = useSelector(selectCurrentStatus);
    const [statusData] = useStatus();

    const statusItems = (statuses = [], currentStatus) => {

        return statuses.map((status, index) => {
            return (
                <li key={index}>
                    <button {...statusData} className={currentStatus === status ? "selected" : ""}>{status}</button>
                </li>
            );
        })
    }

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>
                {statusItems(statuses, currentStatus)}
            </ul>
        </div>
    )
}


const ColorFilters = ({color = "#000000"}) => {
    const dispatch = useDispatch();
    const colors = useSelector(state => state.filters.filterColors);

    const addColor = (color, checked) => {
        if (!checked)
            dispatch(addColorToFilter(color));
        if (checked)
            dispatch(removeColorInFilter(color));
    }

    const displaySetOfColors = (set = [], colors = []) => {
        return set.map((color, index) => {
            if (color === "") return false;
            const checked = colors.includes(color);
            return (
                <label key={index}>
                    <input type="checkbox"
                           name={color}
                           checked={checked}
                           onChange={() => addColor(color, checked)}
                    />
                    <span className="color-block" style={{backgroundColor: color}}>{""}</span>
                    {color}
                </label>
            );
        })
    }

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">
                {displaySetOfColors(setOfColors, colors)}
            </form>
        </div>
    )
}

const Footer = () => {
    const dispatch = useDispatch();

    const selectIds = (state) => {
        let arrIds = [];
        let completedToDos = state.todos.filter(todo => todo.completed);
        if (completedToDos.length !== 0) {
            arrIds = completedToDos.map(todo => todo.id);
        }
        return arrIds;
    };

    const selectNumberOfRemainingToDos = state => {
        let count = 0;
        state.todos.forEach(todo => {
            if (!todo.completed)
                count++;
        });
        return count;
    };
    const ids = useSelector(selectIds);
    const count = useSelector(selectNumberOfRemainingToDos);

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button"
                        onClick={() => dispatch(markAllCompleted(true))}>
                    Mark All Completed
                </button>
                <button className="button" onClick={() => dispatch(clearCompleted(ids))}>
                    Clear Completed
                </button>
            </div>

            <RemainingTodos count={count}/>
            <StatusFilter/>
            <ColorFilters/>
        </footer>
    )
}

export default Footer
