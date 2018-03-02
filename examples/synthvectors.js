/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"synthvectors": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([14,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/synthvectors.js":
/*!**********************************!*\
  !*** ./examples/synthvectors.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/**
 * @module examples.synthvectors
 */
const exports = {};














let total = 0;
let created = 0;
let added = 0;
const vectorLayers = [];

const tile = new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__["default"]()
});

const map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  layers: [tile],
  target: 'map2d',
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    center: [0, 0],
    zoom: 2
  })
});

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';
const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_5__["default"]({map});
const scene = ol3d.getCesiumScene();
scene.terrainProvider = Cesium.createWorldTerrain();
ol3d.setEnabled(true);

// Show off 3D feature picking
const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
let lastPicked;
handler.setInputAction((movement) => {
  const pickedObjects = scene.drillPick(movement.position);
  if (Cesium.defined(pickedObjects)) {
    for (let i = 0; i < pickedObjects.length; ++i) {
      const picked = pickedObjects[i].primitive;
      if (picked.olFeature == lastPicked) {continue;}
      const carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(picked.position);
      console.log('Picked feature', picked.olFeature, ' is at ', carto);
      lastPicked = picked.olFeature;
    }
  } else {
    lastPicked = undefined;
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


window['clearFeatures'] = function() {
  vectorLayers.forEach((layer) => {
    map.getLayers().remove(layer);
  });
  vectorLayers.length = 0;
  total = document.getElementById('total').innerHTML = 0;
  document.getElementById('created').innerHTML = '';
  document.getElementById('added').innerHTML = '';
};

window['addFeatures'] = function() {
  let then = Date.now();
  const count = 1000;
  const features = [];
  const e = 18000000;
  for (let i = 0; i < count; ++i) {
    const feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]([
        2 * e * Math.random() - e,
        2 * e * Math.random() - e,
        e * Math.random()
      ])
    });
    const style = [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        radius: 2,
        fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_2__["default"]({color: [
          Math.random() * 255,
          Math.random() * 255,
          Math.random() * 255,
          Math.random()
        ]})
      })
    })];
    feature.setStyle(style);

    feature.setId(e * Math.random());
    features.push(feature);
  }

  let now = Date.now();
  created = now - then;
  then = now;

  const vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  const vector = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    source: vectorSource
  });
  vectorSource.addFeatures(features);
  map.addLayer(vector);
  vectorLayers.push(vector);
  now = Date.now();
  added = now - then;
  total += count;

  document.getElementById('total').innerHTML = total;
  document.getElementById('created').innerHTML = `Features created in ${created}ms.`;
  document.getElementById('added').innerHTML = `Features added in ${added}ms.`;
};


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 14:
/*!****************************************!*\
  !*** multi ./examples/synthvectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/synthvectors.js */"./examples/synthvectors.js");


/***/ })

/******/ });
//# sourceMappingURL=synthvectors.js.map