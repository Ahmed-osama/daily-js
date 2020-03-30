const express = require('express');
const path = require('path');

const app = express();
const PORT = 300;

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    pageTitle: 'Ahmed Osama'
  });
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
  console.log(`horray server started on port http://localhost:${PORT}`);
});
