(function () {
        angular.module('app')
            .controller('leftCtrl', fn);

        function fn($scope, $timeout, $mdSidenav, $state) {
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                    });
            };
            $scope.goto = function (name) {
                $state.go(name);
                $scope.close();
            };
            $scope.routers = [
                {
                    name: 'show.home',
                    alias: 'Home'
                },{
									  name: 'show.goods',
									  alias:'All goods'
								}
            ];
        }
    }
)();
