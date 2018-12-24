const { Router } = require('express');

const modelRouter = Router();

modelRouter.get('/', (req, res) => res.send('Model get'));

module.exports = modelRouter;
