const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const app = express();
const PORT = 300;


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes({
  feedbackService,
  speakersService
}))
app.set('views', path.join(__dirname, './views'));


app.listen(PORT, () => {
  console.log(`horray server started on port http://localhost:${PORT}`);
});

