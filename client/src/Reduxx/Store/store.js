import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)), 
    );

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from '../Reducer/Reducer.js';
// import thunk from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//      reducer, 
//      composeEnhancer(applyMiddleware(thunk))
//  )
  
// export default store;