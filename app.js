var App=angular.module('myApp', ['ngRoute']);
// check if the user is logged in or not
var showToast = function(message,type) {
    var toast = Toastify({
        text: message , // Message with close button
        duration: 2000, // 200 seconds
        gravity: 'top', // Display at the top of the screen
        position: 'right', // Position on the right side
        backgroundColor: type === 'success' ? '#28a745' : '#dc3545', // Background color based on type
        stopOnFocus: true, // Stop hiding when window/tab is focused
        onClick: function() { // Handle click event
            this.hideToast();
        }
    }).showToast();
}
App.controller('AppController', function($scope,$location,authService,$rootScope) {  
//    get the 
    $rootScope.isLoading = false;
    $scope.title = 'Angular Js App';
    $rootScope.is_logged_in = false;
    if (!authService.isAuthenticated()) {
        event.preventDefault();
        $location.path('/login');
    }else{
        $rootScope.is_logged_in = true;
    }
    $rootScope.$on('$routeChangeStart', function() {
         $rootScope.isLoading = true; // Show loader when route changes
    });

    $rootScope.$on('$routeChangeSuccess', function() {
         $rootScope.isLoading = false; // Hide loader when route changes
    });
});