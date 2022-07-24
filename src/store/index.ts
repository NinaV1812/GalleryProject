import {createStore, combineReducers} from 'redux';
import productReducer from './reducer';
const rootReducer = combineReducers({productReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;

export type RootState = ReturnType<typeof rootReducer>;
