myApp.run(["$http", function($http) {
    $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaWxkYXJkby5vcnRpekBzZWd1cml0ZWNoLmNvbSIsInJvbGVzIjpbIlNVUEVSX0FETUlOIl0sImlzcyI6Imh0dHBzOi8vc2RjLXNlY3VyaXR5L3NlY3VyaXR5L3YxL2xvZ2luIiwiZXhwIjoxNjk3MDU0OTAxLCJ1c2VySWQiOiI1YjRiNDgzNi1kZjAxLTQxNTMtOTdiMi0zY2U4NmQyMzIxNjkifQ.TkHsdNRPxBX6zNfQgjAxP3hqVqnTNpHOnYjCTo0mcfM';
}]);