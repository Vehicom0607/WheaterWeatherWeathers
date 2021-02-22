import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions'

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
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
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