/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'persona',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID_PER: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    NOMBRE_PER: {
      type: 'string',
      required: false,
      size: 20
    },
    APELLIDO_PER: {
      type: 'string',
      required: false,
      size: 20
    },
    CI_PER: {
      type: 'string',
      required: false,
      size: 10
    },
    FECHANAC_PER: {
      type: 'date',
      required: false
    },
    ESTADOCIV_PER: {
      type: 'string',
      required: false,
      size: 20
    },
    LUGARNAC_PER: {
      type: 'string',
      required: false,
      size: 20
    }
  }
};