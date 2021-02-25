import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions'
import LocationDisplay from "../Components/UI/LocationDisplay/LocationDisplay";
import {Container} from "react-bootstrap";
import WeatherDisplay from "../Components/UI/WeatherDisplay/WeatherDisplay";
class Display extends Component {


    componentDidMount() {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(result => {
                    if (result.state === "granted") {
                        this.props.setWeather()
                    } else if (result.state === "prompt") {
                        alert('Please allow location use, Reload the page once you have done so.')
                    } else if (result.state === "denied") {
                        alert("You denied use of geolocation, please enable it so we can provide weather");
                    }
                    result.onchange = function () {
                        console.log(result.state);
                    };
                });
        } else {
            alert("Sorry Not available!");
        }

    }


    render() {
        return (
            <Container>
                <LocationDisplay />
                <WeatherDisplay />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setWeather: () => dispatch(actions.setWeather())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Display);