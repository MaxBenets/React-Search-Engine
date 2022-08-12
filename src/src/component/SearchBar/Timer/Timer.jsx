import s from "./Timer.module.css"

import { useState, useEffect } from "react"

export const Timer = () => {
    const date = new Date()

    const timeNow = date.getHours()
    +" : "+
    date.getMinutes()
    +" : "+
    date.getSeconds()

    const dateNow = date.getDate()+"."+date.getMonth()+"."+date.getFullYear()

    let [time, setTime] = useState(date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds())
    let [Date_, setDate] = useState(date.getDate()+" . "+date.getMonth()+" . "+date.getFullYear())

    useEffect(() => {
        setTime(timeNow)
        setDate(dateNow)
    }, [date.getSeconds()])

    return (
        <>
            <p className={s.time}>{time}</p>
            <p className={s.date}>{Date_}</p>
        </>
    )
}