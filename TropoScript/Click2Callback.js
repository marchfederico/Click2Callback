call(callbackNumber);
say("please wait while I connect you to your party");
transfer(calledNumber, {
  playvalue: "http://hosting.tropo.com/5039057/www/vintage2.mp3",
  playrepeat: 10,
  terminator: "*",
  onTimeout: function(event) {
    say("Sorry, but nobody answered");
  }
});
