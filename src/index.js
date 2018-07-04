import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers';
import App from './components/App';
import './styles/main.css';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
