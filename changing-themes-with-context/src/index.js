import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import CountProvider from './context/CountProvider.js'
import './style.css'

ReactDOM.render(
<CountProvider>
<App />
</CountProvider>, 
document.getElementById('root'));

