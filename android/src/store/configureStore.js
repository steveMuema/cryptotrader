import {createStore, applyMiddleWare} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// const createStoreWithMiddleWare = applyMiddleWare(thunk)(createStore);
// const store = createStoreWithMiddleWare(rootReducer);
// export default store;

// const middleWare = applyMiddleWare(thunk);
export default function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleWare(thunk)
    );
}