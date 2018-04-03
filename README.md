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

1. git clone <this repo>
2. cd <repo>
3. npm i
4. npm test
5. [open it](http://localhost:8080);

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
    │   ├── app.module.js
    │   ├── app.route.js
    │   ├── configure.js
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
