import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './router/appRouter';


const appDiv = document.getElementById('app');

ReactDOM.render(<AppRouter />, appDiv);
