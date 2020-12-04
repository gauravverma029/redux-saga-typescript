import produce from 'immer';
import { AnyAction } from 'redux';

import * as storeTypes from '../utils/storeTypes';


export interface InitialState {
    propertyGroupData: Object;
    itemsUpToDate: boolean;
}

export const initialState: InitialState = {
    propertyGroupData: {},
    itemsUpToDate: true,
}



const reducer = produce((draft,action: AnyAction)=> {
    switch(action.type){
        case storeTypes.SAGA_GET_PROPERTYDATA_START:
            draft.itemsUpToDate = false;
            return draft;
        case storeTypes.SAGA_GET_PROPERTYDATA_SUCCESS:
            if(action.items.offers.length <= 0){
                draft.itemsUpToDate = true;
                draft.propertyGroupData = {};
            }
            draft.itemsUpToDate = true;
            draft.propertyGroupData = action.items.offers;
            return draft;
        default:
            return draft;
          
    }
},initialState)

export default reducer;
