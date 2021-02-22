import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setWeather = () => {
    return (dispatch) => {
        if (navigator.geolocation) {
            dispatch({type: actionTypes.SET_INGREDIENTS_START})
            let lat, lon;
            navigator.geolocation.getCurrentPosition(position => {
                lat = position.coords.latitude
                lon = position.coords.longitude
            })


            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=22e008b72b641f46a2bb7e8c1d583360`)
                .then(response => {
                    dispatch({type: actionTypes.SET_INGREDIENTS, response: response})
                })
                .catch(error => {
                    console.log(error)
                    dispatch({type: actionTypes.SET_INGREDIENTS_ERROR, error: error})
                })
        } else {
            alert('Please Allow Location Use')
        }

    }
}