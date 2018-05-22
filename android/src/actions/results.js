// import {FETCHING_EXCHANGE_RATES} from '../../../constants';

export function resultsIsLoading(bool){
    return{
        type:'RESULTS_IS_LOADING',
        isLoading: bool
    }
}

export function resultsHasErrored(bool){
    return{
        type: "RESULTS_HAS_ERRORED",
        hasErrored: bool
    }
}

export function resultsFetchDataSuccess(data){
        return{
            type:'RESULTS_FETCH_DATA_SUCCESS',
            results: data
        }

}




export function resultsFetchData(cryptocurrency, wcurrency){
    global.fetch=require('isomorphic-fetch');
    var cc = require('cryptocompare');
    return (dispatch) => {
        dispatch(resultsIsLoading(true)); 
            cc.price(cryptocurrency, wcurrency)
            .then((data) => {
                dispatch(resultsIsLoading(false));
                dispatch(resultsFetchDataSuccess(data));                
                console.log(data);
            })
            .catch(()=> dispatch(resultsHasErrored(true)));
    };
}












