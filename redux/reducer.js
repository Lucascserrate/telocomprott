import { GET_BY_ID, GET_FAVORITES, GET_PRODUCTS } from './actions';

const initialState = {
    products: [],
    detail: {},
    favorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        case GET_BY_ID:
            return {
                ...state,
                detail: action.payload
            }
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        default: return state
    }
};

export default rootReducer