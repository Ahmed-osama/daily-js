const express = require('express');

const app = express();
const PORT = 300;

app.get('/', (req, res) => {
  res.send('hello express here :D');
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
