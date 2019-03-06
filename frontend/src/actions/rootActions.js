import axios from 'axios';
import { reset } from 'redux-form';
import { apiEndpoint } from '../constants/settings';
import { POSTING_FAILED, POSTING_FORM, POSTING_SUCCESS } from './actionTypes';

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

export const postEventForm = values => {
  return dispatch => {
    dispatch(postingForm());
    const { date, email, firstName, secondName } = values;
    const event = {
      date: date.toISOString(),
      email,
      firstName,
      secondName
    };
    return axios.post(`${apiEndpoint}/events`, event)
      .then(() => {
        dispatch(postingSuccess());
        dispatch(reset('eventForm'));
      })
      .catch(err => {
        if (err.status === 400) return dispatch(postingFailed('Bad request.'));
        return dispatch(postingFailed('Something went wrong. Please try again later.'));
      });
  };
};
