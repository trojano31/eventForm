import React from 'react';
import DatePicker from 'react-datepicker';

const DateInput = ({ input, placeholder, withTime, meta: { touched, error } }) => (
  <div>
    {console.log(input.value)}
    <DatePicker
      {...input}
      dateForm="MM DD YYYY"
      time={withTime}
      selected={input.value ? new Date(input.value) : null}
      placeholderText={placeholder}
    />
    {touched && error && <span>{error}</span>}
  </div>
);
export default DateInput;
