function Controller($scope, $http) {
    $http.get('https://mindicador.cl/api').success(function(data) {
        $scope.dailyIndicators = data;
    }).error(function() {
        console.log('Error al consumir la API!');
    });
}