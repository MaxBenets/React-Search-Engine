import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Search.module.css"

const Search = (props) => {

    let inputRef = React.createRef()

    const inputOnChange = () => {
        props.setInputValue(inputRef.current.value)
    }
    const find = () => {
        props.setNewData(inputRef.current.value)
    }

    document.onkeydown = (event) => {
        if (event.key == "Enter"){
            find()
        }
    }

    return(
        <div className = {s.area}>

            <div className={s.header}>
                <h1 className={s.h1}>
                    <span className={s.q}>Q</span>
                    uick</h1>
            </div>

            <div className={s.search}>
                <input 
                    ref = {inputRef}
                    onChange = {inputOnChange}
                    value={props.inputValue}
                    className={s.input}

                    placeholder = "Що шукаєте?"
                />
                <NavLink className={s.btn} to = {"/search/"+props.inputValue} onClick={find}>
                    Знайти
                </NavLink>
            </div>
        </div>
    )
}

export default Search