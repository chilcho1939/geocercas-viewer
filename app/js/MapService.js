myApp.factory('mapService', ['$http', function($http){
    return {
        getGeocercas: (page, size) => {
            return $http.get('http://localhost:8584/gasolinago/api/geocerca/find-all?page=' + page + "&size=" + size).then( response => {
                return response;
            });
        }
    };
}]);