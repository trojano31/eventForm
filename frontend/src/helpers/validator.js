export const required = value => (value ? undefined : 'Required');

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Incorrect email address' : undefined;

export const alpha = value => value && /[^a-zA-Z ]/i.test(value) ? 'Alphabetic characters only' : undefined;
