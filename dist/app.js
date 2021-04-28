/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

// const { vue } = require("laravel-mix");
function vueLinks(id) {
  new Vue({
    el: id,
    data: {
      scroll: 0,
      hamActive: false,
      links: [{
        name: 'Home',
        href: 'index.html',
        active: true
      }, {
        name: 'Meet The Band',
        href: '#',
        active: false
      }, {
        name: 'Live Dates',
        href: '#',
        active: false
      }, {
        name: 'Latest News',
        href: '#',
        active: false
      }, {
        name: 'Albums',
        href: '#',
        active: false
      }, {
        name: 'Fans',
        href: '#',
        active: false
      }],
      linkActive: false,
      linkIndex: -1
    },
    created: function created() {
      window.addEventListener('scroll', this.scrolledHead);
    },
    computed: {},
    methods: {
      scrolledHead: function scrolledHead() {
        this.scroll = window.scrollY;
      },
      hamburgerActive: function hamburgerActive() {
        this.hamActive = !this.hamActive;
      }
    },
    destroyed: function destroyed() {
      window.removeEventListener('scroll', this.scrolledHead);
    }
  });
}

function eventsParties() {
  new Vue({
    el: '#eventsVue',
    data: {
      indexEvent: -1,
      nextEvents: [{
        name: 'GEM FESTIVAL',
        location: 'MILANO, ITALY',
        date: '17/08/2020',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.302852444415!2d9.188518115464268!3d45.46370284149783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae939351df%3A0xd445dec2978d0e3f!2sP.za%20del%20Duomo%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1619614201462!5m2!1sit!2sit',
        active: false
      }, {
        name: 'RTL FESTIVAL',
        location: 'ROMA, ITALY',
        date: '20/10/2020',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16799.48475083984!2d12.473102626533793!3d41.8980742770497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x724bf077cd875283!2sBasilica%20di%20San%20Pietro!5e0!3m2!1sit!2sit!4v1619617024653!5m2!1sit!2sit',
        active: false
      }, {
        name: 'DIS PARTY',
        location: 'LAS VEGAS, NEVADA, USA',
        date: '10/09/2021',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9101.17557937825!2d-115.14973825047979!3d36.2455304724691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d7b8fb87bac778c!2sCraig%20Ranch%20Dog%20Park!5e0!3m2!1sit!2sit!4v1619617856491!5m2!1sit!2sit',
        active: false
      }, {
        name: 'KINGS DAY',
        location: 'AMSTERDAM, NETHERLANDS',
        date: '11/11/2021',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.852290379783!2d4.890912565685745!3d52.373098304858246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c73b4b14ef%3A0x7e86dfc7e2ced272!2sDam%2C%20Amsterdam%2C%20Paesi%20Bassi!5e0!3m2!1sit!2sit!4v1619619683260!5m2!1sit!2sit',
        active: false
      }, {
        name: 'CORRIDA GGS',
        location: 'BARCELONA, SPAIN',
        date: '10/07/2021',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16929.135687378814!2d2.1610096169375628!3d41.40282781902784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sSagrada%20Fam%C3%ADlia!5e0!3m2!1sit!2sit!4v1619621211797!5m2!1sit!2sit',
        active: false
      }]
    },
    methods: {
      openEvent: function openEvent(index) {
        if (this.nextEvents[index].active == true) {
          this.nextEvents[index].active = false;
        } else {
          this.nextEvents.forEach(function (element) {
            element.active = false;
          });
          this.nextEvents[index].active = true;
        }

        console.log(this.nextEvents);
      }
    }
  });
}

function init() {
  console.log('JS Connected');
  vueLinks('#vueHead');
  vueLinks('#vueFoot');
  eventsParties();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;