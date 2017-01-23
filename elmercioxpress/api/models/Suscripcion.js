/**
 * Suscripcion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'suscripcion',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_SUSCRIP: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    ID_SERV: {
      type: 'string',
      required: false,
      index: true,
      size: 10
    },
    ID_REV: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    FECHA_SUSCRIP: {
      type: 'string',
      required: false,
      size: 10
    }
  }
};