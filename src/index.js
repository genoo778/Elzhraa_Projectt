import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import * as Animatable from 'react-native-animatable';
// import Carousel from 'react-native-snap-carousel';
import {
  BrowserRouter,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);



