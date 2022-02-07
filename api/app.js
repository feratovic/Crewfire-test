const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

require('./routes/public.routes')(app);

module.exports = app;
