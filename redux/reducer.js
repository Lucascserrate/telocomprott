import { GET_FAVORITES } from './actions';

const initialState = {
    favorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        default: return state
    }
};

export default rootReducer