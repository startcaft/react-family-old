import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './Store';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , 
    document.getElementById('root'));
registerServiceWorker();