(function(){
	angular.module('app')
		.component('xxRecord',{
            templateUrl: './app/show/record/record.html',
            controller: ctrl
		});
	function ctrl($scope,HomeFactory){
		$scope.records = HomeFactory.getRecords();
	}
}
)();
