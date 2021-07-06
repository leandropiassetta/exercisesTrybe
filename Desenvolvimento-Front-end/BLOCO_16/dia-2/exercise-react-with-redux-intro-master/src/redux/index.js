import { createStore, combineReducers } from 'redux';
import moveCars from './reducer/moveCars';
import signalColor from './reducer/signalColor';

const rootReducer = combineReducers({
  moveCars,
  signalColor
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
