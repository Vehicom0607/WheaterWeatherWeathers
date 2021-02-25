import React from 'react';
import classes from './LocationDisplay.module.css'
import {Jumbotron, Button} from "react-bootstrap";
import {connect} from "react-redux";
import * as actions from '../../../store/actions'

const LocationDisplay = props => {
    return (
        <React.Fragment>
                <Jumbotron className={classes.Jumbotron + ' text-center mt-5 text-light'}>
                    {props.timezone ? <h1>You're in: {props.timezone}</h1>: <h1>Cannot load data. Please make sure location is enabled.</h1>}
                    <Button onClick={() => props.reloadData()} variant="secondary" >Reload Data</Button>
                </Jumbotron>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        timezone: state.timezone
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reloadData: () => dispatch(actions.setWeather())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDisplay);
