_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(n,e,t){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=t("q1tI"))&&r.__esModule?r:{default:r},a=t("lwAK");function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.ampFirst,t=void 0!==e&&e,r=n.hybrid,o=void 0!==r&&r,a=n.hasQuery,i=void 0!==a&&a;return t||o&&i}},0:function(n,e,t){t("GcxT"),n.exports=t("nOHt")},"1TCz":function(n,e,t){"use strict";t.r(e);var r=t("rePB"),o=t("nKUr"),a=(t("RDVA"),t("/2u0")),i=t("pr4h"),s=t("qd8s"),c=t.n(s);var u=t("qKvR"),l=t("q1tI"),p=()=>l.createElement(u.a,{styles:'\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;      \n        -moz-osx-font-smoothing: grayscale; \n        touch-action: manipulation; \n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    '}),d=t("0x2G"),f=t("5+Am"),h=t("+p43"),b=n=>{var{children:e,colorModeManager:t,portalZIndex:r,resetCSS:o=!0,theme:i=a.a}=n;return l.createElement(f.c,{theme:i},l.createElement(h.b,{colorModeManager:t,options:i.config},o&&l.createElement(p,null),l.createElement(f.a,null),r?l.createElement(d.a,{zIndex:r},e):e))},m=t("8Kt/"),g=t.n(m);function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x,w=(x={fonts:{body:"Montserrat, sans-serif",heading:"Spartan, serif"},colors:{grey:{50:"HSL(22, 30%, 98%)",100:"HSL(24, 26%, 96%)",200:"HSL(30, 22%, 91%)",300:"HSL(28, 16%, 84%)",400:"HSL(33, 14%, 69%)",500:"HSL(34, 10%, 52%)",600:"HSL(36, 11%, 35%)",700:"HSL(35, 15%, 23%)",800:"HSL(39, 19%, 14%)",900:"HSL(46, 21%, 12%)"},red:{50:"HSL(350, 100%, 94%)",100:"HSL(350, 96%, 90%)",200:"HSL(350, 88%, 81%)",300:"HSL(351, 80%, 72%)",400:"HSL(352, 80%, 64%)",500:"HSL(352, 72%, 54%)",600:"HSL(352, 61%, 45%)",700:"HSL(352, 61%, 36%)",800:"HSL(352, 61%, 23%)",900:"HSL(351, 80%, 12%)"},purple:{50:"HSL(270, 75%, 97%)",100:"HSL(263.5, 42.7%, 93.5%)",200:"HSL(265, 64%, 87%)",300:"HSL(264, 75%, 80%)",400:"HSL(263, 56%, 57%)",500:"HSL(263.5, 65.7%, 39.5%)",600:"HSL(263.5, 65.7%, 27.5%)",700:"HSL(269, 83%, 25%)",800:"HSL(267, 88%, 16%)",900:"HSL(264, 100%, 12%)"}}},c()({},a.a,x,(function n(e,t){if(Object(i.d)(e))return function(){var r=e(...arguments),o=Object(i.d)(t)?t(...arguments):t;return c()({},r,o,n)}})));e.default=function(n){var e=n.Component,t=n.pageProps;return Object(o.jsxs)(b,{theme:w,children:[Object(o.jsxs)(g.a,{children:[Object(o.jsx)("title",{children:"R\xe9my Hidra // Freelance Web Developer"}),Object(o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Spartan:wght@700&display=swap",rel:"stylesheet"}),Object(o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(o.jsx)("meta",{name:"google-site-verification",content:"zhO_vjy3H84BJz-sXTCFRv7e2gf0y1GX5ojB0KA0PYw"}),Object(o.jsx)("meta",{property:"og:title",content:"R\xe9my Hidra // Freelance Web Developer"}),Object(o.jsx)("meta",{property:"og:description",content:"I am R\xe9my, a full-stack Web developer. Let's build an app together !"}),Object(o.jsx)("meta",{property:"og:image",content:"https://rhidra.github.io/favicon.png"}),Object(o.jsx)("meta",{property:"og:url",content:"https://rhidra.github.io"}),Object(o.jsx)("meta",{name:"twitter:card",content:"summary"})]}),Object(o.jsx)(e,v({},t))]})}},"8Kt/":function(n,e,t){"use strict";t("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,o=function(n){if(n&&n.__esModule)return n;if(null===n||"object"!==typeof n&&"function"!==typeof n)return{default:n};var e=u();if(e&&e.has(n))return e.get(n);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var a=r?Object.getOwnPropertyDescriptor(n,o):null;a&&(a.get||a.set)?Object.defineProperty(t,o,a):t[o]=n[o]}t.default=n,e&&e.set(n,t);return t}(t("q1tI")),a=(r=t("Xuae"))&&r.__esModule?r:{default:r},i=t("lwAK"),s=t("FYa8"),c=t("/0+H");function u(){if("function"!==typeof WeakMap)return null;var n=new WeakMap;return u=function(){return n},n}function l(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return n||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(n,e){return"string"===typeof e||"number"===typeof e?n:e.type===o.default.Fragment?n.concat(o.default.Children.toArray(e.props.children).reduce((function(n,e){return"string"===typeof e||"number"===typeof e?n:n.concat(e)}),[])):n.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function f(n,e){return n.reduce((function(n,e){var t=o.default.Children.toArray(e.props.children);return n.concat(t)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var n=new Set,e=new Set,t=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);n.has(i)?a=!1:n.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var s=0,c=d.length;s<c;s++){var u=d[s];if(o.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?a=!1:t.add(u);else{var l=o.props[u],p=r[u]||new Set;p.has(l)?a=!1:(p.add(l),r[u]=p)}}}return a}}()).reverse().map((function(n,e){var t=n.key||e;return o.default.cloneElement(n,{key:t})}))}function h(n){var e=n.children,t=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(t)},e)}h.rewind=function(){};var b=h;e.default=b},Bnag:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(n,e){n.exports=function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},GcxT:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},Ijbi:function(n,e,t){var r=t("WkPL");n.exports=function(n){if(Array.isArray(n))return r(n)}},RDVA:function(n,e,t){},RIqP:function(n,e,t){var r=t("Ijbi"),o=t("EbDI"),a=t("ZhPi"),i=t("Bnag");n.exports=function(n){return r(n)||o(n)||a(n)||i()}},Xuae:function(n,e,t){"use strict";var r=t("RIqP"),o=t("lwsE"),a=t("W8MJ"),i=(t("PJYZ"),t("7W2i")),s=t("a1gu"),c=t("Nsbk");function u(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=c(n);if(e){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)}}e.__esModule=!0,e.default=void 0;var l=t("q1tI"),p=function(n){i(t,n);var e=u(t);function t(n){var a;return o(this,t),(a=e.call(this,n))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(l.Component);e.default=p},lwAK:function(n,e,t){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o}},[[0,1,2,0,3]]]);