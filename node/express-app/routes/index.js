const express = require('express')
const router = express.Router();


module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', {
      pageTitle: 'Ahmed Osama'
    });
  });

  router.get('/speakers', (req, res) => {
    res.sendFile(path.join(__dirname, './static/speakers.html'));
  });

  return router
}
