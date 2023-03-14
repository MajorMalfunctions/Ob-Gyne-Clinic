import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { AuthContextProvider } from './context/AuthContext';
// import { BookingsContextProvider } from './context/BookingsContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <BookingsContextProvider>
//         <App />
//       </BookingsContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import App from './App';
// import store from "./redux/store";
// import setupInterceptors from "./redux/services/setupInterceptors";
// import { Provider }  from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// setupInterceptors(store)


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.js';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import { ContextProvider } from "./context/Context"
// import "./index.css"

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>
// )