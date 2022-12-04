const SET_INPUT_VALUE = "SET-INPUT-VALUE";
const SET_WEATHER_DATA = "SET_WEATHER_DATA";

let initial_state = {
   inputValue: "",
   weatherData: {}
};

const searchBarReducer = (state = initial_state, action) => {
   switch (action.type) {
      case SET_INPUT_VALUE:
         return {
            ...state,
            inputValue: action.value,
         };
      case SET_WEATHER_DATA:
         return{
            ...state,
            weatherData: action.weatherData
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

const setQuoteDataAC = (weatherData) => ({
   type: SET_WEATHER_DATA,
   weatherData
})

export default searchBarReducer;