angular.module('myApp').controller('RegisterController', function($scope,$rootScope,$location,httpService,$window) {
    $scope.is_submit = false;
    $scope.register = function(){
        $scope.is_submit = true;
        if($scope.registerForm.$invalid){
            return false;
        }else{
            $rootScope.isLoading = true;
            $scope.is_submit = false;
            httpService.post('/register',{name: $scope.name, email: $scope.email, password: $scope.password}).
            then(function(response) {
                $window.localStorage.setItem('token', response.data.token,86400);
                $rootScope.is_logged_in  = true;
                $rootScope.isLoading = false;
                $location.path('/home');
            }).catch(function(err){
                if(err.data.error){
                    var error = '';
                    angular.forEach(err.data.error, function(value, key) {
                        error = error + value[0] + '.';
                    });
                    $rootScope.isLoading = false;
                    showToast(error,'error');
                    return false;
                }
            });
        }
    }
});