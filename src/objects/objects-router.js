const { Router } = require('express');

const objectsRouter = Router();

objectsRouter.route('/')
  .get((req, res) => res.send('objects router get /'))
  .post((req, res) => res.send('objects router post /'));

objectsRouter.route('/:entityId')
  .get((req, res) => res.send(`objects router get /${req.params.entityId}`))
  .patch((req, res) => res.send(`objects router patch /${req.params.entityId}`))
  .delete((req, res) => res.send(`objects router delete /${req.params.entityId}`));

module.exports = objectsRouter;
