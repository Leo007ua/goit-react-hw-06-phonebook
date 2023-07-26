import { combineReducers, createStore } from 'redux';
import { formReducer } from './formReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  form: formReducer,
  // filters: filtersReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
 