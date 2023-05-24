import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_BY_NAME = 'GET_BY_NAME';



export const getProducts = () => async dispatch => {
    try {
        let json = await axios.get(`https://dummyjson.com/products`)
        return dispatch({ type: GET_PRODUCTS, payload: json.data })
    } catch (error) {
        console.log(error);
    }
}
export const getById = id => async dispatch => {
    try {
        let json = await axios.get(`https://dummyjson.com/products/${id}`)
        return dispatch({ type: GET_BY_ID, payload: json.data })
    } catch (error) {
        console.log(error);
    }
}

export const cleanDetail = () => dispatch => {
    return dispatch({ type: CLEAN_DETAIL })
}
export const getFavorites = payload => dispatch => {
    return dispatch({ type: GET_FAVORITES, payload })
}
export const addFavorites = product => dispatch => {
    return dispatch({ type: ADD_FAVORITES, payload: product })
}
export const removeFavorites = id => dispatch => {
    return dispatch({ type: REMOVE_FAVORITES, payload: id })
}

export const getByName = (value) => async dispatch => {
    try {
        let json = await axios.get(`https://dummyjson.com/products/search?q=${value}`)
        return dispatch({ type: GET_BY_NAME, payload: json.data })
    } catch (error) {
        console.log(error);
    }
}