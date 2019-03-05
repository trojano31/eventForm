import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import Input from './Input';

const EventForm = () => (
  <Form>
    <Field
      name="firstName"
      component={Input}
      type="text"
      label="First Name"
      placeholder="First Name"
    />
    <Field
      name="secondName"
      component={Input}
      type="text"
      label="Second Name"
      placeholder="Second Name"
    />
    <Field
      name="email"
      component={Input}
      type="email"
      label="Email"
      placeholder="Email"
    />
    <Field
      name="comment"
      component="input"
      label="Komentarz"
    />
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default reduxForm({
  form: 'eventForm'
})(EventForm);
