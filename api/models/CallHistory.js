/**
* CallHistory.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userid: {
      type: 'string',
      required: true
    },
    datetime: {
      type: 'date',
      required: true,
      defaultsTo: new Date(0)
    },
    calledNumber: {
      type: 'string',
      required: true
    },
  }
};

