const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD pipeline!' });
});

app.get('/add/:a/:b', (req, res) => {
  const result = Number(req.params.a) + Number(req.params.b);
  res.json({ result });
});

module.exports = app;