const express = require('express');
const awsrest = require('../..');

const app = express();

awsrest.registerRoute(
  app,
  {
    name: 'users'
  },
)

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
