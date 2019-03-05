import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { postEventForm } from '../actions/rootActions';
import EventForm from './EventForm';

const EventFormContainer = ({ postEventForm }) => (
  <EventForm onSubmit={postEventForm} />
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    postEventForm
  }, dispatch);
};

EventFormContainer.propTypes = {
  postEventForm: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(EventFormContainer);
