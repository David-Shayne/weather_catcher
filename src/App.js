import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/Container';
import './css/App.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Container />
            </Provider>
        </div>
    );
}

export default App;
