import React from 'react';
import ReactDOM, { render } from 'react-dom';

import './Components/App.css';
import App from './Components/App';

var appElement = document.getElementById('app');

if (appElement) render(<App />, appElement);  



