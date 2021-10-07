import {initialToDosState} from "../initialState";
import {v4 as uuidv4} from 'uuid';
import {createSlice} from "@reduxjs/toolkit";

const todosReducer = createSlice({
    name: 'todos',
    initialState: initialToDosState,
    reducers: {
        addToDo: {
            reducer(state, action) {
                const {uniqueId, text} = action.payload
                return [
                    ...state,
                    {
                        id: uniqueId,
                        text: text,
                        completed: false
                    }
                ]
            },
            prepare(text) {
                return {
                    payload: {uniqueId: uuidv4(), text}
                }
            }
        },
        markCompleted: {
            reducer(state, action) {
                return state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            completed: !action.payload.completed
                        }
                    } else {
                        return item
                    }
                })
            },
            prepare(id, completed) {
                return {
                    payload: {id, completed}
                }
            }
        },
        deleteToDo(state, action) {
            const elemId = action.payload
            return state.filter((item) => item.id !== elemId)
        },
        addColor(state, action) {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        color: action.payload.newColorValue
                    }
                } else {
                    return item
                }
            })
        },
        markAllCompleted(state, action) {
            return state.map(todo => ({...todo, completed: action.payload}))
        },
        clearCompleted(state, action) {
            return state.filter(todo => {
                return !action.payload.some(id => id === todo.id)
            })
        }
    }
})

export const {addToDo, markCompleted, deleteToDo, addColor, markAllCompleted, clearCompleted} = todosReducer.actions
export default todosReducer.reducer