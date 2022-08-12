import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/',
});

export const axiosFind = (searchValue) => {
    return instance.get("v1?key=AIzaSyBmKJygLpG4LhACfD3lLKNUhY19Y_fmOig&hl=ua&num=10&cx=bd98207d45eb972bb&q="+searchValue).then(
        responce => responce.data
    )
}
export const getQuotes = () => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': '52e80a631amsh26dc9fa01d0b41fp18a9aajsn9cc198b73eee',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    return axios.request(options)
        .then(response => response.data)
        .catch(error => error);
}