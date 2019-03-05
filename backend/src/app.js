const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("hello world");
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
