const initialState = {
    nameContact: '',
    number: '',
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'form/setNameContact':
            return {
              ...state,
                nameContact: action.payload
            }
        case 'form/setNumber':
            return {
              ...state,
                number: action.payload
            }
        default:
            return state;
    }   
   }; 

// action -> {type: "form/setNameContact", payload: {name}},
// action -> {type: "form/setNumber", payload: {number}} 