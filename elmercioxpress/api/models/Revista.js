/**
 * Revista.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'revista',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_REV: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    EDICION_REV: {
      type: 'string',
      required: false,
      size: 20
    },
    NOMBRE_REV: {
      type: 'string',
      required: false,
      size: 20
    },
    COSTO_REV: {
      type: 'string',
      required: false,
      size: 20
    }
  }
};