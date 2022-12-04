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
            <div className={s.item} id = {i.cacheId}>  
                <div>  
                    <h2 className={s.link}>
                        <a href = {i.link} className = {s.link_item}>{i.title}</a>
                    </h2>
                    <a className={s.dlink} href = {"https://"+i.displayLink} target = "_blank"> {i.displayLink} </a>
                    <p className={s.about}>
                        {i.snippet}
                    </p>
                </div>
            </div>
        )
    })


    return(
        <div>

        <Search 
            inputValue = {inputValue}
            setInputValue = {setInputValue_}
            setNewData = {setNewData}
            searchData = {searchData}
        />

        {
            error 
            ? <div className={s.error}>
                <h2 className={s.message}>404 | Нічого не знайденно</h2>
            </div>
            : loader 
                ? <div className={s.loaderArea}><img src={loaderimg} className = {s.loader} alt="" /></div>
                : <div className={s.output}>
                    <div>
                        {map_items}
                    </div>

                    <p className={s.searchTime}>На відображення було потрачено: {searchInfo.formattedSearchTime} сек</p>
                </div>
        }
        </div>
    )
}

export default Output