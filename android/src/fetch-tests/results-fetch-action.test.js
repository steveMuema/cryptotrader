import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/results'
import fetchMock from 'fetch-mock'
import expect from 'expect' 
// You can use any testing library
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('async actions',  () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    
    it('creates RESULTS_FETCH_DATA_SUCCESS when fetching results has been done', () => {
        fetchMock
          .getOnce('/price', { body: { price: [{'KES':'100.10'}] }, headers: { 'content-type': 'application/json' } })
    const expectedActions = [
          { type: 'RESULTS_IS_LOADING' },
          { type: 'RESULTS_FETCH_DATA_SUCCESS', body: { price: [{'KES':'100.10'}] } }
        ]
    const store = mockStore({ results: [] })
    return store.dispatch(actions.resultsFetchData('BTC', 'KES'));
        actions.resultsFetchDataSuccess().then( (results) => {
          // return of async actions 
         expect(store.getActions()).toEqual(expectedActions);
        }) 
    })
})