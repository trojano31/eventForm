import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postEventForm } from '../actions/rootActions';
import EventForm from './EventForm';

const EventFormContainer = ({ postEventForm }) => (
  <EventForm onSubmit={postEventForm} />
);

const mapDispatchToProps = dispatch => {
  bindActionCreators({
    postEventForm
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(EventFormContainer);
