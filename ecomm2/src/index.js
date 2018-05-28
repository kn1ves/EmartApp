import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/jss/material-kit-react.jsx';
import "./assets/scss/material-kit-react.css";
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root'));
registerServiceWorker();
