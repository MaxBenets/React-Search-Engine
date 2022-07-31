import React from "react"
import s from "./SearchBar.module.css"

import {Navigate, NavLink} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue } from "../../redux/reducers/searchBarReducer"

const SearchBar = () => {

    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.search.inputValue)

    let inputRef = React.createRef()

    let setText = () => {
        dispatch(setInputValue(inputRef.current.value))
    }

    document.onkeydown = (event) => {
        if (event.key == "Enter"){
            return inputValue.length == 0 
                ? <Navigate to = {"/"} />
                : <Navigate to = {"/search/"+inputValue} />
        }
    }

    return(
        <div className={s.search_area}>
            <div className={s.search_div}>     
                <header className={s.header}>
                    <h1 className={s.h1}>
                        <span className={s.q}>Q</span>
                        uick
                    </h1>
                </header>     

                <div className={s.item}>
                    <input
                        className={s.input}
                        ref = {inputRef} 
                        onChange={setText}
                        value={inputValue} 
                    
                        type="text" 
                        placeholder="Що шукаєте?" 
                    />
                    {
                        inputValue.length == 0 
                        ? <NavLink className={s.btn} to = {"/"}>Знайти</NavLink>
                        : <NavLink className={s.btn} to = {"/search/"+inputValue}>Знайти</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBar