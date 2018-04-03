(function () {
    angular.module('app')
        .component('xxHome', {
            templateUrl: '/app/user/home/home.html',
            controller: ctrl
        });

    function ctrl($scope,HomeFactory,userService,$state) {
        $scope.law = function () {
            $state.go('show.law')
        }
    }
})();
