import { rootReducer } from '../configureStore';


// API Url 
export const API_URL:string  = 'https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien';

// SAGA

export const SAGA_GET_PROPERTYDATA_START = 'SAGA_GET_PROPERTYDATA_START';
export const SAGA_GET_PROPERTYDATA_SUCCESS = 'SAGA_GET_PROPERTYDATA_SUCCESS';

// STORE
export type RootReducerState = ReturnType<typeof rootReducer>;

