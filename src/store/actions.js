import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setWeather = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            dispatch({type: actionTypes.SET_WEATHER_START})
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=22e008b72b641f46a2bb7e8c1d583360`)
                    .then(response => {
                        console.log(response.data)
                        dispatch({type: actionTypes.SET_WEATHER, locationInfo: response.data.timezone, weather: response.data.daily})
                    })
                    .catch(error => {
                        console.log(error)
                        dispatch({type: actionTypes.SET_WEATHER_ERROR, error: error})
                    })
            })
        } else {
            alert('Please Allow Location Use')
        }

    }
}