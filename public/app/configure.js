/**
 *   For
 *   Created by xs at 2018/1/12
 */
"use strict";
(function () {
    var enableLocalServer = true;
    var enableHttps = false;

    var serverPort =20184;
    var server='l.lovecust.com';
    if(enableLocalServer){
        server = 'localhost';
    }
    var tmp = {
        enableHttps:enableHttps,
        server:server,
        serverPort:serverPort,
        base_url:"http://"+enableHttps?"s":""+":"+serverPort
    };
    angular.module('app')
        .constant('appConfigure',tmp);
})();