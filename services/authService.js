angular.module('myApp').service('authService', ['$http', '$window', function($http, $window) {
    this.isAuthenticated = function() {
        return !!$window.localStorage.getItem('token');
    }
}])