import React from 'react';
import {Card, Col} from "react-bootstrap";
import classes from './WeatherDisplayCard.module.css'

const getBackground = (weather) => {
    switch(weather) {
        case "Clouds":
            return "#b5bbca"
        case "Rain":
            return "#4d73da"
        default:
            return ""
    }
}

const WeatherDisplayCard = props => {
    let day = props.date.toDateString()
    day = day.slice(0, -5)
    if (props.index == 0) {
        day = 'Today'
    }
    if (props.index == 1) {
        day = 'Tomorrow'
    }

    let bg = ""
    bg = getBackground(props.weather[0].main)

    console.log(props)
    console.log(bg)

    return (
        <Col>
            <Card className="mb-3">
                <Card.Header className="text-center">
                    {day}
                </Card.Header>
                <Card.Body className={"text-center"} style={{backgroundColor: bg}}>
                    <Card.Text className={classes.tempDisplay}>
                        {props.temp.day} C
                    </Card.Text>
                        <Card.Text className={classes.minMaxDisplay}>
                            {props.temp.min} C - {props.temp.max} C
                        </Card.Text>
                </Card.Body>
                <hr />
                <Card.Body>
                    pog
                </Card.Body>
            </Card>
        </Col>
    );
};

export default WeatherDisplayCard;
