AngularJS + Webpack + Jekyll seed
===========

This repository contains example of the web application that uses:
* AngularJS
* Webpack
* Jekyll

# How to build

Use `npm` scripts in order to provide real-time updates of both Angular app
and Jekyll generated content.

In order to run webpack watcher run:
```
npm run webpack:watch
```

In order to run Jekyll web server run:
```
npm run start
```

## What is used in the background?

Webpack uses Bible in order to transpile ES6 JS cone into ES5-compatible one.

Webpack's watchers are used to provide real-time updates of the resulting transpiled 
code base to Jekyll.

Jekyll is used to generate and serve static content.