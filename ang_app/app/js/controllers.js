app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});

app.controller("WineIndexController", function($scope, wineService){
  WineService.getWine().then(function(payload){
    $scope.cat_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
});
