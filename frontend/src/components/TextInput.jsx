import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const TextInput = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
      className={touched && error ? 'invalid-input' : ''}
    />
    {touched && error && <Form.Text className="text-muted">{error}</Form.Text>}
  </Form.Group>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
