const express = require('express')
const router = express.Router();
const feedbackRoute = require('./feedback')
const speakersRoute = require('./speakers')

module.exports = (services) => {
  router.get('/', (req, res) => {
    res.render('pages/index', {
      pageTitle: 'Ahmed Osama'
    });
  });

  router.use('/speakers', speakersRoute(services));
  router.use('/feedback', feedbackRoute(services));

  return router
}
