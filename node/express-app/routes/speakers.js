const express = require('express')
const router = express.Router();

module.exports = () => {

  router.get('/', (req, res) => {
    return res.send('speakers list !!');
  });
  router.get('/:shortName', (req, res) => {
    return res.send(`details of ${req.params.shortName}`);
  });

  return router
}



