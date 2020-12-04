import { takeLatest } from 'redux-saga/effects';
import * as storeTypes from '../utils/storeTypes';
import * as propertyGroup from './propertyGroup';

function* index():Generator {
    yield takeLatest(
        storeTypes.SAGA_GET_PROPERTYDATA_START,
        propertyGroup.getpropertyGroupData,
    )
}

export default index;
