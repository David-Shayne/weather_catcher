import { GET_WEATHER } from '../actions/types';

const initialState = {
    location: {
        name: 'Cape Town',
        country: 'South Africa'
    },
    current: {
        temperature: 21,
        weather_descriptions: 'Cloudy'
    },
    error: false
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case GET_WEATHER:
            return {
                ...state,
                location: action.payload.location,
                current: action.payload.current
            };
        case 'ERROR':
            return {
                ...state,
                error: true
            };
        case 'UNSET_ERROR':
            return {
                ...state,
                error: false
            };
    }
};

export default weatherReducer;
