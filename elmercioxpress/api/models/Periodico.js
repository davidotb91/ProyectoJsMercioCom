/**
 * Periodico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'periodico',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_SERV: {
      type: 'string',
      required: true,
      primaryKey: true,
      size: 10
    },
    DESC_PER: {
      type: 'string',
      required: false,
      size: 10
    },
    COST_PER: {
      type: 'string',
      required: false,
      size: 10
    },
    EDICION_PER: {
      type: 'string',
      required: false,
      size: 10
    }
  }
};