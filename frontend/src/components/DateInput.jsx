import React from 'react';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUtcDate } from '../helpers';

const DateInput = ({ input: { value, onChange }, label, withTime, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label className="d-block">{label}</Form.Label>
    <DatePicker
      onChange={onChange}
      time={withTime}
      value={value ? getUtcDate(value) : null}
      minDate={new Date(Date.now())}
      showLeadingZeros
      className={touched && error ? 'invalid-date' : ''}
    />
    {touched && error && <Form.Text className="invalid-text">{error}</Form.Text>}
  </Form.Group>
);

DateInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default DateInput;
