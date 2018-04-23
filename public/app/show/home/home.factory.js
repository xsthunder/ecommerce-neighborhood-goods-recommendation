(function(){
	angular.module('app')
		.factory('HomeFactory',fn);
	function fn(APP_CONFIGURE,Util,MockHttp,UrlConstant){
		var self = {};
		var mock = APP_CONFIGURE.enableMockHttp;
		self.getRecords = function(){
			if( mock ){
				return Util.makeRes(MockHttp.records)['res'];
			}
			alert();
		}
		self.postRecord = function(body){
			if( mock ){
				MockHttp.records.push( body );
				return;
			}
			alert();
		}
		self.getGoods = function(){
			if( mock ){
				return Util.makeRes(MockHttp.goods)['res'];
			}
			alert();
		}
		return self;
	}
})();
