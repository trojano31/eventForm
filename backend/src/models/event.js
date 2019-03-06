const mongoose = require('mongoose');
const validator = require('validator');

const eventSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    validate(value) {
      if (!validator.isAlphanumeric(value)) {
        throw new Error('First Name must be alphanumeric')
      }
    }
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    validate(value) {
      if (!validator.isAlphanumeric(value)) {
        throw new Error('Second Name must be alphanumeric')
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  date: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
