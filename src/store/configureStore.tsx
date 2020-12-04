import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  Store,
} from "redux";
import createSagaMiddleWare from "redux-saga";

// Utils
import index from "./sagas";
import itemsReducer from "./reducers/propertyGroup";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const rootReducer = combineReducers({
  items: itemsReducer,
});

const sagaMiddleware = createSagaMiddleWare();
const middleWares = [sagaMiddleware];

const middleWareEnhancer = composeEnhancers(applyMiddleware(...middleWares));

// eslint-disable-next-line import/no-anonymous-default-export
export default (): Store => {
  const store: Store = createStore(rootReducer, middleWareEnhancer);
  sagaMiddleware.run(index);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>

