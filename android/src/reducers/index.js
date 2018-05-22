import {combineReducers} from 'redux';
import {results, resultsHasErrored, resultsIsLoading} from './results';
import savedResults from './savedResults';

let rootReducer=combineReducers({
    results,
})
export default rootReducer;
