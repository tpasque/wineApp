app.service("WineService", function ($http) {
  var WineService = {};

//http get for all wines
    WineService.getWines = function () {
      return $http.get("http://localhost:3000/wines", {method: "jsonp"})
    }

  return WineService;
})
