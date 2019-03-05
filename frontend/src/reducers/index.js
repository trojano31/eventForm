import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rootReducer from './rootReducer';

const reducers = combineReducers({
  rootReducer,
  form: formReducer
});

export default reducers;
