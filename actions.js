import {FETCHING_EXCHANGE_RATES, FETCHING_EXCHANGE_RATES_FAILURE, FETCHING_EXCHANGE_RATES_SUCCESS, SELECT_BASE_CURRENCY, SELECT_COMPARED_CURRENCY} from './constants'


export function ConvertCurrency(){
    return (dispatch) => {
        dispatch(())
        global.fetch= require('node-fetch');
        const cc = require('cryptocurrency');
        cc.price()
    }
}

export function getFsym(dataFsym){
    return{
        type: SELECT_BASE_CURRENCY,
        dataFsym,
    }
}