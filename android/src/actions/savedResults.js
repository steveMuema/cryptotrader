let nextResultId=0; 
export function saveFetchResults(results){
    return{
        type: 'SAVE_FETCH_RESULTS',
        id: nextResultId++,                                                                                                                                             
        results
    }
}

// export function saveResults(results){
//     return (dispatch)=>{    
//         dispatch(resultsIsLoading(true)); 
//             cc.price(cryptocurrency, wcurrency)
//             .then((results) => {
//                 dispatch(saveFetchResults(results))
//             })
// }
// }