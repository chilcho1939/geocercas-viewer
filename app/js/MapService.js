myApp.factory('mapService', ['$http', function($http){
    return {
        getGeocercas: () => {
            return $http.get('http://localhost:8093/emergency/v1/geoFence/findAll').then( response => {
                return response;
            });
        }
    };
}]);
