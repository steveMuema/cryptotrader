import {initialState, results} from './results';
import {FETCHING_EXCHANGE_RATES}from '../../../constants'; 
import { resultsHasErrored, resultsIsLoading, resultsFetchDataSuccess, resultsFetchData } from '../actions/results';


it('produces an error as true when request fails', () => {
    expect(results(initialState, resultsHasErrored(true))).toEqual({
        ...initialState,
        error: true,
        isLoading: false, 
    })
});

it('sets loading status to true when fetching data', () => {
    expect(results(initialState, resultsIsLoading(true))).toEqual({
        ...initialState,
        isLoading: true, 
    })
}); 

it('creates data object for cryptocompare API call', ()=>{
    const data = () =>[{
        price: "100.10"
    }];
    expect(results(initialState, resultsFetchDataSuccess(results))).toEqual({
        ...initialState,
        isLoading:false,
        results
    });
})

