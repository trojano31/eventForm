import { POSTING_FAILED, POSTING_FORM, POSTING_SUCCESS } from '../actions/actionTypes';

const initialState = {
  posting: false,
  success: false,
  error: {
    isError: false,
    message: ''
  }
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTING_FORM:
      return { ...state, posting: true };

    case POSTING_FAILED:
      return { ...state, posting: false, error: { isError: true, message: payload } };

    case POSTING_SUCCESS:
      return { ...state, posting: false, success: true };

    default:
      return state;
  }
};

export default rootReducer;
