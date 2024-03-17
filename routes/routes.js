angular.module('myApp').config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
        })
        .otherwise({ redirectTo: '/login' });
})
// .run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
//     $rootScope.$on('$routeChangeStart', function(event, next, current) {
//         if (next && next.$$route && next.$$route.protected) {
//             // If route is protected, check authentication
//             if (!authService.isAuthenticated()) {
//                 // Redirect to login page if not authenticated
//                 event.preventDefault();
//                 $location.path('/login');
//             }else{
//                 $rootScope.is_logged_in = true;
//             }
//         } else if (next && next.$$route && !next.$$route.protected && authService.isAuthenticated()) {
//             // If route is not protected and user is authenticated, prevent navigation to login/register
//             event.preventDefault();
//             $location.path('/home');
//         }
//     });
// }]);