import React from 'react'
// import { changeInput, clearInput } from '../reducerSilces/inputSlice'
// import { addToDo } from '../reducerSilces/todosSlice'
// import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    // const inputValue = useSelector(state => state.input)
    // const dispatch = useDispatch()

    const pressEnter = e => {
        if (e.keyCode === 13) {
            // dispatch(addToDo(inputValue))
            // dispatch(clearInput(''))
        }
    }

    // const truly = useMemo(() => ({ value: false }), [])

    // const inputValueAction = inputValue => {
    //     let temper = inputValue
    //     if (!truly.value) {
    //         temper = ''
    //     }
    //     truly.value = true
    //     return temper
    // }

    return (
        <header className="header">
            <input className="new-todo" placeholder={''} onKeyUp={pressEnter} />
        </header>
    )
}

export default Header
