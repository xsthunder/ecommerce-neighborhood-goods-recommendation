/**
 *   For
 *   Created by xs at 2018/4/3
 */
"use strict";
(function () {
    angular.module('app')
        .factory('Util',tmp);
    function tmp($cookies) {
        var self = {};
        self.notice = function (msg) {
            msg = msg || "something wrong";
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .hideDelay(3000)
            );
        };
        return self;
    }
})();