import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducerSlices/todosReducer'

const Header = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()

    const pressEnter = (e, text) => {
        if (e.keyCode === 13) {
            console.log(text)
            dispatch(addTodo(text))
            setInputText('')
        }
    }
    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder={'What needs to be done!'}
                onKeyUp={e => pressEnter(e, inputText)}
                onInput={e => setInputText(e.target.value)}
                value={inputText}
            />
        </header>
    )
}

export default Header
