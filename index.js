const express = require('express');
const routes = require('./src/routes');

require('./src/databases/connetion');

const app = express();

app.use(express.json());

app.use(routes);

var port  = process.env.PORT || 3333;

app.listen(port, () =>[
  console.log(`Port: ${port}`)
])