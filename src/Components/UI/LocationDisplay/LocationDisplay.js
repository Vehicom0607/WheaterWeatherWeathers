import React from 'react';
import classes from './LocationDisplay.module.css'
import {Jumbotron, Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as actions from '../../../store/actions'

const LocationDisplay = props => {
    return (
        <React.Fragment>
                <Jumbotron className={classes.Jumbotron + ' text-center mt-5'}>
                    {props.timezone ? <h1>You're in: {props.timezone}</h1>: <h1>Cannot load data. Please make sure location is enabled.</h1>}
                    <Button onClick={() => props.reloadData(props.unit)} variant="secondary" className="d-inline-block px-3">Reload Data</Button>
                    <Button onClick={() => props.changeUnits(props.unit)} variant="secondary" className="d-inline-block px-3">Change F/C</Button>
                </Jumbotron>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        timezone: state.timezone,
        unit: state.unit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reloadData: (unit) => dispatch(actions.setWeather(unit)),
        changeUnits: (unit) => dispatch(actions.setWeather(unit, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDisplay);
