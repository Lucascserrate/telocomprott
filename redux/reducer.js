import { GET_BY_CATEGORY, GET_BY_ID, GET_BY_NAME, GET_PRODUCTS, RESET, SET_CURRENT } from './actions';

const initialState = {
    products: [],
    sortProducts: [],
    detail: {},
    currentPage: 1,
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
        case SET_CURRENT:
            return {
                ...state,
                currentPage: action.payload
            }
        default: return state
    }
};

export default rootReducer