/**
 * CallController
 *
 * @description :: Server-side logic for managing calls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
TROPOAPIKEY = sails.config.globals.TROPO_API_KEY;
module.exports = {
  placeCall: function (req, res) {
    if (req.session.me)
    {
      params = req.body
      if(params.calledNumber && params.callbackNumber)
      Tropo.clickToCallback(params.calledNumber,params.callbackNumber,TROPOAPIKEY,function(err,session){
        if(!err)
        {
          res.send(200,session)
        }
        else
        {
          res.send(500,err)
        }

      })
      else
      {
        res.send(429,"Invalid Parameters")
      }
    }
    else
    {
      res.send(401)
    }
  }
};

