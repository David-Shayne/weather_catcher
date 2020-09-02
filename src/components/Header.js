import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';
import logo from '../img/logo.svg';
import '../css/Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <header className="logo-container">
                    <img src={logo} alt="Weather-catcher" className="logo" />
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {};

const mapDispatchToProps = { getWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
