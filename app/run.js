myApp.run(["$http", function($http) {
    $http.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaWxkYXJkby5vcnRpekBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImV4cCI6MTY3NTEyNTQ2MiwiaWF0IjoxNjQzNTg5NDYyfQ.HDjXZiwZoC46CbDwDTm-EKEoQSrE9NhGdNlBzhWlfeU';
}]);