import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import TextInput from './TextInput';
import DateInput from './DateInput';
import { alphaNumeric, email, minLength, required } from '../helpers/validator';

const EventForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit} className="event-form">
    <Field
      name="firstName"
      component={TextInput}
      type="text"
      label="First Name"
      placeholder="First Name"
      validate={[required, alphaNumeric, minLength(2)]}
    />
    <Field
      name="secondName"
      component={TextInput}
      type="text"
      label="Second Name"
      placeholder="Second Name"
      validate={[required, alphaNumeric, minLength(2)]}

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
  </Form>
);

export default reduxForm({
  form: 'eventForm'
})(EventForm);
