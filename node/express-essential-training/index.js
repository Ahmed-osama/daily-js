import express from 'express';
import path from 'path';
import data from './data/data.json';

const app = express();
const PORT = 3000;
app.get('/redirect/:url', (req, res) => {
  res.redirect(`http://${req.params.url}.com`);
});

app.get('/item/:id', (req, res) => {
  console.log(req);
  res.json({ type: req.type });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/images/:file', (req, res) => {
  const { file } = req.params;
  res.download(file);
});


app.route('/newItem')
  .get((req, res) => {
    res.send(`a GET req  on route /newItem port ${PORT}`);
  })
  .post((req, res) => {
    res.send(`a POST req  on route /newItem port ${PORT}`);
  })
  .put((req, res) => {
    res.send(`a PUT req  on route /newItem port ${PORT}`);
  })
  .delete((req, res) => {
    res.send(`a DELETE req  on route /newItem port ${PORT}`);
  });


app.listen(PORT, () => {
  console.log(`your server is running at port http://localhost:${PORT}`);
});
