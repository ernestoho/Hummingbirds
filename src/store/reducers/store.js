import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading : false,
    storeDetails: [],
    storeLists : [],
    error:false,
    message: null
}

const initStoreDeatils= ( state, action ) => {
    return updateObject( state, {
        loading: true
    } );
};

const setStoreDeatils= ( state, action ) => {
    return updateObject( state, {
        storeDetails: action.storeDetails,
        loading: false,
        error:false,
        message:null
    } );
};

const fetchStoreDeatilsFailed = (state, action) => {
    return updateObject( state, { loading: false, error: true, message: 'Could not fetch result.' } );
};


const initStoreLists= ( state, action ) => {
    return updateObject( state, {
        loading: true
    } );
};

const setStoreLists= ( state, action ) => {
    return updateObject( state, {
        storeLists: action.storeLists,
        loading: false,
        error:false,
        message:null
    } );
};

const fetchStoreListsFailed = (state, action) => {
    return updateObject( state, { loading: false, error: true, message: 'Could not fetch result.' } );
};




const initCreateStore = (state, action) => {
    return updateObject( state, {
        loading: true
    } );
} 

const createStoreFailed = (state, action) => {
    return updateObject( state, {
        loading: false,
        error : action.error
    } );
} 

const createStoreSuccess = (state, action) => {
    return updateObject( state, {
        loading: false,
    } );
} 


const storeReducer = ( state = initialState, action) =>{
    switch(action.type){
        case actionTypes.INIT_STORE_DETAILS: return initStoreDeatils(state, action);   
        case actionTypes.SET_STORE_DETAILS: return setStoreDeatils(state, action);    
        case actionTypes.FETCH_STORE_DETAILS_FAILED: return fetchStoreDeatilsFailed(state, action);

        case actionTypes.INIT_STORE_LISTS: return initStoreLists(state, action);   
        case actionTypes.SET_STORE_LISTS: return setStoreLists(state, action);    
        case actionTypes.FETCH_STORE_LISTS_FAILED: return fetchStoreListsFailed(state, action);

        case actionTypes.INIT_CREATE_STORE: return initCreateStore(state, action);
        case actionTypes.CREATE_STORE_FAILED: return createStoreFailed(state, action);
        case actionTypes.CREATE_STORE_SUCCESS: return createStoreSuccess(state, action);

        default:
            return state;
    }
}


export default storeReducer;





