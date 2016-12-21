import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './RootReducer';

let store = {};

if (process.env.NODE_ENV === 'production') {
    store = createStore(
        reducer,
        applyMiddleware(thunkMiddleware)
    );
} else {
    store = createStore(
        reducer,
        applyMiddleware(thunkMiddleware, createLogger())
    );
}

export default store;