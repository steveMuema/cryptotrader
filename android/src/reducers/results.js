import {fromJS} from 'immutable';



export function resultsHasErrored(state=false, action){
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

export function results(state=[], action){
    switch(action.type){
        case 'RESULTS_FETCH_DATA_SUCCESS':
            return action.results;
        // case 'SAVE_FETCH_RESULTS':
        //     return[...state,
        //     action.results]
        default:
            return state;
    }
}