(function(){
	angular.module('app')
		.factory('HomeFactory',fn);
	function fn(urlConstant){
		var self = {};
        //self.getConsultantIntroduce = function (name) {
        //    $state.go('admin-consultant/user/{{username}}', {"userName": name || self.name});
        //};
		return self;
	}
})();
