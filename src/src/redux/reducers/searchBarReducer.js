const SET_INPUT_VALUE = "SET-INPUT-VALUE";

let initial_state = {
   inputValue: "",
};

const searchBarReducer = (state = initial_state, action) => {
   switch (action.type) {
      case SET_INPUT_VALUE:
         return {
            ...state,
            inputValue: action.value,
         };

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

export default searchBarReducer;