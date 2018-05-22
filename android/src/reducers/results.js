import {fromJS} from 'immutable'; 
// import {FETCHING_EXCHANGE_RATES} from '../../../constants';

export const initialState={
    error: null,
    isLoading: false,
    results: null,
}

export function resultsHasErrored(state= initialState, action){
    switch(action.type){
        case 'RESULTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function resultsIsLoading(state=false, action){
    switch(action.type){
        case 'RESULTS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function results(state=initialState, action){
    switch(action.type){
        case "RESULTS_HAS_ERRORED":
            return {...state, error: true, isLoading:false};
        case 'RESULTS_IS_LOADING':
            return{...state, isLoading:true}
        case 'RESULTS_FETCH_DATA_SUCCESS':
        return{...state, isLoading: false, results: action.results}
        default:
            return state;
    }
}