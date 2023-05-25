import { GET_BY_CATEGORY, GET_BY_ID, GET_BY_NAME, GET_FAVORITES, GET_PRODUCTS, RESET } from './actions';

const initialState = {
    products: [],
    sortProducts: [],
    detail: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                sortProducts: action.payload.products
            }
        case GET_BY_ID:
            return {
                ...state,
                detail: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                sortProducts: action.payload.products
            }
        case GET_BY_CATEGORY:
            return {
                ...state,
                sortProducts: action.payload.products
            }
        case RESET:
            return {
                ...state,
                sortProducts: state.products
            }
        default: return state
    }
};

export default rootReducer