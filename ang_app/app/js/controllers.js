app.controller("MainController", function($scope, $http, WineService){
   // no instance variables here....
});

app.controller("WineIndexController", function($scope, wineService){
  WineService.getWine().then(function(payload){
    $scope.wine_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
});
