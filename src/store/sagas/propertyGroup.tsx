import { put, call } from 'redux-saga/effects';

import {
    fetchPropertyData
  } from '../utils';

import * as storeTypes from '../utils/storeTypes';

export function* getpropertyGroupData(): any {
    try {
        const { status, error, data } = yield call(fetchPropertyData);
        if (status === 200) {
            yield put({
              type: storeTypes.SAGA_GET_PROPERTYDATA_SUCCESS,
              items: data,
            });
          } else {
            throw new Error(error);
          }

    }
    catch (error) {
        console.log(error);
      }
}