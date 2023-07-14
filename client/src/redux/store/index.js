import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //extension en el navegador
import thunk from 'redux-thunk'; //sincronia
import rootReducer from '../reducer/reducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);