import axios, { AxiosPromise } from 'axios';

import * as storeTypes from './storeTypes';

export const fetchPropertyData = (): AxiosPromise =>
  axios({
    method: 'get',
    url: storeTypes.API_URL,
  });