const { Schema } = require('mongoose');
const db = require('./db');

const entitySchema = new Schema({
  key: String,
  name: String,
  fields: [{
    key: String,
    name: String,
    type: { type: String },
  }],
  delete: Boolean,
});

module.exports = db.model('Entity', entitySchema);
