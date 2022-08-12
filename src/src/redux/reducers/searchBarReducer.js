import { getQuotes } from "../../api/api";

const SET_INPUT_VALUE = "SET-INPUT-VALUE";
const SET_QUOTE_DATA = "SET_QUOTE_DATA";

let initial_state = {
   inputValue: "",
   quoteData: "Loading..."
};

const searchBarReducer = (state = initial_state, action) => {
   switch (action.type) {
      case SET_INPUT_VALUE:
         return {
            ...state,
            inputValue: action.value,
         };
      case SET_QUOTE_DATA:
         return{
            ...state,
            quoteData: action.quoteData
         }

      default:
         return state;
   }
};

export const setInputValue = (new_text) => {
   return {
      type: SET_INPUT_VALUE,
      value: new_text,
   };
};

const setQuoteDataAC = (quoteData) => ({
   type: SET_QUOTE_DATA,
   quoteData
})

export const setQuoteDataThunk = () => {
   return (dispatch) => {
      return getQuotes().then(
         res => dispatch(setQuoteDataAC(res.content))
      )
   }
}

export default searchBarReducer;