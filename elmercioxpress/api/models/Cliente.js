/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'cliente',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_CLI: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    ID_SUSCRIP: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    ID_ESTADO: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    ID_PER: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    DIR_CLI: {
      type: 'string',
      required: false,
      size: 40
    },
    TELEFONO_CLI: {
      type: 'string',
      required: false,
      size: 10
    }
  }
};