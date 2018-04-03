# angularjs-material-build-template

it has
* toolbar
* sidenav
* http encapsulation
* basic router by ui-router
* material design by material-angularjs
* cookies by angular-cookies
* web host by express on 8080

## technical infomation

1. post method use form-data 
2. use npm

## installation

```
git clone <this repo>
cd <repo>
npm i
npm test
```
[open it on local](http://localhost:8080)

## view struct

```
show (view provide sidenav and toolbar)
	show.home (subview)
	[show.others]
others ( view doesn't need sidenav and toolbar )
```

## file struct
```
.
├── index.js // node/express to host this website
├── node_modules // lib
├── package.json
├── package-lock.json
└── public
    ├── app
    │   ├── app.module.js // init this app
    │   ├── app.route.js // init routers from ROUTER_CONSTANT
    │   ├── configure.js // app configure, base url used by urlConstant
    │   ├── service
    │   │   ├── ROUTER_CONSTANT.js //router configure
    │   │   ├── urlConstant.js // http method configure
    │   │   └── userService.js //user infomation keeped by this factory 
    │   ├── show //sidenav
    │   │   ├── leftCtrl.js
    │   │   ├── show.component.js
    │   │   └── show.html
    │   ├── toolbar 
    │   │   ├── toolbar.component.js
    │   │   └── toolbar.html
    │   └── user
    │       └── home
    │           ├── home.component.js
    │           ├── home.factory.js
    │           └── home.html
    └── index.html
```

## reference
[https://angularjs.org/](https://angularjs.org/)
[https://material.angularjs.org/](https://material.angularjs.org/)
[https://ui-router.github.io/tutorials/](https://ui-router.github.io/tutorials/)
