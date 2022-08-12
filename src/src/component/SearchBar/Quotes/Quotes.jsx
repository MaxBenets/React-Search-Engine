import s from "./Quotes.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setQuoteDataThunk } from "../../../redux/reducers/searchBarReducer"

export const Quotes = () => {
    const dispatch = useDispatch()

    let quoteData = useSelector(state => state.search.quoteData)

    useEffect(() => {
        dispatch(setQuoteDataThunk())
    }, [])

  

    return(
        <>
            <blockquote className={s.quote}>
                {quoteData}
            </blockquote>
        </>
    )
}