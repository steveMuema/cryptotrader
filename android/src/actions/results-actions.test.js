import * as actions from "./results";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
// fake data object that is returned from api
export const data = () => {
   price: "100.10";
}
it('checks the loading status of fetching results',  () => {
    const isLoading = true;
    const expectedAction = {
        type:'RESULTS_IS_LOADING',
        isLoading: true
    }
    expect(actions.resultsIsLoading(true)).toEqual(expectedAction);
});

it('checks whether fetching results has errored', () => {
    const hasErrored = false;
    const expectedAction = {
        type: 'RESULTS_HAS_ERRORED',
        hasErrored: true,
    }
    expect(actions.resultsHasErrored(true)).toEqual(expectedAction);
});

it('fetches the data from cryptocompare', () => {
    const expectedAction = {
        type: 'RESULTS_FETCH_DATA_SUCCESS',
        results: data
    }
    expect(actions.resultsFetchDataSuccess(data)).toEqual(expectedAction);
});

