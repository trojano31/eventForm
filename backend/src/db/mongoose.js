const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err) => {
  if (err) return console.log(err);
  console.log("Database connected")
});
