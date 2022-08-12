import { useEffect } from "react"
import s from "./Output.module.css"
import Search from "./Search/Search.jsx"
import { AxiosFind, setInputValue, showLoader } from "../../redux/reducers/outputReducer";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {useParams} from "react-router-dom";

import loaderimg from "../../img/loaderGIF.gif"

const Output = () => {

    const dispatch = useDispatch()

    let {searchData} = useParams()

    const data = useSelector(state => state.output.data)
    const searchInfo = useSelector(state => state.output.searchInfo)
    const inputValue = useSelector(state => state.output.inputValue)
    const error = useSelector(state => state.output.error)
    const loader = useSelector(state => state.output.loader)

    useEffect(() => {
        dispatch(AxiosFind( searchData ))
    }, [])

    const setNewData = () => {
        dispatch(AxiosFind( inputValue ))
    }
    const setInputValue_ = (value) => {
        dispatch(setInputValue(value))
    }

    let map_items = data.map((i) => {
        return (
            <div className={s.item}>    
                <h2 className={s.link}>
                    <a href = {i.link} target = "_blank" className = {s.link_item}>{i.title}</a>
                </h2>
                <p className={s.dlink}> {i.displayLink} </p>
                <p className={s.about}>
                    {i.snippet}
                </p>
            </div>
        )
    })


    return(
        <div style = { {marginTop: "150px"} }>

        <Search 
            inputValue = {inputValue}
            setInputValue = {setInputValue_}
            setNewData = {setNewData}
        />

        {
            error 
            ? <div className={s.error}>
                <div>
                    <center><img src="https://ouch-cdn2.icons8.com/7C2Dk9JHZx7qpDSCUt8d442iU2aVBx0N0rE2HyWBHUg/rs:fit:256:111/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzI5/LzU3ZDFhYWYyLTcw/NjYtNDk3ZC05NGZk/LWE3YWJmNmIxOWVk/Mi5zdmc.png" alt="" /></center>
                    <h2 className={s.message}>Нічого не знайдено</h2>
                </div>
            </div>
            : loader 
                ? <div className={s.loaderArea}><img src={loaderimg} className = {s.loader} alt="" /></div>
                : <div className={s.output}>
                    <div>
                        {map_items}
                    </div>

                    <p className={s.searchTime}>На відображення було потрічено: {searchInfo.formattedSearchTime} сек</p>
                </div>
        }
        </div>
    )
}

export default Output