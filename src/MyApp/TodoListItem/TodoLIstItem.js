import React from 'react';
import {ReactComponent as TimesSolid} from './times-solid.svg';
import {useDispatch, useSelector} from "react-redux";
import setOfColors from "../data-colors";
import {markCompleted, deleteToDo, addColor} from "../reducerSilces/todosSlice";


const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    const {text, id} = todo;
    const completed = useSelector(state => state.todos.find(item => item.id === id).completed);
    const colorNames = setOfColors;
    const colors = useSelector(state => state.filters.filterColors);

    const colorSetter = (e) => {
        dispatch(addColor({id, newColorValue: e.target.value}));
    }

    const displayColorOptions = (colors = []) => {
        return colorNames.map((color, index) => {
            return <option key={index}
                           value={color}>{color.toUpperCase()}</option>
        })
    }

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input className="toggle"
                           type="checkbox"
                           checked={completed} readOnly={true}
                           onClick={() => dispatch(markCompleted(id, completed))}
                    />
                    <div className="todo-text">{text}</div>
                </div>

                <div className="segment buttons">
                    <select className="colorPicker"
                            value={todo.color}
                            onChange={colorSetter}
                            style={{color: todo.color}}
                    >
                        {displayColorOptions(colors)}
                    </select>

                    <button className="destroy" onClick={() => {
                        dispatch(deleteToDo(id))
                        console.log("cross")
                    }}>
                        <TimesSolid/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default React.memo(TodoListItem);