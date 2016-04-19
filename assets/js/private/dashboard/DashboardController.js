angular.module('DashboardModule',['toastr','ngIntlTelInput']).controller('DashboardController', [ '$scope','$window','$http','toastr', function($scope,$window,$http,toastr){

  $scope.callbackNumber = $window.SAILS_LOCALS.me.phoneNumber
  $scope.calledNumber=""
  $scope.callHistory=[]
  var myId = $window.SAILS_LOCALS.me.id


  function refreshCallHistory() {
    $http({
      method: 'get',
      url: '/callhistory',
    })
      .then(function (calls) {
        console.log(calls)
        $scope.callHistory = calls.data
      })
  }

  $scope.placeCall= function()
  {

    $http({
      method: 'post',
      url: '/click2call',
      data: {calledNumber:$scope.calledNumber, callbackNumber:$scope.callbackNumber }
    }).then(function successCallback(response) {
      toastr.success('Call Placed Successfully!')
      var now = Date(0)
      $http({
          method: 'post',
          url: '/CallHistory',
          data: {userid: myId, datetime: now.toString(), calledNumber: $scope.calledNumber, sessionId:response}
        }
      ).then( function(response){

        refreshCallHistory()
      })
    }, function errorCallback(response) {

      toastr.error("There was an error placing the call", 'Error', {
        closeButton: true
      });
    });
  }

  $scope.redial= function(number)
  {

    $http({
      method: 'post',
      url: '/click2call',
      data: {calledNumber:number, callbackNumber:$scope.callbackNumber }
    }).then(function successCallback(response) {
      toastr.success('Call Placed Successfully!')
      var now = Date(0)
      $http({
          method: 'post',
          url: '/CallHistory',
          data: {userid: myId, datetime: now.toString(), calledNumber: number, sessionId:response}
        }
      ).then( function(response){

        refreshCallHistory()
      })
    }, function errorCallback(response) {

      toastr.error("There was an error placing the call", 'Error', {
        closeButton: true
      });
    });
  }

  refreshCallHistory()
}]);
