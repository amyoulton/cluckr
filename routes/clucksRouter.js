const express = require('express');
const knex = require('../db/connections');
const router = express.Router();

router.get('/', (request, response) => {
  const username = request.cookies.username;
  if (username) {
    response.render('clucks/new');
  } else response.render('SignIn');
});

router.post('/', (request, response) => {
  const username = request.cookies.username;

  if (username) {
    const cluckInfo = request.body;
    knex('clucks')
      .insert({
        username: username,
        content: cluckInfo.content,
        image_url: cluckInfo.image_url
      })
      .returning('*')
      .then(post => {
        response.redirect(`/`);
      });
  } else {
    response.redirect('/');
  }
});

module.exports = router;
