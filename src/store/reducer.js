import initialStore from "./store";
import * as actionTypes from './actionTypes'

const setWeather = (state, action) => {
    return {
        ...state,
        timezone: action.locationInfo,
        weather: action.weather,
        loading: false

    }
}
const setWeatherStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const setWeatherError = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}


export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_WEATHER:       return setWeather(state, action)
        case actionTypes.SET_WEATHER_START: return setWeatherStart(state, action)
        case actionTypes.SET_WEATHER_ERROR: return setWeatherStart(state, action)
        default:
            return state
    }
}