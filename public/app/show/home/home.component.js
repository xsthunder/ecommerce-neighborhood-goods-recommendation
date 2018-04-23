(function () {
    angular.module('app')
        .component('xxHome', {
            templateUrl: './app/show/home/home.html',
            controller: ctrl
        });

    function ctrl($scope,Util,HomeFactory,UserService) {
			$scope.user = {
				  age:30,
				  income:28000,
				  buyFrequency:2,
				  credit:8
			}
			$scope.records = HomeFactory.getRecords();
			$scope.postRecord = HomeFactory.postRecord;
			$scope.goods = HomeFactory.getGoods();
			$scope.recommendations = [];
			$scope.getRecommendations = function(user){
				 var delta = {
					 age:0,
					 income:0,
					 credit:0,
					 buyFrequency:0
				 }
				 $scope.records.forEach( function(o1){
					 $scope.records.forEach( function(o2){
						 for( key in delta ){
							 delta[key] = Math.max( delta[key], Math.abs( o1[key]- o2[key]) );
						 }
					 });
				 });
				console.log(delta);
			   $scope.recommendations = $scope.records.map( function( o ){
					 var sum = 0;
					 var key,d;
					 for( key in $scope.user ){
						 d = Math.pow(Math.abs(user[key]- o[key])/delta[key], 2)
						 sum += d;
					 }
					 return {
						 distance:Math.sqrt(sum),
						 buy:o.buy
					 }
				 }).sort(
					 function(a,b){
						 return a.distance < a.distance;
					 }
				 ).slice(0,3);
				 var i;
				 for(i = 0;i < $scope.recommendations.length;i++){
					 if( $scope.recommendations[i].distance > 0.75 )break;
				 }
				 $scope.recommendations = $scope.recommendations.slice(0,i);
			}
			$scope.getRecommendations($scope.user);
    }
})();
