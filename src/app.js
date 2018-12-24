const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const entitiesRouter = require('./entities');
const objectsRouter = require('./objects');

const app = express();

app.use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))
  .use('/entities', entitiesRouter)
  .use('/objects', objectsRouter);

module.exports = app;
