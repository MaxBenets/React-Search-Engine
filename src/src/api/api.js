import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/',
});

export const axiosFind = (searchValue) => {
    return instance.get("v1?key=AIzaSyBmKJygLpG4LhACfD3lLKNUhY19Y_fmOig&hl=ua&num=10&cx=bd98207d45eb972bb&q="+searchValue).then(
        responce => responce.data
    )
}