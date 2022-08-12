import React from "react"
import s from "./SearchBar.module.css"

import {Navigate, NavLink} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue } from "../../redux/reducers/searchBarReducer"
import { useState, useEffect } from "react"
import { Timer } from "./Timer/Timer"
import { Quotes } from "./Quotes/Quotes"
import search from "../../img/search.png"

const SearchBar = () => {

    const dispatch = useDispatch()
    const date = new Date()
    const inputValue = useSelector(state => state.search.inputValue)
    let [time, setTime] = useState("")

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

    if (date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds() != time){
        setInterval(() => {
            setTime(date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds())
        }, 1000)
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
                        ? <NavLink className={s.btn} to = {"/"}>
                            <img className={s.searchIcon} src={search} alt="" />
                        </NavLink>
                        : <NavLink className={s.btn} to = {"/search/"+inputValue}>
                            <img className={s.searchIcon} src={search} alt="" />
                        </NavLink>
                    }
                </div>

                <div className={s.plusContent}>
                
                    <div className={s.timeContainer}>
                        <Timer />
                    </div>

                    <div className={s.quoteContainer}>
                        <Quotes />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SearchBar