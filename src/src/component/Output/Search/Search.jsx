import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import s from "./Search.module.css"

const Search = (props) => {

    let inputRef = React.createRef()
    const [siteName, setSiteName] = useState("")

    const inputOnChange = () => {
        props.setInputValue(inputRef.current.value)
    }
    const find = () => {
        if (props.inputValue.length > 0){
            props.setNewData(inputRef.current.value)
        }
    }

    useEffect(() => {
        if (props.inputValue.indexOf("+") != -1 || props.inputValue.indexOf("-") != -1 || props.inputValue.indexOf("*") != -1 || props.inputValue.indexOf("/") != -1){
            try{
                setSiteName(eval(props.inputValue))
                if (eval(props.inputValue) == "Infinity"){
                    setSiteName("ERROR")
                }
            }
            catch{
                setSiteName("")
            }
        }
    }, [props.inputValue])

    if (props.inputValue.length == 0){
        props.setNewData(props.searchData)
    }

    document.onkeydown = (event) => {
        if (event.key == "Enter"){
            find()
        }
    }

    return(
        <div className = {s.area}>
            <header className={s.header}>
                <h1 className={s.h1}>
                    <NavLink to = "/">{"QUICK"}</NavLink>
                </h1>
            </header>

            <div className={s.search}>
                <input 
                    ref = {inputRef}
                    onChange = {inputOnChange}
                    value={props.inputValue}
                    className={s.input}

                    placeholder = "Що шукаєте?"
                />
                <NavLink className={s.btn} to = {"/search/"+props.inputValue} onClick={find}>
                    FIND
                </NavLink>
                <div className={s.result}>{siteName}</div>
            </div>
        </div>
    )
}

export default Search