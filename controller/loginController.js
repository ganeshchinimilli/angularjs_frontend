angular.module('myApp').controller('LoginController', function($scope, $location, $window, httpService,$rootScope) {
    
    $scope.login = function() {
        $scope.is_submit = true;
        if($scope.loginForm.$invalid) {
            return false;
        }else{
            $scope.is_submit = false;
        }
        $rootScope.isLoading = true;
        httpService.post('/login',{email: $scope.email, password: $scope.password}).then(function(response) {
            if(response.data.error) {
                $rootScope.isLoading = false;
                showToast(response.data.error,'error');
                return false;
            }else{

            }
            $window.localStorage.setItem('token', response.data.token,86400);
            $rootScope.isLoading = false;
            $rootScope.is_logged_in  = true;
            $location.path('/home');
            showToast('Login Successful','success');
        }).catch(function(error) {
            $rootScope.isLoading = false;
            showToast(error.data.error,'error');
            return false;
        });
    }
});
