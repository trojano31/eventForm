import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ label, type, placeholder, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} />
    {touched && error && <Form.Text className="text-muted">{error}</Form.Text>}
  </Form.Group>
);

export default Input;
