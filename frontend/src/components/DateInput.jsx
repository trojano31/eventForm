import React from 'react';
import DatePicker from 'react-date-picker';
import { Form } from 'react-bootstrap';

const DateInput = ({ input: { value, onChange }, label, withTime, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label className="d-block">{label}</Form.Label>
    <DatePicker
      onChange={onChange}
      time={withTime}
      value={value ? new Date(value) : null}
      minDate={new Date(Date.now())}
      showLeadingZeros
    />
    {touched && error && <span>{error}</span>}
  </Form.Group>
);
export default DateInput;
