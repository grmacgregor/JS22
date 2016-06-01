var myApp = angular.module('myApp', []);

  myApp.controller('playerCtrl', playerCtrl);

  function playerCtrl($http){
    var vm = this;
    $http.get('starCraftData.json').then(function(data){
        vm.columns = data.data.cols
        vm.players = data.data.data
    })
  };
