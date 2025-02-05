import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import CatProvider from './context/CatProvider'

ReactDOM.render(
    <CatProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CatProvider>,
    document.getElementById("root")
)