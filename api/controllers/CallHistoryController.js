/**
 * CallHistoryController
 *
 * @description :: Server-side logic for managing Callhistories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function (req, res) {
    if (req.session.me)
    {

      CallHistory.find({'userid':req.session.me}, function (err, bot) {
        if (err)
          res.send(500)
        else
          res.send(200,bot)
      })

    }
    else
      res.send(401);


  },

  findOne: function (req, res) {
    if (req.session.me)
    {
      CallHistory.find({'userid':req.session.me,id:req.param('id')}, function (err, bot) {
        if (err)
          res.send(500)
        else
          res.send(200,bot)
      })

    }
    else
      res.send(401);

  },

};

