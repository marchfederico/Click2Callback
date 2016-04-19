var request = require('request')

//TROPOAPIKEY = sails.config.instaconference.TROPO_API_KEY;

module.exports = {

  clickToCallback: function (calledNumber,callbackNumber, apikey, callback) {
    var param = {}
    param.action = 'create'
    param.token = apikey
    param.calledNumber = calledNumber
    param.callbackNumber = callbackNumber

    request.get("https://api.tropo.com/1.0/sessions", {qs: param}, function (error, response, body) {

      if (!error && response.statusCode == 200) {
        var sessionIdMatch = /^<session><success>true<\/success>.*<id>(.*)<\/id>.*/
        m = body.match(sessionIdMatch)

        if (m[1]) {
          sessionId = m[1]
          callback(null, sessionId)
        }
        else {

          callback({error: 'Invalid session Id'}, null)
        }

      }
      else {
        if (error) {
          callback(error, null)
        }
        else {
          callback({error: response.statusCode}, null)
        }

      }

    })

  }
}
