const express = require('express');
const { PORT, ENV } = require('./util/dotenv');

// Initialize express App
const app = express();

// JSON Body Parser Middleware
app.use(express.json());

app.get('*', (req, res) => {
  res.status(200).json({
    "message": "Listening to All Routes",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
});