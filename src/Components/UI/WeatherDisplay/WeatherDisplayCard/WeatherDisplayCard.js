import React from 'react';
import {Card, Col} from "react-bootstrap";
import classes from './WeatherDisplayCard.module.css'
import {connect} from "react-redux";

const getBackground = (weather) => {
    switch(weather) {
        case "Clouds":
            return "#b5bbca"
        case "Hail":
        case "Rain":
            return "#4d73da"
        case "Snow":
            return "#d6d6d6"
        default:
            return ""
    }
}

const WeatherDisplayCard = props => {
    let day = props.date.toDateString()
    day = day.slice(0, -5)
    if (props.index === 0) {
        day = 'Today'
    }
    if (props.index === 1) {
        day = 'Tomorrow'
    }

    let bg;
    bg = getBackground(props.weather[0].main)

    console.log(props)

    return (
        <Col>
            <Card className="mb-3 text-center" style={{backgroundColor: bg}}>
                <Card.Header >
                    {day}
                </Card.Header>
                <Card.Body >
                    <Card.Text className={classes.tempDisplay}>
                        {Math.round(props.temp.day)} {props.unit}
                    </Card.Text>
                        <Card.Text className={classes.minMaxDisplay}>
                            High: {Math.round(props.temp.min)}{props.unit} Low: {Math.round(props.temp.max)}{props.unit}
                        </Card.Text>
                </Card.Body>
                <hr />
                <Card.Body>
                    Weather: {props.weather[0].main}
                </Card.Body>
            </Card>
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        unit: state.unit
    }
}

export default connect(mapStateToProps)(WeatherDisplayCard);
