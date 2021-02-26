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
const switchUnits = (state, action) => {
    let newUnit = "F"
    if (state.unit == "F") {
        newUnit = "C"
    }
    return {
        ...state,
        unit: newUnit
    }
}

export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case actionTypes.SET_WEATHER:       return setWeather(state, action)
        case actionTypes.SET_WEATHER_START: return setWeatherStart(state, action)
        case actionTypes.SET_WEATHER_ERROR: return setWeatherError(state, action)
        case actionTypes.SWITCH_UNITS:      return switchUnits(state, action)
        default:
            return state
    }
}