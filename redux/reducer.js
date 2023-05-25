import { ADD_FAVORITES, CLEAN_DETAIL, GET_BY_CATEGORY, GET_BY_ID, GET_BY_NAME, GET_FAVORITES, GET_PRODUCTS, REMOVE_FAVORITES, RESET } from './actions';

const initialState = {
    products: [],
    sortProducts: [],
    detail: {},
    favorites: [],
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

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: {}
            }
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(e => e.id !== action.payload),
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