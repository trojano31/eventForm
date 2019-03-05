import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  rootReducer,
  formReducer
});

export default reducers;
