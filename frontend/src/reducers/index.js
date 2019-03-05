import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rootReducer from './rootReducer';

const reducers = combineReducers({
  rootReducer,
  formReducer
});

export default reducers;
