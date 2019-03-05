export const getUtcDate = date => new Date(date.getTime() + date.getTimezoneOffset() * 60000);
