const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from GitHub Actions! This app was deployed automatically. Here is version 2.0');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});