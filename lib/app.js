const express = require('express');
const app = express();
const futuramaRoutes = require('./routes/futurama');
const notFound = require('./middleware/notFound');
const error = require('./middleware/error');
app.use(express.json());

app.use(futuramaRoutes);
app.use(notFound);
app.use(error);


module.exports = app;
