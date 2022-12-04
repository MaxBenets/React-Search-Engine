import { axiosFind } from "../../api/api";

const SET_DATA = "SET-DATA";
const SET_INFO = "SET-INFO";
const SET_INPUT_VALUE = "SET-INPUT-VALUE";
const SET_ERROR = "SET-ERROR";
const SET_LOADER = "SET-LOADER"

let initial_state = {
    data: [],
    searchInfo: {},

    inputValue: "",

    error: false,
    loader: false,
}

const outputReducer = (state = initial_state, action) => {
    switch(action.type){
        case SET_DATA:
            return{
                ...state,
                data: [...action.data]
            }
        case SET_INFO:
            return{
                ...state,
                searchInfo: {...action.searchInfo}
            }
        case SET_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.value
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.value
            }
        case SET_LOADER:
            return{
                ...state,
                loader: action.value
            }
        
        default:
            return state
    }
}

export const setData = (data) => {
    return{
        type: SET_DATA,
        data
    }
} 
export const setInfo = (searchInfo) => {
    return{
        type: SET_INFO,
        searchInfo
    }
}
export const setInputValue = (value) => {
    return{
        type: SET_INPUT_VALUE,
        value
    }
}
export const setError = (value) => {
    return{
        type: SET_ERROR,
        value
    }
}
export const showLoaderAC = (value) => {
    return{
        type: SET_LOADER,
        value
    }
}

export const AxiosFind = (searchValue) => {
    return (dispatch) => {
        dispatch(showLoaderAC(true))
        axiosFind(searchValue).then(
            (responce) => {
                dispatch(setError(false))
                dispatch(showLoaderAC(false))
                dispatch(setData(responce.items))
                dispatch(setInfo(responce.searchInformation))
            }
        ).catch(() => {
            dispatch(setError(true))
        })
    }
}

export default outputReducer