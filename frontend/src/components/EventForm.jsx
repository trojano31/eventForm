import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import TextInput from './TextInput';
import DateInput from './DateInput';

const EventForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit} className="event-form">
    <Field
      name="firstName"
      component={TextInput}
      type="text"
      label="First Name"
      placeholder="First Name"
    />
    <Field
      name="secondName"
      component={TextInput}
      type="text"
      label="Second Name"
      placeholder="Second Name"
    />
    <Field
      name="email"
      component={TextInput}
      type="email"
      label="Email"
      placeholder="Email"
    />
    <Field
      name="date"
      component={DateInput}
      label="Date"
      placeholder="Select Date"
      parse={String}
    />
    <Button variant="primary" type="submit" className="mt-3">
      Submit
    </Button>
  </Form>
);

export default reduxForm({
  form: 'eventForm'
})(EventForm);
