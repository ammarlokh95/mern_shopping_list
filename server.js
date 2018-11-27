const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app = express();

// Bodyparser MW
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('Mongo DB connected'))
  .catch(err => console.log(err));

// use Routes

app.use('/api/items', items);

// serve static assets if in Prod
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
