import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Search.css';
import search from '../img/search.svg';
import { getWeather, unsetError } from '../actions/weatherActions';
import M from 'materialize-css';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.changeName = this.changeName.bind(this);
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }

    componentDidMount() {
        document.addEventListener('keyup', function (event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.querySelector('.search-btn').click();
            }
        });
    }

    componentDidUpdate() {
        if (this.props.error) {
            M.toast({ html: 'City or country not found. Please try again.' });
            this.props.unsetError();
        }
    }
    render() {
        return (
            <div
                style={{ position: 'relative', zIndex: '1000' }}
                className="search"
            >
                <div className="search-container">
                    <btn
                        className="search-btn"
                        onClick={() => this.props.getWeather(this.state.name)}
                    >
                        <img src={search} alt="search" />
                    </btn>
                    <input
                        type="text"
                        placeholder="Enter a city..."
                        value={this.state.name}
                        onChange={e => {
                            this.changeName(e);
                        }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.weatherState.error
});

const mapDispatchToProps = { getWeather, unsetError };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
