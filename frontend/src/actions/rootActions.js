import { POSTING_FAILED, POSTING_FORM, POSTING_SUCCESS } from './actionTypes';

export const postEventForm = values => {
  console.log(values);
};

export const postingForm = () => {
  return {
    type: POSTING_FORM
  };
};

export const postingSuccess = () => {
  return {
    type: POSTING_SUCCESS
  };
};

export const postingFailed = err => {
  return {
    type: POSTING_FAILED,
    payload: err
  };
};
