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
/******/ 		"groundvectors": 0
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
/******/ 	deferredModules.push([3,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/groundvectors.js":
/*!***********************************!*\
  !*** ./examples/groundvectors.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! olcs/OLCesium.js */ "./src/olcs/OLCesium.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/control.js */ "./node_modules/ol/control.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/ol/style/Text.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Circle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/geom/Circle */ "./node_modules/ol/geom/Circle.js");
/**
 * @module examples.vectors
 */
const exports = {};

















const image = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
  radius: 5,
  fill: null,
  stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({color: 'red', width: 1})
});

const styles = {
  'Point': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    image
  })],
  'LineString': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'green',
      width: 2
    })
  })],
  'MultiLineString': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'green',
      width: 2
    })
  })],
  'MultiPoint': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    image,
    text: new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      text: 'MP',
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        color: 'purple'
      })
    })
  })],
  'MultiPolygon': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'yellow',
      width: 1
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  })],
  'Polygon': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'blue',
      width: 3
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  })],
  'GeometryCollection': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'magenta',
      width: 2
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      color: 'magenta'
    }),
    image: new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      radius: 10, // pixels
      fill: null,
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        color: 'magenta'
      })
    })
  })],
  'Circle': [new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      color: 'red',
      width: 2
    }),
    fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      color: 'rgba(255,0,0,0.2)'
    })
  })]
};

const styleFunction = function(feature, resolution) {
  const geo = feature.getGeometry();
  // always assign a style to prevent feature skipping
  return geo ? styles[geo.getType()] : styles['Point'];
};

const vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
  format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
  url: 'data/geojson/ground_vector_data.geojson'
});

const vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
  source: vectorSource,
  style: styleFunction
});

vectorLayer.getSource().addFeature(new ol_Feature__WEBPACK_IMPORTED_MODULE_14__["default"]({
  geometry: new ol_geom_Circle__WEBPACK_IMPORTED_MODULE_15__["default"]([16880133.570042003, -3565441.544459192], 200)
}));

const map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  layers: [
    new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    }),
    vectorLayer,
  ],
  target: 'map2d',
  controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_2__["defaults"])({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  view: new ol_View_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    center: [16880670.33392873, -3565966.2275828626],
    zoom: 15
  })
});

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';
vectorLayer.set('altitudeMode', 'clampToGround');
const ol3d = new olcs_OLCesium_js__WEBPACK_IMPORTED_MODULE_0__["default"]({map, target: 'map3d'});
const scene = ol3d.getCesiumScene();
scene.terrainProvider = Cesium.createWorldTerrain();
ol3d.setEnabled(true);

window['toggleClampToGround'] = function() {
  let altitudeMode;
  if (!vectorLayer.get('altitudeMode')) {
    altitudeMode = 'clampToGround';
  }
  vectorLayer.set('altitudeMode', altitudeMode);
  map.removeLayer(vectorLayer);
  map.addLayer(vectorLayer);
};

window['ol3d'] = ol3d;
window['scene'] = scene;
document.getElementById('enable').addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));

ol3d.enableAutoRenderLoop();


/* harmony default export */ __webpack_exports__["default"] = (exports);


/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./examples/groundvectors.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/groundvectors.js */"./examples/groundvectors.js");


/***/ })

/******/ });
//# sourceMappingURL=groundvectors.js.map