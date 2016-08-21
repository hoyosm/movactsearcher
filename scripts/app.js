/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module("movActSearcher", ["ngRoute", 'angularUtils.directives.dirPagination']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/menu.html"
    })
    .when("/about", {
        templateUrl : "views/about.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
});

/* Controler for get data from tmdb api */
app.controller("ctrlSearcher", function($scope, $http) {
    $scope.result = 'searching...';
    $scope.submit = function()
    {
        if ($scope.name) {
            $scope.movieList = [];
            /*var url = TMDB_URL + SERVICE + '?api_key=' + API_KEY + '&query=' + $scope.name.replace(" ", "+") + '&callback=' + CALLBACK;
            $scope.name = "";
            
            $http.jsonp(url).then(function(data, status){
                $scope.result = angular.fromJson(data);
                $scope.movieList = angular.fromJson(data.data.results);
            });*/
            $http.get('api/data.php?text=' + $scope.name.replace(" ", "+")).
            success(function(data)
            {
                $scope.name = "";
                $scope.result = data;
                $scope.movieList = data.results;
                //console.log($scope.movieList);
                $scope.currentPage = 1;
                $scope.pageSize = 1;
            });
        }
    }; 
});