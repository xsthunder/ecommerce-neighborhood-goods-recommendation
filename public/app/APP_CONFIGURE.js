/**
 *   For
 *   Created by xs at 2018/1/12
 */
"use strict";
(function () {


		var enableMockHttp = true;
    var enableLocalServer = true;
    var enableHttps = false;

    var serverPort = 8080;
    var server='';
		var serverBaseRoute = '';
	  var title = '推荐算法';
	   
    if(enableLocalServer || !server){
        server = 'localhost';
    }
    var tmp = {
				enableMockHttp:enableMockHttp,
        serverOption:{
            enableHttps:enableHttps,
            server:server,
            serverPort:serverPort
        },
        base_url:("http" + (enableHttps?"s":"") +"://"+server + ':' + serverPort + '/' + serverBaseRoute + '/' ),
        title:title
    };
    angular.module('app')
        .constant('APP_CONFIGURE',tmp);
})();
