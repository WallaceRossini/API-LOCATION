const express = require('express');
const routes = require('./src/routes');

require('./src/databases/connetion');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () =>[
  console.log('Port: 3333')
])