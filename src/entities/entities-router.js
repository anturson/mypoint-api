const { Router } = require('express');
const Entity = require('./entity');

const entitiesRouter = Router();

entitiesRouter.route('/')
  .get(async (req, res) => {
    try {
      const entities = await Entity.find();
      res.json(entities);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const entity = await Entity.create(req.body);
      res.status(201).json(entity);
    } catch (err) {
      res.status(500).send(err);
    }
  });

entitiesRouter.route('/:entityId')
  .get(async (req, res) => {
    try {
      const entity = await Entity.findById(req.params.entityId);
      res.json(entity);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .patch(async (req, res) => {
    try {
      const entity = await Entity.findByIdAndUpdate(req.params.entityId, req.body, { new: true });
      res.json(entity);
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await Entity.findByIdAndDelete(req.params.entityId);
      res.status(204).end();
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = entitiesRouter;
