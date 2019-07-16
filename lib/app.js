const express = require('express');
const app = express();
const futuramaRoutes = require('./routes/futurama');
const notFound = require('./middleware/notFound');

app.use(express.json());

app.use(futuramaRoutes);
app.use(notFound);


module.exports = app;
