import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { postEventForm } from '../actions/rootActions';
import EventForm from './EventForm';

const EventFormContainer = ({ postEventForm, isError, errorMessage, success }) => (
  <EventForm onSubmit={postEventForm} isError={isError} success={success} errorMessage={errorMessage} />
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    postEventForm
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    isError: state.rootReducer.error.isError,
    errorMessage: state.rootReducer.error.message,
    message: state.rootReducer.error.message,
    success: state.rootReducer.success
  };
};

EventFormContainer.propTypes = {
  postEventForm: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);
