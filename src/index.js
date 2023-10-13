// import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import 'sticky-sidebar';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import './assets/styles/styles.scss';
import App from './Containers/App';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
