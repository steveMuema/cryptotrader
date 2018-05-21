

export function resultsIsLoading(bool){
    return{
        type:'RESULTS_IS_LOADING',
        isLoading: bool
    }
}

export function resultsFetchDataSuccess(results){
        return{
            type:'RESULTS_FETCH_DATA_SUCCESS',
            results
        }

}


export function resultsHasErrored(bool){
    return{
        type: "RESULTS_HAS_ERRORED",
        hasErrored: bool
    }
}



export function resultsFetchData(cryptocurrency, wcurrency){
    global.fetch=require('isomorphic-fetch');
    var cc = require('cryptocompare');
    return (dispatch) => {
        dispatch(resultsIsLoading(true)); 
            cc.price(cryptocurrency, wcurrency)
            .then((results) => {
                dispatch(resultsIsLoading(false));
                dispatch(resultsFetchDataSuccess(results));                
                console.log(results);
            })
            .catch(()=> dispatch(resultsHasErrored(true)));
    };
}












