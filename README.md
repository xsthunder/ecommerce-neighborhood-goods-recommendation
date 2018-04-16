# angularjs-material-build-template

it has
* toolbar
* sidenav
* http encapsulation
* basic router by ui-router
* material design by material-angularjs
* cookies by angular-cookies
* web host by express on 8080
* nested express support
e.g
```javascript
const app = require('express')();
app.use('/yourpath', require('./angularjs-material-build-template'));
const port = 8888;
app.listen(port);
console.log(`app listen in ${port}`);
```

## technical infomation

1. post method use form-data 
2. use npm
3. use relative path e.g. `./app/show/home/home.html`
4. use soft link to node_modules to save space
4. component based
5. router based key-value storage stored in $stateParams
e.g.
```
// in ROUTER_CONSTANT
{
            name: 'user.person-info',
            url: '/user/person-info/{userName}',
            component: 'xxPersonInfo'
}
// getting value
Util.getStateParams(userName);
```


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
    │   ├── APP_CONFIGURE.js // app configure, base_url used by urlConstant
    │   ├── service
    │   │   ├── ROUTER_CONSTANT.js //router configure
    │   │   ├── UrlConstant.js // http method configure
    │   │   ├── Util.js // utility
    │   │   └── UserService.js //user infomation keeped by this factory or and wrap post/get work as top factory
    │   ├── show //sidenav
    │   │    └── home
    │   │        ├── home.component.js
    │   │        ├── home.factory.js
    │   │        └── home.html
    │   │   ├── leftCtrl.js
    │   │   ├── show.component.js
    │   │   └── show.html
    │   └── toolbar 
    │       ├── toolbar.component.js
    │       └── toolbar.html
    └── index.html
```

## reference

[https://angularjs.org/](https://angularjs.org/)

[https://material.angularjs.org/](https://material.angularjs.org/)

[https://ui-router.github.io/tutorials/](https://ui-router.github.io/tutorials/)
