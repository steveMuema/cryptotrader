const savedResult = (state={}, action)=>{
    switch(action.type){
        case 'SAVE_FETCH_RESULTS':
        return{
            id: action.id,
            result: action.results
        }
        default:
        return state;
    }
}

const savedResults = (state=[], action)=>{
    switch(action.type){
        case 'SAVE__FETCH_RESULTS':
        return[...state, savedResult(undefined, action)];
        default:
        return state;
    }
}

export default savedResults;