import {constants} from "./constants";

export const changeInput = (value = "") => ({
    type: constants.changeInput,
    payload: value
});

export const addToDo = (todoText = "") => ({
    type: constants.addToDo,
    payload: todoText
});

export const markCompleted = (id, value = false) => ({
    type: constants.markCompleted,
    payload: {id, value: !value}
});

export const deleteToDo = (id) => ({
    type: constants.deleteToDo,
    payload: {id}
});

export const addColor = (id, newColorValue) => ({
    type: constants.addColor,
    payload: {id, newColorValue}
});

export const markAllCompleted = () => ({
    type: constants.markAllCompleted,
    payload: true
});

export const clearCompleted = (id = []) => ({
    type: constants.clearCompleted,
    payload: {id}
});
export const clearInput = () => ({
    type: constants.clearInput,
    payload: ""
});
export const changeFilterStatus = (value) => ({
    type: constants.changeFilterStatus,
    payload: value
});
export const addColorToFilter = (color) => ({
    type: constants.addColorToFilter,
    payload: color
});
export const removeColorInFilter = (color) => ({
    type: constants.removeColorInFilter,
    payload: color
});