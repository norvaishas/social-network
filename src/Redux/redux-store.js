import {createStore} from 'redux';
import rootReducer from './root-reducer';

const store = createStore(rootReducer);

window.store = store;

export default store;
