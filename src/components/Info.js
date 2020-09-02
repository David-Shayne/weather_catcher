import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Info.css';

export class Info extends Component {
    render() {
        return (
            <div style={{ position: 'relative', zIndex: '2' }}>
                <div className="location-container">
                    <h2>{`${this.props.name}, ${this.props.country}`}</h2>
                    <i>
                        <p>{new Date(Date.now()).toDateString()}</p>
                    </i>
                </div>
                <div className="temperature-container card hoverable">
                    <h1>{`${this.props.temp}°c`}</h1>
                </div>
                <div className="weather-container">
                    <h1>{this.props.description}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.weatherState.location.name,
    country: state.weatherState.location.country,
    temp: state.weatherState.current.temperature,
    description: state.weatherState.current.weather_descriptions
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
