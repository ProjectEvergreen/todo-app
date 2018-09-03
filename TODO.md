Browser Testing
- [x] Chrome 68.0
- [x] FireFox (Quantum) 61.0.2
    - ~~`customElements is not defined`~~ - added `import '@webcomponents/webcomponentsjs'`;
    leads to =>
    - ~~`[Show/hide message details.] TypeError: can't redefine non-configurable property "iterator"`~~ load in via CDN
- [x] Desktop Safari 11.1.2
    -  ~~`[Show/hide message details.] TypeError: can't redefine non-configurable property "iterator"`~~ load via CDN
      ^ caused by `import '@webcomponents/webcomponentsjs'` - load in from CDN
- [x] good default preset-env (last two versions, iE11 w/ browserlistrc)
    - >1%, not op_mini - https://github.com/babel/babel/issues/7789
- [x] Chrome 68.0
- [x] FireFox (Quantum) 61.0.2
- [x] Desktop Safari 11.1.2
- [ ] IE11
    - ~~Hello World Example~~
      - ~~`develop`: fails on eval (devServer w/ `inline: true`)~~ - https://github.com/webpack/webpack-dev-server/issues/1268, https://webpack.js.org/configuration/dev-server/#devserver-inline
    - Hello World Example w/lit-html  + lit-element
      - ~~`Function.prototype.toString: 'this' is not a Function object`~~ - babel polyfill
      - `serve`: fails on `()=>`~~ - 
    - Complete App
- [ ] Edge (rewind back to Chrome / FF / Safari commit to understand just the cost of IE, may need to fix browserslist, `not ie 11`)
- [ ] Mobile Safari
- [ ] Documentation / fast follows
- [ ] Improvement - copy webpack plugin?  polyfill.io?  prefetch?
- [ ] debug - https://github.com/browserslist/browserslist#debug, browserslist CLI

CLA
- `@babel/preset-env` + `browserlist` (recommendation) - https://github.com/babel/babel/issues/7789
- CDN web components polyfill - https://github.com/webcomponents/webcomponentsjs/issues/891#issuecomment-412302377
- webpack 3 configs (recommendation)
- [ ] Lighthouse (for CLA)

## Build Pipline
### Babel 7!!
```json
{
  "presets": ["@babel/preset-env"],
    "plugins": [
    ["babel-plugin-transform-builtin-classes", {
      "globals": ["LitElement"]
    }]
  ]
}
```

- is babel-plugin-transform-builtin-classes needed when using `LitElement`?  Yes!
https://github.com/WebReflection/babel-plugin-transform-builtin-classes/issues/16#issuecomment-418140069

### Browserslist
- preset-env / browserlist: https://github.com/babel/babel/issues/7789
- IE VMs / Browser Pages - https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
```
> 1%
not op_mini all
not ie11
```

### Web Components Polyfill (Firefox)
https://github.com/WebComponents/webcomponentsjs#using-webcomponents-bundlejs
- polyfill via CDN, no bundling
https://github.com/webcomponents/webcomponentsjs/issues/891#issuecomment-412302377
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js"></script>
```

### IE11
Update browserslist
```shell
> 1%
not op_mini all
- not ie11

toString
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.js"></script>"></script>
```

<!-- Add forwards compatibility for ES5 transpiled web components -->
<!-- Error is a known issue: https://github.com/webcomponents/webcomponentsjs/issues/749 -->
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/custom-elements-es5-adapter.js"></script>
```

- ~~`develop`: fails on eval (devServer w/ `inline: true`)~~ - https://github.com/webpack/webpack-dev-server/issues/1268, 
https://webpack.js.org/configuration/dev-server/#devserver-inline



Babel 7 config change
https://github.com/facebook/jest/issues/6053#issuecomment-383632515

- `path.inShadow` - https://github.com/WebReflection/babel-plugin-transform-builtin-classes/issues/16#issuecomment-418140069

    /**
      * https://github.com/webcomponents/custom-elements#es5-vs-es2015
      * This shim allows elements written in, or compiled to, ES5 to work on native
      * implementations of Custom Elements v1. It sets new.target to the value of
      * this.constructor so that the native HTMLElement constructor can access the
      * current under-construction element's definition.
      */
    // (function() {
    //   if (
    //     // No Reflect, no classes, no need for shim because native custom elements
    //     // require ES2015 classes or Reflect.
    //     window.Reflect === undefined ||
    //     window.customElements === undefined ||
    //     // The webcomponentsjs custom elements polyfill doesn't require
    //     // ES2015-compatible construction (`super()` or `Reflect.construct`).
    //     window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
    //   ) {
    //     return;
    //   }
    //   const BuiltInHTMLElement = HTMLElement;
    //   window.HTMLElement = function HTMLElement() {
    //     return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    //   };
    //   HTMLElement.prototype = BuiltInHTMLElement.prototype;
    //   HTMLElement.prototype.constructor = HTMLElement;
    //   Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
    // })();

    // https://www.webcomponents.org/polyfills
    (function() {
      if ('registerElement' in document
          && 'import' in document.createElement('link')
          && 'content' in document.createElement('template')) {
        // platform is good!
      } else {
        // polyfill the platform!
        var e = document.createElement('script');
        e.src = '//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js';
        document.body.appendChild(e);
      }
    })();

    https://medium.com/@xwatkins/making-vanilla-custom-elements-v1-work-in-ie11-64d3f09641b8