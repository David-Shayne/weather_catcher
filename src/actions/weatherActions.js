import Axios from 'axios';
import { GET_WEATHER } from './types';
const key =
    'http://api.weatherstack.com/current?access_key=a9b5a3b27c5396ff6875fc6d95b09682';

export const getWeather = location => dispatch => {
    Axios.get(`${key}&query=${location}`).then(data => {
        if (data.data.location) {
            dispatch({ type: GET_WEATHER, payload: data.data });
        } else {
            dispatch({
                type: 'ERROR'
            });
        }
    });
};

export const unsetError = () => dispatch => {
    dispatch({ type: 'UNSET_ERROR' });
};
