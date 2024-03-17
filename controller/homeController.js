angular.module('myApp').controller('HomeController', function($scope,$rootScope,httpService,$window,$location) {
    $scope.title = 'Home Page';
    $scope.user = '';
    $scope.getUser = function(){
        $rootScope.isLoading = true;
        $rootScope.is_logged_in  = true;
        httpService.get('/profile').then(function(response) {
            $rootScope.isLoading = false;
            $scope.user = response.data.data;
            console.log($scope.user);
        }).catch(function(error) {
            $rootScope.isLoading = false;
            showToast(error.data.message,'error');
            $location.path('/login');
        })
    }
    $scope.getUser();

    $scope.logout = function(){
        httpService.get('/logout').then(function(response) {
            $rootScope.isLoading = false;
            $rootScope.is_logged_in  = false;
            $window.localStorage.removeItem('token');
            $location.path('/login');
            showToast('Logout Successful','success');
        })
    }
    
})