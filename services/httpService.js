angular.module('myApp').service('httpService', ['$http', '$window', function($http, $window,$rootScope) {
    // Function to send authenticated HTTP GET request
    this.get = function(url) {
        var url_new = API_URL + url;
        var token = $window.localStorage.getItem('token');
        return $http.get(url_new, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    };

    // Add similar functions for POST.
    this.post = function(url, data) {
        var url_new = API_URL + url;
        var token = $window.localStorage.getItem('token');
        return $http.post(url_new, data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }


}]);