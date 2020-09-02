import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Info from './Info';
import cold_day from '../img/cold_day.jpg';
import cold_night from '../img/cold_night.jpg';
import warm_day from '../img/warm_day.jpg';
import warm_night from '../img/warm_night.jpg';
import Search from './Search';

export class Container extends Component {
    render() {
        let background;

        // automatically setting the background relative to temp and light
        if (this.props.temp >= 20) {
            if (this.props.day === 'yes') {
                background = warm_day;
            } else {
                background = warm_night;
            }
        } else {
            if (this.props.day === 'yes') {
                background = cold_day;
            } else {
                background = cold_night;
            }
        }

        return (
            <div
                className="container background"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <Header />
                <Info />
                <Search />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    temp: state.weatherState.current.temperature,
    day: state.weatherState.current.is_day
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
