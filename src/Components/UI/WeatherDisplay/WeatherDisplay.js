import React from 'react';
import {connect} from "react-redux";
import WeatherDisplayCard from "./WeatherDisplayCard/WeatherDisplayCard";
import {Row} from 'react-bootstrap'
const WeatherDisplay = props => {

    let WeatherDisplay = []
    if (props.weather) {
        props.weather.map((data, index) => {
            if (index < 4) {
                WeatherDisplay.push(
                    <WeatherDisplayCard key={index} index={index} temp={data.temp} weather={data.weather} date={new Date(data.dt*1000)} />
                )
            }

        })
    }


    return (
        <Row xs="1" sm="1" md="2" lg="4">
            {WeatherDisplay}
        </Row>
    );
};

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}



export default connect(mapStateToProps)(WeatherDisplay);
