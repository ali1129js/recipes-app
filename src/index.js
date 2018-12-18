/**
 * @Author: Ali
 * @Date:   2018-12-16T14:09:02+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-18T10:55:23+01:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Components/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
