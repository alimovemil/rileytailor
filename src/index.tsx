import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './scss/style.scss';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={ store }>
        <App/>
    </Provider>
);

