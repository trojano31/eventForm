const request = require('supertest');
const app = require('../src/app');
const Event = require('../src/models/event');

const clearEvents = async () => await Event.deleteMany({}, err => {
  if (err) throw err;
});

test('Should register a new event application', async (done) => {
  await clearEvents();
  await request(app).post('/events').send({
    firstName: 'Patryk',
    secondName: 'trojan',
    email: 'pat@gmail.com',
    date: '2019-03-06T09:42:58.602Z!'
  }).expect(201);
  done();
});


test('Should return list of event applications', async (done) => {
  await request(app).get('/events').send().expect(200);
  done();
});
