import React from 'react';
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap';
import moment from 'moment';

const DateInput = ({ input, label, placeholder, withTime, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label className="d-block">{label}</Form.Label>
    <DatePicker
      onChange={input.onChange}
      dateForm="DD/MM/YYYY"
      time={withTime}
      value={!input.value ? null : moment(input.value).format('DD/MM/YYYY')}
      selected={!input.value ? null : new Date(input.value)}
      placeholderText={placeholder}
    />
    {touched && error && <span>{error}</span>}
  </Form.Group>
);
export default DateInput;
