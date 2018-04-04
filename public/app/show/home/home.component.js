(function () {
    angular.module('app')
        .component('xxHome', {
            templateUrl: './app/show/home/home.html',
            controller: ctrl
        });

    function ctrl($scope,HomeFactory,UserService,$state) {

    }
})();
