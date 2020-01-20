import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import PhotoProvider from './context/PhotoProvider.js'
import UserProvider from './context/UserProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <PhotoProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </PhotoProvider>
    </BrowserRouter>, 
document.getElementById('root'))