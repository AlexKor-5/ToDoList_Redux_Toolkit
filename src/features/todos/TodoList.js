import React from 'react'
import TodoListItem from "./TodoListItem";
import {useSelector} from 'react-redux';

const selectTodos = state => state.todos;
const selectFilterStatus = state => state.filters.filterStatus;
const selectColors = state => state.filters.filterColors;

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const status = useSelector(selectFilterStatus);
    const colors = useSelector(selectColors);

    const todo = (item) => <TodoListItem key={item.id} todo={item}/>;

    const renderToDos = (status, renderCallback = f => f) => {
        if (status === "All") {
            return () => todos.map((item) => {
                if (colors.length !== 0) {
                    if (!colors.includes(item.color)) return false;
                }
                return renderCallback(item);
            });
        } else if (status === "Active") {
            return () => todos.map((item) => {
                if (item.completed) return false
                if (colors.length !== 0) {
                    if (!colors.includes(item.color)) return false;
                }
                return renderCallback(item);
            });
        } else if (status === "Completed") {
            return () => todos.map((item) => {
                if (!item.completed) return false
                if (colors.length !== 0) {
                    if (!colors.includes(item.color)) return false;
                }
                return renderCallback(item);
            });
        } else {
            return () => todos.map((item) => {
                if (colors.length !== 0) {
                    if (!colors.includes(item.color)) return false;
                }
                return renderCallback(item);
            });
        }
    }
    return (
        <ul className="todo-list">
            {renderToDos(status, todo)()}
        </ul>
    )
}
export default TodoList;
