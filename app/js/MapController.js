myApp.controller('mapController', ['$scope', 'mapService', '$http', function($scope, MapService, $http){
    
    $scope.geocercas = [];
    $scope.geocercasDibujadas = [];
    
    var map = L.map('map').setView([21.900372, -102.296947], 5);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hpbGNobyIsImEiOiJjamg2bXVlNDExYTg3MnFvMzhvejY1ZHB1In0.Y43ccl6i31YmkwQ0c906Xg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    
    $scope.obtenerGeocercas = async () => {
        $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaWxkYXJkby5vcnRpekBzZWd1cml0ZWNoLmNvbSIsInJvbGVzIjpbIlNVUEVSX0FETUlOIl0sImlzcyI6Imh0dHBzOi8vc2RjLXNlY3VyaXR5L3NlY3VyaXR5L3YxL2xvZ2luIiwiZXhwIjoxNjY1ODcyMDY5LCJ1c2VySWQiOiI3ZDIwMTNhNC03MGM4LTQ0ZGQtYTQ4ZS00NmVlZDJkMGZmOTcifQ.iuntx2auTQzGdELagQLxPRsYoxMNZ0qGmd62Eyp-vfc';
        MapService.getGeocercas().then((response) => {
            $scope.geocercas = response.data.result;
        });
    }

    $scope.print = (item) => {
        let geocerca = [];
        if(item.polygon.points.length > 0) {
            item.polygon.points.map((coords) => {
                geocerca.push(new Array(parseFloat(coords[1]), parseFloat(coords[0])));
            });
            L.polygon(geocerca).addTo(map); 
        } else {
            let points = item.polygon.center.map((coords) => {
                return new Array(parseFloat(coords[1]), parseFloat(coords[0]));
            });
            
            L.circle(points, {
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
                radius: parseFloat(item.polygon.radio)
            }).addTo(map);
        }
        
    }

    $scope.limpiarDibujos = () => {
        for(i in map._layers){
            if(map._layers[i]._path != undefined) {
                try {
                    map.removeLayer(map._layers[i]);
                } catch(e) {
                    console.log("problem with " + e + map._layers[i]);
                }
            }
        }
        
    };

    
    $scope.obtenerGeocercas();
}]);

