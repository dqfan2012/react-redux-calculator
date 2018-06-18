import React from 'react';
import ReactDOM, { render } from 'react-dom';

import './components/App.css';
import App from './components/App';

var appElement = document.getElementById('app');

if (appElement) render(<App />, appElement);  



