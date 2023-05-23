import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_FAVORITES = 'GET_FAVORITES';



export const getProducts = value => async dispatch => {
    try {
        let json = await axios.get(`https://dummyjson.com/products?limit=5&skip=${value}`)
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


export const getFavorites = (payload) => dispatch => {
    return dispatch({ type: GET_FAVORITES, payload })
}