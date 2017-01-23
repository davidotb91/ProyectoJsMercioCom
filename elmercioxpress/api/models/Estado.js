/**
 * Estado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'estado',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_ESTADO: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    DESCRIPCION_ESTADO: {
      type: 'string',
      required: false,
      size: 20
    }
  }
};