(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap);"]);
// Module
exports.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n* {\n    font-family: 'Source Sans Pro', sans-serif;\n}\nhtml {\n  font-weight: 300;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 500;\n}\nh2:nth-of-type(1) {\n  margin-top: 20px;\n}\nh3 {\n  font-size: 20px;\n}\nh4 {\n  font-size: 18px;\n}\na.anchor-link {\n  display: none;\n}\n/* Navbar */\n/* .navbar {\n    padding: 0;\n} */\n/* Calendar */\ntable {\n  width: 100%;\n}\n.calendar table, .calendar th, .calendar tr, .calendar td {\n  border: 1px solid black;\n}\n.calendar th, .calendar tr, .calendar td {\n  padding: 12px;\n}\n.calendar td.header {\n  font-weight: 800;\n}\n.calendar tr.monday {\n  background-color: #e6e8f2;\n}\n.calendar .list-group .list-group-item {\n  border: none;\n  padding: .3rem .7rem;\n}\n/* Alternate row highlighting */\n.calendar tbody tr:nth-of-type(2n+1) {\n  background-color: #e6e8f2;\n}\n.calendar tbody tr:nth-of-type(2n+1) .list-group, \n.calendar tbody tr:nth-of-type(2n+1) .list-group-item {\n  background-color: #e6e8f2;\n}\n/* .calendar .list-group.monday .list-group-item {\n  background-color: #e6e8f2;\n  border: none;\n} */\n.calendar tr.wednesday {\n  background-color: #f2f4f8;\n}\n.quiet {\n  color: #AAA;\n  /* opacity: ; */\n  font-style: italic;\n}\nh1#course-name {\n  padding-top: 20px;\n}\nh1#course-name span.quiet {\n  font-style: normal;\n  font-weight: lighter;\n  margin-left: 15px;\n}\n/* Staff */\n.staff th, .staff tr, .staff td {\n  padding: 30px 40px 40px 0;\n}\n.staff td {\n  vertical-align: top;\n  text-align: center;\n}\n.staff tr {\n  border:0;\n  border-top: 1px solid #eeeeee;\n}\n.biohover {\n  color:#377bb5;\n  text-decoration: underline\n}\n.staff .name .biohover .bio {\n  visibility: hidden;\n  width: 200px;\n  background-color: #e7e7e7;\n  color: #000;\n  text-align: left;\n  border-radius: 5px;\n  padding: 5px 5px;\n\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n.staff .name .biohover:hover .bio {\n  visibility: visible;\n}\n.staff .name .biohover:active .bio {\n  visibility: visible;\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":";AAAA,8EAA8E;AAG9E;IACI,0CAA0C;AAC9C;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,eAAe;AACjB;AAEA;EACE,eAAe;AACjB;AAEA;EACE,aAAa;AACf;AAEA,WAAW;AAEX;;GAEG;AAEH,aAAa;AAEb;EACE,WAAW;AACb;AAEA;EACE,uBAAuB;AACzB;AAEA;EACE,aAAa;AACf;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;AAEA,+BAA+B;AAE/B;EACE,yBAAyB;AAC3B;AAEA;;EAEE,yBAAyB;AAC3B;AAEA;;;GAGG;AAEH;EACE,yBAAyB;AAC3B;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;AACnB;AAEA,UAAU;AAEV;EACE,yBAAyB;AAC3B;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AAEA;EACE,QAAQ;EACR,6BAA6B;AAC/B;AAEA;EACE,aAAa;EACb;AACF;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;;EAEhB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;AACZ;AAGA;EACE,mBAAmB;AACrB;AAEA;EACE,mBAAmB;AACrB","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap');\n\n* {\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\nhtml {\n  font-weight: 300;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 500;\n}\n\nh2:nth-of-type(1) {\n  margin-top: 20px;\n}\n\nh3 {\n  font-size: 20px;\n}\n\nh4 {\n  font-size: 18px;\n}\n\na.anchor-link {\n  display: none;\n}\n\n/* Navbar */\n\n/* .navbar {\n    padding: 0;\n} */\n\n/* Calendar */\n\ntable {\n  width: 100%;\n}\n\n.calendar table, .calendar th, .calendar tr, .calendar td {\n  border: 1px solid black;\n}\n\n.calendar th, .calendar tr, .calendar td {\n  padding: 12px;\n}\n\n.calendar td.header {\n  font-weight: 800;\n}\n\n.calendar tr.monday {\n  background-color: #e6e8f2;\n}\n\n.calendar .list-group .list-group-item {\n  border: none;\n  padding: .3rem .7rem;\n}\n\n/* Alternate row highlighting */\n\n.calendar tbody tr:nth-of-type(2n+1) {\n  background-color: #e6e8f2;\n}\n\n.calendar tbody tr:nth-of-type(2n+1) .list-group, \n.calendar tbody tr:nth-of-type(2n+1) .list-group-item {\n  background-color: #e6e8f2;\n}\n\n/* .calendar .list-group.monday .list-group-item {\n  background-color: #e6e8f2;\n  border: none;\n} */\n\n.calendar tr.wednesday {\n  background-color: #f2f4f8;\n}\n\n.quiet {\n  color: #AAA;\n  /* opacity: ; */\n  font-style: italic;\n}\n\nh1#course-name {\n  padding-top: 20px;\n}\n\nh1#course-name span.quiet {\n  font-style: normal;\n  font-weight: lighter;\n  margin-left: 15px;\n}\n\n/* Staff */\n\n.staff th, .staff tr, .staff td {\n  padding: 30px 40px 40px 0;\n}\n\n.staff td {\n  vertical-align: top;\n  text-align: center;\n}\n\n.staff tr {\n  border:0;\n  border-top: 1px solid #eeeeee;\n}\n\n.biohover {\n  color:#377bb5;\n  text-decoration: underline\n}\n\n.staff .name .biohover .bio {\n  visibility: hidden;\n  width: 200px;\n  background-color: #e7e7e7;\n  color: #000;\n  text-align: left;\n  border-radius: 5px;\n  padding: 5px 5px;\n\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n\n.staff .name .biohover:hover .bio {\n  visibility: visible;\n}\n\n.staff .name .biohover:active .bio {\n  visibility: visible;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrispyles/GitHub/ds-connectors.github.io/ng-econ/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map