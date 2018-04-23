(function(){
	angular.module('app')
			.component('xxGoods', {
				  templateUrl: './app/show/goods/goods.html',
				  controller:ctrl
			});
    function ctrl($scope,Util,HomeFactory,UserService) {
			$scope.goods = HomeFactory.getGoods();
		}
}
)();
