import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.json(data);
});

app.post('/newItem', (req, res) => {
  res.send(`a POST req  on route /newItem port ${PORT}`);
});

app.put('/newItem', (req, res) => {
  res.send(`a PUT req  on route /newItem port ${PORT}`);
});

app.delete('/newItem', (req, res) => {
  res.send(`a DELETE req  on route /newItem port ${PORT}`);
});

app.put('/newItem', (req, res) => {
  res.send(`a PUT req  on route /newItem port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`your server is running at port http://localhost:${PORT}`);
});
