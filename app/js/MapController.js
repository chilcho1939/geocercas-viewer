myApp.controller('mapController', ['$scope', 'mapService', function($scope, MapService){
    
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
        MapService.getGeocercas(1, 5).then((response) => {
            $scope.geocercas = response.data.resultado;
        });
    }

    $scope.print = (item) => {
        let geocerca = [];
        item.poligono.split('/').map((coords) => {
            let temp = coords.split(",");
            geocerca.push(new Array(parseFloat(temp[0]), parseFloat(temp[1])));
        });
        geocerca.splice(-1);
        L.polygon(geocerca).addTo(map);
        
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

