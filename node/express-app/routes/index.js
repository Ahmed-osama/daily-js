const express = require('express')
const router = express.Router();
const feedbackRoute = require('./feedback')
const speakersRoute = require('./speakers')

module.exports = (services) => {
  router.get('/', (req, res) => {
    if (!req.session.visitCount) {
      req.session.visitCount = 0
    }
    req.session.visitCount += 1
    res.render('pages/index', {
      pageTitle: 'Ahmed Osama',
      visitCount: req.session.visitCount
    });
  });

  router.use('/speakers', speakersRoute(services));
  router.use('/feedback', feedbackRoute(services));

  return router
}
