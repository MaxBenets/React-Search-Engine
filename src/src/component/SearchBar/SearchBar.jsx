import React from "react"
import s from "./SearchBar.module.css"

import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue } from "../../redux/reducers/searchBarReducer"
import { useState } from "react"
import { Timer } from "./Timer/Timer"
import { useEffect } from "react"

const SearchBar = () => {
    const standart = "QUICK"

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const date = new Date()
    const inputValue = useSelector(state => state.search.inputValue)


    const [time, setTime] = useState("")
    const [siteName, setSiteName] = useState(standart)
    const [websites] = useState([
        {id: 0, title: "Перекладач", url: "https://reacttranslator.netlify.app/", logo: "https://img.icons8.com/fluency/1000/requires-interpreter.png"},
        {id: 1, title: "Скорочувач посилань", url: "https://reactshortener.netlify.app/", logo: "https://img.icons8.com/emoji/1000/link-emoji.png"},
        {id: 1, title: "Автор", url: "https://maxbenets.netlify.app", logo: "https://img.icons8.com/color/1000/user.png"},
    ])

    let inputRef = React.createRef()

    let setText = () => {
        dispatch(setInputValue(inputRef.current.value))
    }

    useEffect(() => {
        if (inputValue.indexOf("+") != -1 || inputValue.indexOf("-") != -1 || inputValue.indexOf("*") != -1 || inputValue.indexOf("/") != -1){
            try{
                setSiteName(eval(inputValue))
                if (eval(inputValue) == "Infinity"){
                    setSiteName("ERROR")
                }
            }
            catch{
                setSiteName(standart)
            }
        }
        if (inputValue.length <= 0){
            setSiteName(standart)
        }
    }, [inputValue])

    if (date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds() != time){
        setInterval(() => {
            setTime(date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds())
        }, 1000)
    }

    document.onkeydown = (event) => {
        if(event.key == "Enter" && inputValue.length > 0){
            return navigate("/search/"+inputValue)
        }
    }

    return(
        <div className={s.search_area}>
            <div className={s.search_div}>     
                <header className={s.header}>
                    <h1 className={s.h1}>
                        {siteName}
                    </h1>
                </header>     

                <div className={s.item}>

                    {
                        inputValue.length > 150
                            ? <textarea
                                className={inputValue.length > 20 ? s.input + " " + s.inputBig : s.input}
                                ref = {inputRef} 
                                onChange={setText}
                            
                                type="text" 
                                placeholder="Що шукаєте?" 
                            >{inputValue}</textarea>
                            : <input
                                className={s.input}
                                ref = {inputRef} 
                                onChange={setText}
                                value={inputValue} 
                            
                                type="text" 
                                placeholder="Що шукаєте?" 
                            />
                    }
                    {
                        inputValue.length == 0 
                        ? <NavLink className={s.btn} to = {"/"}>
                            Знайти
                        </NavLink>
                        : <NavLink className={s.btn} to = {"/search/"+inputValue}>
                            Знайти
                        </NavLink>
                    }
                </div>

                <div className={s.plusContent}>
                
                    <div className={s.timeContainer}>
                        <Timer />
                    </div>

                    <div className={s.quoteContainer + " " + s.websites}>

                        {
                            websites.map(w => (
                                <a onMouseOver={() => {setSiteName(w.title)}} onMouseOut = {() => {setSiteName(standart)}} className={s.website} title = {w.title} href = {w.url} target={"_blank"}>
                                    <img src={w.logo} alt="" />
                                </a>
                            ))
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SearchBar