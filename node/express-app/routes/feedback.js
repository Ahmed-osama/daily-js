const express = require('express')
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    return res.send('feedback page!!');
  });

  router.post('/', (req, res) => {
    return res.send(`feedback posted`);
  });

  return router
}