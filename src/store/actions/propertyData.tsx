import { Dispatch } from 'redux';

import * as storeTypes from '../utils/storeTypes';

export const getPropertyData = (dispatch:Dispatch):void => {
    dispatch({
      type: storeTypes.SAGA_GET_PROPERTYDATA_START,
    });
  };