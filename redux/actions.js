import axios from 'axios';
export const GET_FAVORITES = 'GET_FAVORITES';


export const getFavorites = (payload) => dispatch => {
    return dispatch({ type: GET_FAVORITES, payload })
}