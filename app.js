var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

  myApp.controller('playerCtrl', playerCtrl);

  function playerCtrl($http){
    var vm = this;
    $http.get('starCraftData.json').then(function(data){
        vm.columns = data.data.cols
        vm.players = data.data.data
        vm.totPlayer = data.data.data.length
        vm.totZerg = 0
        vm.totTerran = 0
        vm.totProtoss = 0
        vm.totGames = 0

        for(var i=0; i<data.data.data.length; i++) {
         if(data.data.data[i][3] === "Zerg") {
                vm.totZerg += 1;
            }
        }

        for(player of data.data.data) {
         if(player[3] === "Protoss") {
                vm.totProtoss += 1;
            }
        }

        for(var i=0; i<data.data.data.length; i++) {
         if(data.data.data[i][3] === "Terran") {
                vm.totTerran += 1;
            }
        }

        for(var i=0; i<data.data.data.length; i++) {
            vm.totGames = vm.totGames + data.data.data[i][4] + data.data.data[i][5];
        }

    })

    vm.sort = function(arrId){
        vm.sortKey = arrId;
        vm.reverse = !vm.reverse;
    }


  };
