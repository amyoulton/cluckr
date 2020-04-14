const express = require('express');
// const knex = require('../db/connections');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('signIn');
});

module.exports = router;
