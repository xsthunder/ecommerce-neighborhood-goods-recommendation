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
        serverOption:{
            enableHttps:enableHttps,
            server:server,
            serverPort:serverPort
        },
        base_url:("http" + (enableHttps?"s":"") +"://"+server + ':' + serverPort),
        title:'angular-material-build-template'
    };
    angular.module('app')
        .constant('APP_CONFIGURE',tmp);
})();