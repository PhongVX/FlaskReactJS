import  React from 'react';
import ReactDOM from 'react-dom';
import List  from './components/List.js';
import store from './store/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/common.css';

var {Provider}=require('react-redux');

ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>,
    document.getElementById('root')
)

