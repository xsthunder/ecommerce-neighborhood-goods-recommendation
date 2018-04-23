(function(){
    angular.module('app')
	      .factory('MockHttp', fn)
	  function fn(){
			  var self = {};
			  self.records = [
					{
						id:1,
						age:27,
						income:19000,
						credit:10,
						buyFrequency:1,
						buy: 1
					},{
						id:2,
						age:51,
						income:64000,
						credit:9,
						buyFrequency:2,
						buy:2
					},{
						id:3,
						age:52,
						income:105000,
						credit:5,
						buyFrequency:5,
						buy:3
					},{
						id:4,
						age:33,
						income:55000,
						credit:10,
						buyFrequency:1,
						buy:4
					}
				];
			  self.goods = [
					{
						name:"Null",
						content:"Null content",
						imgPath:""
					},
					{
						name:"Dell",
						content:"人傻钱多戴",
						imgPath:"./img/dell.jpg"
					},
					{
						name:"Hasee",
						content:"神船大法保平安",
						imgPath:"./img/hasee.jpg"
					},{
						name:"Asus",
						content:"奸若磐石硕",
						imgPath:"./img/asus.jpg"
					},{
						name:"Msi",
						content:"散热缩水星",
						imgPath:"./img/msi.jpg"
					}
				];
			  return self;
		}
})();
