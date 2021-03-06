import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Alert, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import DateInput from './DateInput';
import { alpha, email, required } from '../helpers/validator';

const EventForm = ({ handleSubmit, isError, errorMessage, success }) => (
  <Form onSubmit={handleSubmit} className="event-form">
    <Field
      name="firstName"
      component={TextInput}
      type="text"
      label="First Name"
      placeholder="First Name"
      validate={[required, alpha]}
    />
    <Field
      name="lastName"
      component={TextInput}
      type="text"
      label="Last Name"
      placeholder="Last Name"
      validate={[required, alpha]}

    />
    <Field
      name="email"
      component={TextInput}
      type="email"
      label="Email"
      placeholder="Email"
      validate={[required, email]}
    />
    <Field
      name="date"
      component={DateInput}
      withTime={false}
      type="text"
      label="Date"
      placeholder="Select Date"
      validate={[required]}
    />
    <Button variant="primary" type="submit">
      Submit
    </Button>
    {isError ? <Alert variant="danger" className="mt-3">{errorMessage}</Alert> : ''}
    {success ? <Alert variant="success" className="mt-3">Your application has been sent. We will get back to you shortly</Alert> : ''}
  </Form>
);

EventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default reduxForm({
  form: 'eventForm'
})(EventForm);
