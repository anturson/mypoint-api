const { Router } = require('express');

const dataRouter = Router();

dataRouter.get('/', (req, res) => res.send('Data get'));

module.exports = dataRouter;
