import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_CATEGORY = 'GET_BY_CATEGORY';
export const RESET = 'RESET';
export const SET_CURRENT = 'SET_CURRENT';
export const DECREASE = 'DECREASE';

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

export const getByName = (value) => async dispatch => {
    try {
        let json = await axios.get(`https://dummyjson.com/products/search?q=${value}`)
        return dispatch({ type: GET_BY_NAME, payload: json.data })
    } catch (error) {
        console.log(error);
    }
}

export const getByCategory = (value) => async dispatch => {
    try {
        if (value === 'Celulares') value = 'smartphones';
        if (value === 'Fragancias') value = 'fragrances';
        if (value === 'Comestibles') value = 'groceries';
        if (value === 'Hogar') value = 'home-decoration';
        let json = await axios.get(`https://dummyjson.com/products/category/${value}`)
        return dispatch({ type: GET_BY_CATEGORY, payload: json.data })
    } catch (error) {
        console.log(error);
    }
}

export const resetFilters = () => dispatch => {
    return dispatch({ type: RESET })
}

export const setCurrent = payload => dispatch => {
    return dispatch({ type: SET_CURRENT, payload })
}

