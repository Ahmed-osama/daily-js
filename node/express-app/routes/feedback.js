const express = require('express')
const router = express.Router();

module.exports = ({ feedbackService }) => {
  router.get('/', async (req, res) => {
    const feedBackList = await feedbackService.getList()
    return res.json(feedBackList);
  });

  router.post('/', (req, res) => {
    return res.send(`feedback posted`);
  });

  return router
}