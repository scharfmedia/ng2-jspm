## Run Angular 2 app with jspm
0.  `npm install -g jspm live-server`
1.  `jspm init`
2.  `jspm install npm:reflect-metadata npm:zone.js npm:angular2`
3.  Add to `config.js`
    ```
    "traceurOptions": {
      "annotations": true,
      "memberVariables": true,
      "types": true
    }
    ```
4.  Copy `index.html` and `src` folder.
5.  Run `live-server` and observe the results.

*Or just clone this repo and `npm install`. Build with `npm run build`. Develop with `npm start`. Run browser with `npm run server`.*


### Bundle project
`jspm bundle-sfx --minify reflect-metadata + zone.js + main build/bundle.js`



### Hack
`fetch()` is not triggering view update after data load and change.
`jspm_packages/es6-module-loader.js` replacement with [es6-module-loader-sans-promises.js](https://github.com/ModuleLoader/es6-module-loader/blob/v0.16.6/dist/es6-module-loader-sans-promises.js)
solves this problem.
Alternatively wrap your functions with `zone.bind(...)`.

### Other examples
- [ng2-play](https://github.com/pkozlowski-opensource/ng2-play)
- [angular2-webpack-starter](https://github.com/angular-class/angular2-webpack-starter)
- [ngconf2015demo](https://github.com/Microsoft/ngconf2015demo)


MIT License
