import {configureStore} from "@reduxjs/toolkit"
import inputReducer from "./reducerSilces/inputSlice"
import todosReducer from "./reducerSilces/todosSlice"
import filtersReducer from "./reducerSilces/filtersSlice"
import {logStore} from "./enhancers/logStore";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        input: inputReducer,
        filters: filtersReducer
    },
    enhancers: [logStore]
})
export default store