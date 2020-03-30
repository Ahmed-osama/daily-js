const express = require('express')
const router = express.Router();
const feedbackRoute = require('./feedback')
const speakersRoute = require('./speakers')

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', {
      pageTitle: 'Ahmed Osama'
    });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  return router
}
