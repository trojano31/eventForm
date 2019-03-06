export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const minLength = min => value => value && value.length < min ? `Minimal length: ${min}` : undefined;

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Incorrect email address' : undefined;

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Alphanumeric characters only' : undefined;
