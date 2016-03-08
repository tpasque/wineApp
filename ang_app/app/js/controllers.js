app.controller("MainController", function($scope, $http, WineService){
   // no instance variables here....
});

app.controller("WineIndexController", function($scope, WineService){
  WineService.getWines().then(function(payload){
    $scope.wine_collection = payload.data;
    console.log(payload);
  }, function(error){
    console.log("an error occurred");
  });
});
