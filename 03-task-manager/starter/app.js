const connectDb = require('./db/connect');
const express = require('express'),
  app = express(),
  tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.static('./public'));
app.use(express.json());
// Routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || '3000';

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening to ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
