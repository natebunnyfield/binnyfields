/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var App;

	__webpack_require__(12);

	__webpack_require__(4);

	_.mixin(__webpack_require__(3).exports());

	App = __webpack_require__(1);

	App.start();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette, $, _, Backbone) {var App,
	  __slice = [].slice;

	console.clear();

	App = new Marionette.Application();

	window.$ = $;

	window._ = _;

	window.App = App;

	window.Backbone = Backbone;

	window.log = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  if (_.size(args) === 1) {
	    return console.log(args[0]);
	  } else {
	    return console.log(args);
	  }
	};

	window.info = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  if (_.size(args) === 1) {
	    return console.info(args[0]);
	  } else {
	    return console.info(args);
	  }
	};

	window.warn = function() {
	  var args;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  if (_.size(args) === 1) {
	    return console.warn(args[0]);
	  } else {
	    return console.warn(args);
	  }
	};

	App.addRegions({
	  headerRegion: '#header-region',
	  mainRegion: '#main-region'
	});

	App.on('initialize:before', function(options) {
	  log('init:before');
	  return __webpack_require__(7);
	});

	App.on('initialize:after', function() {
	  var Header, Inventory;
	  log('init:after');
	  Header = __webpack_require__(5);
	  Header.start();
	  Inventory = __webpack_require__(6);
	  Inventory.start();
	  if (Backbone.history) {
	    return Backbone.history.start({
	      pushState: true,
	      root: '/'
	    });
	  }
	});

	module.exports = App;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(9), __webpack_require__(2), __webpack_require__(10)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre ES5 environments */
	  var undefined;

	  /** Used to generate unique IDs */
	  var idCounter = 0;

	  /** Used internally to indicate various things */
	  var indicatorObject = {};

	  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
	  var keyPrefix = +new Date + '';

	  /** Used to match "interpolate" template delimiters */
	  var reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to ensure capturing order of template delimiters */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals */
	  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

	  /** `Object#toString` result shortcuts */
	  var argsClass = '[object Arguments]',
	      arrayClass = '[object Array]',
	      boolClass = '[object Boolean]',
	      dateClass = '[object Date]',
	      funcClass = '[object Function]',
	      numberClass = '[object Number]',
	      objectClass = '[object Object]',
	      regexpClass = '[object RegExp]',
	      stringClass = '[object String]';

	  /** Used to determine if values are of the language type Object */
	  var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	  };

	  /** Used to escape characters for inclusion in compiled string literals */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\t': 't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Used as a reference to the global object */
	  var root = (objectTypes[typeof window] && window) || this;

	  /** Detect free variable `exports` */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module` */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports` */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
	  var freeGlobal = objectTypes[typeof global] && global;
	  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    root = freeGlobal;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches
	   * or `fromIndex` constraints.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    var index = (fromIndex || 0) - 1,
	        length = array ? array.length : 0;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
	   * them in ascending order.
	   *
	   * @private
	   * @param {Object} a The object to compare to `b`.
	   * @param {Object} b The object to compare to `a`.
	   * @returns {number} Returns the sort order indicator of `1` or `-1`.
	   */
	  function compareAscending(a, b) {
	    var ac = a.criteria,
	        bc = b.criteria,
	        index = -1,
	        length = ac.length;

	    while (++index < length) {
	      var value = ac[index],
	          other = bc[index];

	      if (value !== other) {
	        if (value > other || typeof value == 'undefined') {
	          return 1;
	        }
	        if (value < other || typeof other == 'undefined') {
	          return -1;
	        }
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to return the same value for
	    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See http://code.google.com/p/v8/issues/detail?id=90
	    return a.index - b.index;
	  }

	  /**
	   * Used by `template` to escape characters for inclusion in compiled
	   * string literals.
	   *
	   * @private
	   * @param {string} match The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(match) {
	    return '\\' + stringEscapes[match];
	  }

	  /**
	   * Slices the `collection` from the `start` index up to, but not including,
	   * the `end` index.
	   *
	   * Note: This function is used instead of `Array#slice` to support node lists
	   * in IE < 9 and to ensure dense arrays are returned.
	   *
	   * @private
	   * @param {Array|Object|string} collection The collection to slice.
	   * @param {number} start The start index.
	   * @param {number} end The end index.
	   * @returns {Array} Returns the new array.
	   */
	  function slice(array, start, end) {
	    start || (start = 0);
	    if (typeof end == 'undefined') {
	      end = array ? array.length : 0;
	    }
	    var index = -1,
	        length = end - start || 0,
	        result = Array(length < 0 ? 0 : length);

	    while (++index < length) {
	      result[index] = array[start + index];
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Used for `Array` method references.
	   *
	   * Normally `Array.prototype` would suffice, however, using an array literal
	   * avoids issues in Narwhal.
	   */
	  var arrayRef = [];

	  /** Used for native method references */
	  var objectProto = Object.prototype;

	  /** Used to restore the original `_` reference in `noConflict` */
	  var oldDash = root._;

	  /** Used to resolve the internal [[Class]] of values */
	  var toString = objectProto.toString;

	  /** Used to detect if a method is native */
	  var reNative = RegExp('^' +
	    String(toString)
	      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	      .replace(/toString| for [^\]]+/g, '.*?') + '$'
	  );

	  /** Native method shortcuts */
	  var ceil = Math.ceil,
	      floor = Math.floor,
	      hasOwnProperty = objectProto.hasOwnProperty,
	      push = arrayRef.push,
	      propertyIsEnumerable = objectProto.propertyIsEnumerable;

	  /* Native method shortcuts for methods with the same name as other `lodash` methods */
	  var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
	      nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
	      nativeIsFinite = root.isFinite,
	      nativeIsNaN = root.isNaN,
	      nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
	      nativeMax = Math.max,
	      nativeMin = Math.min,
	      nativeRandom = Math.random;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` object which wraps the given value to enable intuitive
	   * method chaining.
	   *
	   * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
	   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
	   * and `unshift`
	   *
	   * Chaining is supported in custom builds as long as the `value` method is
	   * implicitly or explicitly included in the build.
	   *
	   * The chainable wrapper functions are:
	   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
	   * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
	   * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
	   * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	   * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	   * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
	   * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
	   * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
	   * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
	   * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
	   * and `zip`
	   *
	   * The non-chainable wrapper functions are:
	   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
	   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
	   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	   * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
	   * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
	   * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
	   * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
	   * `template`, `unescape`, `uniqueId`, and `value`
	   *
	   * The wrapper functions `first` and `last` return wrapped values when `n` is
	   * provided, otherwise they return unwrapped values.
	   *
	   * Explicit chaining can be enabled by using the `_.chain` method.
	   *
	   * @name _
	   * @constructor
	   * @category Chaining
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns a `lodash` instance.
	   * @example
	   *
	   * var wrapped = _([1, 2, 3]);
	   *
	   * // returns an unwrapped value
	   * wrapped.reduce(function(sum, num) {
	   *   return sum + num;
	   * });
	   * // => 6
	   *
	   * // returns a wrapped value
	   * var squares = wrapped.map(function(num) {
	   *   return num * num;
	   * });
	   *
	   * _.isArray(squares);
	   * // => false
	   *
	   * _.isArray(squares.value());
	   * // => true
	   */
	  function lodash(value) {
	    return (value instanceof lodash)
	      ? value
	      : new lodashWrapper(value);
	  }

	  /**
	   * A fast path for creating `lodash` wrapper objects.
	   *
	   * @private
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @param {boolean} chainAll A flag to enable chaining for all methods
	   * @returns {Object} Returns a `lodash` instance.
	   */
	  function lodashWrapper(value, chainAll) {
	    this.__chain__ = !!chainAll;
	    this.__wrapped__ = value;
	  }
	  // ensure `new lodashWrapper` is an instance of `lodash`
	  lodashWrapper.prototype = lodash.prototype;

	  /**
	   * An object used to flag environments features.
	   *
	   * @static
	   * @memberOf _
	   * @type Object
	   */
	  var support = {};

	  (function() {
	    var object = { '0': 1, 'length': 1 };

	    /**
	     * Detect if `Array#shift` and `Array#splice` augment array-like objects correctly.
	     *
	     * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
	     * and `splice()` functions that fail to remove the last element, `value[0]`,
	     * of array-like objects even though the `length` property is set to `0`.
	     * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
	     * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
	     *
	     * @memberOf _.support
	     * @type boolean
	     */
	    support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0]);
	  }(1));

	  /**
	   * By default, the template delimiters used by Lo-Dash are similar to those in
	   * embedded Ruby (ERB). Change the following template settings to use alternative
	   * delimiters.
	   *
	   * @static
	   * @memberOf _
	   * @type Object
	   */
	  lodash.templateSettings = {

	    /**
	     * Used to detect `data` property values to be HTML-escaped.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'escape': /<%-([\s\S]+?)%>/g,

	    /**
	     * Used to detect code to be evaluated.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'evaluate': /<%([\s\S]+?)%>/g,

	    /**
	     * Used to detect `data` property values to inject.
	     *
	     * @memberOf _.templateSettings
	     * @type RegExp
	     */
	    'interpolate': reInterpolate,

	    /**
	     * Used to reference the data object in the template text.
	     *
	     * @memberOf _.templateSettings
	     * @type string
	     */
	    'variable': ''
	  };

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `_.bind` that creates the bound function and
	   * sets its meta data.
	   *
	   * @private
	   * @param {Array} bindData The bind data array.
	   * @returns {Function} Returns the new bound function.
	   */
	  function baseBind(bindData) {
	    var func = bindData[0],
	        partialArgs = bindData[2],
	        thisArg = bindData[4];

	    function bound() {
	      // `Function#bind` spec
	      // http://es5.github.io/#x15.3.4.5
	      if (partialArgs) {
	        // avoid `arguments` object deoptimizations by using `slice` instead
	        // of `Array.prototype.slice.call` and not assigning `arguments` to a
	        // variable as a ternary expression
	        var args = slice(partialArgs);
	        push.apply(args, arguments);
	      }
	      // mimic the constructor's `return` behavior
	      // http://es5.github.io/#x13.2.2
	      if (this instanceof bound) {
	        // ensure `new bound` is an instance of `func`
	        var thisBinding = baseCreate(func.prototype),
	            result = func.apply(thisBinding, args || arguments);
	        return isObject(result) ? result : thisBinding;
	      }
	      return func.apply(thisArg, args || arguments);
	    }
	    return bound;
	  }

	  /**
	   * The base implementation of `_.create` without support for assigning
	   * properties to the created object.
	   *
	   * @private
	   * @param {Object} prototype The object to inherit from.
	   * @returns {Object} Returns the new object.
	   */
	  function baseCreate(prototype, properties) {
	    return isObject(prototype) ? nativeCreate(prototype) : {};
	  }
	  // fallback for browsers without `Object.create`
	  if (!nativeCreate) {
	    baseCreate = (function() {
	      function Object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          Object.prototype = prototype;
	          var result = new Object;
	          Object.prototype = null;
	        }
	        return result || root.Object();
	      };
	    }());
	  }

	  /**
	   * The base implementation of `_.createCallback` without support for creating
	   * "_.pluck" or "_.where" style callbacks.
	   *
	   * @private
	   * @param {*} [func=identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of the created callback.
	   * @param {number} [argCount] The number of arguments the callback accepts.
	   * @returns {Function} Returns a callback function.
	   */
	  function baseCreateCallback(func, thisArg, argCount) {
	    if (typeof func != 'function') {
	      return identity;
	    }
	    // exit early for no `thisArg` or already bound by `Function#bind`
	    if (typeof thisArg == 'undefined' || !('prototype' in func)) {
	      return func;
	    }
	    switch (argCount) {
	      case 1: return function(value) {
	        return func.call(thisArg, value);
	      };
	      case 2: return function(a, b) {
	        return func.call(thisArg, a, b);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(thisArg, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(thisArg, accumulator, value, index, collection);
	      };
	    }
	    return bind(func, thisArg);
	  }

	  /**
	   * The base implementation of `createWrapper` that creates the wrapper and
	   * sets its meta data.
	   *
	   * @private
	   * @param {Array} bindData The bind data array.
	   * @returns {Function} Returns the new function.
	   */
	  function baseCreateWrapper(bindData) {
	    var func = bindData[0],
	        bitmask = bindData[1],
	        partialArgs = bindData[2],
	        partialRightArgs = bindData[3],
	        thisArg = bindData[4],
	        arity = bindData[5];

	    var isBind = bitmask & 1,
	        isBindKey = bitmask & 2,
	        isCurry = bitmask & 4,
	        isCurryBound = bitmask & 8,
	        key = func;

	    function bound() {
	      var thisBinding = isBind ? thisArg : this;
	      if (partialArgs) {
	        var args = slice(partialArgs);
	        push.apply(args, arguments);
	      }
	      if (partialRightArgs || isCurry) {
	        args || (args = slice(arguments));
	        if (partialRightArgs) {
	          push.apply(args, partialRightArgs);
	        }
	        if (isCurry && args.length < arity) {
	          bitmask |= 16 & ~32;
	          return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
	        }
	      }
	      args || (args = arguments);
	      if (isBindKey) {
	        func = thisBinding[key];
	      }
	      if (this instanceof bound) {
	        thisBinding = baseCreate(func.prototype);
	        var result = func.apply(thisBinding, args);
	        return isObject(result) ? result : thisBinding;
	      }
	      return func.apply(thisBinding, args);
	    }
	    return bound;
	  }

	  /**
	   * The base implementation of `_.difference` that accepts a single array
	   * of values to exclude.
	   *
	   * @private
	   * @param {Array} array The array to process.
	   * @param {Array} [values] The array of values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   */
	  function baseDifference(array, values) {
	    var index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (indexOf(values, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.flatten` without support for callback
	   * shorthands or `thisArg` binding.
	   *
	   * @private
	   * @param {Array} array The array to flatten.
	   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
	   * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
	   * @param {number} [fromIndex=0] The index to start from.
	   * @returns {Array} Returns a new flattened array.
	   */
	  function baseFlatten(array, isShallow, isStrict, fromIndex) {
	    var index = (fromIndex || 0) - 1,
	        length = array ? array.length : 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];

	      if (value && typeof value == 'object' && typeof value.length == 'number'
	          && (isArray(value) || isArguments(value))) {
	        // recursively flatten arrays (susceptible to call stack limits)
	        if (!isShallow) {
	          value = baseFlatten(value, isShallow, isStrict);
	        }
	        var valIndex = -1,
	            valLength = value.length,
	            resIndex = result.length;

	        result.length += valLength;
	        while (++valIndex < valLength) {
	          result[resIndex++] = value[valIndex];
	        }
	      } else if (!isStrict) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.isEqual`, without support for `thisArg` binding,
	   * that allows partial "_.where" style comparisons.
	   *
	   * @private
	   * @param {*} a The value to compare.
	   * @param {*} b The other value to compare.
	   * @param {Function} [callback] The function to customize comparing values.
	   * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
	   * @param {Array} [stackA=[]] Tracks traversed `a` objects.
	   * @param {Array} [stackB=[]] Tracks traversed `b` objects.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   */
	  function baseIsEqual(a, b, stackA, stackB) {
	    if (a === b) {
	      return a !== 0 || (1 / a == 1 / b);
	    }
	    var type = typeof a,
	        otherType = typeof b;

	    if (a === a &&
	        !(a && objectTypes[type]) &&
	        !(b && objectTypes[otherType])) {
	      return false;
	    }
	    if (a == null || b == null) {
	      return a === b;
	    }
	    var className = toString.call(a),
	        otherClass = toString.call(b);

	    if (className != otherClass) {
	      return false;
	    }
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        return +a == +b;

	      case numberClass:
	        return a != +a
	          ? b != +b
	          : (a == 0 ? (1 / a == 1 / b) : a == +b);

	      case regexpClass:
	      case stringClass:
	        return a == String(b);
	    }
	    var isArr = className == arrayClass;
	    if (!isArr) {
	      var aWrapped = a instanceof lodash,
	          bWrapped = b instanceof lodash;

	      if (aWrapped || bWrapped) {
	        return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, stackA, stackB);
	      }
	      if (className != objectClass) {
	        return false;
	      }
	      var ctorA = a.constructor,
	          ctorB = b.constructor;

	      if (ctorA != ctorB &&
	            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
	            ('constructor' in a && 'constructor' in b)
	          ) {
	        return false;
	      }
	    }
	    stackA || (stackA = []);
	    stackB || (stackB = []);

	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == a) {
	        return stackB[length] == b;
	      }
	    }
	    var result = true,
	        size = 0;

	    stackA.push(a);
	    stackB.push(b);

	    if (isArr) {
	      size = b.length;
	      result = size == a.length;

	      if (result) {
	        while (size--) {
	          if (!(result = baseIsEqual(a[size], b[size], stackA, stackB))) {
	            break;
	          }
	        }
	      }
	    }
	    else {
	      forIn(b, function(value, key, b) {
	        if (hasOwnProperty.call(b, key)) {
	          size++;
	          return !(result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, stackA, stackB)) && indicatorObject;
	        }
	      });

	      if (result) {
	        forIn(a, function(value, key, a) {
	          if (hasOwnProperty.call(a, key)) {
	            return !(result = --size > -1) && indicatorObject;
	          }
	        });
	      }
	    }
	    stackA.pop();
	    stackB.pop();
	    return result;
	  }

	  /**
	   * The base implementation of `_.random` without argument juggling or support
	   * for returning floating-point numbers.
	   *
	   * @private
	   * @param {number} min The minimum possible value.
	   * @param {number} max The maximum possible value.
	   * @returns {number} Returns a random number.
	   */
	  function baseRandom(min, max) {
	    return min + floor(nativeRandom() * (max - min + 1));
	  }

	  /**
	   * The base implementation of `_.uniq` without support for callback shorthands
	   * or `thisArg` binding.
	   *
	   * @private
	   * @param {Array} array The array to process.
	   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
	   * @param {Function} [callback] The function called per iteration.
	   * @returns {Array} Returns a duplicate-value-free array.
	   */
	  function baseUniq(array, isSorted, callback) {
	    var index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [],
	        seen = callback ? [] : result;

	    while (++index < length) {
	      var value = array[index],
	          computed = callback ? callback(value, index, array) : value;

	      if (isSorted
	            ? !index || seen[seen.length - 1] !== computed
	            : indexOf(seen, computed) < 0
	          ) {
	        if (callback) {
	          seen.push(computed);
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates a function that aggregates a collection, creating an object composed
	   * of keys generated from the results of running each element of the collection
	   * through a callback. The given `setter` function sets the keys and values
	   * of the composed object.
	   *
	   * @private
	   * @param {Function} setter The setter function.
	   * @returns {Function} Returns the new aggregator function.
	   */
	  function createAggregator(setter) {
	    return function(collection, callback, thisArg) {
	      var result = {};
	      callback = createCallback(callback, thisArg, 3);

	      var index = -1,
	          length = collection ? collection.length : 0;

	      if (typeof length == 'number') {
	        while (++index < length) {
	          var value = collection[index];
	          setter(result, value, callback(value, index, collection), collection);
	        }
	      } else {
	        forOwn(collection, function(value, key, collection) {
	          setter(result, value, callback(value, key, collection), collection);
	        });
	      }
	      return result;
	    };
	  }

	  /**
	   * Creates a function that, when called, either curries or invokes `func`
	   * with an optional `this` binding and partially applied arguments.
	   *
	   * @private
	   * @param {Function|string} func The function or method name to reference.
	   * @param {number} bitmask The bitmask of method flags to compose.
	   *  The bitmask may be composed of the following flags:
	   *  1 - `_.bind`
	   *  2 - `_.bindKey`
	   *  4 - `_.curry`
	   *  8 - `_.curry` (bound)
	   *  16 - `_.partial`
	   *  32 - `_.partialRight`
	   * @param {Array} [partialArgs] An array of arguments to prepend to those
	   *  provided to the new function.
	   * @param {Array} [partialRightArgs] An array of arguments to append to those
	   *  provided to the new function.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param {number} [arity] The arity of `func`.
	   * @returns {Function} Returns the new function.
	   */
	  function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
	    var isBind = bitmask & 1,
	        isBindKey = bitmask & 2,
	        isCurry = bitmask & 4,
	        isCurryBound = bitmask & 8,
	        isPartial = bitmask & 16,
	        isPartialRight = bitmask & 32;

	    if (!isBindKey && !isFunction(func)) {
	      throw new TypeError;
	    }
	    if (isPartial && !partialArgs.length) {
	      bitmask &= ~16;
	      isPartial = partialArgs = false;
	    }
	    if (isPartialRight && !partialRightArgs.length) {
	      bitmask &= ~32;
	      isPartialRight = partialRightArgs = false;
	    }
	    // fast path for `_.bind`
	    var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
	    return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
	  }

	  /**
	   * Used by `escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} match The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(match) {
	    return htmlEscapes[match];
	  }

	  /**
	   * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	   * customized, this method returns the custom method, otherwise it returns
	   * the `baseIndexOf` function.
	   *
	   * @private
	   * @returns {Function} Returns the "indexOf" function.
	   */
	  function getIndexOf() {
	    var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
	    return result;
	  }

	  /**
	   * Checks if `value` is a native function.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
	   */
	  function isNative(value) {
	    return typeof value == 'function' && reNative.test(value);
	  }

	  /**
	   * Used by `unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} match The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(match) {
	    return htmlUnescapes[match];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Checks if `value` is an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
	   * @example
	   *
	   * (function() { return _.isArguments(arguments); })(1, 2, 3);
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */
	  function isArguments(value) {
	    return value && typeof value == 'object' && typeof value.length == 'number' &&
	      toString.call(value) == argsClass || false;
	  }
	  // fallback for browsers that can't detect `arguments` objects by [[Class]]
	  if (!isArguments(arguments)) {
	    isArguments = function(value) {
	      return value && typeof value == 'object' && typeof value.length == 'number' &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee') || false;
	    };
	  }

	  /**
	   * Checks if `value` is an array.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
	   * @example
	   *
	   * (function() { return _.isArray(arguments); })();
	   * // => false
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   */
	  var isArray = nativeIsArray || function(value) {
	    return value && typeof value == 'object' && typeof value.length == 'number' &&
	      toString.call(value) == arrayClass || false;
	  };

	  /**
	   * A fallback implementation of `Object.keys` which produces an array of the
	   * given object's own enumerable property names.
	   *
	   * @private
	   * @type Function
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names.
	   */
	  var shimKeys = function(object) {
	    var index, iterable = object, result = [];
	    if (!iterable) return result;
	    if (!(objectTypes[typeof object])) return result;
	      for (index in iterable) {
	        if (hasOwnProperty.call(iterable, index)) {
	          result.push(index);
	        }
	      }
	    return result
	  };

	  /**
	   * Creates an array composed of the own enumerable property names of an object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names.
	   * @example
	   *
	   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
	   */
	  var keys = !nativeKeys ? shimKeys : function(object) {
	    if (!isObject(object)) {
	      return [];
	    }
	    return nativeKeys(object);
	  };

	  /**
	   * Used to convert characters to HTML entities:
	   *
	   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
	   * don't require escaping in HTML and have no special meaning unless they're part
	   * of a tag or an unquoted attribute value.
	   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
	   */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;'
	  };

	  /** Used to convert HTML entities to characters */
	  var htmlUnescapes = invert(htmlEscapes);

	  /** Used to match HTML entities and HTML characters */
	  var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
	      reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object. Subsequent sources will overwrite property assignments of previous
	   * sources. If a callback is provided it will be executed to produce the
	   * assigned values. The callback is bound to `thisArg` and invoked with two
	   * arguments; (objectValue, sourceValue).
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @alias extend
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {...Object} [source] The source objects.
	   * @param {Function} [callback] The function to customize assigning values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
	   * // => { 'name': 'fred', 'employer': 'slate' }
	   *
	   * var defaults = _.partialRight(_.assign, function(a, b) {
	   *   return typeof a == 'undefined' ? b : a;
	   * });
	   *
	   * var object = { 'name': 'barney' };
	   * defaults(object, { 'name': 'fred', 'employer': 'slate' });
	   * // => { 'name': 'barney', 'employer': 'slate' }
	   */
	  function assign(object) {
	    if (!object) {
	      return object;
	    }
	    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
	      var iterable = arguments[argsIndex];
	      if (iterable) {
	        for (var key in iterable) {
	          object[key] = iterable[key];
	        }
	      }
	    }
	    return object;
	  }

	  /**
	   * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
	   * be cloned, otherwise they will be assigned by reference. If a callback
	   * is provided it will be executed to produce the cloned values. If the
	   * callback returns `undefined` cloning will be handled by the method instead.
	   * The callback is bound to `thisArg` and invoked with one argument; (value).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to clone.
	   * @param {boolean} [isDeep=false] Specify a deep clone.
	   * @param {Function} [callback] The function to customize cloning values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the cloned value.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * var shallow = _.clone(characters);
	   * shallow[0] === characters[0];
	   * // => true
	   *
	   * var deep = _.clone(characters, true);
	   * deep[0] === characters[0];
	   * // => false
	   *
	   * _.mixin({
	   *   'clone': _.partialRight(_.clone, function(value) {
	   *     return _.isElement(value) ? value.cloneNode(false) : undefined;
	   *   })
	   * });
	   *
	   * var clone = _.clone(document.body);
	   * clone.childNodes.length;
	   * // => 0
	   */
	  function clone(value) {
	    return isObject(value)
	      ? (isArray(value) ? slice(value) : assign({}, value))
	      : value;
	  }

	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object for all destination properties that resolve to `undefined`. Once a
	   * property is set, additional defaults of the same property will be ignored.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The destination object.
	   * @param {...Object} [source] The source objects.
	   * @param- {Object} [guard] Allows working with `_.reduce` without using its
	   *  `key` and `object` arguments as sources.
	   * @returns {Object} Returns the destination object.
	   * @example
	   *
	   * var object = { 'name': 'barney' };
	   * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
	   * // => { 'name': 'barney', 'employer': 'slate' }
	   */
	  function defaults(object) {
	    if (!object) {
	      return object;
	    }
	    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
	      var iterable = arguments[argsIndex];
	      if (iterable) {
	        for (var key in iterable) {
	          if (typeof object[key] == 'undefined') {
	            object[key] = iterable[key];
	          }
	        }
	      }
	    }
	    return object;
	  }

	  /**
	   * Iterates over own and inherited enumerable properties of an object,
	   * executing the callback for each property. The callback is bound to `thisArg`
	   * and invoked with three arguments; (value, key, object). Callbacks may exit
	   * iteration early by explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * function Shape() {
	   *   this.x = 0;
	   *   this.y = 0;
	   * }
	   *
	   * Shape.prototype.move = function(x, y) {
	   *   this.x += x;
	   *   this.y += y;
	   * };
	   *
	   * _.forIn(new Shape, function(value, key) {
	   *   console.log(key);
	   * });
	   * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
	   */
	  var forIn = function(collection, callback) {
	    var index, iterable = collection, result = iterable;
	    if (!iterable) return result;
	    if (!objectTypes[typeof iterable]) return result;
	      for (index in iterable) {
	        if (callback(iterable[index], index, collection) === indicatorObject) return result;
	      }
	    return result
	  };

	  /**
	   * Iterates over own enumerable properties of an object, executing the callback
	   * for each property. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, key, object). Callbacks may exit iteration early by
	   * explicitly returning `false`.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Objects
	   * @param {Object} object The object to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
	   *   console.log(key);
	   * });
	   * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
	   */
	  var forOwn = function(collection, callback) {
	    var index, iterable = collection, result = iterable;
	    if (!iterable) return result;
	    if (!objectTypes[typeof iterable]) return result;
	      for (index in iterable) {
	        if (hasOwnProperty.call(iterable, index)) {
	          if (callback(iterable[index], index, collection) === indicatorObject) return result;
	        }
	      }
	    return result
	  };

	  /**
	   * Creates a sorted array of property names of all enumerable properties,
	   * own and inherited, of `object` that have function values.
	   *
	   * @static
	   * @memberOf _
	   * @alias methods
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property names that have function values.
	   * @example
	   *
	   * _.functions(_);
	   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
	   */
	  function functions(object) {
	    var result = [];
	    forIn(object, function(value, key) {
	      if (isFunction(value)) {
	        result.push(key);
	      }
	    });
	    return result.sort();
	  }

	  /**
	   * Checks if the specified property name exists as a direct property of `object`,
	   * instead of an inherited property.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @param {string} key The name of the property to check.
	   * @returns {boolean} Returns `true` if key is a direct property, else `false`.
	   * @example
	   *
	   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
	   * // => true
	   */
	  function has(object, key) {
	    return object ? hasOwnProperty.call(object, key) : false;
	  }

	  /**
	   * Creates an object composed of the inverted keys and values of the given object.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to invert.
	   * @returns {Object} Returns the created inverted object.
	   * @example
	   *
	   * _.invert({ 'first': 'fred', 'second': 'barney' });
	   * // => { 'fred': 'first', 'barney': 'second' }
	   */
	  function invert(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = {};

	    while (++index < length) {
	      var key = props[index];
	      result[object[key]] = key;
	    }
	    return result;
	  }

	  /**
	   * Checks if `value` is a boolean value.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
	   * @example
	   *
	   * _.isBoolean(null);
	   * // => false
	   */
	  function isBoolean(value) {
	    return value === true || value === false ||
	      value && typeof value == 'object' && toString.call(value) == boolClass || false;
	  }

	  /**
	   * Checks if `value` is a date.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
	   * @example
	   *
	   * _.isDate(new Date);
	   * // => true
	   */
	  function isDate(value) {
	    return value && typeof value == 'object' && toString.call(value) == dateClass || false;
	  }

	  /**
	   * Checks if `value` is a DOM element.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
	   * @example
	   *
	   * _.isElement(document.body);
	   * // => true
	   */
	  function isElement(value) {
	    return value && value.nodeType === 1 || false;
	  }

	  /**
	   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
	   * length of `0` and objects with no own enumerable properties are considered
	   * "empty".
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Array|Object|string} value The value to inspect.
	   * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
	   * @example
	   *
	   * _.isEmpty([1, 2, 3]);
	   * // => false
	   *
	   * _.isEmpty({});
	   * // => true
	   *
	   * _.isEmpty('');
	   * // => true
	   */
	  function isEmpty(value) {
	    if (!value) {
	      return true;
	    }
	    if (isArray(value) || isString(value)) {
	      return !value.length;
	    }
	    for (var key in value) {
	      if (hasOwnProperty.call(value, key)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  /**
	   * Performs a deep comparison between two values to determine if they are
	   * equivalent to each other. If a callback is provided it will be executed
	   * to compare values. If the callback returns `undefined` comparisons will
	   * be handled by the method instead. The callback is bound to `thisArg` and
	   * invoked with two arguments; (a, b).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} a The value to compare.
	   * @param {*} b The other value to compare.
	   * @param {Function} [callback] The function to customize comparing values.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * var copy = { 'name': 'fred' };
	   *
	   * object == copy;
	   * // => false
	   *
	   * _.isEqual(object, copy);
	   * // => true
	   *
	   * var words = ['hello', 'goodbye'];
	   * var otherWords = ['hi', 'goodbye'];
	   *
	   * _.isEqual(words, otherWords, function(a, b) {
	   *   var reGreet = /^(?:hello|hi)$/i,
	   *       aGreet = _.isString(a) && reGreet.test(a),
	   *       bGreet = _.isString(b) && reGreet.test(b);
	   *
	   *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
	   * });
	   * // => true
	   */
	  function isEqual(a, b) {
	    return baseIsEqual(a, b);
	  }

	  /**
	   * Checks if `value` is, or can be coerced to, a finite number.
	   *
	   * Note: This is not the same as native `isFinite` which will return true for
	   * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
	   * @example
	   *
	   * _.isFinite(-101);
	   * // => true
	   *
	   * _.isFinite('10');
	   * // => true
	   *
	   * _.isFinite(true);
	   * // => false
	   *
	   * _.isFinite('');
	   * // => false
	   *
	   * _.isFinite(Infinity);
	   * // => false
	   */
	  function isFinite(value) {
	    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
	  }

	  /**
	   * Checks if `value` is a function.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   */
	  function isFunction(value) {
	    return typeof value == 'function';
	  }
	  // fallback for older versions of Chrome and Safari
	  if (isFunction(/x/)) {
	    isFunction = function(value) {
	      return typeof value == 'function' && toString.call(value) == funcClass;
	    };
	  }

	  /**
	   * Checks if `value` is the language type of Object.
	   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
	   * @example
	   *
	   * _.isObject({});
	   * // => true
	   *
	   * _.isObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isObject(1);
	   * // => false
	   */
	  function isObject(value) {
	    // check if the value is the ECMAScript language type of Object
	    // http://es5.github.io/#x8
	    // and avoid a V8 bug
	    // http://code.google.com/p/v8/issues/detail?id=2291
	    return !!(value && objectTypes[typeof value]);
	  }

	  /**
	   * Checks if `value` is `NaN`.
	   *
	   * Note: This is not the same as native `isNaN` which will return `true` for
	   * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
	   * @example
	   *
	   * _.isNaN(NaN);
	   * // => true
	   *
	   * _.isNaN(new Number(NaN));
	   * // => true
	   *
	   * isNaN(undefined);
	   * // => true
	   *
	   * _.isNaN(undefined);
	   * // => false
	   */
	  function isNaN(value) {
	    // `NaN` as a primitive is the only value that is not equal to itself
	    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
	    return isNumber(value) && value != +value;
	  }

	  /**
	   * Checks if `value` is `null`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
	   * @example
	   *
	   * _.isNull(null);
	   * // => true
	   *
	   * _.isNull(undefined);
	   * // => false
	   */
	  function isNull(value) {
	    return value === null;
	  }

	  /**
	   * Checks if `value` is a number.
	   *
	   * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
	   * @example
	   *
	   * _.isNumber(8.4 * 5);
	   * // => true
	   */
	  function isNumber(value) {
	    return typeof value == 'number' ||
	      value && typeof value == 'object' && toString.call(value) == numberClass || false;
	  }

	  /**
	   * Checks if `value` is a regular expression.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
	   * @example
	   *
	   * _.isRegExp(/fred/);
	   * // => true
	   */
	  function isRegExp(value) {
	    return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false;
	  }

	  /**
	   * Checks if `value` is a string.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
	   * @example
	   *
	   * _.isString('fred');
	   * // => true
	   */
	  function isString(value) {
	    return typeof value == 'string' ||
	      value && typeof value == 'object' && toString.call(value) == stringClass || false;
	  }

	  /**
	   * Checks if `value` is `undefined`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
	   * @example
	   *
	   * _.isUndefined(void 0);
	   * // => true
	   */
	  function isUndefined(value) {
	    return typeof value == 'undefined';
	  }

	  /**
	   * Creates a shallow clone of `object` excluding the specified properties.
	   * Property names may be specified as individual arguments or as arrays of
	   * property names. If a callback is provided it will be executed for each
	   * property of `object` omitting the properties the callback returns truey
	   * for. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Function|...string|string[]} [callback] The properties to omit or the
	   *  function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object without the omitted properties.
	   * @example
	   *
	   * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
	   * // => { 'name': 'fred' }
	   *
	   * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
	   *   return typeof value == 'number';
	   * });
	   * // => { 'name': 'fred' }
	   */
	  function omit(object) {
	    var props = [];
	    forIn(object, function(value, key) {
	      props.push(key);
	    });
	    props = baseDifference(props, baseFlatten(arguments, true, false, 1));

	    var index = -1,
	        length = props.length,
	        result = {};

	    while (++index < length) {
	      var key = props[index];
	      result[key] = object[key];
	    }
	    return result;
	  }

	  /**
	   * Creates a two dimensional array of an object's key-value pairs,
	   * i.e. `[[key1, value1], [key2, value2]]`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns new array of key-value pairs.
	   * @example
	   *
	   * _.pairs({ 'barney': 36, 'fred': 40 });
	   * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
	   */
	  function pairs(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);

	    while (++index < length) {
	      var key = props[index];
	      result[index] = [key, object[key]];
	    }
	    return result;
	  }

	  /**
	   * Creates a shallow clone of `object` composed of the specified properties.
	   * Property names may be specified as individual arguments or as arrays of
	   * property names. If a callback is provided it will be executed for each
	   * property of `object` picking the properties the callback returns truey
	   * for. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, key, object).
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The source object.
	   * @param {Function|...string|string[]} [callback] The function called per
	   *  iteration or property names to pick, specified as individual property
	   *  names or arrays of property names.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns an object composed of the picked properties.
	   * @example
	   *
	   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
	   * // => { 'name': 'fred' }
	   *
	   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
	   *   return key.charAt(0) != '_';
	   * });
	   * // => { 'name': 'fred' }
	   */
	  function pick(object) {
	    var index = -1,
	        props = baseFlatten(arguments, true, false, 1),
	        length = props.length,
	        result = {};

	    while (++index < length) {
	      var key = props[index];
	      if (key in object) {
	        result[key] = object[key];
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an array composed of the own enumerable property values of `object`.
	   *
	   * @static
	   * @memberOf _
	   * @category Objects
	   * @param {Object} object The object to inspect.
	   * @returns {Array} Returns an array of property values.
	   * @example
	   *
	   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => [1, 2, 3] (property order is not guaranteed across environments)
	   */
	  function values(object) {
	    var index = -1,
	        props = keys(object),
	        length = props.length,
	        result = Array(length);

	    while (++index < length) {
	      result[index] = object[props[index]];
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Checks if a given value is present in a collection using strict equality
	   * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
	   * offset from the end of the collection.
	   *
	   * @static
	   * @memberOf _
	   * @alias include
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {*} target The value to check for.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
	   * @example
	   *
	   * _.contains([1, 2, 3], 1);
	   * // => true
	   *
	   * _.contains([1, 2, 3], 1, 2);
	   * // => false
	   *
	   * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
	   * // => true
	   *
	   * _.contains('pebbles', 'eb');
	   * // => true
	   */
	  function contains(collection, target) {
	    var indexOf = getIndexOf(),
	        length = collection ? collection.length : 0,
	        result = false;
	    if (length && typeof length == 'number') {
	      result = indexOf(collection, target) > -1;
	    } else {
	      forOwn(collection, function(value) {
	        return (result = value === target) && indicatorObject;
	      });
	    }
	    return result;
	  }

	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of `collection` through the callback. The corresponding value
	   * of each key is the number of times the key was returned by the callback.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': 1, '6': 2 }
	   *
	   * _.countBy(['one', 'two', 'three'], 'length');
	   * // => { '3': 2, '5': 1 }
	   */
	  var countBy = createAggregator(function(result, value, key) {
	    (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
	  });

	  /**
	   * Checks if the given callback returns truey value for **all** elements of
	   * a collection. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias all
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if all elements passed the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.every([true, 1, null, 'yes']);
	   * // => false
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.every(characters, 'age');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.every(characters, { 'age': 36 });
	   * // => false
	   */
	  function every(collection, callback, thisArg) {
	    var result = true;
	    callback = createCallback(callback, thisArg, 3);

	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (typeof length == 'number') {
	      while (++index < length) {
	        if (!(result = !!callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        return !(result = !!callback(value, index, collection)) && indicatorObject;
	      });
	    }
	    return result;
	  }

	  /**
	   * Iterates over elements of a collection, returning an array of all elements
	   * the callback returns truey for. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias select
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that passed the callback check.
	   * @example
	   *
	   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [2, 4, 6]
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.filter(characters, 'blocked');
	   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
	   *
	   * // using "_.where" callback shorthand
	   * _.filter(characters, { 'age': 36 });
	   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
	   */
	  function filter(collection, callback, thisArg) {
	    var result = [];
	    callback = createCallback(callback, thisArg, 3);

	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        if (callback(value, index, collection)) {
	          result.push(value);
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Iterates over elements of a collection, returning the first element that
	   * the callback returns truey for. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias detect, findWhere
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the found element, else `undefined`.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36, 'blocked': false },
	   *   { 'name': 'fred',    'age': 40, 'blocked': true },
	   *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
	   * ];
	   *
	   * _.find(characters, function(chr) {
	   *   return chr.age < 40;
	   * });
	   * // => { 'name': 'barney', 'age': 36, 'blocked': false }
	   *
	   * // using "_.where" callback shorthand
	   * _.find(characters, { 'age': 1 });
	   * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
	   *
	   * // using "_.pluck" callback shorthand
	   * _.find(characters, 'blocked');
	   * // => { 'name': 'fred', 'age': 40, 'blocked': true }
	   */
	  function find(collection, callback, thisArg) {
	    callback = createCallback(callback, thisArg, 3);

	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (callback(value, index, collection)) {
	          return value;
	        }
	      }
	    } else {
	      var result;
	      forOwn(collection, function(value, index, collection) {
	        if (callback(value, index, collection)) {
	          result = value;
	          return indicatorObject;
	        }
	      });
	      return result;
	    }
	  }

	  /**
	   * Examines each element in a `collection`, returning the first that
	   * has the given properties. When checking `properties`, this method
	   * performs a deep comparison between values to determine if they are
	   * equivalent to each other.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Object} properties The object of property values to filter by.
	   * @returns {*} Returns the found element, else `undefined`.
	   * @example
	   *
	   * var food = [
	   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
	   *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
	   *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' }
	   * ];
	   *
	   * _.findWhere(food, { 'type': 'vegetable' });
	   * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
	   */
	  function findWhere(object, properties) {
	    return where(object, properties, true);
	  }

	  /**
	   * Iterates over elements of a collection, executing the callback for each
	   * element. The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection). Callbacks may exit iteration early by
	   * explicitly returning `false`.
	   *
	   * Note: As with other "Collections" methods, objects with a `length` property
	   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	   * may be used for object iteration.
	   *
	   * @static
	   * @memberOf _
	   * @alias each
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|string} Returns `collection`.
	   * @example
	   *
	   * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
	   * // => logs each number and returns '1,2,3'
	   *
	   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
	   * // => logs each number and returns the object (property order is not guaranteed across environments)
	   */
	  function forEach(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0;

	    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
	    if (typeof length == 'number') {
	      while (++index < length) {
	        if (callback(collection[index], index, collection) === indicatorObject) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, callback);
	    }
	  }

	  /**
	   * This method is like `_.forEach` except that it iterates over elements
	   * of a `collection` from right to left.
	   *
	   * @static
	   * @memberOf _
	   * @alias eachRight
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array|Object|string} Returns `collection`.
	   * @example
	   *
	   * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
	   * // => logs each number from right to left and returns '3,2,1'
	   */
	  function forEachRight(collection, callback) {
	    var length = collection ? collection.length : 0;
	    if (typeof length == 'number') {
	      while (length--) {
	        if (callback(collection[length], length, collection) === false) {
	          break;
	        }
	      }
	    } else {
	      var props = keys(collection);
	      length = props.length;
	      forOwn(collection, function(value, key, collection) {
	        key = props ? props[--length] : --length;
	        return callback(collection[key], key, collection) === false && indicatorObject;
	      });
	    }
	  }

	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of a collection through the callback. The corresponding value
	   * of each key is an array of the elements responsible for generating the key.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
	   * // => { '4': [4.2], '6': [6.1, 6.4] }
	   *
	   * // using "_.pluck" callback shorthand
	   * _.groupBy(['one', 'two', 'three'], 'length');
	   * // => { '3': ['one', 'two'], '5': ['three'] }
	   */
	  var groupBy = createAggregator(function(result, value, key) {
	    (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
	  });

	  /**
	   * Creates an object composed of keys generated from the results of running
	   * each element of the collection through the given callback. The corresponding
	   * value of each key is the last element responsible for generating the key.
	   * The callback is bound to `thisArg` and invoked with three arguments;
	   * (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Object} Returns the composed aggregate object.
	   * @example
	   *
	   * var keys = [
	   *   { 'dir': 'left', 'code': 97 },
	   *   { 'dir': 'right', 'code': 100 }
	   * ];
	   *
	   * _.indexBy(keys, 'dir');
	   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	   *
	   * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
	   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	   *
	   * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
	   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	   */
	  var indexBy = createAggregator(function(result, value, key) {
	    result[key] = value;
	  });

	  /**
	   * Invokes the method named by `methodName` on each element in the `collection`
	   * returning an array of the results of each invoked method. Additional arguments
	   * will be provided to each invoked method. If `methodName` is a function it
	   * will be invoked for, and `this` bound to, each element in the `collection`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|string} methodName The name of the method to invoke or
	   *  the function invoked per iteration.
	   * @param {...*} [arg] Arguments to invoke the method with.
	   * @returns {Array} Returns a new array of the results of each invoked method.
	   * @example
	   *
	   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	   * // => [[1, 5, 7], [1, 2, 3]]
	   *
	   * _.invoke([123, 456], String.prototype.split, '');
	   * // => [['1', '2', '3'], ['4', '5', '6']]
	   */
	  function invoke(collection, methodName) {
	    var args = slice(arguments, 2),
	        index = -1,
	        isFunc = typeof methodName == 'function',
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    forEach(collection, function(value) {
	      result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
	    });
	    return result;
	  }

	  /**
	   * Creates an array of values by running each element in the collection
	   * through the callback. The callback is bound to `thisArg` and invoked with
	   * three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias collect
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of the results of each `callback` execution.
	   * @example
	   *
	   * _.map([1, 2, 3], function(num) { return num * 3; });
	   * // => [3, 6, 9]
	   *
	   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
	   * // => [3, 6, 9] (property order is not guaranteed across environments)
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.map(characters, 'name');
	   * // => ['barney', 'fred']
	   */
	  function map(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0;

	    callback = createCallback(callback, thisArg, 3);
	    if (typeof length == 'number') {
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = callback(collection[index], index, collection);
	      }
	    } else {
	      result = [];
	      forOwn(collection, function(value, key, collection) {
	        result[++index] = callback(value, key, collection);
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the maximum value of a collection. If the collection is empty or
	   * falsey `-Infinity` is returned. If a callback is provided it will be executed
	   * for each value in the collection to generate the criterion by which the value
	   * is ranked. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the maximum value.
	   * @example
	   *
	   * _.max([4, 2, 8, 6]);
	   * // => 8
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.max(characters, function(chr) { return chr.age; });
	   * // => { 'name': 'fred', 'age': 40 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.max(characters, 'age');
	   * // => { 'name': 'fred', 'age': 40 };
	   */
	  function max(collection, callback, thisArg) {
	    var computed = -Infinity,
	        result = computed;

	    // allows working with functions like `_.map` without using
	    // their `index` argument as a callback
	    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
	      callback = null;
	    }
	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (callback == null && typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = createCallback(callback, thisArg, 3);

	      forEach(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current > computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the minimum value of a collection. If the collection is empty or
	   * falsey `Infinity` is returned. If a callback is provided it will be executed
	   * for each value in the collection to generate the criterion by which the value
	   * is ranked. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the minimum value.
	   * @example
	   *
	   * _.min([4, 2, 8, 6]);
	   * // => 2
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.min(characters, function(chr) { return chr.age; });
	   * // => { 'name': 'barney', 'age': 36 };
	   *
	   * // using "_.pluck" callback shorthand
	   * _.min(characters, 'age');
	   * // => { 'name': 'barney', 'age': 36 };
	   */
	  function min(collection, callback, thisArg) {
	    var computed = Infinity,
	        result = computed;

	    // allows working with functions like `_.map` without using
	    // their `index` argument as a callback
	    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
	      callback = null;
	    }
	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (callback == null && typeof length == 'number') {
	      while (++index < length) {
	        var value = collection[index];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      callback = createCallback(callback, thisArg, 3);

	      forEach(collection, function(value, index, collection) {
	        var current = callback(value, index, collection);
	        if (current < computed) {
	          computed = current;
	          result = value;
	        }
	      });
	    }
	    return result;
	  }

	  /**
	   * Retrieves the value of a specified property from all elements in the collection.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {string} property The name of the property to pluck.
	   * @returns {Array} Returns a new array of property values.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * _.pluck(characters, 'name');
	   * // => ['barney', 'fred']
	   */
	  var pluck = map;

	  /**
	   * Reduces a collection to a value which is the accumulated result of running
	   * each element in the collection through the callback, where each successive
	   * callback execution consumes the return value of the previous execution. If
	   * `accumulator` is not provided the first element of the collection will be
	   * used as the initial `accumulator` value. The callback is bound to `thisArg`
	   * and invoked with four arguments; (accumulator, value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @alias foldl, inject
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [accumulator] Initial value of the accumulator.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the accumulated value.
	   * @example
	   *
	   * var sum = _.reduce([1, 2, 3], function(sum, num) {
	   *   return sum + num;
	   * });
	   * // => 6
	   *
	   * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	   *   result[key] = num * 3;
	   *   return result;
	   * }, {});
	   * // => { 'a': 3, 'b': 6, 'c': 9 }
	   */
	  function reduce(collection, callback, accumulator, thisArg) {
	    if (!collection) return accumulator;
	    var noaccum = arguments.length < 3;
	    callback = createCallback(callback, thisArg, 4);

	    var index = -1,
	        length = collection.length;

	    if (typeof length == 'number') {
	      if (noaccum) {
	        accumulator = collection[++index];
	      }
	      while (++index < length) {
	        accumulator = callback(accumulator, collection[index], index, collection);
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        accumulator = noaccum
	          ? (noaccum = false, value)
	          : callback(accumulator, value, index, collection)
	      });
	    }
	    return accumulator;
	  }

	  /**
	   * This method is like `_.reduce` except that it iterates over elements
	   * of a `collection` from right to left.
	   *
	   * @static
	   * @memberOf _
	   * @alias foldr
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function} [callback=identity] The function called per iteration.
	   * @param {*} [accumulator] Initial value of the accumulator.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the accumulated value.
	   * @example
	   *
	   * var list = [[0, 1], [2, 3], [4, 5]];
	   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
	   * // => [4, 5, 2, 3, 0, 1]
	   */
	  function reduceRight(collection, callback, accumulator, thisArg) {
	    var noaccum = arguments.length < 3;
	    callback = createCallback(callback, thisArg, 4);
	    forEachRight(collection, function(value, index, collection) {
	      accumulator = noaccum
	        ? (noaccum = false, value)
	        : callback(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }

	  /**
	   * The opposite of `_.filter` this method returns the elements of a
	   * collection that the callback does **not** return truey for.
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of elements that failed the callback check.
	   * @example
	   *
	   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	   * // => [1, 3, 5]
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.reject(characters, 'blocked');
	   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
	   *
	   * // using "_.where" callback shorthand
	   * _.reject(characters, { 'age': 36 });
	   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
	   */
	  function reject(collection, callback, thisArg) {
	    callback = createCallback(callback, thisArg, 3);
	    return filter(collection, function(value, index, collection) {
	      return !callback(value, index, collection);
	    });
	  }

	  /**
	   * Retrieves a random element or `n` random elements from a collection.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to sample.
	   * @param {number} [n] The number of elements to sample.
	   * @param- {Object} [guard] Allows working with functions like `_.map`
	   *  without using their `index` arguments as `n`.
	   * @returns {Array} Returns the random sample(s) of `collection`.
	   * @example
	   *
	   * _.sample([1, 2, 3, 4]);
	   * // => 2
	   *
	   * _.sample([1, 2, 3, 4], 2);
	   * // => [3, 1]
	   */
	  function sample(collection, n, guard) {
	    if (collection && typeof collection.length != 'number') {
	      collection = values(collection);
	    }
	    if (n == null || guard) {
	      return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
	    }
	    var result = shuffle(collection);
	    result.length = nativeMin(nativeMax(0, n), result.length);
	    return result;
	  }

	  /**
	   * Creates an array of shuffled values, using a version of the Fisher-Yates
	   * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to shuffle.
	   * @returns {Array} Returns a new shuffled collection.
	   * @example
	   *
	   * _.shuffle([1, 2, 3, 4, 5, 6]);
	   * // => [4, 1, 6, 3, 5, 2]
	   */
	  function shuffle(collection) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    forEach(collection, function(value) {
	      var rand = baseRandom(0, ++index);
	      result[index] = result[rand];
	      result[rand] = value;
	    });
	    return result;
	  }

	  /**
	   * Gets the size of the `collection` by returning `collection.length` for arrays
	   * and array-like objects or the number of own enumerable properties for objects.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to inspect.
	   * @returns {number} Returns `collection.length` or number of own enumerable properties.
	   * @example
	   *
	   * _.size([1, 2]);
	   * // => 2
	   *
	   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
	   * // => 3
	   *
	   * _.size('pebbles');
	   * // => 7
	   */
	  function size(collection) {
	    var length = collection ? collection.length : 0;
	    return typeof length == 'number' ? length : keys(collection).length;
	  }

	  /**
	   * Checks if the callback returns a truey value for **any** element of a
	   * collection. The function returns as soon as it finds a passing value and
	   * does not iterate over the entire collection. The callback is bound to
	   * `thisArg` and invoked with three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias any
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {boolean} Returns `true` if any element passed the callback check,
	   *  else `false`.
	   * @example
	   *
	   * _.some([null, 0, 'yes', false], Boolean);
	   * // => true
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'blocked': false },
	   *   { 'name': 'fred',   'age': 40, 'blocked': true }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.some(characters, 'blocked');
	   * // => true
	   *
	   * // using "_.where" callback shorthand
	   * _.some(characters, { 'age': 1 });
	   * // => false
	   */
	  function some(collection, callback, thisArg) {
	    var result;
	    callback = createCallback(callback, thisArg, 3);

	    var index = -1,
	        length = collection ? collection.length : 0;

	    if (typeof length == 'number') {
	      while (++index < length) {
	        if ((result = callback(collection[index], index, collection))) {
	          break;
	        }
	      }
	    } else {
	      forOwn(collection, function(value, index, collection) {
	        return (result = callback(value, index, collection)) && indicatorObject;
	      });
	    }
	    return !!result;
	  }

	  /**
	   * Creates an array of elements, sorted in ascending order by the results of
	   * running each element in a collection through the callback. This method
	   * performs a stable sort, that is, it will preserve the original sort order
	   * of equal elements. The callback is bound to `thisArg` and invoked with
	   * three arguments; (value, index|key, collection).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an array of property names is provided for `callback` the collection
	   * will be sorted by each property value.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Array|Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new array of sorted elements.
	   * @example
	   *
	   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
	   * // => [3, 1, 2]
	   *
	   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
	   * // => [3, 1, 2]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36 },
	   *   { 'name': 'fred',    'age': 40 },
	   *   { 'name': 'barney',  'age': 26 },
	   *   { 'name': 'fred',    'age': 30 }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.map(_.sortBy(characters, 'age'), _.values);
	   * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
	   *
	   * // sorting by multiple properties
	   * _.map(_.sortBy(characters, ['name', 'age']), _.values);
	   * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
	   */
	  function sortBy(collection, callback, thisArg) {
	    var index = -1,
	        length = collection ? collection.length : 0,
	        result = Array(typeof length == 'number' ? length : 0);

	    callback = createCallback(callback, thisArg, 3);
	    forEach(collection, function(value, key, collection) {
	      result[++index] = {
	        'criteria': [callback(value, key, collection)],
	        'index': index,
	        'value': value
	      };
	    });

	    length = result.length;
	    result.sort(compareAscending);
	    while (length--) {
	      result[length] = result[length].value;
	    }
	    return result;
	  }

	  /**
	   * Converts the `collection` to an array.
	   *
	   * @static
	   * @memberOf _
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to convert.
	   * @returns {Array} Returns the new converted array.
	   * @example
	   *
	   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
	   * // => [2, 3, 4]
	   */
	  function toArray(collection) {
	    if (isArray(collection)) {
	      return slice(collection);
	    }
	    if (collection && typeof collection.length == 'number') {
	      return map(collection);
	    }
	    return values(collection);
	  }

	  /**
	   * Performs a deep comparison of each element in a `collection` to the given
	   * `properties` object, returning an array of all elements that have equivalent
	   * property values.
	   *
	   * @static
	   * @memberOf _
	   * @type Function
	   * @category Collections
	   * @param {Array|Object|string} collection The collection to iterate over.
	   * @param {Object} props The object of property values to filter by.
	   * @returns {Array} Returns a new array of elements that have the given properties.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
	   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
	   * ];
	   *
	   * _.where(characters, { 'age': 36 });
	   * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
	   *
	   * _.where(characters, { 'pets': ['dino'] });
	   * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
	   */
	  function where(collection, properties, first) {
	    return (first && isEmpty(properties))
	      ? undefined
	      : (first ? find : filter)(collection, properties);
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates an array with all falsey values removed. The values `false`, `null`,
	   * `0`, `""`, `undefined`, and `NaN` are all falsey.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to compact.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.compact([0, 1, false, 2, '', 3]);
	   * // => [1, 2, 3]
	   */
	  function compact(array) {
	    var index = -1,
	        length = array ? array.length : 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (value) {
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Creates an array excluding all values of the provided arrays using strict
	   * equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {...Array} [values] The arrays of values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
	   * // => [1, 3, 4]
	   */
	  function difference(array) {
	    return baseDifference(array, baseFlatten(arguments, true, true, 1));
	  }

	  /**
	   * Gets the first element or first `n` elements of an array. If a callback
	   * is provided elements at the beginning of the array are returned as long
	   * as the callback returns truey. The callback is bound to `thisArg` and
	   * invoked with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias head, take
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the first element(s) of `array`.
	   * @example
	   *
	   * _.first([1, 2, 3]);
	   * // => 1
	   *
	   * _.first([1, 2, 3], 2);
	   * // => [1, 2]
	   *
	   * _.first([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [1, 2]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.first(characters, 'blocked');
	   * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
	   * // => ['barney', 'fred']
	   */
	  function first(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;

	    if (typeof callback != 'number' && callback != null) {
	      var index = -1;
	      callback = createCallback(callback, thisArg, 3);
	      while (++index < length && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = callback;
	      if (n == null || thisArg) {
	        return array ? array[0] : undefined;
	      }
	    }
	    return slice(array, 0, nativeMin(nativeMax(0, n), length));
	  }

	  /**
	   * Flattens a nested array (the nesting can be to any depth). If `isShallow`
	   * is truey, the array will only be flattened a single level. If a callback
	   * is provided each element of the array is passed through the callback before
	   * flattening. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to flatten.
	   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a new flattened array.
	   * @example
	   *
	   * _.flatten([1, [2], [3, [[4]]]]);
	   * // => [1, 2, 3, 4];
	   *
	   * _.flatten([1, [2], [3, [[4]]]], true);
	   * // => [1, 2, 3, [[4]]];
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
	   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.flatten(characters, 'pets');
	   * // => ['hoppy', 'baby puss', 'dino']
	   */
	  function flatten(array, isShallow) {
	    return baseFlatten(array, isShallow);
	  }

	  /**
	   * Gets the index at which the first occurrence of `value` is found using
	   * strict equality for comparisons, i.e. `===`. If the array is already sorted
	   * providing `true` for `fromIndex` will run a faster binary search.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	   *  to perform a binary search on a sorted array.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 1
	   *
	   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 4
	   *
	   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
	   * // => 2
	   */
	  function indexOf(array, value, fromIndex) {
	    if (typeof fromIndex == 'number') {
	      var length = array ? array.length : 0;
	      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
	    } else if (fromIndex) {
	      var index = sortedIndex(array, value);
	      return array[index] === value ? index : -1;
	    }
	    return baseIndexOf(array, value, fromIndex);
	  }

	  /**
	   * Gets all but the last element or last `n` elements of an array. If a
	   * callback is provided elements at the end of the array are excluded from
	   * the result as long as the callback returns truey. The callback is bound
	   * to `thisArg` and invoked with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.initial([1, 2, 3]);
	   * // => [1, 2]
	   *
	   * _.initial([1, 2, 3], 2);
	   * // => [1]
	   *
	   * _.initial([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [1]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.initial(characters, 'blocked');
	   * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
	   *
	   * // using "_.where" callback shorthand
	   * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
	   * // => ['barney', 'fred']
	   */
	  function initial(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;

	    if (typeof callback != 'number' && callback != null) {
	      var index = length;
	      callback = createCallback(callback, thisArg, 3);
	      while (index-- && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : callback || n;
	    }
	    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
	  }

	  /**
	   * Creates an array of unique values present in all provided arrays using
	   * strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {...Array} [array] The arrays to inspect.
	   * @returns {Array} Returns an array of shared values.
	   * @example
	   *
	   * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
	   * // => [1, 2]
	   */
	  function intersection() {
	    var args = [],
	        argsIndex = -1,
	        argsLength = arguments.length;

	    while (++argsIndex < argsLength) {
	      var value = arguments[argsIndex];
	       if (isArray(value) || isArguments(value)) {
	         args.push(value);
	       }
	    }
	    var array = args[0],
	        index = -1,
	        indexOf = getIndexOf(),
	        length = array ? array.length : 0,
	        result = [];

	    outer:
	    while (++index < length) {
	      value = array[index];
	      if (indexOf(result, value) < 0) {
	        var argsIndex = argsLength;
	        while (--argsIndex) {
	          if (indexOf(args[argsIndex], value) < 0) {
	            continue outer;
	          }
	        }
	        result.push(value);
	      }
	    }
	    return result;
	  }

	  /**
	   * Gets the last element or last `n` elements of an array. If a callback is
	   * provided elements at the end of the array are returned as long as the
	   * callback returns truey. The callback is bound to `thisArg` and invoked
	   * with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback] The function called
	   *  per element or the number of elements to return. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {*} Returns the last element(s) of `array`.
	   * @example
	   *
	   * _.last([1, 2, 3]);
	   * // => 3
	   *
	   * _.last([1, 2, 3], 2);
	   * // => [2, 3]
	   *
	   * _.last([1, 2, 3], function(num) {
	   *   return num > 1;
	   * });
	   * // => [2, 3]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.pluck(_.last(characters, 'blocked'), 'name');
	   * // => ['fred', 'pebbles']
	   *
	   * // using "_.where" callback shorthand
	   * _.last(characters, { 'employer': 'na' });
	   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
	   */
	  function last(array, callback, thisArg) {
	    var n = 0,
	        length = array ? array.length : 0;

	    if (typeof callback != 'number' && callback != null) {
	      var index = length;
	      callback = createCallback(callback, thisArg, 3);
	      while (index-- && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = callback;
	      if (n == null || thisArg) {
	        return array ? array[length - 1] : undefined;
	      }
	    }
	    return slice(array, nativeMax(0, length - n));
	  }

	  /**
	   * Gets the index at which the last occurrence of `value` is found using strict
	   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
	   * as the offset from the end of the collection.
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} [fromIndex=array.length-1] The index to search from.
	   * @returns {number} Returns the index of the matched value or `-1`.
	   * @example
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
	   * // => 4
	   *
	   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
	   * // => 1
	   */
	  function lastIndexOf(array, value, fromIndex) {
	    var index = array ? array.length : 0;
	    if (typeof fromIndex == 'number') {
	      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
	    }
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Creates an array of numbers (positive and/or negative) progressing from
	   * `start` up to but not including `end`. If `start` is less than `stop` a
	   * zero-length range is created unless a negative `step` is specified.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {number} [start=0] The start of the range.
	   * @param {number} end The end of the range.
	   * @param {number} [step=1] The value to increment or decrement by.
	   * @returns {Array} Returns a new range array.
	   * @example
	   *
	   * _.range(4);
	   * // => [0, 1, 2, 3]
	   *
	   * _.range(1, 5);
	   * // => [1, 2, 3, 4]
	   *
	   * _.range(0, 20, 5);
	   * // => [0, 5, 10, 15]
	   *
	   * _.range(0, -4, -1);
	   * // => [0, -1, -2, -3]
	   *
	   * _.range(1, 4, 0);
	   * // => [1, 1, 1]
	   *
	   * _.range(0);
	   * // => []
	   */
	  function range(start, end, step) {
	    start = +start || 0;
	    step =  (+step || 1);

	    if (end == null) {
	      end = start;
	      start = 0;
	    }
	    // use `Array(length)` so engines like Chakra and V8 avoid slower modes
	    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
	    var index = -1,
	        length = nativeMax(0, ceil((end - start) / step)),
	        result = Array(length);

	    while (++index < length) {
	      result[index] = start;
	      start += step;
	    }
	    return result;
	  }

	  /**
	   * The opposite of `_.initial` this method gets all but the first element or
	   * first `n` elements of an array. If a callback function is provided elements
	   * at the beginning of the array are excluded from the result as long as the
	   * callback returns truey. The callback is bound to `thisArg` and invoked
	   * with three arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias drop, tail
	   * @category Arrays
	   * @param {Array} array The array to query.
	   * @param {Function|Object|number|string} [callback=1] The function called
	   *  per element or the number of elements to exclude. If a property name or
	   *  object is provided it will be used to create a "_.pluck" or "_.where"
	   *  style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a slice of `array`.
	   * @example
	   *
	   * _.rest([1, 2, 3]);
	   * // => [2, 3]
	   *
	   * _.rest([1, 2, 3], 2);
	   * // => [3]
	   *
	   * _.rest([1, 2, 3], function(num) {
	   *   return num < 3;
	   * });
	   * // => [3]
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
	   *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
	   *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
	   * ];
	   *
	   * // using "_.pluck" callback shorthand
	   * _.pluck(_.rest(characters, 'blocked'), 'name');
	   * // => ['fred', 'pebbles']
	   *
	   * // using "_.where" callback shorthand
	   * _.rest(characters, { 'employer': 'slate' });
	   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
	   */
	  function rest(array, callback, thisArg) {
	    if (typeof callback != 'number' && callback != null) {
	      var n = 0,
	          index = -1,
	          length = array ? array.length : 0;

	      callback = createCallback(callback, thisArg, 3);
	      while (++index < length && callback(array[index], index, array)) {
	        n++;
	      }
	    } else {
	      n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
	    }
	    return slice(array, n);
	  }

	  /**
	   * Uses a binary search to determine the smallest index at which a value
	   * should be inserted into a given sorted array in order to maintain the sort
	   * order of the array. If a callback is provided it will be executed for
	   * `value` and each element of `array` to compute their sort ranking. The
	   * callback is bound to `thisArg` and invoked with one argument; (value).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to evaluate.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {number} Returns the index at which `value` should be inserted
	   *  into `array`.
	   * @example
	   *
	   * _.sortedIndex([20, 30, 50], 40);
	   * // => 2
	   *
	   * // using "_.pluck" callback shorthand
	   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	   * // => 2
	   *
	   * var dict = {
	   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
	   * };
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return dict.wordToNumber[word];
	   * });
	   * // => 2
	   *
	   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
	   *   return this.wordToNumber[word];
	   * }, dict);
	   * // => 2
	   */
	  function sortedIndex(array, value, callback, thisArg) {
	    var low = 0,
	        high = array ? array.length : low;

	    // explicitly reference `identity` for better inlining in Firefox
	    callback = callback ? createCallback(callback, thisArg, 1) : identity;
	    value = callback(value);

	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      (callback(array[mid]) < value)
	        ? low = mid + 1
	        : high = mid;
	    }
	    return low;
	  }

	  /**
	   * Creates an array of unique values, in order, of the provided arrays using
	   * strict equality for comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {...Array} [array] The arrays to inspect.
	   * @returns {Array} Returns an array of combined values.
	   * @example
	   *
	   * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
	   * // => [1, 2, 3, 5, 4]
	   */
	  function union() {
	    return baseUniq(baseFlatten(arguments, true, true));
	  }

	  /**
	   * Creates a duplicate-value-free version of an array using strict equality
	   * for comparisons, i.e. `===`. If the array is sorted, providing
	   * `true` for `isSorted` will use a faster algorithm. If a callback is provided
	   * each element of `array` is passed through the callback before uniqueness
	   * is computed. The callback is bound to `thisArg` and invoked with three
	   * arguments; (value, index, array).
	   *
	   * If a property name is provided for `callback` the created "_.pluck" style
	   * callback will return the property value of the given element.
	   *
	   * If an object is provided for `callback` the created "_.where" style callback
	   * will return `true` for elements that have the properties of the given object,
	   * else `false`.
	   *
	   * @static
	   * @memberOf _
	   * @alias unique
	   * @category Arrays
	   * @param {Array} array The array to process.
	   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
	   * @param {Function|Object|string} [callback=identity] The function called
	   *  per iteration. If a property name or object is provided it will be used
	   *  to create a "_.pluck" or "_.where" style callback, respectively.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns a duplicate-value-free array.
	   * @example
	   *
	   * _.uniq([1, 2, 1, 3, 1]);
	   * // => [1, 2, 3]
	   *
	   * _.uniq([1, 1, 2, 2, 3], true);
	   * // => [1, 2, 3]
	   *
	   * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
	   * // => ['A', 'b', 'C']
	   *
	   * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
	   * // => [1, 2.5, 3]
	   *
	   * // using "_.pluck" callback shorthand
	   * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	   * // => [{ 'x': 1 }, { 'x': 2 }]
	   */
	  function uniq(array, isSorted, callback, thisArg) {
	    // juggle arguments
	    if (typeof isSorted != 'boolean' && isSorted != null) {
	      thisArg = callback;
	      callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
	      isSorted = false;
	    }
	    if (callback != null) {
	      callback = createCallback(callback, thisArg, 3);
	    }
	    return baseUniq(array, isSorted, callback);
	  }

	  /**
	   * Creates an array excluding all provided values using strict equality for
	   * comparisons, i.e. `===`.
	   *
	   * @static
	   * @memberOf _
	   * @category Arrays
	   * @param {Array} array The array to filter.
	   * @param {...*} [value] The values to exclude.
	   * @returns {Array} Returns a new array of filtered values.
	   * @example
	   *
	   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
	   * // => [2, 3, 4]
	   */
	  function without(array) {
	    return baseDifference(array, slice(arguments, 1));
	  }

	  /**
	   * Creates an array of grouped elements, the first of which contains the first
	   * elements of the given arrays, the second of which contains the second
	   * elements of the given arrays, and so on.
	   *
	   * @static
	   * @memberOf _
	   * @alias unzip
	   * @category Arrays
	   * @param {...Array} [array] Arrays to process.
	   * @returns {Array} Returns a new array of grouped elements.
	   * @example
	   *
	   * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	   * // => [['fred', 30, true], ['barney', 40, false]]
	   */
	  function zip() {
	    var index = -1,
	        length = max(pluck(arguments, 'length')),
	        result = Array(length < 0 ? 0 : length);

	    while (++index < length) {
	      result[index] = pluck(arguments, index);
	    }
	    return result;
	  }

	  /**
	   * Creates an object composed from arrays of `keys` and `values`. Provide
	   * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
	   * or two arrays, one of `keys` and one of corresponding `values`.
	   *
	   * @static
	   * @memberOf _
	   * @alias object
	   * @category Arrays
	   * @param {Array} keys The array of keys.
	   * @param {Array} [values=[]] The array of values.
	   * @returns {Object} Returns an object composed of the given keys and
	   *  corresponding values.
	   * @example
	   *
	   * _.zipObject(['fred', 'barney'], [30, 40]);
	   * // => { 'fred': 30, 'barney': 40 }
	   */
	  function zipObject(keys, values) {
	    var index = -1,
	        length = keys ? keys.length : 0,
	        result = {};

	    if (!values && length && !isArray(keys[0])) {
	      values = [];
	    }
	    while (++index < length) {
	      var key = keys[index];
	      if (values) {
	        result[key] = values[index];
	      } else if (key) {
	        result[key[0]] = key[1];
	      }
	    }
	    return result;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a function that executes `func`, with  the `this` binding and
	   * arguments of the created function, only after being called `n` times.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {number} n The number of times the function must be called before
	   *  `func` is executed.
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var saves = ['profile', 'settings'];
	   *
	   * var done = _.after(saves.length, function() {
	   *   console.log('Done saving!');
	   * });
	   *
	   * _.forEach(saves, function(type) {
	   *   asyncSave({ 'type': type, 'complete': done });
	   * });
	   * // => logs 'Done saving!', after all saves have completed
	   */
	  function after(n, func) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    return function() {
	      if (--n < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  }

	  /**
	   * Creates a function that, when called, invokes `func` with the `this`
	   * binding of `thisArg` and prepends any additional `bind` arguments to those
	   * provided to the bound function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to bind.
	   * @param {*} [thisArg] The `this` binding of `func`.
	   * @param {...*} [arg] Arguments to be partially applied.
	   * @returns {Function} Returns the new bound function.
	   * @example
	   *
	   * var func = function(greeting) {
	   *   return greeting + ' ' + this.name;
	   * };
	   *
	   * func = _.bind(func, { 'name': 'fred' }, 'hi');
	   * func();
	   * // => 'hi fred'
	   */
	  function bind(func, thisArg) {
	    return arguments.length > 2
	      ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
	      : createWrapper(func, 1, null, null, thisArg);
	  }

	  /**
	   * Binds methods of an object to the object itself, overwriting the existing
	   * method. Method names may be specified as individual arguments or as arrays
	   * of method names. If no method names are provided all the function properties
	   * of `object` will be bound.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Object} object The object to bind and assign the bound methods to.
	   * @param {...string} [methodName] The object method names to
	   *  bind, specified as individual method names or arrays of method names.
	   * @returns {Object} Returns `object`.
	   * @example
	   *
	   * var view = {
	   *   'label': 'docs',
	   *   'onClick': function() { console.log('clicked ' + this.label); }
	   * };
	   *
	   * _.bindAll(view);
	   * jQuery('#docs').on('click', view.onClick);
	   * // => logs 'clicked docs', when the button is clicked
	   */
	  function bindAll(object) {
	    var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
	        index = -1,
	        length = funcs.length;

	    while (++index < length) {
	      var key = funcs[index];
	      object[key] = createWrapper(object[key], 1, null, null, object);
	    }
	    return object;
	  }

	  /**
	   * Creates a function that is the composition of the provided functions,
	   * where each function consumes the return value of the function that follows.
	   * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
	   * Each function is executed with the `this` binding of the composed function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {...Function} [func] Functions to compose.
	   * @returns {Function} Returns the new composed function.
	   * @example
	   *
	   * var realNameMap = {
	   *   'pebbles': 'penelope'
	   * };
	   *
	   * var format = function(name) {
	   *   name = realNameMap[name.toLowerCase()] || name;
	   *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	   * };
	   *
	   * var greet = function(formatted) {
	   *   return 'Hiya ' + formatted + '!';
	   * };
	   *
	   * var welcome = _.compose(greet, format);
	   * welcome('pebbles');
	   * // => 'Hiya Penelope!'
	   */
	  function compose() {
	    var funcs = arguments,
	        length = funcs.length;

	    while (length--) {
	      if (!isFunction(funcs[length])) {
	        throw new TypeError;
	      }
	    }
	    return function() {
	      var args = arguments,
	          length = funcs.length;

	      while (length--) {
	        args = [funcs[length].apply(this, args)];
	      }
	      return args[0];
	    };
	  }

	  /**
	   * Creates a function that will delay the execution of `func` until after
	   * `wait` milliseconds have elapsed since the last time it was invoked.
	   * Provide an options object to indicate that `func` should be invoked on
	   * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
	   * to the debounced function will return the result of the last `func` call.
	   *
	   * Note: If `leading` and `trailing` options are `true` `func` will be called
	   * on the trailing edge of the timeout only if the the debounced function is
	   * invoked more than once during the `wait` timeout.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to debounce.
	   * @param {number} wait The number of milliseconds to delay.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
	   * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
	   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	   * @returns {Function} Returns the new debounced function.
	   * @example
	   *
	   * // avoid costly calculations while the window size is in flux
	   * var lazyLayout = _.debounce(calculateLayout, 150);
	   * jQuery(window).on('resize', lazyLayout);
	   *
	   * // execute `sendMail` when the click event is fired, debouncing subsequent calls
	   * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	   *   'leading': true,
	   *   'trailing': false
	   * });
	   *
	   * // ensure `batchLog` is executed once after 1 second of debounced calls
	   * var source = new EventSource('/stream');
	   * source.addEventListener('message', _.debounce(batchLog, 250, {
	   *   'maxWait': 1000
	   * }, false);
	   */
	  function debounce(func, wait, options) {
	    var args,
	        maxTimeoutId,
	        result,
	        stamp,
	        thisArg,
	        timeoutId,
	        trailingCall,
	        lastCalled = 0,
	        maxWait = false,
	        trailing = true;

	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    wait = nativeMax(0, wait) || 0;
	    if (options === true) {
	      var leading = true;
	      trailing = false;
	    } else if (isObject(options)) {
	      leading = options.leading;
	      maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
	      trailing = 'trailing' in options ? options.trailing : trailing;
	    }
	    var delayed = function() {
	      var remaining = wait - (now() - stamp);
	      if (remaining <= 0) {
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        var isCalled = trailingCall;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = null;
	          }
	        }
	      } else {
	        timeoutId = setTimeout(delayed, remaining);
	      }
	    };

	    var maxDelayed = function() {
	      if (timeoutId) {
	        clearTimeout(timeoutId);
	      }
	      maxTimeoutId = timeoutId = trailingCall = undefined;
	      if (trailing || (maxWait !== wait)) {
	        lastCalled = now();
	        result = func.apply(thisArg, args);
	        if (!timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	      }
	    };

	    return function() {
	      args = arguments;
	      stamp = now();
	      thisArg = this;
	      trailingCall = trailing && (timeoutId || !leading);

	      if (maxWait === false) {
	        var leadingCall = leading && !timeoutId;
	      } else {
	        if (!maxTimeoutId && !leading) {
	          lastCalled = stamp;
	        }
	        var remaining = maxWait - (stamp - lastCalled),
	            isCalled = remaining <= 0;

	        if (isCalled) {
	          if (maxTimeoutId) {
	            maxTimeoutId = clearTimeout(maxTimeoutId);
	          }
	          lastCalled = stamp;
	          result = func.apply(thisArg, args);
	        }
	        else if (!maxTimeoutId) {
	          maxTimeoutId = setTimeout(maxDelayed, remaining);
	        }
	      }
	      if (isCalled && timeoutId) {
	        timeoutId = clearTimeout(timeoutId);
	      }
	      else if (!timeoutId && wait !== maxWait) {
	        timeoutId = setTimeout(delayed, wait);
	      }
	      if (leadingCall) {
	        isCalled = true;
	        result = func.apply(thisArg, args);
	      }
	      if (isCalled && !timeoutId && !maxTimeoutId) {
	        args = thisArg = null;
	      }
	      return result;
	    };
	  }

	  /**
	   * Defers executing the `func` function until the current call stack has cleared.
	   * Additional arguments will be provided to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to defer.
	   * @param {...*} [arg] Arguments to invoke the function with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.defer(function(text) { console.log(text); }, 'deferred');
	   * // logs 'deferred' after one or more milliseconds
	   */
	  function defer(func) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    var args = slice(arguments, 1);
	    return setTimeout(function() { func.apply(undefined, args); }, 1);
	  }

	  /**
	   * Executes the `func` function after `wait` milliseconds. Additional arguments
	   * will be provided to `func` when it is invoked.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to delay.
	   * @param {number} wait The number of milliseconds to delay execution.
	   * @param {...*} [arg] Arguments to invoke the function with.
	   * @returns {number} Returns the timer id.
	   * @example
	   *
	   * _.delay(function(text) { console.log(text); }, 1000, 'later');
	   * // => logs 'later' after one second
	   */
	  function delay(func, wait) {
	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    var args = slice(arguments, 2);
	    return setTimeout(function() { func.apply(undefined, args); }, wait);
	  }

	  /**
	   * Creates a function that memoizes the result of `func`. If `resolver` is
	   * provided it will be used to determine the cache key for storing the result
	   * based on the arguments provided to the memoized function. By default, the
	   * first argument provided to the memoized function is used as the cache key.
	   * The `func` is executed with the `this` binding of the memoized function.
	   * The result cache is exposed as the `cache` property on the memoized function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to have its output memoized.
	   * @param {Function} [resolver] A function used to resolve the cache key.
	   * @returns {Function} Returns the new memoizing function.
	   * @example
	   *
	   * var fibonacci = _.memoize(function(n) {
	   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
	   * });
	   *
	   * fibonacci(9)
	   * // => 34
	   *
	   * var data = {
	   *   'fred': { 'name': 'fred', 'age': 40 },
	   *   'pebbles': { 'name': 'pebbles', 'age': 1 }
	   * };
	   *
	   * // modifying the result cache
	   * var get = _.memoize(function(name) { return data[name]; }, _.identity);
	   * get('pebbles');
	   * // => { 'name': 'pebbles', 'age': 1 }
	   *
	   * get.cache.pebbles.name = 'penelope';
	   * get('pebbles');
	   * // => { 'name': 'penelope', 'age': 1 }
	   */
	  function memoize(func, resolver) {
	    var cache = {};
	    return function() {
	      var key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
	      return hasOwnProperty.call(cache, key)
	        ? cache[key]
	        : (cache[key] = func.apply(this, arguments));
	    };
	  }

	  /**
	   * Creates a function that is restricted to execute `func` once. Repeat calls to
	   * the function will return the value of the first call. The `func` is executed
	   * with the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to restrict.
	   * @returns {Function} Returns the new restricted function.
	   * @example
	   *
	   * var initialize = _.once(createApplication);
	   * initialize();
	   * initialize();
	   * // `initialize` executes `createApplication` once
	   */
	  function once(func) {
	    var ran,
	        result;

	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    return function() {
	      if (ran) {
	        return result;
	      }
	      ran = true;
	      result = func.apply(this, arguments);

	      // clear the `func` variable so the function may be garbage collected
	      func = null;
	      return result;
	    };
	  }

	  /**
	   * Creates a function that, when called, invokes `func` with any additional
	   * `partial` arguments prepended to those provided to the new function. This
	   * method is similar to `_.bind` except it does **not** alter the `this` binding.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to partially apply arguments to.
	   * @param {...*} [arg] Arguments to be partially applied.
	   * @returns {Function} Returns the new partially applied function.
	   * @example
	   *
	   * var greet = function(greeting, name) { return greeting + ' ' + name; };
	   * var hi = _.partial(greet, 'hi');
	   * hi('fred');
	   * // => 'hi fred'
	   */
	  function partial(func) {
	    return createWrapper(func, 16, slice(arguments, 1));
	  }

	  /**
	   * Creates a function that, when executed, will only call the `func` function
	   * at most once per every `wait` milliseconds. Provide an options object to
	   * indicate that `func` should be invoked on the leading and/or trailing edge
	   * of the `wait` timeout. Subsequent calls to the throttled function will
	   * return the result of the last `func` call.
	   *
	   * Note: If `leading` and `trailing` options are `true` `func` will be called
	   * on the trailing edge of the timeout only if the the throttled function is
	   * invoked more than once during the `wait` timeout.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {Function} func The function to throttle.
	   * @param {number} wait The number of milliseconds to throttle executions to.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
	   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
	   * @returns {Function} Returns the new throttled function.
	   * @example
	   *
	   * // avoid excessively updating the position while scrolling
	   * var throttled = _.throttle(updatePosition, 100);
	   * jQuery(window).on('scroll', throttled);
	   *
	   * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
	   * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	   *   'trailing': false
	   * }));
	   */
	  function throttle(func, wait, options) {
	    var leading = true,
	        trailing = true;

	    if (!isFunction(func)) {
	      throw new TypeError;
	    }
	    if (options === false) {
	      leading = false;
	    } else if (isObject(options)) {
	      leading = 'leading' in options ? options.leading : leading;
	      trailing = 'trailing' in options ? options.trailing : trailing;
	    }
	    options = {};
	    options.leading = leading;
	    options.maxWait = wait;
	    options.trailing = trailing;

	    return debounce(func, wait, options);
	  }

	  /**
	   * Creates a function that provides `value` to the wrapper function as its
	   * first argument. Additional arguments provided to the function are appended
	   * to those provided to the wrapper function. The wrapper is executed with
	   * the `this` binding of the created function.
	   *
	   * @static
	   * @memberOf _
	   * @category Functions
	   * @param {*} value The value to wrap.
	   * @param {Function} wrapper The wrapper function.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var p = _.wrap(_.escape, function(func, text) {
	   *   return '<p>' + func(text) + '</p>';
	   * });
	   *
	   * p('Fred, Wilma, & Pebbles');
	   * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
	   */
	  function wrap(value, wrapper) {
	    return createWrapper(wrapper, 16, [value]);
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Produces a callback bound to an optional `thisArg`. If `func` is a property
	   * name the created callback will return the property value for a given element.
	   * If `func` is an object the created callback will return `true` for elements
	   * that contain the equivalent object properties, otherwise it will return `false`.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {*} [func=identity] The value to convert to a callback.
	   * @param {*} [thisArg] The `this` binding of the created callback.
	   * @param {number} [argCount] The number of arguments the callback accepts.
	   * @returns {Function} Returns a callback function.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // wrap to create custom callback shorthands
	   * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
	   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
	   *   return !match ? func(callback, thisArg) : function(object) {
	   *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
	   *   };
	   * });
	   *
	   * _.filter(characters, 'age__gt38');
	   * // => [{ 'name': 'fred', 'age': 40 }]
	   */
	  function createCallback(func, thisArg, argCount) {
	    var type = typeof func;
	    if (func == null || type == 'function') {
	      return baseCreateCallback(func, thisArg, argCount);
	    }
	    // handle "_.pluck" style callback shorthands
	    if (type != 'object') {
	      return property(func);
	    }
	    var props = keys(func);
	    return function(object) {
	      var length = props.length,
	          result = false;

	      while (length--) {
	        if (!(result = object[props[length]] === func[props[length]])) {
	          break;
	        }
	      }
	      return result;
	    };
	  }

	  /**
	   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
	   * corresponding HTML entities.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} string The string to escape.
	   * @returns {string} Returns the escaped string.
	   * @example
	   *
	   * _.escape('Fred, Wilma, & Pebbles');
	   * // => 'Fred, Wilma, &amp; Pebbles'
	   */
	  function escape(string) {
	    return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
	  }

	  /**
	   * This method returns the first argument provided to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {*} value Any value.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * _.identity(object) === object;
	   * // => true
	   */
	  function identity(value) {
	    return value;
	  }

	  /**
	   * Adds function properties of a source object to the destination object.
	   * If `object` is a function methods will be added to its prototype as well.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Function|Object} [object=lodash] object The destination object.
	   * @param {Object} source The object of functions to add.
	   * @param {Object} [options] The options object.
	   * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
	   * @example
	   *
	   * function capitalize(string) {
	   *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	   * }
	   *
	   * _.mixin({ 'capitalize': capitalize });
	   * _.capitalize('fred');
	   * // => 'Fred'
	   *
	   * _('fred').capitalize().value();
	   * // => 'Fred'
	   *
	   * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
	   * _('fred').capitalize();
	   * // => 'Fred'
	   */
	  function mixin(object) {
	    forEach(functions(object), function(methodName) {
	      var func = lodash[methodName] = object[methodName];

	      lodash.prototype[methodName] = function() {
	        var args = [this.__wrapped__];
	        push.apply(args, arguments);

	        var result = func.apply(lodash, args);
	        return this.__chain__
	          ? new lodashWrapper(result, true)
	          : result;
	      };
	    });
	  }

	  /**
	   * Reverts the '_' variable to its previous value and returns a reference to
	   * the `lodash` function.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @returns {Function} Returns the `lodash` function.
	   * @example
	   *
	   * var lodash = _.noConflict();
	   */
	  function noConflict() {
	    root._ = oldDash;
	    return this;
	  }

	  /**
	   * A no-operation function.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @example
	   *
	   * var object = { 'name': 'fred' };
	   * _.noop(object) === undefined;
	   * // => true
	   */
	  function noop() {
	    // no operation performed
	  }

	  /**
	   * Gets the number of milliseconds that have elapsed since the Unix epoch
	   * (1 January 1970 00:00:00 UTC).
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @example
	   *
	   * var stamp = _.now();
	   * _.defer(function() { console.log(_.now() - stamp); });
	   * // => logs the number of milliseconds it took for the deferred function to be called
	   */
	  var now = isNative(now = Date.now) && now || function() {
	    return new Date().getTime();
	  };

	  /**
	   * Creates a "_.pluck" style function, which returns the `key` value of a
	   * given object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} key The name of the property to retrieve.
	   * @returns {Function} Returns the new function.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'fred',   'age': 40 },
	   *   { 'name': 'barney', 'age': 36 }
	   * ];
	   *
	   * var getName = _.property('name');
	   *
	   * _.map(characters, getName);
	   * // => ['barney', 'fred']
	   *
	   * _.sortBy(characters, getName);
	   * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
	   */
	  function property(key) {
	    return function(object) {
	      return object[key];
	    };
	  }

	  /**
	   * Produces a random number between `min` and `max` (inclusive). If only one
	   * argument is provided a number between `0` and the given number will be
	   * returned. If `floating` is truey or either `min` or `max` are floats a
	   * floating-point number will be returned instead of an integer.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {number} [min=0] The minimum possible value.
	   * @param {number} [max=1] The maximum possible value.
	   * @param {boolean} [floating=false] Specify returning a floating-point number.
	   * @returns {number} Returns a random number.
	   * @example
	   *
	   * _.random(0, 5);
	   * // => an integer between 0 and 5
	   *
	   * _.random(5);
	   * // => also an integer between 0 and 5
	   *
	   * _.random(5, true);
	   * // => a floating-point number between 0 and 5
	   *
	   * _.random(1.2, 5.2);
	   * // => a floating-point number between 1.2 and 5.2
	   */
	  function random(min, max) {
	    if (min == null && max == null) {
	      max = 1;
	    }
	    min = +min || 0;
	    if (max == null) {
	      max = min;
	      min = 0;
	    } else {
	      max = +max || 0;
	    }
	    return min + floor(nativeRandom() * (max - min + 1));
	  }

	  /**
	   * Resolves the value of property `key` on `object`. If `key` is a function
	   * it will be invoked with the `this` binding of `object` and its result returned,
	   * else the property value is returned. If `object` is falsey then `undefined`
	   * is returned.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {Object} object The object to inspect.
	   * @param {string} key The name of the property to resolve.
	   * @returns {*} Returns the resolved value.
	   * @example
	   *
	   * var object = {
	   *   'cheese': 'crumpets',
	   *   'stuff': function() {
	   *     return 'nonsense';
	   *   }
	   * };
	   *
	   * _.result(object, 'cheese');
	   * // => 'crumpets'
	   *
	   * _.result(object, 'stuff');
	   * // => 'nonsense'
	   */
	  function result(object, key) {
	    if (object) {
	      var value = object[key];
	      return isFunction(value) ? object[key]() : value;
	    }
	  }

	  /**
	   * A micro-templating method that handles arbitrary delimiters, preserves
	   * whitespace, and correctly escapes quotes within interpolated code.
	   *
	   * Note: In the development build, `_.template` utilizes sourceURLs for easier
	   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
	   *
	   * For more information on precompiling templates see:
	   * http://lodash.com/custom-builds
	   *
	   * For more information on Chrome extension sandboxes see:
	   * http://developer.chrome.com/stable/extensions/sandboxingEval.html
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} text The template text.
	   * @param {Object} data The data object used to populate the text.
	   * @param {Object} [options] The options object.
	   * @param {RegExp} [options.escape] The "escape" delimiter.
	   * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	   * @param {Object} [options.imports] An object to import into the template as local variables.
	   * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	   * @param {string} [sourceURL] The sourceURL of the template's compiled source.
	   * @param {string} [variable] The data object variable name.
	   * @returns {Function|string} Returns a compiled function when no `data` object
	   *  is given, else it returns the interpolated text.
	   * @example
	   *
	   * // using the "interpolate" delimiter to create a compiled template
	   * var compiled = _.template('hello <%= name %>');
	   * compiled({ 'name': 'fred' });
	   * // => 'hello fred'
	   *
	   * // using the "escape" delimiter to escape HTML in data property values
	   * _.template('<b><%- value %></b>', { 'value': '<script>' });
	   * // => '<b>&lt;script&gt;</b>'
	   *
	   * // using the "evaluate" delimiter to generate HTML
	   * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
	   * _.template(list, { 'people': ['fred', 'barney'] });
	   * // => '<li>fred</li><li>barney</li>'
	   *
	   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
	   * _.template('hello ${ name }', { 'name': 'pebbles' });
	   * // => 'hello pebbles'
	   *
	   * // using the internal `print` function in "evaluate" delimiters
	   * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
	   * // => 'hello barney!'
	   *
	   * // using a custom template delimiters
	   * _.templateSettings = {
	   *   'interpolate': /{{([\s\S]+?)}}/g
	   * };
	   *
	   * _.template('hello {{ name }}!', { 'name': 'mustache' });
	   * // => 'hello mustache!'
	   *
	   * // using the `imports` option to import jQuery
	   * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
	   * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
	   * // => '<li>fred</li><li>barney</li>'
	   *
	   * // using the `sourceURL` option to specify a custom sourceURL for the template
	   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
	   * compiled(data);
	   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	   *
	   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	   * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
	   * compiled.source;
	   * // => function(data) {
	   *   var __t, __p = '', __e = _.escape;
	   *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
	   *   return __p;
	   * }
	   *
	   * // using the `source` property to inline compiled templates for meaningful
	   * // line numbers in error messages and a stack trace
	   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	   *   var JST = {\
	   *     "main": ' + _.template(mainText).source + '\
	   *   };\
	   * ');
	   */
	  function template(text, data, options) {
	    var _ = lodash,
	        settings = _.templateSettings;

	    text = String(text || '');
	    options = defaults({}, options, settings);

	    var index = 0,
	        source = "__p += '",
	        variable = options.variable;

	    var reDelimiters = RegExp(
	      (options.escape || reNoMatch).source + '|' +
	      (options.interpolate || reNoMatch).source + '|' +
	      (options.evaluate || reNoMatch).source + '|$'
	    , 'g');

	    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, evaluateValue, offset) {
	      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	      if (escapeValue) {
	        source += "' +\n_.escape(" + escapeValue + ") +\n'";
	      }
	      if (evaluateValue) {
	        source += "';\n" + evaluateValue + ";\n__p += '";
	      }
	      if (interpolateValue) {
	        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	      }
	      index = offset + match.length;
	      return match;
	    });

	    source += "';\n";
	    if (!variable) {
	      variable = 'obj';
	      source = 'with (' + variable + ' || {}) {\n' + source + '\n}\n';
	    }
	    source = 'function(' + variable + ') {\n' +
	      "var __t, __p = '', __j = Array.prototype.join;\n" +
	      "function print() { __p += __j.call(arguments, '') }\n" +
	      source +
	      'return __p\n}';

	    try {
	      var result = Function('_', 'return ' + source)(_);
	    } catch(e) {
	      e.source = source;
	      throw e;
	    }
	    if (data) {
	      return result(data);
	    }
	    result.source = source;
	    return result;
	  }

	  /**
	   * Executes the callback `n` times, returning an array of the results
	   * of each callback execution. The callback is bound to `thisArg` and invoked
	   * with one argument; (index).
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {number} n The number of times to execute the callback.
	   * @param {Function} callback The function called per iteration.
	   * @param {*} [thisArg] The `this` binding of `callback`.
	   * @returns {Array} Returns an array of the results of each `callback` execution.
	   * @example
	   *
	   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
	   * // => [3, 6, 4]
	   *
	   * _.times(3, function(n) { mage.castSpell(n); });
	   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
	   *
	   * _.times(3, function(n) { this.cast(n); }, mage);
	   * // => also calls `mage.castSpell(n)` three times
	   */
	  function times(n, callback, thisArg) {
	    n = (n = +n) > -1 ? n : 0;
	    var index = -1,
	        result = Array(n);

	    callback = baseCreateCallback(callback, thisArg, 1);
	    while (++index < n) {
	      result[index] = callback(index);
	    }
	    return result;
	  }

	  /**
	   * The inverse of `_.escape` this method converts the HTML entities
	   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
	   * corresponding characters.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} string The string to unescape.
	   * @returns {string} Returns the unescaped string.
	   * @example
	   *
	   * _.unescape('Fred, Barney &amp; Pebbles');
	   * // => 'Fred, Barney & Pebbles'
	   */
	  function unescape(string) {
	    return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
	  }

	  /**
	   * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
	   *
	   * @static
	   * @memberOf _
	   * @category Utilities
	   * @param {string} [prefix] The value to prefix the ID with.
	   * @returns {string} Returns the unique ID.
	   * @example
	   *
	   * _.uniqueId('contact_');
	   * // => 'contact_104'
	   *
	   * _.uniqueId();
	   * // => '105'
	   */
	  function uniqueId(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Creates a `lodash` object that wraps the given value with explicit
	   * method chaining enabled.
	   *
	   * @static
	   * @memberOf _
	   * @category Chaining
	   * @param {*} value The value to wrap.
	   * @returns {Object} Returns the wrapper object.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney',  'age': 36 },
	   *   { 'name': 'fred',    'age': 40 },
	   *   { 'name': 'pebbles', 'age': 1 }
	   * ];
	   *
	   * var youngest = _.chain(characters)
	   *     .sortBy('age')
	   *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
	   *     .first()
	   *     .value();
	   * // => 'pebbles is 1'
	   */
	  function chain(value) {
	    value = new lodashWrapper(value);
	    value.__chain__ = true;
	    return value;
	  }

	  /**
	   * Invokes `interceptor` with the `value` as the first argument and then
	   * returns `value`. The purpose of this method is to "tap into" a method
	   * chain in order to perform operations on intermediate results within
	   * the chain.
	   *
	   * @static
	   * @memberOf _
	   * @category Chaining
	   * @param {*} value The value to provide to `interceptor`.
	   * @param {Function} interceptor The function to invoke.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * _([1, 2, 3, 4])
	   *  .tap(function(array) { array.pop(); })
	   *  .reverse()
	   *  .value();
	   * // => [3, 2, 1]
	   */
	  function tap(value, interceptor) {
	    interceptor(value);
	    return value;
	  }

	  /**
	   * Enables explicit method chaining on the wrapper object.
	   *
	   * @name chain
	   * @memberOf _
	   * @category Chaining
	   * @returns {*} Returns the wrapper object.
	   * @example
	   *
	   * var characters = [
	   *   { 'name': 'barney', 'age': 36 },
	   *   { 'name': 'fred',   'age': 40 }
	   * ];
	   *
	   * // without explicit chaining
	   * _(characters).first();
	   * // => { 'name': 'barney', 'age': 36 }
	   *
	   * // with explicit chaining
	   * _(characters).chain()
	   *   .first()
	   *   .pick('age')
	   *   .value();
	   * // => { 'age': 36 }
	   */
	  function wrapperChain() {
	    this.__chain__ = true;
	    return this;
	  }

	  /**
	   * Extracts the wrapped value.
	   *
	   * @name valueOf
	   * @memberOf _
	   * @alias value
	   * @category Chaining
	   * @returns {*} Returns the wrapped value.
	   * @example
	   *
	   * _([1, 2, 3]).valueOf();
	   * // => [1, 2, 3]
	   */
	  function wrapperValueOf() {
	    return this.__wrapped__;
	  }

	  /*--------------------------------------------------------------------------*/

	  // add functions that return wrapped values when chaining
	  lodash.after = after;
	  lodash.bind = bind;
	  lodash.bindAll = bindAll;
	  lodash.chain = chain;
	  lodash.compact = compact;
	  lodash.compose = compose;
	  lodash.countBy = countBy;
	  lodash.debounce = debounce;
	  lodash.defaults = defaults;
	  lodash.defer = defer;
	  lodash.delay = delay;
	  lodash.difference = difference;
	  lodash.filter = filter;
	  lodash.flatten = flatten;
	  lodash.forEach = forEach;
	  lodash.functions = functions;
	  lodash.groupBy = groupBy;
	  lodash.indexBy = indexBy;
	  lodash.initial = initial;
	  lodash.intersection = intersection;
	  lodash.invert = invert;
	  lodash.invoke = invoke;
	  lodash.keys = keys;
	  lodash.map = map;
	  lodash.max = max;
	  lodash.memoize = memoize;
	  lodash.min = min;
	  lodash.omit = omit;
	  lodash.once = once;
	  lodash.pairs = pairs;
	  lodash.partial = partial;
	  lodash.pick = pick;
	  lodash.pluck = pluck;
	  lodash.range = range;
	  lodash.reject = reject;
	  lodash.rest = rest;
	  lodash.shuffle = shuffle;
	  lodash.sortBy = sortBy;
	  lodash.tap = tap;
	  lodash.throttle = throttle;
	  lodash.times = times;
	  lodash.toArray = toArray;
	  lodash.union = union;
	  lodash.uniq = uniq;
	  lodash.values = values;
	  lodash.where = where;
	  lodash.without = without;
	  lodash.wrap = wrap;
	  lodash.zip = zip;

	  // add aliases
	  lodash.collect = map;
	  lodash.drop = rest;
	  lodash.each = forEach;
	  lodash.extend = assign;
	  lodash.methods = functions;
	  lodash.object = zipObject;
	  lodash.select = filter;
	  lodash.tail = rest;
	  lodash.unique = uniq;

	  /*--------------------------------------------------------------------------*/

	  // add functions that return unwrapped values when chaining
	  lodash.clone = clone;
	  lodash.contains = contains;
	  lodash.escape = escape;
	  lodash.every = every;
	  lodash.find = find;
	  lodash.has = has;
	  lodash.identity = identity;
	  lodash.indexOf = indexOf;
	  lodash.isArguments = isArguments;
	  lodash.isArray = isArray;
	  lodash.isBoolean = isBoolean;
	  lodash.isDate = isDate;
	  lodash.isElement = isElement;
	  lodash.isEmpty = isEmpty;
	  lodash.isEqual = isEqual;
	  lodash.isFinite = isFinite;
	  lodash.isFunction = isFunction;
	  lodash.isNaN = isNaN;
	  lodash.isNull = isNull;
	  lodash.isNumber = isNumber;
	  lodash.isObject = isObject;
	  lodash.isRegExp = isRegExp;
	  lodash.isString = isString;
	  lodash.isUndefined = isUndefined;
	  lodash.lastIndexOf = lastIndexOf;
	  lodash.mixin = mixin;
	  lodash.noConflict = noConflict;
	  lodash.random = random;
	  lodash.reduce = reduce;
	  lodash.reduceRight = reduceRight;
	  lodash.result = result;
	  lodash.size = size;
	  lodash.some = some;
	  lodash.sortedIndex = sortedIndex;
	  lodash.template = template;
	  lodash.unescape = unescape;
	  lodash.uniqueId = uniqueId;

	  // add aliases
	  lodash.all = every;
	  lodash.any = some;
	  lodash.detect = find;
	  lodash.findWhere = findWhere;
	  lodash.foldl = reduce;
	  lodash.foldr = reduceRight;
	  lodash.include = contains;
	  lodash.inject = reduce;

	  /*--------------------------------------------------------------------------*/

	  // add functions capable of returning wrapped and unwrapped values when chaining
	  lodash.first = first;
	  lodash.last = last;
	  lodash.sample = sample;

	  // add aliases
	  lodash.take = first;
	  lodash.head = first;

	  /*--------------------------------------------------------------------------*/

	  // add functions to `lodash.prototype`
	  mixin(lodash);

	  /**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type string
	   */
	  lodash.VERSION = '2.4.1';

	  // add "Chaining" functions to the wrapper
	  lodash.prototype.chain = wrapperChain;
	  lodash.prototype.value = wrapperValueOf;

	    // add `Array` mutator functions to the wrapper
	    forEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
	      var func = arrayRef[methodName];
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__;
	        func.apply(value, arguments);

	        // avoid array-like object bugs with `Array#shift` and `Array#splice`
	        // in Firefox < 10 and IE < 9
	        if (!support.spliceObjects && value.length === 0) {
	          delete value[0];
	        }
	        return this;
	      };
	    });

	    // add `Array` accessor functions to the wrapper
	    forEach(['concat', 'join', 'slice'], function(methodName) {
	      var func = arrayRef[methodName];
	      lodash.prototype[methodName] = function() {
	        var value = this.__wrapped__,
	            result = func.apply(value, arguments);

	        if (this.__chain__) {
	          result = new lodashWrapper(result);
	          result.__chain__ = true;
	        }
	        return result;
	      };
	    });

	  /*--------------------------------------------------------------------------*/

	  // some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose Lo-Dash to the global object even when an AMD loader is present in
	    // case Lo-Dash is loaded with a RequireJS shim config.
	    // See http://requirejs.org/docs/api.html#config-shim
	    root._ = lodash;

	    // define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	      return lodash;
	    }.call(exports, __webpack_require__, exports, module)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // check for `exports` after `define` in case a build optimizer adds an `exports` object
	  else if (freeExports && freeModule) {
	    // in Node.js or RingoJS
	    if (moduleExports) {
	      (freeModule.exports = lodash)._ = lodash;
	    }
	    // in Narwhal or Rhino -require
	    else {
	      freeExports._ = lodash;
	    }
	  }
	  else {
	    // in a browser or Rhino
	    root._ = lodash;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module), (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  Underscore.string
	//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
	//  Underscore.string is freely distributable under the terms of the MIT license.
	//  Documentation: https://github.com/epeli/underscore.string
	//  Some code is borrowed from MooTools and Alexandru Marasteanu.
	//  Version '2.3.2'

	!function(root, String){
	  'use strict';

	  // Defining helper functions.

	  var nativeTrim = String.prototype.trim;
	  var nativeTrimRight = String.prototype.trimRight;
	  var nativeTrimLeft = String.prototype.trimLeft;

	  var parseNumber = function(source) { return source * 1 || 0; };

	  var strRepeat = function(str, qty){
	    if (qty < 1) return '';
	    var result = '';
	    while (qty > 0) {
	      if (qty & 1) result += str;
	      qty >>= 1, str += str;
	    }
	    return result;
	  };

	  var slice = [].slice;

	  var defaultToWhiteSpace = function(characters) {
	    if (characters == null)
	      return '\\s';
	    else if (characters.source)
	      return characters.source;
	    else
	      return '[' + _s.escapeRegExp(characters) + ']';
	  };

	  // Helper for toBoolean
	  function boolMatch(s, matchers) {
	    var i, matcher, down = s.toLowerCase();
	    matchers = [].concat(matchers);
	    for (i = 0; i < matchers.length; i += 1) {
	      matcher = matchers[i];
	      if (!matcher) continue;
	      if (matcher.test && matcher.test(s)) return true;
	      if (matcher.toLowerCase() === down) return true;
	    }
	  }

	  var escapeChars = {
	    lt: '<',
	    gt: '>',
	    quot: '"',
	    amp: '&',
	    apos: "'"
	  };

	  var reversedEscapeChars = {};
	  for(var key in escapeChars) reversedEscapeChars[escapeChars[key]] = key;
	  reversedEscapeChars["'"] = '#39';

	  // sprintf() for JavaScript 0.7-beta1
	  // http://www.diveintojavascript.com/projects/javascript-sprintf
	  //
	  // Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
	  // All rights reserved.

	  var sprintf = (function() {
	    function get_type(variable) {
	      return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	    }

	    var str_repeat = strRepeat;

	    var str_format = function() {
	      if (!str_format.cache.hasOwnProperty(arguments[0])) {
	        str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
	      }
	      return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	    };

	    str_format.format = function(parse_tree, argv) {
	      var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
	      for (i = 0; i < tree_length; i++) {
	        node_type = get_type(parse_tree[i]);
	        if (node_type === 'string') {
	          output.push(parse_tree[i]);
	        }
	        else if (node_type === 'array') {
	          match = parse_tree[i]; // convenience purposes only
	          if (match[2]) { // keyword argument
	            arg = argv[cursor];
	            for (k = 0; k < match[2].length; k++) {
	              if (!arg.hasOwnProperty(match[2][k])) {
	                throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
	              }
	              arg = arg[match[2][k]];
	            }
	          } else if (match[1]) { // positional argument (explicit)
	            arg = argv[match[1]];
	          }
	          else { // positional argument (implicit)
	            arg = argv[cursor++];
	          }

	          if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
	            throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));
	          }
	          switch (match[8]) {
	            case 'b': arg = arg.toString(2); break;
	            case 'c': arg = String.fromCharCode(arg); break;
	            case 'd': arg = parseInt(arg, 10); break;
	            case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
	            case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
	            case 'o': arg = arg.toString(8); break;
	            case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
	            case 'u': arg = Math.abs(arg); break;
	            case 'x': arg = arg.toString(16); break;
	            case 'X': arg = arg.toString(16).toUpperCase(); break;
	          }
	          arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
	          pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
	          pad_length = match[6] - String(arg).length;
	          pad = match[6] ? str_repeat(pad_character, pad_length) : '';
	          output.push(match[5] ? arg + pad : pad + arg);
	        }
	      }
	      return output.join('');
	    };

	    str_format.cache = {};

	    str_format.parse = function(fmt) {
	      var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
	      while (_fmt) {
	        if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
	          parse_tree.push(match[0]);
	        }
	        else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
	          parse_tree.push('%');
	        }
	        else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
	          if (match[2]) {
	            arg_names |= 1;
	            var field_list = [], replacement_field = match[2], field_match = [];
	            if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	              field_list.push(field_match[1]);
	              while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
	                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
	                  field_list.push(field_match[1]);
	                }
	                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
	                  field_list.push(field_match[1]);
	                }
	                else {
	                  throw new Error('[_.sprintf] huh?');
	                }
	              }
	            }
	            else {
	              throw new Error('[_.sprintf] huh?');
	            }
	            match[2] = field_list;
	          }
	          else {
	            arg_names |= 2;
	          }
	          if (arg_names === 3) {
	            throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');
	          }
	          parse_tree.push(match);
	        }
	        else {
	          throw new Error('[_.sprintf] huh?');
	        }
	        _fmt = _fmt.substring(match[0].length);
	      }
	      return parse_tree;
	    };

	    return str_format;
	  })();



	  // Defining underscore.string

	  var _s = {

	    VERSION: '2.3.0',

	    isBlank: function(str){
	      if (str == null) str = '';
	      return (/^\s*$/).test(str);
	    },

	    stripTags: function(str){
	      if (str == null) return '';
	      return String(str).replace(/<\/?[^>]+>/g, '');
	    },

	    capitalize : function(str){
	      str = str == null ? '' : String(str);
	      return str.charAt(0).toUpperCase() + str.slice(1);
	    },

	    chop: function(str, step){
	      if (str == null) return [];
	      str = String(str);
	      step = ~~step;
	      return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
	    },

	    clean: function(str){
	      return _s.strip(str).replace(/\s+/g, ' ');
	    },

	    count: function(str, substr){
	      if (str == null || substr == null) return 0;

	      str = String(str);
	      substr = String(substr);

	      var count = 0,
	        pos = 0,
	        length = substr.length;

	      while (true) {
	        pos = str.indexOf(substr, pos);
	        if (pos === -1) break;
	        count++;
	        pos += length;
	      }

	      return count;
	    },

	    chars: function(str) {
	      if (str == null) return [];
	      return String(str).split('');
	    },

	    swapCase: function(str) {
	      if (str == null) return '';
	      return String(str).replace(/\S/g, function(c){
	        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
	      });
	    },

	    escapeHTML: function(str) {
	      if (str == null) return '';
	      return String(str).replace(/[&<>"']/g, function(m){ return '&' + reversedEscapeChars[m] + ';'; });
	    },

	    unescapeHTML: function(str) {
	      if (str == null) return '';
	      return String(str).replace(/\&([^;]+);/g, function(entity, entityCode){
	        var match;

	        if (entityCode in escapeChars) {
	          return escapeChars[entityCode];
	        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	          return String.fromCharCode(parseInt(match[1], 16));
	        } else if (match = entityCode.match(/^#(\d+)$/)) {
	          return String.fromCharCode(~~match[1]);
	        } else {
	          return entity;
	        }
	      });
	    },

	    escapeRegExp: function(str){
	      if (str == null) return '';
	      return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	    },

	    splice: function(str, i, howmany, substr){
	      var arr = _s.chars(str);
	      arr.splice(~~i, ~~howmany, substr);
	      return arr.join('');
	    },

	    insert: function(str, i, substr){
	      return _s.splice(str, i, 0, substr);
	    },

	    include: function(str, needle){
	      if (needle === '') return true;
	      if (str == null) return false;
	      return String(str).indexOf(needle) !== -1;
	    },

	    join: function() {
	      var args = slice.call(arguments),
	        separator = args.shift();

	      if (separator == null) separator = '';

	      return args.join(separator);
	    },

	    lines: function(str) {
	      if (str == null) return [];
	      return String(str).split("\n");
	    },

	    reverse: function(str){
	      return _s.chars(str).reverse().join('');
	    },

	    startsWith: function(str, starts){
	      if (starts === '') return true;
	      if (str == null || starts == null) return false;
	      str = String(str); starts = String(starts);
	      return str.length >= starts.length && str.slice(0, starts.length) === starts;
	    },

	    endsWith: function(str, ends){
	      if (ends === '') return true;
	      if (str == null || ends == null) return false;
	      str = String(str); ends = String(ends);
	      return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
	    },

	    succ: function(str){
	      if (str == null) return '';
	      str = String(str);
	      return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length-1) + 1);
	    },

	    titleize: function(str){
	      if (str == null) return '';
	      str  = String(str).toLowerCase();
	      return str.replace(/(?:^|\s|-)\S/g, function(c){ return c.toUpperCase(); });
	    },

	    camelize: function(str){
	      return _s.trim(str).replace(/[-_\s]+(.)?/g, function(match, c){ return c ? c.toUpperCase() : ""; });
	    },

	    underscored: function(str){
	      return _s.trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	    },

	    dasherize: function(str){
	      return _s.trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
	    },

	    classify: function(str){
	      return _s.titleize(String(str).replace(/[\W_]/g, ' ')).replace(/\s/g, '');
	    },

	    humanize: function(str){
	      return _s.capitalize(_s.underscored(str).replace(/_id$/,'').replace(/_/g, ' '));
	    },

	    trim: function(str, characters){
	      if (str == null) return '';
	      if (!characters && nativeTrim) return nativeTrim.call(str);
	      characters = defaultToWhiteSpace(characters);
	      return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
	    },

	    ltrim: function(str, characters){
	      if (str == null) return '';
	      if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
	      characters = defaultToWhiteSpace(characters);
	      return String(str).replace(new RegExp('^' + characters + '+'), '');
	    },

	    rtrim: function(str, characters){
	      if (str == null) return '';
	      if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
	      characters = defaultToWhiteSpace(characters);
	      return String(str).replace(new RegExp(characters + '+$'), '');
	    },

	    truncate: function(str, length, truncateStr){
	      if (str == null) return '';
	      str = String(str); truncateStr = truncateStr || '...';
	      length = ~~length;
	      return str.length > length ? str.slice(0, length) + truncateStr : str;
	    },

	    /**
	     * _s.prune: a more elegant version of truncate
	     * prune extra chars, never leaving a half-chopped word.
	     * @author github.com/rwz
	     */
	    prune: function(str, length, pruneStr){
	      if (str == null) return '';

	      str = String(str); length = ~~length;
	      pruneStr = pruneStr != null ? String(pruneStr) : '...';

	      if (str.length <= length) return str;

	      var tmpl = function(c){ return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' '; },
	        template = str.slice(0, length+1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

	      if (template.slice(template.length-2).match(/\w\w/))
	        template = template.replace(/\s*\S+$/, '');
	      else
	        template = _s.rtrim(template.slice(0, template.length-1));

	      return (template+pruneStr).length > str.length ? str : str.slice(0, template.length)+pruneStr;
	    },

	    words: function(str, delimiter) {
	      if (_s.isBlank(str)) return [];
	      return _s.trim(str, delimiter).split(delimiter || /\s+/);
	    },

	    pad: function(str, length, padStr, type) {
	      str = str == null ? '' : String(str);
	      length = ~~length;

	      var padlen  = 0;

	      if (!padStr)
	        padStr = ' ';
	      else if (padStr.length > 1)
	        padStr = padStr.charAt(0);

	      switch(type) {
	        case 'right':
	          padlen = length - str.length;
	          return str + strRepeat(padStr, padlen);
	        case 'both':
	          padlen = length - str.length;
	          return strRepeat(padStr, Math.ceil(padlen/2)) + str
	                  + strRepeat(padStr, Math.floor(padlen/2));
	        default: // 'left'
	          padlen = length - str.length;
	          return strRepeat(padStr, padlen) + str;
	        }
	    },

	    lpad: function(str, length, padStr) {
	      return _s.pad(str, length, padStr);
	    },

	    rpad: function(str, length, padStr) {
	      return _s.pad(str, length, padStr, 'right');
	    },

	    lrpad: function(str, length, padStr) {
	      return _s.pad(str, length, padStr, 'both');
	    },

	    sprintf: sprintf,

	    vsprintf: function(fmt, argv){
	      argv.unshift(fmt);
	      return sprintf.apply(null, argv);
	    },

	    toNumber: function(str, decimals) {
	      if (!str) return 0;
	      str = _s.trim(str);
	      if (!str.match(/^-?\d+(?:\.\d+)?$/)) return NaN;
	      return parseNumber(parseNumber(str).toFixed(~~decimals));
	    },

	    numberFormat : function(number, dec, dsep, tsep) {
	      if (isNaN(number) || number == null) return '';

	      number = number.toFixed(~~dec);
	      tsep = typeof tsep == 'string' ? tsep : ',';

	      var parts = number.split('.'), fnums = parts[0],
	        decimals = parts[1] ? (dsep || '.') + parts[1] : '';

	      return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
	    },

	    strRight: function(str, sep){
	      if (str == null) return '';
	      str = String(str); sep = sep != null ? String(sep) : sep;
	      var pos = !sep ? -1 : str.indexOf(sep);
	      return ~pos ? str.slice(pos+sep.length, str.length) : str;
	    },

	    strRightBack: function(str, sep){
	      if (str == null) return '';
	      str = String(str); sep = sep != null ? String(sep) : sep;
	      var pos = !sep ? -1 : str.lastIndexOf(sep);
	      return ~pos ? str.slice(pos+sep.length, str.length) : str;
	    },

	    strLeft: function(str, sep){
	      if (str == null) return '';
	      str = String(str); sep = sep != null ? String(sep) : sep;
	      var pos = !sep ? -1 : str.indexOf(sep);
	      return ~pos ? str.slice(0, pos) : str;
	    },

	    strLeftBack: function(str, sep){
	      if (str == null) return '';
	      str += ''; sep = sep != null ? ''+sep : sep;
	      var pos = str.lastIndexOf(sep);
	      return ~pos ? str.slice(0, pos) : str;
	    },

	    toSentence: function(array, separator, lastSeparator, serial) {
	      separator = separator || ', ';
	      lastSeparator = lastSeparator || ' and ';
	      var a = array.slice(), lastMember = a.pop();

	      if (array.length > 2 && serial) lastSeparator = _s.rtrim(separator) + lastSeparator;

	      return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
	    },

	    toSentenceSerial: function() {
	      var args = slice.call(arguments);
	      args[3] = true;
	      return _s.toSentence.apply(_s, args);
	    },

	    slugify: function(str) {
	      if (str == null) return '';

	      var from  = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",
	          to    = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",
	          regex = new RegExp(defaultToWhiteSpace(from), 'g');

	      str = String(str).toLowerCase().replace(regex, function(c){
	        var index = from.indexOf(c);
	        return to.charAt(index) || '-';
	      });

	      return _s.dasherize(str.replace(/[^\w\s-]/g, ''));
	    },

	    surround: function(str, wrapper) {
	      return [wrapper, str, wrapper].join('');
	    },

	    quote: function(str, quoteChar) {
	      return _s.surround(str, quoteChar || '"');
	    },

	    unquote: function(str, quoteChar) {
	      quoteChar = quoteChar || '"';
	      if (str[0] === quoteChar && str[str.length-1] === quoteChar)
	        return str.slice(1,str.length-1);
	      else return str;
	    },

	    exports: function() {
	      var result = {};

	      for (var prop in this) {
	        if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse)$/)) continue;
	        result[prop] = this[prop];
	      }

	      return result;
	    },

	    repeat: function(str, qty, separator){
	      if (str == null) return '';

	      qty = ~~qty;

	      // using faster implementation if separator is not needed;
	      if (separator == null) return strRepeat(String(str), qty);

	      // this one is about 300x slower in Google Chrome
	      for (var repeat = []; qty > 0; repeat[--qty] = str) {}
	      return repeat.join(separator);
	    },

	    naturalCmp: function(str1, str2){
	      if (str1 == str2) return 0;
	      if (!str1) return -1;
	      if (!str2) return 1;

	      var cmpRegex = /(\.\d+)|(\d+)|(\D+)/g,
	        tokens1 = String(str1).toLowerCase().match(cmpRegex),
	        tokens2 = String(str2).toLowerCase().match(cmpRegex),
	        count = Math.min(tokens1.length, tokens2.length);

	      for(var i = 0; i < count; i++) {
	        var a = tokens1[i], b = tokens2[i];

	        if (a !== b){
	          var num1 = parseInt(a, 10);
	          if (!isNaN(num1)){
	            var num2 = parseInt(b, 10);
	            if (!isNaN(num2) && num1 - num2)
	              return num1 - num2;
	          }
	          return a < b ? -1 : 1;
	        }
	      }

	      if (tokens1.length === tokens2.length)
	        return tokens1.length - tokens2.length;

	      return str1 < str2 ? -1 : 1;
	    },

	    levenshtein: function(str1, str2) {
	      if (str1 == null && str2 == null) return 0;
	      if (str1 == null) return String(str2).length;
	      if (str2 == null) return String(str1).length;

	      str1 = String(str1); str2 = String(str2);

	      var current = [], prev, value;

	      for (var i = 0; i <= str2.length; i++)
	        for (var j = 0; j <= str1.length; j++) {
	          if (i && j)
	            if (str1.charAt(j - 1) === str2.charAt(i - 1))
	              value = prev;
	            else
	              value = Math.min(current[j], current[j - 1], prev) + 1;
	          else
	            value = i + j;

	          prev = current[j];
	          current[j] = value;
	        }

	      return current.pop();
	    },

	    toBoolean: function(str, trueValues, falseValues) {
	      if (typeof str === "number") str = "" + str;
	      if (typeof str !== "string") return !!str;
	      str = _s.trim(str);
	      if (boolMatch(str, trueValues || ["true", "1"])) return true;
	      if (boolMatch(str, falseValues || ["false", "0"])) return false;
	    }
	  };

	  // Aliases

	  _s.strip    = _s.trim;
	  _s.lstrip   = _s.ltrim;
	  _s.rstrip   = _s.rtrim;
	  _s.center   = _s.lrpad;
	  _s.rjust    = _s.lpad;
	  _s.ljust    = _s.rpad;
	  _s.contains = _s.include;
	  _s.q        = _s.quote;
	  _s.toBool   = _s.toBoolean;

	  // Exporting

	  // CommonJS module is defined
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports)
	      module.exports = _s;

	    exports._s = _s;
	  }

	  // Register as a named module with AMD.
	  if (true)
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return _s; }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	  // Integrate with Underscore.js if defined
	  // or create our own underscore object.
	  root._ = root._ || {};
	  root._.string = root._.str = _s;
	}(this, String);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 * Bootstrap v3.2.0 (http://getbootstrap.com)
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */

	if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

	/* ========================================================================
	 * Bootstrap: transition.js v3.2.0
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.2.0
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.2.0'

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.hasClass('alert') ? $this : $this.parent()
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(150) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.2.0
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.2.0'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state = state + 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    $el[val](data[state] == null ? this.options[state] : data[state])

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
	        else $parent.find('.active').removeClass('active')
	      }
	      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
	    }

	    if (changed) this.$element.toggleClass('active')
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    var $btn = $(e.target)
	    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	    Plugin.call($btn, 'toggle')
	    e.preventDefault()
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: carousel.js v3.2.0
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      =
	    this.sliding     =
	    this.interval    =
	    this.$active     =
	    this.$items      = null

	    this.options.pause == 'hover' && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.2.0'

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || $active[type]()
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var fallback  = type == 'next' ? 'first' : 'last'
	    var that      = this

	    if (!$next.length) {
	      if (!this.options.wrap) return
	      $next = this.$element.find('.item')[fallback]()
	    }

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  })

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: collapse.js v3.2.0
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.transitioning = null

	    if (this.options.parent) this.$parent = $(this.options.parent)
	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.2.0'

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var actives = this.$parent && this.$parent.find('> .panel > .in')

	    if (actives && actives.length) {
	      var hasData = actives.data('bs.collapse')
	      if (hasData && hasData.transitioning) return
	      Plugin.call(actives, 'hide')
	      hasData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse')
	      .removeClass('in')

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .trigger('hidden.bs.collapse')
	        .removeClass('collapsing')
	        .addClass('collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(350)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && option == 'show') option = !option
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var href
	    var $this   = $(this)
	    var target  = $this.attr('data-target')
	        || e.preventDefault()
	        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	    var $target = $(target)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()
	    var parent  = $this.attr('data-parent')
	    var $parent = parent && $(parent)

	    if (!data || !data.transitioning) {
	      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
	      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
	    }

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.2.0
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.2.0'

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.trigger('focus')

	      $parent
	        .toggleClass('open')
	        .trigger('shown.bs.dropdown', relatedTarget)
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27)/.test(e.keyCode)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive || (isActive && e.keyCode == 27)) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.divider):visible a'
	    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

	    if (!$items.length) return

	    var index = $items.index($items.filter(':focus'))

	    if (e.keyCode == 38 && index > 0)                 index--                        // up
	    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
	    if (!~index)                                      index = 0

	    $items.eq(index).trigger('focus')
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $parent = getParent($(this))
	      var relatedTarget = { relatedTarget: this }
	      if (!$parent.hasClass('open')) return
	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
	      if (e.isDefaultPrevented()) return
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
	    })
	  }

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: modal.js v3.2.0
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options        = options
	    this.$body          = $(document.body)
	    this.$element       = $(element)
	    this.$backdrop      =
	    this.isShown        = null
	    this.scrollbarWidth = 0

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.2.0'

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.$body.addClass('modal-open')

	    this.setScrollbar()
	    this.escape()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element
	        .addClass('in')
	        .attr('aria-hidden', false)

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$element.find('.modal-dialog') // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(300) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.$body.removeClass('modal-open')

	    this.resetScrollbar()
	    this.escape()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .attr('aria-hidden', true)
	      .off('click.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(300) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keyup.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus.call(this.$element[0])
	          : this.hide.call(this)
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(150) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(150) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  Modal.prototype.checkScrollbar = function () {
	    if (document.body.clientWidth >= window.innerWidth) return
	    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', '')
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.2.0
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       =
	    this.options    =
	    this.enabled    =
	    this.timeout    =
	    this.hoverState =
	    this.$element   = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.2.0'

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(document.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var $parent      = this.$element.parent()
	        var parentDim    = this.getPosition($parent)

	        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
	                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
	                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
	                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(150) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  = offset.top  + marginTop
	    offset.left = offset.left + marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowPosition       = delta.left ? 'left'        : 'top'
	    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
	    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function () {
	    var that = this
	    var $tip = this.tip()
	    var e    = $.Event('hide.bs.' + this.type)

	    this.$element.removeAttr('aria-describedby')

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element.trigger('hidden.bs.' + that.type)
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && this.$tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(150) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element
	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'
	    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
	      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
	      width:  isBody ? $(window).width()  : $element.outerWidth(),
	      height: isBody ? $(window).height() : $element.outerHeight()
	    }, isBody ? { top: 0, left: 0 } : $element.offset())
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    return (this.$tip = this.$tip || $(this.options.template))
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.validate = function () {
	    if (!this.$element[0].parentNode) {
	      this.hide()
	      this.$element = null
	      this.options  = null
	    }
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	  }

	  Tooltip.prototype.destroy = function () {
	    clearTimeout(this.timeout)
	    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && option == 'destroy') return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: popover.js v3.2.0
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.2.0'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }

	  Popover.prototype.tip = function () {
	    if (!this.$tip) this.$tip = $(this.options.template)
	    return this.$tip
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && option == 'destroy') return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.2.0
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    var process  = $.proxy(this.process, this)

	    this.$body          = $('body')
	    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', process)
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.2.0'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var offsetMethod = 'offset'
	    var offsetBase   = 0

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.offsets = []
	    this.targets = []
	    this.scrollHeight = this.getScrollHeight()

	    var self     = this

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        self.offsets.push(this[0])
	        self.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop <= offsets[0]) {
	      return activeTarget != (i = targets[0]) && this.activate(i)
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')

	    var selector = this.selector +
	        '[data-target="' + target + '"],' +
	        this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tab.js v3.2.0
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    this.element = $(element)
	  }

	  Tab.VERSION = '3.2.0'

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var previous = $ul.find('.active:last a')[0]
	    var e        = $.Event('show.bs.tab', {
	      relatedTarget: previous
	    })

	    $this.trigger(e)

	    if (e.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: previous
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && $active.hasClass('fade')

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	        .removeClass('active')

	      element.addClass('active')

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu')) {
	        element.closest('li.dropdown').addClass('active')
	      }

	      callback && callback()
	    }

	    transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(150) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  })

	}(jQuery);

	/* ========================================================================
	 * Bootstrap: affix.js v3.2.0
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2014 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      =
	    this.unpin        =
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.2.0'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var scrollHeight = $(document).height()
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
	                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
	                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

	    if (this.affixed === affix) return
	    if (this.unpin != null) this.$element.css('top', '')

	    var affixType = 'affix' + (affix ? '-' + affix : '')
	    var e         = $.Event(affixType + '.bs.affix')

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    this.affixed = affix
	    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	    this.$element
	      .removeClass(Affix.RESET)
	      .addClass(affixType)
	      .trigger($.Event(affixType.replace('affix', 'affixed')))

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - this.$element.height() - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop)    data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var API;

	API = {
	  show: function() {
	    var Show;
	    Show = __webpack_require__(16);
	    return new Show;
	  }
	};

	module.exports = {
	  start: function() {
	    return API.show();
	  }
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var API;

	API = {
	  list: function() {
	    var List;
	    List = __webpack_require__(17);
	    return new List;
	  }
	};

	module.exports = {
	  start: function() {
	    return API.list();
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(11)
		// The css code:
		(__webpack_require__(8))
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"@media (max-width: 767px){img{max-width:30px;}}";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * jQuery JavaScript Library v1.10.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-07-03T13:48Z
	 */
	(function( window, undefined ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
	var
		// The deferred used on DOM ready
		readyList,

		// A central reference to the root jQuery(document)
		rootjQuery,

		// Support: IE<10
		// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
		core_strundefined = typeof undefined,

		// Use the correct document accordingly with window argument (sandbox)
		location = window.location,
		document = window.document,
		docElem = document.documentElement,

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$,

		// [[Class]] -> type pairs
		class2type = {},

		// List of deleted data cache ids, so we can reuse them
		core_deletedIds = [],

		core_version = "1.10.2",

		// Save a reference to some core methods
		core_concat = core_deletedIds.concat,
		core_push = core_deletedIds.push,
		core_slice = core_deletedIds.slice,
		core_indexOf = core_deletedIds.indexOf,
		core_toString = class2type.toString,
		core_hasOwn = class2type.hasOwnProperty,
		core_trim = core_version.trim,

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			return new jQuery.fn.init( selector, context, rootjQuery );
		},

		// Used for matching numbers
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

		// Used for splitting on whitespace
		core_rnotwhite = /\S+/g,

		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		// Match a standalone tag
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

		// JSON RegExp
		rvalidchars = /^[\],:{}\s]*$/,
		rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		},

		// The ready event handler
		completed = function( event ) {

			// readyState === "complete" is good enough for us to call the dom ready in oldIE
			if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
				detach();
				jQuery.ready();
			}
		},
		// Clean-up method for dom ready events
		detach = function() {
			if ( document.addEventListener ) {
				document.removeEventListener( "DOMContentLoaded", completed, false );
				window.removeEventListener( "load", completed, false );

			} else {
				document.detachEvent( "onreadystatechange", completed );
				window.detachEvent( "onload", completed );
			}
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: core_version,

		constructor: jQuery,
		init: function( selector, context, rootjQuery ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[2] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return rootjQuery.ready( selector );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		},

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return core_slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num == null ?

				// Return a 'clean' array
				this.toArray() :

				// Return just the object
				( num < 0 ? this[ this.length + num ] : this[ num ] );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		ready: function( fn ) {
			// Add the callback
			jQuery.ready.promise().done( fn );

			return this;
		},

		slice: function() {
			return this.pushStack( core_slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};

	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( length === i ) {
			target = this;
			--i;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		// Non-digits removed to match rinlinejQuery
		expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

		noConflict: function( deep ) {
			if ( window.$ === jQuery ) {
				window.$ = _$;
			}

			if ( deep && window.jQuery === jQuery ) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		},

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger("ready").off("ready");
			}
		},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {
			return !isNaN( parseFloat(obj) ) && isFinite( obj );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return String( obj );
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ core_toString.call(obj) ] || "object" :
				typeof obj;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!core_hasOwn.call(obj, "constructor") &&
					!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
					return false;
				}
			} catch ( e ) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( jQuery.support.ownLast ) {
				for ( key in obj ) {
					return core_hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || core_hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		error: function( msg ) {
			throw new Error( msg );
		},

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		parseHTML: function( data, context, keepScripts ) {
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			if ( typeof context === "boolean" ) {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec( data ),
				scripts = !keepScripts && [];

			// Single tag
			if ( parsed ) {
				return [ context.createElement( parsed[1] ) ];
			}

			parsed = jQuery.buildFragment( [ data ], context, scripts );
			if ( scripts ) {
				jQuery( scripts ).remove();
			}
			return jQuery.merge( [], parsed.childNodes );
		},

		parseJSON: function( data ) {
			// Attempt to parse using the native JSON parser first
			if ( window.JSON && window.JSON.parse ) {
				return window.JSON.parse( data );
			}

			if ( data === null ) {
				return data;
			}

			if ( typeof data === "string" ) {

				// Make sure leading/trailing whitespace is removed (IE can't handle it)
				data = jQuery.trim( data );

				if ( data ) {
					// Make sure the incoming data is actual JSON
					// Logic borrowed from http://json.org/json2.js
					if ( rvalidchars.test( data.replace( rvalidescape, "@" )
						.replace( rvalidtokens, "]" )
						.replace( rvalidbraces, "")) ) {

						return ( new Function( "return " + data ) )();
					}
				}
			}

			jQuery.error( "Invalid JSON: " + data );
		},

		// Cross-browser xml parsing
		parseXML: function( data ) {
			var xml, tmp;
			if ( !data || typeof data !== "string" ) {
				return null;
			}
			try {
				if ( window.DOMParser ) { // Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString( data , "text/xml" );
				} else { // IE
					xml = new ActiveXObject( "Microsoft.XMLDOM" );
					xml.async = "false";
					xml.loadXML( data );
				}
			} catch( e ) {
				xml = undefined;
			}
			if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
				jQuery.error( "Invalid XML: " + data );
			}
			return xml;
		},

		noop: function() {},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data );
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Use native String.trim function wherever possible
		trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
			function( text ) {
				return text == null ?
					"" :
					core_trim.call( text );
			} :

			// Otherwise use our own trimming functionality
			function( text ) {
				return text == null ?
					"" :
					( text + "" ).replace( rtrim, "" );
			},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					core_push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( core_indexOf ) {
					return core_indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var l = second.length,
				i = first.length,
				j = 0;

			if ( typeof l === "number" ) {
				for ( ; j < l; j++ ) {
					first[ i++ ] = second[ j ];
				}
			} else {
				while ( second[j] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, inv ) {
			var retVal,
				ret = [],
				i = 0,
				length = elems.length;
			inv = !!inv;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				retVal = !!callback( elems[ i ], i );
				if ( inv !== retVal ) {
					ret.push( elems[ i ] );
				}
			}

			return ret;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret[ ret.length ] = value;
					}
				}
			}

			// Flatten any nested arrays
			return core_concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = core_slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
			var i = 0,
				length = elems.length,
				bulk = key == null;

			// Sets many values
			if ( jQuery.type( key ) === "object" ) {
				chainable = true;
				for ( i in key ) {
					jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
				}

			// Sets one value
			} else if ( value !== undefined ) {
				chainable = true;

				if ( !jQuery.isFunction( value ) ) {
					raw = true;
				}

				if ( bulk ) {
					// Bulk operations run against the entire set
					if ( raw ) {
						fn.call( elems, value );
						fn = null;

					// ...except when executing function values
					} else {
						bulk = fn;
						fn = function( elem, key, value ) {
							return bulk.call( jQuery( elem ), value );
						};
					}
				}

				if ( fn ) {
					for ( ; i < length; i++ ) {
						fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
					}
				}
			}

			return chainable ?
				elems :

				// Gets
				bulk ?
					fn.call( elems ) :
					length ? fn( elems[0], key ) : emptyGet;
		},

		now: function() {
			return ( new Date() ).getTime();
		},

		// A method for quickly swapping in/out CSS properties to get correct calculations.
		// Note: this method belongs to the css module but it's needed here for the support module.
		// If support gets modularized, this method should be moved back to the css module.
		swap: function( elem, options, callback, args ) {
			var ret, name,
				old = {};

			// Remember the old values, and insert the new ones
			for ( name in options ) {
				old[ name ] = elem.style[ name ];
				elem.style[ name ] = options[ name ];
			}

			ret = callback.apply( elem, args || [] );

			// Revert the old values
			for ( name in options ) {
				elem.style[ name ] = old[ name ];
			}

			return ret;
		}
	});

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );

			// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch(e) {}

				if ( top && top.doScroll ) {
					(function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch(e) {
								return setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise( obj );
	};

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {
		var length = obj.length,
			type = jQuery.type( obj );

		if ( jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || type !== "function" &&
			( length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj );
	}

	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	/*!
	 * Sizzle CSS Selector Engine v1.10.2
	 * http://sizzlejs.com/
	 *
	 * Copyright 2013 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-07-03
	 */
	(function( window, undefined ) {

	var i,
		support,
		cachedruns,
		Expr,
		getText,
		isXML,
		compile,
		outermostContext,
		sortInput,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + -(new Date()),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		hasDuplicate = false,
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
			return 0;
		},

		// General-purpose constants
		strundefined = typeof undefined,
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
			"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

		// Prefer arguments quoted,
		//   then not containing pseudos/brackets,
		//   then attribute selectors/non-parenthetical expressions,
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rsibling = new RegExp( whitespace + "*[+~]" ),
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				// BMP codepoint
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];

		if ( !selector || typeof selector !== "string" ) {
			return results;
		}

		if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
			return [];
		}

		if ( documentIsHTML && !seed ) {

			// Shortcuts
			if ( (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && context.parentNode || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key += " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Detect xml
	 * @param {Element|Object} elem An element or a document
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var doc = node ? node.ownerDocument || node : preferredDoc,
			parent = doc.defaultView;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;

		// Support tests
		documentIsHTML = !isXML( doc );

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent.attachEvent && parent !== parent.top ) {
			parent.attachEvent( "onbeforeunload", function() {
				setDocument();
			});
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Check if getElementsByClassName can be trusted
		support.getElementsByClassName = assert(function( div ) {
			div.innerHTML = "<div class='a'></div><div class='a i'></div>";

			// Support: Safari<4
			// Catch class over-caching
			div.firstChild.className = "i";
			// Support: Opera<10
			// Catch gEBCN failure to find non-leading classes
			return div.getElementsByClassName("i").length === 2;
		});

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				div.innerHTML = "<select><option selected=''></option></select>";

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
			});

			assert(function( div ) {

				// Support: Opera 10-12/IE8
				// ^= $= *= and empty values
				// Should not select anything
				// Support: Windows 8 Native Apps
				// The type attribute is restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "t", "" );

				if ( div.querySelectorAll("[t^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = docElem.compareDocumentPosition ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

			if ( compare ) {
				// Disconnected nodes
				if ( compare & 1 ||
					(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

					// Choose the first element that is related to our preferred document
					if ( a === doc || contains(preferredDoc, a) ) {
						return -1;
					}
					if ( b === doc || contains(preferredDoc, b) ) {
						return 1;
					}

					// Maintain original order
					return sortInput ?
						( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
						0;
				}

				return compare & 4 ? -1 : 1;
			}

			// Not directly comparable, sort on existence of method
			return a.compareDocumentPosition ? -1 : 1;
		} :
		function( a, b ) {
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;

			// Parentless nodes are either documents or disconnected
			} else if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch(e) {}
		}

		return Sizzle( expr, document, null, [elem] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val === undefined ?
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null :
			val;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			for ( ; (node = elem[i]); i++ ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (see #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[5] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] && match[4] !== undefined ) {
					match[2] = match[4];

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf.call( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
				//   not comment, processing instructions, or others
				// Thanks to Diego Perini for the nodeName shortcut
				//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
				// use getAttribute instead to test this case
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	function tokenize( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( tokens = [] );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	}

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var data, cache, outerCache,
					dirkey = dirruns + " " + doneName;

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
								if ( (data = cache[1]) === true || data === cachedruns ) {
									return data === true;
								}
							} else {
								cache = outerCache[ dir ] = [ dirkey ];
								cache[1] = matcher( elem, context, xml ) || cachedruns;
								if ( cache[1] === true ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf.call( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		// A counter to specify which element is currently being matched
		var matcherCachedRuns = 0,
			bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, expandContext ) {
				var elem, j, matcher,
					setMatched = [],
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					outermost = expandContext != null,
					contextBackup = outermostContext,
					// We must always have either seed elements or context
					elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

				if ( outermost ) {
					outermostContext = context !== document && context;
					cachedruns = matcherCachedRuns;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				for ( ; (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
							cachedruns = ++matcherCachedRuns;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !group ) {
				group = tokenize( selector );
			}
			i = group.length;
			while ( i-- ) {
				cached = matcherFromTokens( group[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		}
		return cached;
	};

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function select( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			match = tokenize( selector );

		if ( !seed ) {
			// Try to minimize operations if there is only one group
			if ( match.length === 1 ) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice( 0 );
				if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
						support.getById && context.nodeType === 9 && documentIsHTML &&
						Expr.relative[ tokens[1].type ] ) {

					context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
					if ( !context ) {
						return results;
					}
					selector = selector.slice( tokens.shift().value.length );
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
				while ( i-- ) {
					token = tokens[i];

					// Abort if we hit a combinator
					if ( Expr.relative[ (type = token.type) ] ) {
						break;
					}
					if ( (find = Expr.find[ type ]) ) {
						// Search, expanding context for leading sibling combinators
						if ( (seed = find(
							token.matches[0].replace( runescape, funescape ),
							rsibling.test( tokens[0].type ) && context.parentNode || context
						)) ) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice( i, 1 );
							selector = seed.length && toSelector( tokens );
							if ( !selector ) {
								push.apply( results, seed );
								return results;
							}

							break;
						}
					}
				}
			}
		}

		// Compile and execute a filtering function
		// Provide `match` to avoid retokenization if we modified the selector above
		compile( selector, match )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector )
		);
		return results;
	}

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome<14
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return (val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
					elem[ name ] === true ? name.toLowerCase() : null;
			}
		});
	}

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;


	})( window );
	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,
			// Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};
	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var action = tuple[ 0 ],
									fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = core_slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
						if( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});
	jQuery.support = (function( support ) {

		var all, a, input, select, fragment, opt, eventName, isSupported, i,
			div = document.createElement("div");

		// Setup
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// Finish early in limited (non-browser) environments
		all = div.getElementsByTagName("*") || [];
		a = div.getElementsByTagName("a")[ 0 ];
		if ( !a || !a.style || !all.length ) {
			return support;
		}

		// First batch of tests
		select = document.createElement("select");
		opt = select.appendChild( document.createElement("option") );
		input = div.getElementsByTagName("input")[ 0 ];

		a.style.cssText = "top:1px;float:left;opacity:.5";

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName("tbody").length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName("link").length;

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute("style") );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		support.opacity = /^0.5/.test( a.style.opacity );

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!a.style.cssFloat;

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone = document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Will be defined later
		support.inlineBlockNeedsLayout = false;
		support.shrinkWrapBlocks = false;
		support.pixelPosition = false;
		support.deleteExpando = true;
		support.noCloneEvent = true;
		support.reliableMarginRight = true;
		support.boxSizingReliable = true;

		// Make sure checked status is properly cloned
		input.checked = true;
		support.noCloneChecked = input.cloneNode( true ).checked;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<9
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}

		// Check if we can trust getAttribute("value")
		input = document.createElement("input");
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";

		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute( "checked", "t" );
		input.setAttribute( "name", "t" );

		fragment = document.createDocumentFragment();
		fragment.appendChild( input );

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		support.appendChecked = input.checked;

		// WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		if ( div.attachEvent ) {
			div.attachEvent( "onclick", function() {
				support.noCloneEvent = false;
			});

			div.cloneNode( true ).click();
		}

		// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
		// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
		for ( i in { submit: true, change: true, focusin: true }) {
			div.setAttribute( eventName = "on" + i, "t" );

			support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
		}

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Support: IE<9
		// Iteration over object's inherited properties before its own.
		for ( i in jQuery( support ) ) {
			break;
		}
		support.ownLast = i !== "0";

		// Run tests that need a body at doc ready
		jQuery(function() {
			var container, marginDiv, tds,
				divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				body = document.getElementsByTagName("body")[0];

			if ( !body ) {
				// Return for frameset docs that don't have a body
				return;
			}

			container = document.createElement("div");
			container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

			body.appendChild( container ).appendChild( div );

			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			tds = div.getElementsByTagName("td");
			tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
			isSupported = ( tds[ 0 ].offsetHeight === 0 );

			tds[ 0 ].style.display = "";
			tds[ 1 ].style.display = "none";

			// Support: IE8
			// Check if empty table cells still have offsetWidth/Height
			support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

			// Check box-sizing and margin behavior.
			div.innerHTML = "";
			div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";

			// Workaround failing boxSizing test due to offsetWidth returning wrong value
			// with some non-1 values of body zoom, ticket #13543
			jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
				support.boxSizing = div.offsetWidth === 4;
			});

			// Use window.getComputedStyle because jsdom on node.js will break without it.
			if ( window.getComputedStyle ) {
				support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
				support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// Fails in WebKit before Feb 2011 nightlies
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = div.appendChild( document.createElement("div") );
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";

				support.reliableMarginRight =
					!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
			}

			if ( typeof div.style.zoom !== core_strundefined ) {
				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.innerHTML = "";
				div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
				support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				div.style.display = "block";
				div.innerHTML = "<div></div>";
				div.firstChild.style.width = "5px";
				support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

				if ( support.inlineBlockNeedsLayout ) {
					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}

			body.removeChild( container );

			// Null elements to avoid leaks in IE
			container = div = tds = marginDiv = null;
		});

		// Null elements to avoid leaks in IE
		all = select = fragment = opt = a = input = null;

		return support;
	})({});

	var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		rmultiDash = /([A-Z])/g;

	function internalData( elem, name, data, pvt /* Internal Use Only */ ){
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = core_deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements throw uncatchable exceptions if you
		// attempt to add expando properties to them.
		noData: {
			"applet": true,
			"embed": true,
			// Ban all objects except for Flash (which handle expandos)
			"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		},

		// A method for determining if a DOM node can handle the data expando
		acceptData: function( elem ) {
			// Do not set data on non-element because it will not be cleared (#8335).
			if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
				return false;
			}

			var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

			// nodes accept data unless otherwise specified; rejection can be conditional
			return !noData || noData !== true && elem.getAttribute("classid") === noData;
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var attrs, name,
				data = null,
				i = 0,
				elem = this[0];

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						attrs = elem.attributes;
						for ( ; i < attrs.length; i++ ) {
							name = attrs[i].name;

							if ( name.indexOf("data-") === 0 ) {
								name = jQuery.camelCase( name.slice(5) );

								dataAttr( elem, name, data[ name ] );
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					jQuery.data( this, key );
				});
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each(function() {
					jQuery.data( this, key, value );
				}) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
		},

		removeData: function( key ) {
			return this.each(function() {
				jQuery.removeData( this, key );
			});
		}
	});

	function dataAttr( elem, key, data ) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
							data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray(data) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function( time, type ) {
			time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
			type = type || "fx";

			return this.queue( type, function( next, hooks ) {
				var timeout = setTimeout( next, time );
				hooks.stop = function() {
					clearTimeout( timeout );
				};
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var nodeHook, boolHook,
		rclass = /[\t\r\n\f]/g,
		rreturn = /\r/g,
		rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = jQuery.support.getSetAttribute,
		getSetInput = jQuery.support.input;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		},

		prop: function( name, value ) {
			return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each(function() {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch( e ) {}
			});
		},

		addClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( core_rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
						elem.className = jQuery.trim( cur );

					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j,
				i = 0,
				len = this.length,
				proceed = arguments.length === 0 || typeof value === "string" && value;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( core_rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
						elem.className = value ? jQuery.trim( cur ) : "";
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( core_rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === core_strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						jQuery._data( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		},

		val: function( value ) {
			var ret, hooks, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map(val, function ( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					// Use proper attribute retrieval(#6932, #12072)
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						elem.text;
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
							optionSet = true;
						}
					}

					// force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},

		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === core_strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( core_rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}

			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

		jQuery.expr.attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
			function( elem, name, isXML ) {
				var fn = jQuery.expr.attrHandle[ name ],
					ret = isXML ?
						undefined :
						/* jshint eqeqeq: false */
						(jQuery.expr.attrHandle[ name ] = undefined) !=
							getter( elem, name, isXML ) ?

							name.toLowerCase() :
							null;
				jQuery.expr.attrHandle[ name ] = fn;
				return ret;
			} :
			function( elem, name, isXML ) {
				return isXML ?
					undefined :
					elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
			};
	});

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						(ret = elem.ownerDocument.createAttribute( name ))
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				return name === "value" || value === elem.getAttribute( name ) ?
					value :
					undefined;
			}
		};
		jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
			// Some attributes are constructed with empty-string values when not defined
			function( elem, name, isXML ) {
				var ret;
				return isXML ?
					undefined :
					(ret = elem.getAttributeNode( name )) && ret.value !== "" ?
						ret.value :
						null;
			};
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				return ret && ret.specified ?
					ret.value :
					undefined;
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each([ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		});
	}


	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !jQuery.support.hrefNormalized ) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each([ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		});
	}

	if ( !jQuery.support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}

	// Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !jQuery.support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});

	// IE6/7 call enctype encoding
	if ( !jQuery.support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !jQuery.support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( core_rnotwhite ) || [""];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = core_hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
					event.preventDefault();
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, ret, handleObj, matched, j,
				handlerQueue = [],
				args = core_slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var sel, handleObj, matches, i,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Even when returnValue equals to undefined Firefox will still show alert
					if ( event.result !== undefined ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle, false );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if ( typeof elem[ name ] === core_strundefined ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
				src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;
			if ( !e ) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if ( !jQuery.support.submitBubbles ) {

		jQuery.event.special.submit = {
			setup: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
					if ( form && !jQuery._data( form, "submitBubbles" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submit_bubble = true;
						});
						jQuery._data( form, "submitBubbles", true );
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submit_bubble ) {
					delete event._submit_bubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event, true );
					}
				}
			},

			teardown: function() {
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !jQuery.support.changeBubbles ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._just_changed = true;
							}
						});
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._just_changed && !event.isTrigger ) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event, true );
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event, true );
							}
						});
						jQuery._data( elem, "changeBubbles", true );
					}
				});
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Create "bubbling" focus and blur events
	if ( !jQuery.support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
				handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					if ( attaches++ === 0 ) {
						document.addEventListener( orig, handler, true );
					}
				},
				teardown: function() {
					if ( --attaches === 0 ) {
						document.removeEventListener( orig, handler, true );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var type, origFn;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	var isSimple = /^.[^:#\[\.,]*$/,
		rparentsprev = /^(?:parents|prev(?:Until|All))/,
		rneedsContext = jQuery.expr.match.needsContext,
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},

		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},

		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},

		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				ret = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						cur = ret.push( cur );
						break;
					}
				}
			}

			return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[0], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this );
		},

		add: function( selector, context ) {
			var set = typeof selector === "string" ?
					jQuery( selector, context ) :
					jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
				all = jQuery.merge( this.get(), set );

			return this.pushStack( jQuery.unique(all) );
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.unique( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	});

	jQuery.extend({
		filter: function( expr, elems, not ) {
			var elem = elems[ 0 ];

			if ( not ) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ?
				jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
				jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
					return elem.nodeType === 1;
				}));
		},

		dir: function( elem, dir, until ) {
			var matched = [],
				cur = elem[ dir ];

			while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
				if ( cur.nodeType === 1 ) {
					matched.push( cur );
				}
				cur = cur[dir];
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var r = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					r.push( n );
				}
			}

			return r;
		}
	});

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( isSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		});
	}
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
			"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/,
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
			legend: [ 1, "<fieldset>", "</fieldset>" ],
			area: [ 1, "<map>", "</map>" ],
			param: [ 1, "<object>", "</object>" ],
			thead: [ 1, "<table>", "</table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
		},
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement("div") );

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	jQuery.fn.extend({
		text: function( value ) {
			return jQuery.access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		// keepData is for internal use only--do not document
		remove: function( selector, keepData ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {

				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function () {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return jQuery.access( this, function( value ) {
				var elem = this[0] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for (; i < l; i++ ) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch(e) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var
				// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
				args = jQuery.map( this, function( elem ) {
					return [ elem.nextSibling, elem.parentNode ];
				}),
				i = 0;

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				var next = args[ i++ ],
					parent = args[ i++ ];

				if ( parent ) {
					// Don't use the snapshot next if it has moved (#13810)
					if ( next && next.parentNode !== parent ) {
						next = this.nextSibling;
					}
					jQuery( this ).remove();
					parent.insertBefore( elem, next );
				}
			// Allow new content to include elements from the context set
			}, true );

			// Force removal if there was no new content (e.g., from empty arguments)
			return i ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback, allowIntersection ) {

			// Flatten any nested arrays
			args = core_concat.apply( [], args );

			var first, node, hasScripts,
				scripts, doc, fragment,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[0],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[0] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback, allowIntersection );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[i], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Hope ajax is available...
									jQuery._evalUrl( node.src );
								} else {
									jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return this;
		}
	});

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
		}
	}

	function cloneCopyEvent( src, dest ) {

		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone(true);
				jQuery( insert[i] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				core_push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});

	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
				undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}

	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked( elem ) {
		if ( manipulation_rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; (node = srcElements[i]) != null; ++i ) {
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[i] ) {
						fixCloneNodeIssues( node, destElements[i] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; (node = srcElements[i]) != null; i++ ) {
						cloneCopyEvent( node, destElements[i] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var j, elem, contains,
				tmp, tag, tbody, wrap,
				l = elems.length,

				// Ensure a safe fragment
				safe = createSafeFragment( context ),

				nodes = [],
				i = 0;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;

						tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
							nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if ( !jQuery.support.tbody ) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test( elem ) ?
								tmp.firstChild :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test( elem ) ?
									tmp :
									0;

							j = elem && elem.childNodes.length;
							while ( j-- ) {
								if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
									elem.removeChild( tbody );
								}
							}
						}

						jQuery.merge( nodes, tmp.childNodes );

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while ( tmp.firstChild ) {
							tmp.removeChild( tmp.firstChild );
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if ( tmp ) {
				safe.removeChild( tmp );
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if ( !jQuery.support.appendChecked ) {
				jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
			}

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( safe.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			tmp = null;

			return safe;
		},

		cleanData: function( elems, /* internal */ acceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				deleteExpando = jQuery.support.deleteExpando,
				special = jQuery.event.special;

			for ( ; (elem = elems[i]) != null; i++ ) {

				if ( acceptData || jQuery.acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if ( deleteExpando ) {
								delete elem[ internalKey ];

							} else if ( typeof elem.removeAttribute !== core_strundefined ) {
								elem.removeAttribute( internalKey );

							} else {
								elem[ internalKey ] = null;
							}

							core_deletedIds.push( id );
						}
					}
				}
			}
		},

		_evalUrl: function( url ) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		}
	});
	jQuery.fn.extend({
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapAll( html.call(this, i) );
				});
			}

			if ( this[0] ) {
				// The elements to wrap the target around
				var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

				if ( this[0].parentNode ) {
					wrap.insertBefore( this[0] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function(i) {
					jQuery(this).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function(i) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	var iframe, getStyles, curCSS,
		ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/,
		rposition = /^(top|right|bottom|left)$/,
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rmargin = /^margin/,
		rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
		rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
		elemdisplay = { BODY: "block" },

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},

		cssExpand = [ "Top", "Right", "Bottom", "Left" ],
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function isHidden( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
				}
			} else {

				if ( !values[ index ] ) {
					hidden = isHidden( elem );

					if ( display && display !== "none" || !hidden ) {
						jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
					}
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		css: function( name, value ) {
			return jQuery.access( this, function( elem, name, value ) {
				var len, styles,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that NaN and null values aren't set. See: #7116
				if ( value == null || type === "number" && isNaN( value ) ) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

					// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
					// Fixes bug #5509
					try {
						style[ name ] = value;
					} catch(e) {}
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
			return window.getComputedStyle( elem, null );
		};

		curCSS = function( elem, name, _computed ) {
			var width, minWidth, maxWidth,
				computed = _computed || getStyles( elem ),

				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
				style = elem.style;

			if ( computed ) {

				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret;
		};
	} else if ( document.documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, _computed ) {
			var left, rs, rsLeft,
				computed = _computed || getStyles( elem ),
				ret = computed ? computed[ name ] : undefined,
				style = elem.style;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			return ret === "" ? "auto" : ret;
		};
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	// Try to determine the default display value of an element
	function css_defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
				// Use the already-created iframe if possible
				iframe = ( iframe ||
					jQuery("<iframe frameborder='0' width='0' height='0'/>")
					.css( "cssText", "display:block !important" )
				).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
				doc.write("<!doctype html><html><body>");
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}

	// Called ONLY from within css_defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
			display = jQuery.css( elem[0], "display" );
		elem.remove();
		return display;
	}

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	if ( !jQuery.support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
				// IE uses filters for opacity
				return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function() {
		if ( !jQuery.support.reliableMarginRight ) {
			jQuery.cssHooks.marginRight = {
				get: function( elem, computed ) {
					if ( computed ) {
						// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
						// Work around by temporarily setting element display to inline-block
						return jQuery.swap( elem, { "display": "inline-block" },
							curCSS, [ elem, "marginRight" ] );
					}
				}
			};
		}

		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
			jQuery.each( [ "top", "left" ], function( i, prop ) {
				jQuery.cssHooks[ prop ] = {
					get: function( elem, computed ) {
						if ( computed ) {
							computed = curCSS( elem, prop );
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test( computed ) ?
								jQuery( elem ).position()[ prop ] + "px" :
								computed;
						}
					}
				};
			});
		}

	});

	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.hidden = function( elem ) {
			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
				(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
		};

		jQuery.expr.filters.visible = function( elem ) {
			return !jQuery.expr.filters.hidden( elem );
		};
	}

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function(){
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function(){
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !manipulation_rcheckableType.test( type ) );
			})
			.map(function( i, elem ){
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ){
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});

	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	var
		// Document location
		ajaxLocParts,
		ajaxLocation,
		ajax_nonce = jQuery.now(),

		ajax_rquery = /\?/,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

		// Keep a copy of the old load method
		_load = jQuery.fn.load,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch( e ) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement( "a" );
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, response, type,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
		jQuery.fn[ type ] = function( fn ){
			return this.on( type, fn );
		};
	});

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // Cross-domain detection vars
				parts,
				// Loop variable
				i,
				// URL without anti-cache param
				cacheURL,
				// Response headers as string
				responseHeadersString,
				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,
				// Response headers
				responseHeaders,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function(s) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement("script");

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	});
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});
	var xhrCallbacks, xhrSupported,
		xhrId = 0,
		// #5280: Internet Explorer will keep connections alive if we don't abort on unload
		xhrOnUnloadAbort = window.ActiveXObject && function() {
			// Abort all pending requests
			var key;
			for ( key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		};

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch( e ) {}
	}

	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject ?
		/* Microsoft failed to properly
		 * implement the XMLHttpRequest in IE7 (can't request local files),
		 * so we use the ActiveXObject when it is available
		 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
		 * we need a fallback.
		 */
		function() {
			return !this.isLocal && createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	// Determine support properties
	xhrSupported = jQuery.ajaxSettings.xhr();
	jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = jQuery.support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport(function( s ) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !s.crossDomain || jQuery.support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {

						// Get a new xhr
						var handle, i,
							xhr = s.xhr();

						// Open the socket
						// Passing null username, generates a login popup on Opera (#2865)
						if ( s.username ) {
							xhr.open( s.type, s.url, s.async, s.username, s.password );
						} else {
							xhr.open( s.type, s.url, s.async );
						}

						// Apply custom fields if provided
						if ( s.xhrFields ) {
							for ( i in s.xhrFields ) {
								xhr[ i ] = s.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( s.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( s.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !s.crossDomain && !headers["X-Requested-With"] ) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Need an extra try/catch for cross domain requests in Firefox 3
						try {
							for ( i in headers ) {
								xhr.setRequestHeader( i, headers[ i ] );
							}
						} catch( err ) {}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( s.hasContent && s.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, responseHeaders, statusText, responses;

							// Firefox throws exceptions when accessing properties
							// of an xhr when a network error occurred
							// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
							try {

								// Was never called and is aborted or complete
								if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

									// Only called once
									callback = undefined;

									// Do not keep as active anymore
									if ( handle ) {
										xhr.onreadystatechange = jQuery.noop;
										if ( xhrOnUnloadAbort ) {
											delete xhrCallbacks[ handle ];
										}
									}

									// If it's an abort
									if ( isAbort ) {
										// Abort it manually if needed
										if ( xhr.readyState !== 4 ) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
										responseHeaders = xhr.getAllResponseHeaders();

										// When requesting binary data, IE6-9 will throw an exception
										// on any attempt to access responseText (#11426)
										if ( typeof xhr.responseText === "string" ) {
											responses.text = xhr.responseText;
										}

										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch( e ) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}

										// Filter status for non standard behaviors

										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if ( !status && s.isLocal && !s.crossDomain ) {
											status = responses.text ? 200 : 404;
										// IE - #1450: sometimes returns 1223 when it should be 204
										} else if ( status === 1223 ) {
											status = 204;
										}
									}
								}
							} catch( firefoxAccessException ) {
								if ( !isAbort ) {
									complete( -1, firefoxAccessException );
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, responseHeaders );
							}
						};

						if ( !s.async ) {
							// if we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout( callback );
						} else {
							handle = ++xhrId;
							if ( xhrOnUnloadAbort ) {
								// Create the active xhrs callbacks list if needed
								// and attach the unload handler
								if ( !xhrCallbacks ) {
									xhrCallbacks = {};
									jQuery( window ).unload( xhrOnUnloadAbort );
								}
								// Add to list of active xhrs callbacks
								xhrCallbacks[ handle ] = callback;
							}
							xhr.onreadystatechange = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		});
	}
	var fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			}]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if ( jQuery.css( elem, "display" ) === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";

				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !jQuery.support.shrinkWrapBlocks ) {
				anim.always(function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				});
			}
		}


		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
					continue;
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth? 1 : 0;
		for( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p*Math.PI ) / 2;
		}
	};

	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		if ( timer() && jQuery.timers.push( timer ) ) {
			jQuery.fx.start();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	if ( jQuery.expr && jQuery.expr.filters ) {
		jQuery.expr.filters.animated = function( elem ) {
			return jQuery.grep(jQuery.timers, function( fn ) {
				return elem === fn.elem;
			}).length;
		};
	}
	jQuery.fn.offset = function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	};

	jQuery.offset = {

		setOffset: function( elem, options, i ) {
			var position = jQuery.css( elem, "position" );

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			var curElem = jQuery( elem ),
				curOffset = curElem.offset(),
				curCSSTop = jQuery.css( elem, "top" ),
				curCSSLeft = jQuery.css( elem, "left" ),
				calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
				props = {}, curPosition = {}, curTop, curLeft;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};


	jQuery.fn.extend({

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});


	// Create scrollLeft and scrollTop methods
	jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return jQuery.access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? (prop in win) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return jQuery.access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	// Limit scope pollution from any deprecated API
	// (function() {

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// })();
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose jQuery as module.exports in loaders that implement the Node
		// module pattern (including browserify). Do not create the global, since
		// the user will be storing it themselves locally, and globals are frowned
		// upon in the Node module world.
		module.exports = jQuery;
	} else {
		// Otherwise expose jQuery to the global object as usual
		window.jQuery = window.$ = jQuery;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
		if ( true ) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return jQuery; }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}

	})( window );
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2

	//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(root, factory) {

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(9), exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore');
	    factory(root, exports, _);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	}(this, function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create local references to array methods we'll want to use later.
	  var array = [];
	  var push = array.push;
	  var slice = array.slice;
	  var splice = array.splice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.1.2';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // custom events. You may bind with `on` or remove with `off` callback
	  // functions to an event; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {

	    // Bind an event to a `callback` function. Passing `"all"` will bind
	    // the callback to all events fired.
	    on: function(name, callback, context) {
	      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	      this._events || (this._events = {});
	      var events = this._events[name] || (this._events[name] = []);
	      events.push({callback: callback, context: context, ctx: context || this});
	      return this;
	    },

	    // Bind an event to only be triggered a single time. After the first time
	    // the callback is invoked, it will be removed.
	    once: function(name, callback, context) {
	      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	      var self = this;
	      var once = _.once(function() {
	        self.off(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	      return this.on(name, once, context);
	    },

	    // Remove one or many callbacks. If `context` is null, removes all
	    // callbacks with that function. If `callback` is null, removes all
	    // callbacks for the event. If `name` is null, removes all bound
	    // callbacks for all events.
	    off: function(name, callback, context) {
	      var retain, ev, events, names, i, l, j, k;
	      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	      if (!name && !callback && !context) {
	        this._events = void 0;
	        return this;
	      }
	      names = name ? [name] : _.keys(this._events);
	      for (i = 0, l = names.length; i < l; i++) {
	        name = names[i];
	        if (events = this._events[name]) {
	          this._events[name] = retain = [];
	          if (callback || context) {
	            for (j = 0, k = events.length; j < k; j++) {
	              ev = events[j];
	              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                  (context && context !== ev.context)) {
	                retain.push(ev);
	              }
	            }
	          }
	          if (!retain.length) delete this._events[name];
	        }
	      }

	      return this;
	    },

	    // Trigger one or many events, firing all bound callbacks. Callbacks are
	    // passed the same arguments as `trigger` is, apart from the event name
	    // (unless you're listening on `"all"`, which will cause your callback to
	    // receive the true name of the event as the first argument).
	    trigger: function(name) {
	      if (!this._events) return this;
	      var args = slice.call(arguments, 1);
	      if (!eventsApi(this, 'trigger', name, args)) return this;
	      var events = this._events[name];
	      var allEvents = this._events.all;
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, arguments);
	      return this;
	    },

	    // Tell this object to stop listening to either specific events ... or
	    // to every object it's currently listening to.
	    stopListening: function(obj, name, callback) {
	      var listeningTo = this._listeningTo;
	      if (!listeningTo) return this;
	      var remove = !name && !callback;
	      if (!callback && typeof name === 'object') callback = this;
	      if (obj) (listeningTo = {})[obj._listenId] = obj;
	      for (var id in listeningTo) {
	        obj = listeningTo[id];
	        obj.off(name, callback, this);
	        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	      }
	      return this;
	    }

	  };

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Implement fancy features of the Events API such as multiple event
	  // names `"change blur"` and jQuery-style event maps `{change: action}`
	  // in terms of the existing API.
	  var eventsApi = function(obj, action, name, rest) {
	    if (!name) return true;

	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        obj[action].apply(obj, [key, name[key]].concat(rest));
	      }
	      return false;
	    }

	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return false;
	    }

	    return true;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

	  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	  // listen to an event in another object ... keeping track of what it's
	  // listening to.
	  _.each(listenMethods, function(implementation, method) {
	    Events[method] = function(obj, name, callback) {
	      var listeningTo = this._listeningTo || (this._listeningTo = {});
	      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	      listeningTo[id] = obj;
	      if (!callback && typeof name === 'object') callback = this;
	      obj[implementation](name, callback, this);
	      return this;
	    };
	  });

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId('c');
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      var attr, attrs, unset, changes, silent, changing, prev, current;
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      unset           = options.unset;
	      silent          = options.silent;
	      changes         = [];
	      changing        = this._changing;
	      this._changing  = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	      current = this.attributes, prev = this._previousAttributes;

	      // Check for changes of `id`.
	      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

	      // For each `set` attribute, update or delete the current value.
	      for (attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          this.changed[attr] = val;
	        } else {
	          delete this.changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0, l = changes.length; i < l; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var val, changed = false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      for (var attr in diff) {
	        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
	        (changed || (changed = {}))[attr] = val;
	      }
	      return changed;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server. If the server's representation of the
	    // model differs from its current attributes, they will be overridden,
	    // triggering a `"change"` event.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        if (!model.set(model.parse(resp, options), options)) return false;
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      var attrs, method, xhr, attributes = this.attributes;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true}, options);

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !options.wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }

	      // Set temporary attributes if `{wait: true}`.
	      if (attrs && options.wait) {
	        this.attributes = _.extend({}, attributes, attrs);
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = model.parse(resp, options);
	        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
	        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
	          return false;
	        }
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch') options.attrs = attrs;
	      xhr = this.sync(method, this, options);

	      // Restore attributes.
	      if (attrs && options.wait) this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;

	      var destroy = function() {
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (options.wait || model.isNew()) destroy();
	        if (success) success(model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      if (this.isNew()) {
	        options.success();
	        return false;
	      }
	      wrapError(this, options);

	      var xhr = this.sync('delete', this, options);
	      if (!options.wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend(options || {}, { validate: true }));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model.
	  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  _.each(modelMethods, function(method) {
	    Model.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.attributes);
	      return _[method].apply(_, args);
	    };
	  });

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analagous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model){ return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      options || (options = {});
	      var i, l, index, model;
	      for (i = 0, l = models.length; i < l; i++) {
	        model = models[i] = this.get(models[i]);
	        if (!model) continue;
	        delete this._byId[model.id];
	        delete this._byId[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model, options);
	      }
	      return singular ? models[0] : models;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      options = _.defaults({}, options, setOptions);
	      if (options.parse) models = this.parse(models, options);
	      var singular = !_.isArray(models);
	      models = singular ? (models ? [models] : []) : _.clone(models);
	      var i, l, id, model, attrs, existing, sort;
	      var at = options.at;
	      var targetModel = this.model;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	      var toAdd = [], toRemove = [], modelMap = {};
	      var add = options.add, merge = options.merge, remove = options.remove;
	      var order = !sortable && add && remove ? [] : false;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      for (i = 0, l = models.length; i < l; i++) {
	        attrs = models[i] || {};
	        if (attrs instanceof Model) {
	          id = model = attrs;
	        } else {
	          id = attrs[targetModel.prototype.idAttribute || 'id'];
	        }

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        if (existing = this.get(id)) {
	          if (remove) modelMap[existing.cid] = true;
	          if (merge) {
	            attrs = attrs === model ? model.attributes : attrs;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(attrs, options);
	          if (!model) continue;
	          toAdd.push(model);
	          this._addReference(model, options);
	        }

	        // Do not add multiple models with the same `id`.
	        model = existing || model;
	        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
	        modelMap[model.id] = true;
	      }

	      // Remove nonexistent models if appropriate.
	      if (remove) {
	        for (i = 0, l = this.length; i < l; ++i) {
	          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this.remove(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      if (toAdd.length || (order && order.length)) {
	        if (sortable) sort = true;
	        this.length += toAdd.length;
	        if (at != null) {
	          for (i = 0, l = toAdd.length; i < l; i++) {
	            this.models.splice(at + i, 0, toAdd[i]);
	          }
	        } else {
	          if (order) this.models.length = 0;
	          var orderedModels = order || toAdd;
	          for (i = 0, l = orderedModels.length; i < l; i++) {
	            this.models.push(orderedModels[i]);
	          }
	        }
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0, l = toAdd.length; i < l; i++) {
	          (model = toAdd[i]).trigger('add', model, this, options);
	        }
	        if (sort || (order && order.length)) this.trigger('sort', this, options);
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options || (options = {});
	      for (var i = 0, l = this.models.length; i < l; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      this.remove(model, options);
	      return model;
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      this.remove(model, options);
	      return model;
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      if (_.isEmpty(attrs)) return first ? void 0 : [];
	      return this[first ? 'find' : 'filter'](function(model) {
	        for (var key in attrs) {
	          if (attrs[key] !== model.get(key)) return false;
	        }
	        return true;
	      });
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      // Run sort based on type of `comparator`.
	      if (_.isString(this.comparator) || this.comparator.length === 1) {
	        this.models = this.sortBy(this.comparator, this);
	      } else {
	        this.models.sort(_.bind(this.comparator, this));
	      }

	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success(collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      if (!(model = this._prepareModel(model, options))) return false;
	      if (!options.wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp) {
	        if (options.wait) collection.add(model, options);
	        if (success) success(model, resp, options);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models);
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (attrs instanceof Model) return attrs;
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      if (model.id != null) this._byId[model.id] = model;
	      if (!model.collection) model.collection = this;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (model && event === 'change:' + model.idAttribute) {
	        delete this._byId[model.previous(model.idAttribute)];
	        if (model.id != null) this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
	    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
	    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
	    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
	    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
	    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  _.each(methods, function(method) {
	    Collection.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.models);
	      return _[method].apply(_, args);
	    };
	  });

	  // Underscore methods that take a property name as an argument.
	  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

	  // Use attributes instead of properties.
	  _.each(attributeMethods, function(method) {
	    Collection.prototype[method] = function(value, context) {
	      var iterator = _.isFunction(value) ? value : function(model) {
	        return model.get(value);
	      };
	      return _[method](this.models, iterator, context);
	    };
	  });

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    options || (options = {});
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be merged as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this.$el.remove();
	      this.stopListening();
	      return this;
	    },

	    // Change the view's element (`this.el` property), including event
	    // re-delegation.
	    setElement: function(element, delegate) {
	      if (this.$el) this.undelegateEvents();
	      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) this.delegateEvents();
	      return this;
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    // This only works for delegate-able events: not `focus`, `blur`, and
	    // not `change`, `submit`, and `reset` in Internet Explorer.
	    delegateEvents: function(events) {
	      if (!(events || (events = _.result(this, 'events')))) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[events[key]];
	        if (!method) continue;

	        var match = key.match(delegateEventSplitter);
	        var eventName = match[1], selector = match[2];
	        method = _.bind(method, this);
	        eventName += '.delegateEvents' + this.cid;
	        if (selector === '') {
	          this.$el.on(eventName, method);
	        } else {
	          this.$el.on(eventName, selector, method);
	        }
	      }
	      return this;
	    },

	    // Clears all callbacks previously bound to the view with `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
	        this.setElement($el, false);
	      } else {
	        this.setElement(_.result(this, 'el'), false);
	      }
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
	    // that still has ActiveX enabled by default, override jQuery to use that
	    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
	    if (params.type === 'PATCH' && noXhrPatch) {
	      params.xhr = function() {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	      };
	    }

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        router.execute(callback, args);
	        router.trigger.apply(router, ['route:' + name].concat(args));
	        router.trigger('route', name, args);
	        Backbone.history.trigger('route', router, name, args);
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;

	  // Cached regex for removing a trailing slash.
	  var trailingSlash = /\/$/;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function(fragment, forcePushState) {
	      if (fragment == null) {
	        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
	          fragment = decodeURI(this.location.pathname + this.location.search);
	          var root = this.root.replace(trailingSlash, '');
	          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error("Backbone.history has already been started");
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
	      var fragment          = this.getFragment();
	      var docMode           = document.documentMode;
	      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      if (oldIE && this._wantsHashChange) {
	        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
	        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        Backbone.$(window).on('popstate', this.checkUrl);
	      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
	        Backbone.$(window).on('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = this.location;

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          this.fragment = this.getFragment(null, true);
	          this.location.replace(this.root + '#' + this.fragment);
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot() && loc.hash) {
	          this.fragment = this.getHash().replace(routeStripper, '');
	          this.history.replaceState({}, document.title, this.root + this.fragment);
	        }

	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.any(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      var url = this.root + (fragment = this.getFragment(fragment || ''));

	      // Strip the hash for matching.
	      fragment = fragment.replace(pathStripper, '');

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // Don't include a trailing slash on the root.
	      if (fragment === '' && url !== '/') url = url.slice(0, -1);

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if(!options.replace) this.iframe.document.open().close();
	          this._updateHash(this.iframe.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error(model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;

	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		return function() {
			head.removeChild(styleElement);
		};
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(11)
		// The css code:
		(__webpack_require__(13))
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n@media print {\n  * {\n    text-shadow: none !important;\n    color: #000 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  select {\n    background: #fff !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url("+__webpack_require__(97)+");\n  src: url("+__webpack_require__(97)+"?#iefix) format('embedded-opentype'), url("+__webpack_require__(100)+") format('woff'), url("+__webpack_require__(98)+") format('truetype'), url("+__webpack_require__(99)+"#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\2a\";\n}\n.glyphicon-plus:before {\n  content: \"\\2b\";\n}\n.glyphicon-euro:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  background-color: #ffffff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #428bca;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #2a6496;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  width: 100% \\9;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  width: 100% \\9;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\ncite {\n  font-style: normal;\n}\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777777;\n}\n.text-primary {\n  color: #428bca;\n}\na.text-primary:hover {\n  color: #3071a9;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #428bca;\n}\na.bg-primary:hover {\n  background-color: #3071a9;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\nblockquote:before,\nblockquote:after {\n  content: \"\";\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #ffffff;\n  background-color: #333333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\ntable {\n  background-color: transparent;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #dddddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dddddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #dddddd;\n}\n.table .table {\n  background-color: #ffffff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #dddddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #dddddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-child(odd) > td,\n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover > td,\n.table-hover > tbody > tr:hover > th {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #dddddd;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n  color: #777777;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #777777;\n}\n.form-control::-webkit-input-placeholder {\n  color: #777777;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n  background-color: #eeeeee;\n  opacity: 1;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  line-height: 34px;\n  line-height: 1.42857143 \\0;\n}\ninput[type=\"date\"].input-sm,\ninput[type=\"time\"].input-sm,\ninput[type=\"datetime-local\"].input-sm,\ninput[type=\"month\"].input-sm {\n  line-height: 30px;\n}\ninput[type=\"date\"].input-lg,\ninput[type=\"time\"].input-lg,\ninput[type=\"datetime-local\"].input-lg,\ninput[type=\"month\"].input-lg {\n  line-height: 46px;\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  min-height: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-sm,\n.form-horizontal .form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.input-lg,\n.form-horizontal .form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 25px;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.input-lg + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  top: 0;\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.3px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n  }\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus {\n  color: #333333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-default {\n  color: #333333;\n  background-color: #ffffff;\n  border-color: #cccccc;\n}\n.btn-default:hover,\n.btn-default:focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #ffffff;\n  border-color: #cccccc;\n}\n.btn-default .badge {\n  color: #ffffff;\n  background-color: #333333;\n}\n.btn-primary {\n  color: #ffffff;\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #ffffff;\n  background-color: #3071a9;\n  border-color: #285e8e;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #428bca;\n  border-color: #357ebd;\n}\n.btn-primary .badge {\n  color: #428bca;\n  background-color: #ffffff;\n}\n.btn-success {\n  color: #ffffff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #ffffff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #ffffff;\n}\n.btn-info {\n  color: #ffffff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:hover,\n.btn-info:focus,\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #ffffff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #ffffff;\n}\n.btn-warning {\n  color: #ffffff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #ffffff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #ffffff;\n}\n.btn-danger {\n  color: #ffffff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #ffffff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #ffffff;\n}\n.btn-link {\n  color: #428bca;\n  font-weight: normal;\n  cursor: pointer;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #2a6496;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  -o-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px solid;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #ffffff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #428bca;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px solid;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 1px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus {\n  outline: 0;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child > .btn:last-child,\n.btn-group > .btn-group:first-child > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn > input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn > input[type=\"checkbox\"] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.nav > li.disabled > a {\n  color: #777777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #428bca;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #dddddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #dddddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #dddddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #dddddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #ffffff;\n  background-color: #428bca;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #dddddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #dddddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #ffffff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .navbar-nav.navbar-right:last-child {\n    margin-right: -15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n  }\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n  .navbar-form.navbar-right:last-child {\n    margin-right: -15px;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n  .navbar-text.navbar-right:last-child {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #cccccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #dddddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #dddddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555555;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #cccccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333333;\n}\n.navbar-default .btn-link {\n  color: #777777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #cccccc;\n}\n.navbar-inverse {\n  background-color: #222222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #777777;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #ffffff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #777777;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #777777;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #ffffff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #ffffff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #ffffff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #080808;\n  color: #ffffff;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #777777;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #ffffff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffffff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #777777;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #ffffff;\n}\n.navbar-inverse .btn-link {\n  color: #777777;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #ffffff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  content: \"/\\00a0\";\n  padding: 0 5px;\n  color: #cccccc;\n}\n.breadcrumb > .active {\n  color: #777777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #428bca;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  margin-left: -1px;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  color: #2a6496;\n  background-color: #eeeeee;\n  border-color: #dddddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #428bca;\n  border-color: #428bca;\n  cursor: default;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #ffffff;\n  border-color: #dddddd;\n  cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #ffffff;\n  cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #ffffff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #428bca;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #3071a9;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\na.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #428bca;\n  background-color: #ffffff;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #428bca;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #428bca;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar[aria-valuenow=\"1\"],\n.progress-bar[aria-valuenow=\"2\"] {\n  min-width: 30px;\n}\n.progress-bar[aria-valuenow=\"0\"] {\n  color: #777777;\n  min-width: 30px;\n  background-color: transparent;\n  background-image: none;\n  box-shadow: none;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media,\n.media .media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media-object {\n  display: block;\n}\n.media-heading {\n  margin: 0 0 5px;\n}\n.media > .pull-left {\n  margin-right: 10px;\n}\n.media > .pull-right {\n  margin-left: 10px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #ffffff;\n  border: 1px solid #dddddd;\n}\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\na.list-group-item {\n  color: #555555;\n}\na.list-group-item .list-group-item-heading {\n  color: #333333;\n}\na.list-group-item:hover,\na.list-group-item:focus {\n  text-decoration: none;\n  color: #555555;\n  background-color: #f5f5f5;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #ffffff;\n  background-color: #428bca;\n  border-color: #428bca;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #e1edf7;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\na.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\na.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\na.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\na.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #ffffff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #dddddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive {\n  border-top: 1px solid #dddddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body {\n  border-top: 1px solid #dddddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #dddddd;\n}\n.panel-default {\n  border-color: #dddddd;\n}\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #dddddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #dddddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #dddddd;\n}\n.panel-primary {\n  border-color: #428bca;\n}\n.panel-primary > .panel-heading {\n  color: #ffffff;\n  background-color: #428bca;\n  border-color: #428bca;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #428bca;\n}\n.panel-primary > .panel-heading .badge {\n  color: #428bca;\n  background-color: #ffffff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #428bca;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.embed-responsive.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000000;\n  text-shadow: 0 1px 0 #ffffff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover,\n.close:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate3d(0, -25%, 0);\n  transform: translate3d(0, -25%, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #ffffff;\n  border: 1px solid #999999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.42857143px;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.4;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  text-align: left;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  white-space: normal;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 18px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #ffffff;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #ffffff;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n  bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #ffffff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  font-family: serif;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #ffffff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #ffffff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n.affix {\n  position: fixed;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// MarionetteJS (Backbone.Marionette)
	// ----------------------------------
	// v1.8.8
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://marionettejs.com

	(function (root, factory) {
	  if (true) {

	    var underscore = __webpack_require__(2);
	    var backbone = __webpack_require__(10);
	    var wreqr = __webpack_require__(90);
	    var babysitter = __webpack_require__(91);

	    module.exports = factory(underscore, backbone, wreqr, babysitter);

	  } else if (typeof define === 'function' && define.amd) {

	    define(['underscore', 'backbone', 'backbone.wreqr', 'backbone.babysitter'], factory);

	  }
	}(this, function (_, Backbone) {

	  var Marionette = (function(global, Backbone, _){
	    "use strict";
	  
	    // Define and export the Marionette namespace
	    var Marionette = {};
	    Backbone.Marionette = Marionette;
	  
	    // Get the DOM manipulator for later use
	    Marionette.$ = Backbone.$;
	  
	  // Helpers
	  // -------
	  
	  // For slicing `arguments` in functions
	  var slice = Array.prototype.slice;
	  
	  function throwError(message, name) {
	    var error = new Error(message);
	    error.name = name || 'Error';
	    throw error;
	  }
	  
	  // Marionette.extend
	  // -----------------
	  
	  // Borrow the Backbone `extend` method so we can use it as needed
	  Marionette.extend = Backbone.Model.extend;
	  
	  // Marionette.getOption
	  // --------------------
	  
	  // Retrieve an object, function or other value from a target
	  // object or its `options`, with `options` taking precedence.
	  Marionette.getOption = function(target, optionName){
	    if (!target || !optionName){ return; }
	    var value;
	  
	    if (target.options && (optionName in target.options) && (target.options[optionName] !== undefined)){
	      value = target.options[optionName];
	    } else {
	      value = target[optionName];
	    }
	  
	    return value;
	  };
	  
	  // Marionette.normalizeMethods
	  // ----------------------
	  
	  // Pass in a mapping of events => functions or function names
	  // and return a mapping of events => functions
	  Marionette.normalizeMethods = function(hash) {
	    var normalizedHash = {}, method;
	    _.each(hash, function(fn, name) {
	      method = fn;
	      if (!_.isFunction(method)) {
	        method = this[method];
	      }
	      if (!method) {
	        return;
	      }
	      normalizedHash[name] = method;
	    }, this);
	    return normalizedHash;
	  };
	  
	  
	  // allows for the use of the @ui. syntax within
	  // a given key for triggers and events
	  // swaps the @ui with the associated selector
	  Marionette.normalizeUIKeys = function(hash, ui) {
	    if (typeof(hash) === "undefined") {
	      return;
	    }
	  
	    _.each(_.keys(hash), function(v) {
	      var pattern = /@ui.[a-zA-Z_$0-9]*/g;
	      if (v.match(pattern)) {
	        hash[v.replace(pattern, function(r) {
	          return ui[r.slice(4)];
	        })] = hash[v];
	        delete hash[v];
	      }
	    });
	  
	    return hash;
	  };
	  
	  // Mix in methods from Underscore, for iteration, and other
	  // collection related features.
	  // Borrowing this code from Backbone.Collection:
	  // http://backbonejs.org/docs/backbone.html#section-106
	  Marionette.actAsCollection = function(object, listProperty) {
	    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	      'last', 'without', 'isEmpty', 'pluck'];
	  
	    _.each(methods, function(method) {
	      object[method] = function() {
	        var list = _.values(_.result(this, listProperty));
	        var args = [list].concat(_.toArray(arguments));
	        return _[method].apply(_, args);
	      };
	    });
	  };
	  
	  // Trigger an event and/or a corresponding method name. Examples:
	  //
	  // `this.triggerMethod("foo")` will trigger the "foo" event and
	  // call the "onFoo" method.
	  //
	  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
	  // call the "onFooBar" method.
	  Marionette.triggerMethod = (function(){
	  
	    // split the event name on the ":"
	    var splitter = /(^|:)(\w)/gi;
	  
	    // take the event section ("section1:section2:section3")
	    // and turn it in to uppercase name
	    function getEventName(match, prefix, eventName) {
	      return eventName.toUpperCase();
	    }
	  
	    // actual triggerMethod implementation
	    var triggerMethod = function(event) {
	      // get the method name from the event name
	      var methodName = 'on' + event.replace(splitter, getEventName);
	      var method = this[methodName];
	  
	      // trigger the event, if a trigger method exists
	      if(_.isFunction(this.trigger)) {
	        this.trigger.apply(this, arguments);
	      }
	  
	      // call the onMethodName if it exists
	      if (_.isFunction(method)) {
	        // pass all arguments, except the event name
	        return method.apply(this, _.tail(arguments));
	      }
	    };
	  
	    return triggerMethod;
	  })();
	  
	  // DOMRefresh
	  // ----------
	  //
	  // Monitor a view's state, and after it has been rendered and shown
	  // in the DOM, trigger a "dom:refresh" event every time it is
	  // re-rendered.
	  
	  Marionette.MonitorDOMRefresh = (function(documentElement){
	    // track when the view has been shown in the DOM,
	    // using a Marionette.Region (or by other means of triggering "show")
	    function handleShow(view){
	      view._isShown = true;
	      triggerDOMRefresh(view);
	    }
	  
	    // track when the view has been rendered
	    function handleRender(view){
	      view._isRendered = true;
	      triggerDOMRefresh(view);
	    }
	  
	    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
	    function triggerDOMRefresh(view){
	      if (view._isShown && view._isRendered && isInDOM(view)){
	        if (_.isFunction(view.triggerMethod)){
	          view.triggerMethod("dom:refresh");
	        }
	      }
	    }
	  
	    function isInDOM(view) {
	      return documentElement.contains(view.el);
	    }
	  
	    // Export public API
	    return function(view){
	      view.listenTo(view, "show", function(){
	        handleShow(view);
	      });
	  
	      view.listenTo(view, "render", function(){
	        handleRender(view);
	      });
	    };
	  })(document.documentElement);
	  
	  
	  // Marionette.bindEntityEvents & unbindEntityEvents
	  // ---------------------------
	  //
	  // These methods are used to bind/unbind a backbone "entity" (collection/model)
	  // to methods on a target object.
	  //
	  // The first parameter, `target`, must have a `listenTo` method from the
	  // EventBinder object.
	  //
	  // The second parameter is the entity (Backbone.Model or Backbone.Collection)
	  // to bind the events from.
	  //
	  // The third parameter is a hash of { "event:name": "eventHandler" }
	  // configuration. Multiple handlers can be separated by a space. A
	  // function can be supplied instead of a string handler name.
	  
	  (function(Marionette){
	    "use strict";
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function bindFromStrings(target, entity, evt, methods){
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	  
	        var method = target[methodName];
	        if(!method) {
	          throwError("Method '"+ methodName +"' was configured as an event handler, but does not exist.");
	        }
	  
	        target.listenTo(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function bindToFunction(target, entity, evt, method){
	        target.listenTo(entity, evt, method);
	    }
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function unbindFromStrings(target, entity, evt, methods){
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	        var method = target[methodName];
	        target.stopListening(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function unbindToFunction(target, entity, evt, method){
	        target.stopListening(entity, evt, method);
	    }
	  
	  
	    // generic looping function
	    function iterateEvents(target, entity, bindings, functionCallback, stringCallback){
	      if (!entity || !bindings) { return; }
	  
	      // allow the bindings to be a function
	      if (_.isFunction(bindings)){
	        bindings = bindings.call(target);
	      }
	  
	      // iterate the bindings and bind them
	      _.each(bindings, function(methods, evt){
	  
	        // allow for a function as the handler,
	        // or a list of event names as a string
	        if (_.isFunction(methods)){
	          functionCallback(target, entity, evt, methods);
	        } else {
	          stringCallback(target, entity, evt, methods);
	        }
	  
	      });
	    }
	  
	    // Export Public API
	    Marionette.bindEntityEvents = function(target, entity, bindings){
	      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
	    };
	  
	    Marionette.unbindEntityEvents = function(target, entity, bindings){
	      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
	    };
	  
	  })(Marionette);
	  
	  
	  // Callbacks
	  // ---------
	  
	  // A simple way of managing a collection of callbacks
	  // and executing them at a later point in time, using jQuery's
	  // `Deferred` object.
	  Marionette.Callbacks = function(){
	    this._deferred = Marionette.$.Deferred();
	    this._callbacks = [];
	  };
	  
	  _.extend(Marionette.Callbacks.prototype, {
	  
	    // Add a callback to be executed. Callbacks added here are
	    // guaranteed to execute, even if they are added after the
	    // `run` method is called.
	    add: function(callback, contextOverride){
	      this._callbacks.push({cb: callback, ctx: contextOverride});
	  
	      this._deferred.done(function(context, options){
	        if (contextOverride){ context = contextOverride; }
	        callback.call(context, options);
	      });
	    },
	  
	    // Run all registered callbacks with the context specified.
	    // Additional callbacks can be added after this has been run
	    // and they will still be executed.
	    run: function(options, context){
	      this._deferred.resolve(context, options);
	    },
	  
	    // Resets the list of callbacks to be run, allowing the same list
	    // to be run multiple times - whenever the `run` method is called.
	    reset: function(){
	      var callbacks = this._callbacks;
	      this._deferred = Marionette.$.Deferred();
	      this._callbacks = [];
	  
	      _.each(callbacks, function(cb){
	        this.add(cb.cb, cb.ctx);
	      }, this);
	    }
	  });
	  
	  // Marionette Controller
	  // ---------------------
	  //
	  // A multi-purpose object to use as a controller for
	  // modules and routers, and as a mediator for workflow
	  // and coordination of other objects, views, and more.
	  Marionette.Controller = function(options){
	    this.triggerMethod = Marionette.triggerMethod;
	    this.options = options || {};
	  
	    if (_.isFunction(this.initialize)){
	      this.initialize(this.options);
	    }
	  };
	  
	  Marionette.Controller.extend = Marionette.extend;
	  
	  // Controller Methods
	  // --------------
	  
	  // Ensure it can trigger events with Backbone.Events
	  _.extend(Marionette.Controller.prototype, Backbone.Events, {
	    close: function(){
	      this.stopListening();
	      var args = Array.prototype.slice.call(arguments);
	      this.triggerMethod.apply(this, ["close"].concat(args));
	      this.off();
	    }
	  });
	  
	  // Region
	  // ------
	  //
	  // Manage the visual regions of your composite application. See
	  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
	  
	  Marionette.Region = function(options){
	    this.options = options || {};
	    this.el = Marionette.getOption(this, "el");
	  
	    if (!this.el){
	      throwError("An 'el' must be specified for a region.", "NoElError");
	    }
	  
	    if (this.initialize){
	      var args = Array.prototype.slice.apply(arguments);
	      this.initialize.apply(this, args);
	    }
	  };
	  
	  
	  // Region Type methods
	  // -------------------
	  
	  _.extend(Marionette.Region, {
	  
	    // Build an instance of a region by passing in a configuration object
	    // and a default region type to use if none is specified in the config.
	    //
	    // The config object should either be a string as a jQuery DOM selector,
	    // a Region type directly, or an object literal that specifies both
	    // a selector and regionType:
	    //
	    // ```js
	    // {
	    //   selector: "#foo",
	    //   regionType: MyCustomRegion
	    // }
	    // ```
	    //
	    buildRegion: function(regionConfig, defaultRegionType){
	      var regionIsString = _.isString(regionConfig);
	      var regionSelectorIsString = _.isString(regionConfig.selector);
	      var regionTypeIsUndefined = _.isUndefined(regionConfig.regionType);
	      var regionIsType = _.isFunction(regionConfig);
	  
	      if (!regionIsType && !regionIsString && !regionSelectorIsString) {
	        throwError("Region must be specified as a Region type, a selector string or an object with selector property");
	      }
	  
	      var selector, RegionType;
	  
	      // get the selector for the region
	  
	      if (regionIsString) {
	        selector = regionConfig;
	      }
	  
	      if (regionConfig.selector) {
	        selector = regionConfig.selector;
	        delete regionConfig.selector;
	      }
	  
	      // get the type for the region
	  
	      if (regionIsType){
	        RegionType = regionConfig;
	      }
	  
	      if (!regionIsType && regionTypeIsUndefined) {
	        RegionType = defaultRegionType;
	      }
	  
	      if (regionConfig.regionType) {
	        RegionType = regionConfig.regionType;
	        delete regionConfig.regionType;
	      }
	  
	      if (regionIsString || regionIsType) {
	        regionConfig = {};
	      }
	  
	      regionConfig.el = selector;
	  
	      // build the region instance
	      var region = new RegionType(regionConfig);
	  
	      // override the `getEl` function if we have a parentEl
	      // this must be overridden to ensure the selector is found
	      // on the first use of the region. if we try to assign the
	      // region's `el` to `parentEl.find(selector)` in the object
	      // literal to build the region, the element will not be
	      // guaranteed to be in the DOM already, and will cause problems
	      if (regionConfig.parentEl){
	        region.getEl = function(selector) {
	          var parentEl = regionConfig.parentEl;
	          if (_.isFunction(parentEl)){
	            parentEl = parentEl();
	          }
	          return parentEl.find(selector);
	        };
	      }
	  
	      return region;
	    }
	  
	  });
	  
	  // Region Instance Methods
	  // -----------------------
	  
	  _.extend(Marionette.Region.prototype, Backbone.Events, {
	  
	    // Displays a backbone view instance inside of the region.
	    // Handles calling the `render` method for you. Reads content
	    // directly from the `el` attribute. Also calls an optional
	    // `onShow` and `close` method on your view, just after showing
	    // or just before closing the view, respectively.
	    // The `preventClose` option can be used to prevent a view from being destroyed on show.
	    show: function(view, options){
	      this.ensureEl();
	  
	      var showOptions = options || {};
	      var isViewClosed = view.isClosed || _.isUndefined(view.$el);
	      var isDifferentView = view !== this.currentView;
	      var preventClose =  !!showOptions.preventClose;
	  
	      // only close the view if we don't want to preventClose and the view is different
	      var _shouldCloseView = !preventClose && isDifferentView;
	  
	      if (_shouldCloseView) {
	        this.close();
	      }
	  
	      view.render();
	      Marionette.triggerMethod.call(this, "before:show", view);
	  
	      if (_.isFunction(view.triggerMethod)) {
	        view.triggerMethod("before:show");
	      } else {
	        Marionette.triggerMethod.call(view, "before:show");
	      }
	  
	      if (isDifferentView || isViewClosed) {
	        this.open(view);
	      }
	  
	      this.currentView = view;
	  
	      Marionette.triggerMethod.call(this, "show", view);
	  
	      if (_.isFunction(view.triggerMethod)) {
	        view.triggerMethod("show");
	      } else {
	        Marionette.triggerMethod.call(view, "show");
	      }
	  
	      return this;
	    },
	  
	    ensureEl: function(){
	      if (!this.$el || this.$el.length === 0){
	        this.$el = this.getEl(this.el);
	      }
	    },
	  
	    // Override this method to change how the region finds the
	    // DOM element that it manages. Return a jQuery selector object.
	    getEl: function(selector){
	      return Marionette.$(selector);
	    },
	  
	    // Override this method to change how the new view is
	    // appended to the `$el` that the region is managing
	    open: function(view){
	      this.$el.empty().append(view.el);
	    },
	  
	    // Close the current view, if there is one. If there is no
	    // current view, it does nothing and returns immediately.
	    close: function(){
	      var view = this.currentView;
	      if (!view || view.isClosed){ return; }
	  
	      // call 'close' or 'remove', depending on which is found
	      if (view.close) { view.close(); }
	      else if (view.remove) { view.remove(); }
	  
	      Marionette.triggerMethod.call(this, "close", view);
	  
	      delete this.currentView;
	    },
	  
	    // Attach an existing view to the region. This
	    // will not call `render` or `onShow` for the new view,
	    // and will not replace the current HTML for the `el`
	    // of the region.
	    attachView: function(view){
	      this.currentView = view;
	    },
	  
	    // Reset the region by closing any existing view and
	    // clearing out the cached `$el`. The next time a view
	    // is shown via this region, the region will re-query the
	    // DOM for the region's `el`.
	    reset: function(){
	      this.close();
	      delete this.$el;
	    }
	  });
	  
	  // Copy the `extend` function used by Backbone's classes
	  Marionette.Region.extend = Marionette.extend;
	  
	  // Marionette.RegionManager
	  // ------------------------
	  //
	  // Manage one or more related `Marionette.Region` objects.
	  Marionette.RegionManager = (function(Marionette){
	  
	    var RegionManager = Marionette.Controller.extend({
	      constructor: function(options){
	        this._regions = {};
	        Marionette.Controller.prototype.constructor.call(this, options);
	      },
	  
	      // Add multiple regions using an object literal, where
	      // each key becomes the region name, and each value is
	      // the region definition.
	      addRegions: function(regionDefinitions, defaults){
	        var regions = {};
	  
	        _.each(regionDefinitions, function(definition, name){
	          if (_.isString(definition)){
	            definition = { selector: definition };
	          }
	  
	          if (definition.selector){
	            definition = _.defaults({}, definition, defaults);
	          }
	  
	          var region = this.addRegion(name, definition);
	          regions[name] = region;
	        }, this);
	  
	        return regions;
	      },
	  
	      // Add an individual region to the region manager,
	      // and return the region instance
	      addRegion: function(name, definition){
	        var region;
	  
	        var isObject = _.isObject(definition);
	        var isString = _.isString(definition);
	        var hasSelector = !!definition.selector;
	  
	        if (isString || (isObject && hasSelector)){
	          region = Marionette.Region.buildRegion(definition, Marionette.Region);
	        } else if (_.isFunction(definition)){
	          region = Marionette.Region.buildRegion(definition, Marionette.Region);
	        } else {
	          region = definition;
	        }
	  
	        this._store(name, region);
	        this.triggerMethod("region:add", name, region);
	        return region;
	      },
	  
	      // Get a region by name
	      get: function(name){
	        return this._regions[name];
	      },
	  
	      // Remove a region by name
	      removeRegion: function(name){
	        var region = this._regions[name];
	        this._remove(name, region);
	      },
	  
	      // Close all regions in the region manager, and
	      // remove them
	      removeRegions: function(){
	        _.each(this._regions, function(region, name){
	          this._remove(name, region);
	        }, this);
	      },
	  
	      // Close all regions in the region manager, but
	      // leave them attached
	      closeRegions: function(){
	        _.each(this._regions, function(region, name){
	          region.close();
	        }, this);
	      },
	  
	      // Close all regions and shut down the region
	      // manager entirely
	      close: function(){
	        this.removeRegions();
	        Marionette.Controller.prototype.close.apply(this, arguments);
	      },
	  
	      // internal method to store regions
	      _store: function(name, region){
	        this._regions[name] = region;
	        this._setLength();
	      },
	  
	      // internal method to remove a region
	      _remove: function(name, region){
	        region.close();
	        region.stopListening();
	        delete this._regions[name];
	        this._setLength();
	        this.triggerMethod("region:remove", name, region);
	      },
	  
	      // set the number of regions current held
	      _setLength: function(){
	        this.length = _.size(this._regions);
	      }
	  
	    });
	  
	    Marionette.actAsCollection(RegionManager.prototype, '_regions');
	  
	    return RegionManager;
	  })(Marionette);
	  
	  
	  // Template Cache
	  // --------------
	  
	  // Manage templates stored in `<script>` blocks,
	  // caching them for faster access.
	  Marionette.TemplateCache = function(templateId){
	    this.templateId = templateId;
	  };
	  
	  // TemplateCache object-level methods. Manage the template
	  // caches from these method calls instead of creating
	  // your own TemplateCache instances
	  _.extend(Marionette.TemplateCache, {
	    templateCaches: {},
	  
	    // Get the specified template by id. Either
	    // retrieves the cached version, or loads it
	    // from the DOM.
	    get: function(templateId){
	      var cachedTemplate = this.templateCaches[templateId];
	  
	      if (!cachedTemplate){
	        cachedTemplate = new Marionette.TemplateCache(templateId);
	        this.templateCaches[templateId] = cachedTemplate;
	      }
	  
	      return cachedTemplate.load();
	    },
	  
	    // Clear templates from the cache. If no arguments
	    // are specified, clears all templates:
	    // `clear()`
	    //
	    // If arguments are specified, clears each of the
	    // specified templates from the cache:
	    // `clear("#t1", "#t2", "...")`
	    clear: function(){
	      var i;
	      var args = slice.call(arguments);
	      var length = args.length;
	  
	      if (length > 0){
	        for(i=0; i<length; i++){
	          delete this.templateCaches[args[i]];
	        }
	      } else {
	        this.templateCaches = {};
	      }
	    }
	  });
	  
	  // TemplateCache instance methods, allowing each
	  // template cache object to manage its own state
	  // and know whether or not it has been loaded
	  _.extend(Marionette.TemplateCache.prototype, {
	  
	    // Internal method to load the template
	    load: function(){
	      // Guard clause to prevent loading this template more than once
	      if (this.compiledTemplate){
	        return this.compiledTemplate;
	      }
	  
	      // Load the template and compile it
	      var template = this.loadTemplate(this.templateId);
	      this.compiledTemplate = this.compileTemplate(template);
	  
	      return this.compiledTemplate;
	    },
	  
	    // Load a template from the DOM, by default. Override
	    // this method to provide your own template retrieval
	    // For asynchronous loading with AMD/RequireJS, consider
	    // using a template-loader plugin as described here:
	    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	    loadTemplate: function(templateId){
	      var template = Marionette.$(templateId).html();
	  
	      if (!template || template.length === 0){
	        throwError("Could not find template: '" + templateId + "'", "NoTemplateError");
	      }
	  
	      return template;
	    },
	  
	    // Pre-compile the template before caching it. Override
	    // this method if you do not need to pre-compile a template
	    // (JST / RequireJS for example) or if you want to change
	    // the template engine used (Handebars, etc).
	    compileTemplate: function(rawTemplate){
	      return _.template(rawTemplate);
	    }
	  });
	  
	  // Renderer
	  // --------
	  
	  // Render a template with data by passing in the template
	  // selector and the data to render.
	  Marionette.Renderer = {
	  
	    // Render a template with data. The `template` parameter is
	    // passed to the `TemplateCache` object to retrieve the
	    // template function. Override this method to provide your own
	    // custom rendering and template handling for all of Marionette.
	    render: function(template, data){
	  
	      if (!template) {
	        throwError("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
	      }
	  
	      var templateFunc;
	      if (typeof template === "function"){
	        templateFunc = template;
	      } else {
	        templateFunc = Marionette.TemplateCache.get(template);
	      }
	  
	      return templateFunc(data);
	    }
	  };
	  
	  
	  // Marionette.View
	  // ---------------
	  
	  // The core view type that other Marionette views extend from.
	  Marionette.View = Backbone.View.extend({
	  
	    constructor: function(options){
	      _.bindAll(this, "render");
	  
	      // this exposes view options to the view initializer
	      // this is a backfill since backbone removed the assignment
	      // of this.options
	      // at some point however this may be removed
	      this.options = _.extend({}, _.result(this, 'options'), _.isFunction(options) ? options.call(this) : options);
	  
	      // parses out the @ui DSL for events
	      this.events = this.normalizeUIKeys(_.result(this, 'events'));
	  
	      if (_.isObject(this.behaviors)) {
	        new Marionette.Behaviors(this);
	      }
	  
	      Backbone.View.prototype.constructor.apply(this, arguments);
	  
	      Marionette.MonitorDOMRefresh(this);
	      this.listenTo(this, "show", this.onShowCalled);
	    },
	  
	    // import the "triggerMethod" to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod,
	  
	    // Imports the "normalizeMethods" to transform hashes of
	    // events=>function references/names to a hash of events=>function references
	    normalizeMethods: Marionette.normalizeMethods,
	  
	    // Get the template for this view
	    // instance. You can set a `template` attribute in the view
	    // definition or pass a `template: "whatever"` parameter in
	    // to the constructor options.
	    getTemplate: function(){
	      return Marionette.getOption(this, "template");
	    },
	  
	    // Mix in template helper methods. Looks for a
	    // `templateHelpers` attribute, which can either be an
	    // object literal, or a function that returns an object
	    // literal. All methods and attributes from this object
	    // are copies to the object passed in.
	    mixinTemplateHelpers: function(target){
	      target = target || {};
	      var templateHelpers = Marionette.getOption(this, "templateHelpers");
	      if (_.isFunction(templateHelpers)){
	        templateHelpers = templateHelpers.call(this);
	      }
	      return _.extend(target, templateHelpers);
	    },
	  
	  
	    normalizeUIKeys: function(hash) {
	      var ui = _.result(this, 'ui');
	      return Marionette.normalizeUIKeys(hash, ui);
	    },
	  
	    // Configure `triggers` to forward DOM events to view
	    // events. `triggers: {"click .foo": "do:foo"}`
	    configureTriggers: function(){
	      if (!this.triggers) { return; }
	  
	      var triggerEvents = {};
	  
	      // Allow `triggers` to be configured as a function
	      var triggers = this.normalizeUIKeys(_.result(this, "triggers"));
	  
	      // Configure the triggers, prevent default
	      // action and stop propagation of DOM events
	      _.each(triggers, function(value, key){
	  
	        var hasOptions = _.isObject(value);
	        var eventName = hasOptions ? value.event : value;
	  
	        // build the event handler function for the DOM event
	        triggerEvents[key] = function(e){
	  
	          // stop the event in its tracks
	          if (e) {
	            var prevent = e.preventDefault;
	            var stop = e.stopPropagation;
	  
	            var shouldPrevent = hasOptions ? value.preventDefault : prevent;
	            var shouldStop = hasOptions ? value.stopPropagation : stop;
	  
	            if (shouldPrevent && prevent) { prevent.apply(e); }
	            if (shouldStop && stop) { stop.apply(e); }
	          }
	  
	          // build the args for the event
	          var args = {
	            view: this,
	            model: this.model,
	            collection: this.collection
	          };
	  
	          // trigger the event
	          this.triggerMethod(eventName, args);
	        };
	  
	      }, this);
	  
	      return triggerEvents;
	    },
	  
	    // Overriding Backbone.View's delegateEvents to handle
	    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
	    delegateEvents: function(events){
	      this._delegateDOMEvents(events);
	      Marionette.bindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
	      Marionette.bindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
	    },
	  
	    // internal method to delegate DOM events and triggers
	    _delegateDOMEvents: function(events){
	      events = events || this.events;
	      if (_.isFunction(events)){ events = events.call(this); }
	  
	      var combinedEvents = {};
	  
	      // look up if this view has behavior events
	      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
	      var triggers = this.configureTriggers();
	  
	      // behavior events will be overriden by view events and or triggers
	      _.extend(combinedEvents, behaviorEvents, events, triggers);
	  
	      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
	    },
	  
	    // Overriding Backbone.View's undelegateEvents to handle unbinding
	    // the `triggers`, `modelEvents`, and `collectionEvents` config
	    undelegateEvents: function(){
	      var args = Array.prototype.slice.call(arguments);
	      Backbone.View.prototype.undelegateEvents.apply(this, args);
	  
	      Marionette.unbindEntityEvents(this, this.model, Marionette.getOption(this, "modelEvents"));
	      Marionette.unbindEntityEvents(this, this.collection, Marionette.getOption(this, "collectionEvents"));
	    },
	  
	    // Internal method, handles the `show` event.
	    onShowCalled: function(){},
	  
	    // Default `close` implementation, for removing a view from the
	    // DOM and unbinding it. Regions will call this method
	    // for you. You can specify an `onClose` method in your view to
	    // add custom code that is called after the view is closed.
	    close: function(){
	      if (this.isClosed) { return; }
	  
	      var args = Array.prototype.slice.call(arguments);
	  
	      // allow the close to be stopped by returning `false`
	      // from the `onBeforeClose` method
	      var shouldClose = this.triggerMethod.apply(this, ["before:close"].concat(args));
	      if (shouldClose === false){
	        return;
	      }
	  
	      // mark as closed before doing the actual close, to
	      // prevent infinite loops within "close" event handlers
	      // that are trying to close other views
	      this.isClosed = true;
	      this.triggerMethod.apply(this, ["close"].concat(args));
	  
	      // unbind UI elements
	      this.unbindUIElements();
	  
	      // remove the view from the DOM
	      this.remove();
	    },
	  
	    // This method binds the elements specified in the "ui" hash inside the view's code with
	    // the associated jQuery selectors.
	    bindUIElements: function(){
	      if (!this.ui) { return; }
	  
	      // store the ui hash in _uiBindings so they can be reset later
	      // and so re-rendering the view will be able to find the bindings
	      if (!this._uiBindings){
	        this._uiBindings = this.ui;
	      }
	  
	      // get the bindings result, as a function or otherwise
	      var bindings = _.result(this, "_uiBindings");
	  
	      // empty the ui so we don't have anything to start with
	      this.ui = {};
	  
	      // bind each of the selectors
	      _.each(_.keys(bindings), function(key) {
	        var selector = bindings[key];
	        this.ui[key] = this.$(selector);
	      }, this);
	    },
	  
	    // This method unbinds the elements specified in the "ui" hash
	    unbindUIElements: function(){
	      if (!this.ui || !this._uiBindings){ return; }
	  
	      // delete all of the existing ui bindings
	      _.each(this.ui, function($el, name){
	        delete this.ui[name];
	      }, this);
	  
	      // reset the ui element to the original bindings configuration
	      this.ui = this._uiBindings;
	      delete this._uiBindings;
	    }
	  });
	  
	  // Item View
	  // ---------
	  
	  // A single item view implementation that contains code for rendering
	  // with underscore.js templates, serializing the view's model or collection,
	  // and calling several methods on extended views, such as `onRender`.
	  Marionette.ItemView = Marionette.View.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.View.prototype.constructor which allows overriding
	    constructor: function(){
	      Marionette.View.prototype.constructor.apply(this, arguments);
	    },
	  
	    // Serialize the model or collection for the view. If a model is
	    // found, `.toJSON()` is called. If a collection is found, `.toJSON()`
	    // is also called, but is used to populate an `items` array in the
	    // resulting data. If both are found, defaults to the model.
	    // You can override the `serializeData` method in your own view
	    // definition, to provide custom serialization for your view's data.
	    serializeData: function(){
	      var data = {};
	  
	      if (this.model) {
	        data = this.model.toJSON();
	      }
	      else if (this.collection) {
	        data = { items: this.collection.toJSON() };
	      }
	  
	      return data;
	    },
	  
	    // Render the view, defaulting to underscore.js templates.
	    // You can override this in your view definition to provide
	    // a very specific rendering for your view. In general, though,
	    // you should override the `Marionette.Renderer` object to
	    // change how Marionette renders views.
	    render: function(){
	      this.isClosed = false;
	  
	      this.triggerMethod("before:render", this);
	      this.triggerMethod("item:before:render", this);
	  
	      var data = this.serializeData();
	      data = this.mixinTemplateHelpers(data);
	  
	      var template = this.getTemplate();
	      var html = Marionette.Renderer.render(template, data);
	  
	      this.$el.html(html);
	      this.bindUIElements();
	  
	      this.triggerMethod("render", this);
	      this.triggerMethod("item:rendered", this);
	  
	      return this;
	    },
	  
	    // Override the default close event to add a few
	    // more events that are triggered.
	    close: function(){
	      if (this.isClosed){ return; }
	  
	      this.triggerMethod('item:before:close');
	  
	      Marionette.View.prototype.close.apply(this, arguments);
	  
	      this.triggerMethod('item:closed');
	    }
	  });
	  
	  // Collection View
	  // ---------------
	  
	  // A view that iterates over a Backbone.Collection
	  // and renders an individual ItemView for each model.
	  Marionette.CollectionView = Marionette.View.extend({
	    // used as the prefix for item view events
	    // that are forwarded through the collectionview
	    itemViewEventPrefix: "itemview",
	  
	    // constructor
	    constructor: function(options){
	      this._initChildViewStorage();
	  
	      Marionette.View.prototype.constructor.apply(this, arguments);
	  
	      this._initialEvents();
	      this.initRenderBuffer();
	    },
	  
	    // Instead of inserting elements one by one into the page,
	    // it's much more performant to insert elements into a document
	    // fragment and then insert that document fragment into the page
	    initRenderBuffer: function() {
	      this.elBuffer = document.createDocumentFragment();
	      this._bufferedChildren = [];
	    },
	  
	    startBuffering: function() {
	      this.initRenderBuffer();
	      this.isBuffering = true;
	    },
	  
	    endBuffering: function() {
	      this.isBuffering = false;
	      this.appendBuffer(this, this.elBuffer);
	      this._triggerShowBufferedChildren();
	      this.initRenderBuffer();
	    },
	  
	    _triggerShowBufferedChildren: function () {
	      if (this._isShown) {
	        _.each(this._bufferedChildren, function (child) {
	          if (_.isFunction(child.triggerMethod)) {
	            child.triggerMethod('show');
	          } else {
	            Marionette.triggerMethod.call(child, 'show');
	          }
	        });
	        this._bufferedChildren = [];
	      }
	    },
	  
	    // Configured the initial events that the collection view
	    // binds to.
	    _initialEvents: function(){
	      if (this.collection){
	        this.listenTo(this.collection, "add", this.addChildView);
	        this.listenTo(this.collection, "remove", this.removeItemView);
	        this.listenTo(this.collection, "reset", this.render);
	      }
	    },
	  
	    // Handle a child item added to the collection
	    addChildView: function(item, collection, options){
	      this.closeEmptyView();
	      var ItemView = this.getItemView(item);
	      var index = this.collection.indexOf(item);
	      this.addItemView(item, ItemView, index);
	    },
	  
	    // Override from `Marionette.View` to guarantee the `onShow` method
	    // of child views is called.
	    onShowCalled: function(){
	      this.children.each(function(child){
	        if (_.isFunction(child.triggerMethod)) {
	          child.triggerMethod('show');
	        } else {
	          Marionette.triggerMethod.call(child, 'show');
	        }
	      });
	    },
	  
	    // Internal method to trigger the before render callbacks
	    // and events
	    triggerBeforeRender: function(){
	      this.triggerMethod("before:render", this);
	      this.triggerMethod("collection:before:render", this);
	    },
	  
	    // Internal method to trigger the rendered callbacks and
	    // events
	    triggerRendered: function(){
	      this.triggerMethod("render", this);
	      this.triggerMethod("collection:rendered", this);
	    },
	  
	    // Render the collection of items. Override this method to
	    // provide your own implementation of a render function for
	    // the collection view.
	    render: function(){
	      this.isClosed = false;
	      this.triggerBeforeRender();
	      this._renderChildren();
	      this.triggerRendered();
	      return this;
	    },
	  
	    // Internal method. Separated so that CompositeView can have
	    // more control over events being triggered, around the rendering
	    // process
	    _renderChildren: function(){
	      this.startBuffering();
	  
	      this.closeEmptyView();
	      this.closeChildren();
	  
	      if (!this.isEmpty(this.collection)) {
	        this.showCollection();
	      } else {
	        this.showEmptyView();
	      }
	  
	      this.endBuffering();
	    },
	  
	    // Internal method to loop through each item in the
	    // collection view and show it
	    showCollection: function(){
	      var ItemView;
	      this.collection.each(function(item, index){
	        ItemView = this.getItemView(item);
	        this.addItemView(item, ItemView, index);
	      }, this);
	    },
	  
	    // Internal method to show an empty view in place of
	    // a collection of item views, when the collection is
	    // empty
	    showEmptyView: function(){
	      var EmptyView = this.getEmptyView();
	  
	      if (EmptyView && !this._showingEmptyView){
	        this._showingEmptyView = true;
	        var model = new Backbone.Model();
	        this.addItemView(model, EmptyView, 0);
	      }
	    },
	  
	    // Internal method to close an existing emptyView instance
	    // if one exists. Called when a collection view has been
	    // rendered empty, and then an item is added to the collection.
	    closeEmptyView: function(){
	      if (this._showingEmptyView){
	        this.closeChildren();
	        delete this._showingEmptyView;
	      }
	    },
	  
	    // Retrieve the empty view type
	    getEmptyView: function(){
	      return Marionette.getOption(this, "emptyView");
	    },
	  
	    // Retrieve the itemView type, either from `this.options.itemView`
	    // or from the `itemView` in the object definition. The "options"
	    // takes precedence.
	    getItemView: function(item){
	      var itemView = Marionette.getOption(this, "itemView");
	  
	      if (!itemView){
	        throwError("An `itemView` must be specified", "NoItemViewError");
	      }
	  
	      return itemView;
	    },
	  
	    // Render the child item's view and add it to the
	    // HTML for the collection view.
	    addItemView: function(item, ItemView, index){
	      // get the itemViewOptions if any were specified
	      var itemViewOptions = Marionette.getOption(this, "itemViewOptions");
	      if (_.isFunction(itemViewOptions)){
	        itemViewOptions = itemViewOptions.call(this, item, index);
	      }
	  
	      // build the view
	      var view = this.buildItemView(item, ItemView, itemViewOptions);
	  
	      // set up the child view event forwarding
	      this.addChildViewEventForwarding(view);
	  
	      // this view is about to be added
	      this.triggerMethod("before:item:added", view);
	  
	      // Store the child view itself so we can properly
	      // remove and/or close it later
	      this.children.add(view);
	  
	      // Render it and show it
	      this.renderItemView(view, index);
	  
	      // call the "show" method if the collection view
	      // has already been shown
	      if (this._isShown && !this.isBuffering){
	        if (_.isFunction(view.triggerMethod)) {
	          view.triggerMethod('show');
	        } else {
	          Marionette.triggerMethod.call(view, 'show');
	        }
	      }
	  
	      // this view was added
	      this.triggerMethod("after:item:added", view);
	  
	      return view;
	    },
	  
	    // Set up the child view event forwarding. Uses an "itemview:"
	    // prefix in front of all forwarded events.
	    addChildViewEventForwarding: function(view){
	      var prefix = Marionette.getOption(this, "itemViewEventPrefix");
	  
	      // Forward all child item view events through the parent,
	      // prepending "itemview:" to the event name
	      this.listenTo(view, "all", function(){
	        var args = slice.call(arguments);
	        var rootEvent = args[0];
	        var itemEvents = this.normalizeMethods(this.getItemEvents());
	  
	        args[0] = prefix + ":" + rootEvent;
	        args.splice(1, 0, view);
	  
	        // call collectionView itemEvent if defined
	        if (typeof itemEvents !== "undefined" && _.isFunction(itemEvents[rootEvent])) {
	          itemEvents[rootEvent].apply(this, args);
	        }
	  
	        Marionette.triggerMethod.apply(this, args);
	      }, this);
	    },
	  
	    // returns the value of itemEvents depending on if a function
	    getItemEvents: function() {
	      if (_.isFunction(this.itemEvents)) {
	        return this.itemEvents.call(this);
	      }
	  
	      return this.itemEvents;
	    },
	  
	    // render the item view
	    renderItemView: function(view, index) {
	      view.render();
	      this.appendHtml(this, view, index);
	    },
	  
	    // Build an `itemView` for every model in the collection.
	    buildItemView: function(item, ItemViewType, itemViewOptions){
	      var options = _.extend({model: item}, itemViewOptions);
	      return new ItemViewType(options);
	    },
	  
	    // get the child view by item it holds, and remove it
	    removeItemView: function(item){
	      var view = this.children.findByModel(item);
	      this.removeChildView(view);
	      this.checkEmpty();
	    },
	  
	    // Remove the child view and close it
	    removeChildView: function(view){
	  
	      // shut down the child view properly,
	      // including events that the collection has from it
	      if (view){
	        // call 'close' or 'remove', depending on which is found
	        if (view.close) { view.close(); }
	        else if (view.remove) { view.remove(); }
	  
	        this.stopListening(view);
	        this.children.remove(view);
	      }
	  
	      this.triggerMethod("item:removed", view);
	    },
	  
	    // helper to check if the collection is empty
	    isEmpty: function(collection){
	      // check if we're empty now
	      return !this.collection || this.collection.length === 0;
	    },
	  
	    // If empty, show the empty view
	    checkEmpty: function (){
	      if (this.isEmpty(this.collection)){
	        this.showEmptyView();
	      }
	    },
	  
	    // You might need to override this if you've overridden appendHtml
	    appendBuffer: function(collectionView, buffer) {
	      collectionView.$el.append(buffer);
	    },
	  
	    // Append the HTML to the collection's `el`.
	    // Override this method to do something other
	    // than `.append`.
	    appendHtml: function(collectionView, itemView, index){
	      if (collectionView.isBuffering) {
	        // buffering happens on reset events and initial renders
	        // in order to reduce the number of inserts into the
	        // document, which are expensive.
	        collectionView.elBuffer.appendChild(itemView.el);
	        collectionView._bufferedChildren.push(itemView);
	      }
	      else {
	        // If we've already rendered the main collection, just
	        // append the new items directly into the element.
	        collectionView.$el.append(itemView.el);
	      }
	    },
	  
	    // Internal method to set up the `children` object for
	    // storing all of the child views
	    _initChildViewStorage: function(){
	      this.children = new Backbone.ChildViewContainer();
	    },
	  
	    // Handle cleanup and other closing needs for
	    // the collection of views.
	    close: function(){
	      if (this.isClosed){ return; }
	  
	      this.triggerMethod("collection:before:close");
	      this.closeChildren();
	      this.triggerMethod("collection:closed");
	  
	      Marionette.View.prototype.close.apply(this, arguments);
	    },
	  
	    // Close the child views that this collection view
	    // is holding on to, if any
	    closeChildren: function(){
	      this.children.each(function(child){
	        this.removeChildView(child);
	      }, this);
	      this.checkEmpty();
	    }
	  });
	  
	  // Composite View
	  // --------------
	  
	  // Used for rendering a branch-leaf, hierarchical structure.
	  // Extends directly from CollectionView and also renders an
	  // an item view as `modelView`, for the top leaf
	  Marionette.CompositeView = Marionette.CollectionView.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.CollectionView.prototype.constructor which allows overriding
	    constructor: function(){
	      Marionette.CollectionView.prototype.constructor.apply(this, arguments);
	    },
	  
	    // Configured the initial events that the composite view
	    // binds to. Override this method to prevent the initial
	    // events, or to add your own initial events.
	    _initialEvents: function(){
	  
	      // Bind only after composite view is rendered to avoid adding child views
	      // to nonexistent itemViewContainer
	      this.once('render', function () {
	        if (this.collection){
	          this.listenTo(this.collection, "add", this.addChildView);
	          this.listenTo(this.collection, "remove", this.removeItemView);
	          this.listenTo(this.collection, "reset", this._renderChildren);
	        }
	      });
	  
	    },
	  
	    // Retrieve the `itemView` to be used when rendering each of
	    // the items in the collection. The default is to return
	    // `this.itemView` or Marionette.CompositeView if no `itemView`
	    // has been defined
	    getItemView: function(item){
	      var itemView = Marionette.getOption(this, "itemView") || this.constructor;
	  
	      if (!itemView){
	        throwError("An `itemView` must be specified", "NoItemViewError");
	      }
	  
	      return itemView;
	    },
	  
	    // Serialize the collection for the view.
	    // You can override the `serializeData` method in your own view
	    // definition, to provide custom serialization for your view's data.
	    serializeData: function(){
	      var data = {};
	  
	      if (this.model){
	        data = this.model.toJSON();
	      }
	  
	      return data;
	    },
	  
	    // Renders the model once, and the collection once. Calling
	    // this again will tell the model's view to re-render itself
	    // but the collection will not re-render.
	    render: function(){
	      this.isRendered = true;
	      this.isClosed = false;
	      this.resetItemViewContainer();
	  
	      this.triggerBeforeRender();
	      var html = this.renderModel();
	      this.$el.html(html);
	      // the ui bindings is done here and not at the end of render since they
	      // will not be available until after the model is rendered, but should be
	      // available before the collection is rendered.
	      this.bindUIElements();
	      this.triggerMethod("composite:model:rendered");
	  
	      this._renderChildren();
	  
	      this.triggerMethod("composite:rendered");
	      this.triggerRendered();
	      return this;
	    },
	  
	    _renderChildren: function(){
	      if (this.isRendered){
	        this.triggerMethod("composite:collection:before:render");
	        Marionette.CollectionView.prototype._renderChildren.call(this);
	        this.triggerMethod("composite:collection:rendered");
	      }
	    },
	  
	    // Render an individual model, if we have one, as
	    // part of a composite view (branch / leaf). For example:
	    // a treeview.
	    renderModel: function(){
	      var data = {};
	      data = this.serializeData();
	      data = this.mixinTemplateHelpers(data);
	  
	      var template = this.getTemplate();
	      return Marionette.Renderer.render(template, data);
	    },
	  
	  
	    // You might need to override this if you've overridden appendHtml
	    appendBuffer: function(compositeView, buffer) {
	      var $container = this.getItemViewContainer(compositeView);
	      $container.append(buffer);
	    },
	  
	    // Appends the `el` of itemView instances to the specified
	    // `itemViewContainer` (a jQuery selector). Override this method to
	    // provide custom logic of how the child item view instances have their
	    // HTML appended to the composite view instance.
	    appendHtml: function(compositeView, itemView, index){
	      if (compositeView.isBuffering) {
	        compositeView.elBuffer.appendChild(itemView.el);
	        compositeView._bufferedChildren.push(itemView);
	      }
	      else {
	        // If we've already rendered the main collection, just
	        // append the new items directly into the element.
	        var $container = this.getItemViewContainer(compositeView);
	        $container.append(itemView.el);
	      }
	    },
	  
	    // Internal method to ensure an `$itemViewContainer` exists, for the
	    // `appendHtml` method to use.
	    getItemViewContainer: function(containerView){
	      if ("$itemViewContainer" in containerView){
	        return containerView.$itemViewContainer;
	      }
	  
	      var container;
	      var itemViewContainer = Marionette.getOption(containerView, "itemViewContainer");
	      if (itemViewContainer){
	  
	        var selector = _.isFunction(itemViewContainer) ? itemViewContainer.call(containerView) : itemViewContainer;
	  
	        if (selector.charAt(0) === "@" && containerView.ui) {
	          container = containerView.ui[selector.substr(4)];
	        } else {
	          container = containerView.$(selector);
	        }
	  
	        if (container.length <= 0) {
	          throwError("The specified `itemViewContainer` was not found: " + containerView.itemViewContainer, "ItemViewContainerMissingError");
	        }
	  
	      } else {
	        container = containerView.$el;
	      }
	  
	      containerView.$itemViewContainer = container;
	      return container;
	    },
	  
	    // Internal method to reset the `$itemViewContainer` on render
	    resetItemViewContainer: function(){
	      if (this.$itemViewContainer){
	        delete this.$itemViewContainer;
	      }
	    }
	  });
	  
	  // Layout
	  // ------
	  
	  // Used for managing application layouts, nested layouts and
	  // multiple regions within an application or sub-application.
	  //
	  // A specialized view type that renders an area of HTML and then
	  // attaches `Region` instances to the specified `regions`.
	  // Used for composite view management and sub-application areas.
	  Marionette.Layout = Marionette.ItemView.extend({
	    regionType: Marionette.Region,
	  
	    // Ensure the regions are available when the `initialize` method
	    // is called.
	    constructor: function (options) {
	      options = options || {};
	  
	      this._firstRender = true;
	      this._initializeRegions(options);
	  
	      Marionette.ItemView.prototype.constructor.call(this, options);
	    },
	  
	    // Layout's render will use the existing region objects the
	    // first time it is called. Subsequent calls will close the
	    // views that the regions are showing and then reset the `el`
	    // for the regions to the newly rendered DOM elements.
	    render: function(){
	  
	      if (this.isClosed){
	        // a previously closed layout means we need to
	        // completely re-initialize the regions
	        this._initializeRegions();
	      }
	      if (this._firstRender) {
	        // if this is the first render, don't do anything to
	        // reset the regions
	        this._firstRender = false;
	      } else if (!this.isClosed){
	        // If this is not the first render call, then we need to
	        // re-initializing the `el` for each region
	        this._reInitializeRegions();
	      }
	  
	      return Marionette.ItemView.prototype.render.apply(this, arguments);
	    },
	  
	    // Handle closing regions, and then close the view itself.
	    close: function () {
	      if (this.isClosed){ return; }
	      this.regionManager.close();
	      Marionette.ItemView.prototype.close.apply(this, arguments);
	    },
	  
	    // Add a single region, by name, to the layout
	    addRegion: function(name, definition){
	      var regions = {};
	      regions[name] = definition;
	      return this._buildRegions(regions)[name];
	    },
	  
	    // Add multiple regions as a {name: definition, name2: def2} object literal
	    addRegions: function(regions){
	      this.regions = _.extend({}, this.regions, regions);
	      return this._buildRegions(regions);
	    },
	  
	    // Remove a single region from the Layout, by name
	    removeRegion: function(name){
	      delete this.regions[name];
	      return this.regionManager.removeRegion(name);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this.regionManager.get(region);
	    },
	  
	    // internal method to build regions
	    _buildRegions: function(regions){
	      var that = this;
	  
	      var defaults = {
	        regionType: Marionette.getOption(this, "regionType"),
	        parentEl: function(){ return that.$el; }
	      };
	  
	      return this.regionManager.addRegions(regions, defaults);
	    },
	  
	    // Internal method to initialize the regions that have been defined in a
	    // `regions` attribute on this layout.
	    _initializeRegions: function (options) {
	      var regions;
	      this._initRegionManager();
	  
	      if (_.isFunction(this.regions)) {
	        regions = this.regions(options);
	      } else {
	        regions = this.regions || {};
	      }
	  
	      this.addRegions(regions);
	    },
	  
	    // Internal method to re-initialize all of the regions by updating the `el` that
	    // they point to
	    _reInitializeRegions: function(){
	      this.regionManager.closeRegions();
	      this.regionManager.each(function(region){
	        region.reset();
	      });
	    },
	  
	    // Internal method to initialize the region manager
	    // and all regions in it
	    _initRegionManager: function(){
	      this.regionManager = new Marionette.RegionManager();
	  
	      this.listenTo(this.regionManager, "region:add", function(name, region){
	        this[name] = region;
	        this.trigger("region:add", name, region);
	      });
	  
	      this.listenTo(this.regionManager, "region:remove", function(name, region){
	        delete this[name];
	        this.trigger("region:remove", name, region);
	      });
	    }
	  });
	  
	  
	  // Behavior
	  // -----------
	  
	  // A Behavior is an isolated set of DOM /
	  // user interactions that can be mixed into any View.
	  // Behaviors allow you to blackbox View specific interactions
	  // into portable logical chunks, keeping your views simple and your code DRY.
	  
	  Marionette.Behavior = (function(_, Backbone){
	    function Behavior(options, view){
	      // Setup reference to the view.
	      // this comes in handle when a behavior
	      // wants to directly talk up the chain
	      // to the view.
	      this.view = view;
	      this.defaults = _.result(this, "defaults") || {};
	      this.options  = _.extend({}, this.defaults, options);
	  
	      // proxy behavior $ method to the view
	      // this is useful for doing jquery DOM lookups
	      // scoped to behaviors view.
	      this.$ = function() {
	        return this.view.$.apply(this.view, arguments);
	      };
	  
	      // Call the initialize method passing
	      // the arguments from the instance constructor
	      this.initialize.apply(this, arguments);
	    }
	  
	    _.extend(Behavior.prototype, Backbone.Events, {
	      initialize: function(){},
	  
	      // stopListening to behavior `onListen` events.
	      close: function() {
	        this.stopListening();
	      },
	  
	      // Setup class level proxy for triggerMethod.
	      triggerMethod: Marionette.triggerMethod
	    });
	  
	    // Borrow Backbones extend implementation
	    // this allows us to setup a proper
	    // inheritence pattern that follow in suite
	    // with the rest of Marionette views.
	    Behavior.extend = Marionette.extend;
	  
	    return Behavior;
	  })(_, Backbone);
	  
	  // Marionette.Behaviors
	  // --------
	  
	  // Behaviors is a utility class that takes care of
	  // glueing your behavior instances to their given View.
	  // The most important part of this class is that you
	  // **MUST** override the class level behaviorsLookup
	  // method for things to work properly.
	  
	  Marionette.Behaviors = (function(Marionette, _) {
	  
	    function Behaviors(view) {
	      // Behaviors defined on a view can be a flat object literal
	      // or it can be a function that returns an object.
	      this.behaviors = Behaviors.parseBehaviors(view, _.result(view, 'behaviors'));
	  
	      // Wraps several of the view's methods
	      // calling the methods first on each behavior
	      // and then eventually calling the method on the view.
	      Behaviors.wrap(view, this.behaviors, [
	        'bindUIElements', 'unbindUIElements',
	        'delegateEvents', 'undelegateEvents',
	        'behaviorEvents', 'triggerMethod',
	        'setElement', 'close'
	      ]);
	    }
	  
	    var methods = {
	      setElement: function(setElement, behaviors) {
	        setElement.apply(this, _.tail(arguments, 2));
	  
	        // proxy behavior $el to the view's $el.
	        // This is needed because a view's $el proxy
	        // is not set until after setElement is called.
	        _.each(behaviors, function(b) {
	          b.$el = this.$el;
	        }, this);
	      },
	  
	      close: function(close, behaviors) {
	        var args = _.tail(arguments, 2);
	        close.apply(this, args);
	  
	        // Call close on each behavior after
	        // closing down the view.
	        // This unbinds event listeners
	        // that behaviors have registerd for.
	        _.invoke(behaviors, 'close', args);
	      },
	  
	      bindUIElements: function(bindUIElements, behaviors) {
	        bindUIElements.apply(this);
	        _.invoke(behaviors, bindUIElements);
	      },
	  
	      unbindUIElements: function(unbindUIElements, behaviors) {
	        unbindUIElements.apply(this);
	        _.invoke(behaviors, unbindUIElements);
	      },
	  
	      triggerMethod: function(triggerMethod, behaviors) {
	        var args = _.tail(arguments, 2);
	        triggerMethod.apply(this, args);
	  
	        _.each(behaviors, function(b) {
	          triggerMethod.apply(b, args);
	        });
	      },
	  
	      delegateEvents: function(delegateEvents, behaviors) {
	        var args = _.tail(arguments, 2);
	        delegateEvents.apply(this, args);
	  
	        _.each(behaviors, function(b){
	          Marionette.bindEntityEvents(b, this.model, Marionette.getOption(b, "modelEvents"));
	          Marionette.bindEntityEvents(b, this.collection, Marionette.getOption(b, "collectionEvents"));
	        }, this);
	      },
	  
	      undelegateEvents: function(undelegateEvents, behaviors) {
	        var args = _.tail(arguments, 2);
	        undelegateEvents.apply(this, args);
	  
	        _.each(behaviors, function(b) {
	          Marionette.unbindEntityEvents(b, this.model, Marionette.getOption(b, "modelEvents"));
	          Marionette.unbindEntityEvents(b, this.collection, Marionette.getOption(b, "collectionEvents"));
	        }, this);
	      },
	  
	      behaviorEvents: function(behaviorEvents, behaviors) {
	        var _behaviorsEvents = {};
	        var viewUI = _.result(this, 'ui');
	  
	        _.each(behaviors, function(b, i) {
	          var _events = {};
	          var behaviorEvents = _.clone(_.result(b, 'events')) || {};
	          var behaviorUI = _.result(b, 'ui');
	  
	          // Construct an internal UI hash first using
	          // the views UI hash and then the behaviors UI hash.
	          // This allows the user to use UI hash elements
	          // defined in the parent view as well as those
	          // defined in the given behavior.
	          var ui = _.extend({}, viewUI, behaviorUI);
	  
	          // Normalize behavior events hash to allow
	          // a user to use the @ui. syntax.
	          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, ui);
	  
	          _.each(_.keys(behaviorEvents), function(key) {
	            // append white-space at the end of each key to prevent behavior key collisions
	            // this is relying on the fact backbone events considers "click .foo" the same  "click .foo "
	            // starts with an array of two so the first behavior has one space
	  
	            // +2 is uses becauce new Array(1) or 0 is "" and not " "
	            var whitespace = (new Array(i+2)).join(" ");
	            var eventKey   = key + whitespace;
	            var handler    = _.isFunction(behaviorEvents[key]) ? behaviorEvents[key] : b[behaviorEvents[key]];
	  
	            _events[eventKey] = _.bind(handler, b);
	          });
	  
	          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
	        });
	  
	        return _behaviorsEvents;
	      }
	    };
	  
	    _.extend(Behaviors, {
	  
	      // placeholder method to be extended by the user
	      // should define the object that stores the behaviors
	      // i.e.
	      //
	      // Marionette.Behaviors.behaviorsLookup: function() {
	      //   return App.Behaviors
	      // }
	      behaviorsLookup: function() {
	        throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup");
	      },
	  
	      // Takes care of getting the behavior class
	      // given options and a key.
	      // If a user passes in options.behaviorClass
	      // default to using that. Otherwise delegate
	      // the lookup to the users behaviorsLookup implementation.
	      getBehaviorClass: function(options, key) {
	        if (options.behaviorClass) {
	          return options.behaviorClass;
	        }
	  
	        // Get behavior class can be either a flat object or a method
	        return _.isFunction(Behaviors.behaviorsLookup) ? Behaviors.behaviorsLookup.apply(this, arguments)[key] : Behaviors.behaviorsLookup[key];
	      },
	  
	      // Maps over a view's behaviors. Performing
	      // a lookup on each behavior and the instantiating
	      // said behavior passing its options and view.
	      parseBehaviors: function(view, behaviors){
	        return _.map(behaviors, function(options, key){
	          var BehaviorClass = Behaviors.getBehaviorClass(options, key);
	          return new BehaviorClass(options, view);
	        });
	      },
	  
	      // wrap view internal methods so that they delegate to behaviors.
	      // For example, onClose should trigger close on all of the behaviors and then close itself.
	      // i.e.
	      //
	      // view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);
	      wrap: function(view, behaviors, methodNames) {
	        _.each(methodNames, function(methodName) {
	          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
	        });
	      }
	    });
	  
	    return Behaviors;
	  
	  })(Marionette, _);
	  
	  
	  // AppRouter
	  // ---------
	  
	  // Reduce the boilerplate code of handling route events
	  // and then calling a single method on another object.
	  // Have your routers configured to call the method on
	  // your object, directly.
	  //
	  // Configure an AppRouter with `appRoutes`.
	  //
	  // App routers can only take one `controller` object.
	  // It is recommended that you divide your controller
	  // objects in to smaller pieces of related functionality
	  // and have multiple routers / controllers, instead of
	  // just one giant router and controller.
	  //
	  // You can also add standard routes to an AppRouter.
	  
	  Marionette.AppRouter = Backbone.Router.extend({
	  
	    constructor: function(options){
	      Backbone.Router.prototype.constructor.apply(this, arguments);
	  
	      this.options = options || {};
	  
	      var appRoutes = Marionette.getOption(this, "appRoutes");
	      var controller = this._getController();
	      this.processAppRoutes(controller, appRoutes);
	      this.on("route", this._processOnRoute, this);
	    },
	  
	    // Similar to route method on a Backbone Router but
	    // method is called on the controller
	    appRoute: function(route, methodName) {
	      var controller = this._getController();
	      this._addAppRoute(controller, route, methodName);
	    },
	  
	    // process the route event and trigger the onRoute
	    // method call, if it exists
	    _processOnRoute: function(routeName, routeArgs){
	      // find the path that matched
	      var routePath = _.invert(this.appRoutes)[routeName];
	  
	      // make sure an onRoute is there, and call it
	      if (_.isFunction(this.onRoute)){
	        this.onRoute(routeName, routePath, routeArgs);
	      }
	    },
	  
	    // Internal method to process the `appRoutes` for the
	    // router, and turn them in to routes that trigger the
	    // specified method on the specified `controller`.
	    processAppRoutes: function(controller, appRoutes) {
	      if (!appRoutes){ return; }
	  
	      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
	  
	      _.each(routeNames, function(route) {
	        this._addAppRoute(controller, route, appRoutes[route]);
	      }, this);
	    },
	  
	    _getController: function(){
	      return Marionette.getOption(this, "controller");
	    },
	  
	    _addAppRoute: function(controller, route, methodName){
	      var method = controller[methodName];
	  
	      if (!method) {
	        throwError("Method '" + methodName + "' was not found on the controller");
	      }
	  
	      this.route(route, methodName, _.bind(method, controller));
	    }
	  });
	  
	  // Application
	  // -----------
	  
	  // Contain and manage the composite application as a whole.
	  // Stores and starts up `Region` objects, includes an
	  // event aggregator as `app.vent`
	  Marionette.Application = function(options){
	    this._initRegionManager();
	    this._initCallbacks = new Marionette.Callbacks();
	    this.vent = new Backbone.Wreqr.EventAggregator();
	    this.commands = new Backbone.Wreqr.Commands();
	    this.reqres = new Backbone.Wreqr.RequestResponse();
	    this.submodules = {};
	  
	    _.extend(this, options);
	  
	    this.triggerMethod = Marionette.triggerMethod;
	  };
	  
	  _.extend(Marionette.Application.prototype, Backbone.Events, {
	    // Command execution, facilitated by Backbone.Wreqr.Commands
	    execute: function(){
	      this.commands.execute.apply(this.commands, arguments);
	    },
	  
	    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
	    request: function(){
	      return this.reqres.request.apply(this.reqres, arguments);
	    },
	  
	    // Add an initializer that is either run at when the `start`
	    // method is called, or run immediately if added after `start`
	    // has already been called.
	    addInitializer: function(initializer){
	      this._initCallbacks.add(initializer);
	    },
	  
	    // kick off all of the application's processes.
	    // initializes all of the regions that have been added
	    // to the app, and runs all of the initializer functions
	    start: function(options){
	      this.triggerMethod("initialize:before", options);
	      this._initCallbacks.run(options, this);
	      this.triggerMethod("initialize:after", options);
	  
	      this.triggerMethod("start", options);
	    },
	  
	    // Add regions to your app.
	    // Accepts a hash of named strings or Region objects
	    // addRegions({something: "#someRegion"})
	    // addRegions({something: Region.extend({el: "#someRegion"}) });
	    addRegions: function(regions){
	      return this._regionManager.addRegions(regions);
	    },
	  
	    // Close all regions in the app, without removing them
	    closeRegions: function(){
	      this._regionManager.closeRegions();
	    },
	  
	    // Removes a region from your app, by name
	    // Accepts the regions name
	    // removeRegion('myRegion')
	    removeRegion: function(region) {
	      this._regionManager.removeRegion(region);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this._regionManager.get(region);
	    },
	  
	    // Create a module, attached to the application
	    module: function(moduleNames, moduleDefinition){
	  
	      // Overwrite the module class if the user specifies one
	      var ModuleClass = Marionette.Module.getClass(moduleDefinition);
	  
	      // slice the args, and add this application object as the
	      // first argument of the array
	      var args = slice.call(arguments);
	      args.unshift(this);
	  
	      // see the Marionette.Module object for more information
	      return ModuleClass.create.apply(ModuleClass, args);
	    },
	  
	    // Internal method to set up the region manager
	    _initRegionManager: function(){
	      this._regionManager = new Marionette.RegionManager();
	  
	      this.listenTo(this._regionManager, "region:add", function(name, region){
	        this[name] = region;
	      });
	  
	      this.listenTo(this._regionManager, "region:remove", function(name, region){
	        delete this[name];
	      });
	    }
	  });
	  
	  // Copy the `extend` function used by Backbone's classes
	  Marionette.Application.extend = Marionette.extend;
	  
	  // Module
	  // ------
	  
	  // A simple module system, used to create privacy and encapsulation in
	  // Marionette applications
	  Marionette.Module = function(moduleName, app, options){
	    this.moduleName = moduleName;
	    this.options = _.extend({}, this.options, options);
	    // Allow for a user to overide the initialize
	    // for a given module instance.
	    this.initialize = options.initialize || this.initialize;
	  
	    // Set up an internal store for sub-modules.
	    this.submodules = {};
	  
	    this._setupInitializersAndFinalizers();
	  
	    // Set an internal reference to the app
	    // within a module.
	    this.app = app;
	  
	    // By default modules start with their parents.
	    this.startWithParent = true;
	  
	    // Setup a proxy to the trigger method implementation.
	    this.triggerMethod = Marionette.triggerMethod;
	  
	    if (_.isFunction(this.initialize)){
	      this.initialize(this.options, moduleName, app);
	    }
	  };
	  
	  Marionette.Module.extend = Marionette.extend;
	  
	  // Extend the Module prototype with events / listenTo, so that the module
	  // can be used as an event aggregator or pub/sub.
	  _.extend(Marionette.Module.prototype, Backbone.Events, {
	  
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic when extending Marionette.Module.
	    initialize: function(){},
	  
	    // Initializer for a specific module. Initializers are run when the
	    // module's `start` method is called.
	    addInitializer: function(callback){
	      this._initializerCallbacks.add(callback);
	    },
	  
	    // Finalizers are run when a module is stopped. They are used to teardown
	    // and finalize any variables, references, events and other code that the
	    // module had set up.
	    addFinalizer: function(callback){
	      this._finalizerCallbacks.add(callback);
	    },
	  
	    // Start the module, and run all of its initializers
	    start: function(options){
	      // Prevent re-starting a module that is already started
	      if (this._isInitialized){ return; }
	  
	      // start the sub-modules (depth-first hierarchy)
	      _.each(this.submodules, function(mod){
	        // check to see if we should start the sub-module with this parent
	        if (mod.startWithParent){
	          mod.start(options);
	        }
	      });
	  
	      // run the callbacks to "start" the current module
	      this.triggerMethod("before:start", options);
	  
	      this._initializerCallbacks.run(options, this);
	      this._isInitialized = true;
	  
	      this.triggerMethod("start", options);
	    },
	  
	    // Stop this module by running its finalizers and then stop all of
	    // the sub-modules for this module
	    stop: function(){
	      // if we are not initialized, don't bother finalizing
	      if (!this._isInitialized){ return; }
	      this._isInitialized = false;
	  
	      Marionette.triggerMethod.call(this, "before:stop");
	  
	      // stop the sub-modules; depth-first, to make sure the
	      // sub-modules are stopped / finalized before parents
	      _.each(this.submodules, function(mod){ mod.stop(); });
	  
	      // run the finalizers
	      this._finalizerCallbacks.run(undefined,this);
	  
	      // reset the initializers and finalizers
	      this._initializerCallbacks.reset();
	      this._finalizerCallbacks.reset();
	  
	      Marionette.triggerMethod.call(this, "stop");
	    },
	  
	    // Configure the module with a definition function and any custom args
	    // that are to be passed in to the definition function
	    addDefinition: function(moduleDefinition, customArgs){
	      this._runModuleDefinition(moduleDefinition, customArgs);
	    },
	  
	    // Internal method: run the module definition function with the correct
	    // arguments
	    _runModuleDefinition: function(definition, customArgs){
	      // If there is no definition short circut the method.
	      if (!definition){ return; }
	  
	      // build the correct list of arguments for the module definition
	      var args = _.flatten([
	        this,
	        this.app,
	        Backbone,
	        Marionette,
	        Marionette.$, _,
	        customArgs
	      ]);
	  
	      definition.apply(this, args);
	    },
	  
	    // Internal method: set up new copies of initializers and finalizers.
	    // Calling this method will wipe out all existing initializers and
	    // finalizers.
	    _setupInitializersAndFinalizers: function(){
	      this._initializerCallbacks = new Marionette.Callbacks();
	      this._finalizerCallbacks = new Marionette.Callbacks();
	    }
	  });
	  
	  // Type methods to create modules
	  _.extend(Marionette.Module, {
	  
	    // Create a module, hanging off the app parameter as the parent object.
	    create: function(app, moduleNames, moduleDefinition){
	      var module = app;
	  
	      // get the custom args passed in after the module definition and
	      // get rid of the module name and definition function
	      var customArgs = slice.call(arguments);
	      customArgs.splice(0, 3);
	  
	      // Split the module names and get the number of submodules.
	      // i.e. an example module name of `Doge.Wow.Amaze` would
	      // then have the potential for 3 module definitions.
	      moduleNames = moduleNames.split(".");
	      var length = moduleNames.length;
	  
	      // store the module definition for the last module in the chain
	      var moduleDefinitions = [];
	      moduleDefinitions[length-1] = moduleDefinition;
	  
	      // Loop through all the parts of the module definition
	      _.each(moduleNames, function(moduleName, i){
	        var parentModule = module;
	        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
	        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
	      }, this);
	  
	      // Return the last module in the definition chain
	      return module;
	    },
	  
	    _getModule: function(parentModule, moduleName, app, def, args){
	      var options = _.extend({}, def);
	      var ModuleClass = this.getClass(def);
	  
	      // Get an existing module of this name if we have one
	      var module = parentModule[moduleName];
	  
	      if (!module){
	        // Create a new module if we don't have one
	        module = new ModuleClass(moduleName, app, options);
	        parentModule[moduleName] = module;
	        // store the module on the parent
	        parentModule.submodules[moduleName] = module;
	      }
	  
	      return module;
	    },
	  
	    // ## Module Classes
	    //
	    // Module classes can be used as an alternative to the define pattern.
	    // The extend function of a Module is identical to the extend functions
	    // on other Backbone and Marionette classes.
	    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
	    getClass: function(moduleDefinition) {
	      var ModuleClass = Marionette.Module;
	  
	      if (!moduleDefinition) {
	        return ModuleClass;
	      }
	  
	      // If all of the module's functionality is defined inside its class,
	      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
	      if (moduleDefinition.prototype instanceof ModuleClass) {
	        return moduleDefinition;
	      }
	  
	      return moduleDefinition.moduleClass || ModuleClass;
	    },
	  
	    // Add the module definition and add a startWithParent initializer function.
	    // This is complicated because module definitions are heavily overloaded
	    // and support an anonymous function, module class, or options object
	    _addModuleDefinition: function(parentModule, module, def, args){
	      var fn = this._getDefine(def);
	      var startWithParent = this._getStartWithParent(def, module);
	  
	      if (fn){
	        module.addDefinition(fn, args);
	      }
	  
	      this._addStartWithParent(parentModule, module, startWithParent);
	    },
	  
	    _getStartWithParent: function(def, module) {
	      var swp;
	  
	      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
	        swp = module.constructor.prototype.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      if (_.isObject(def)){
	        swp = def.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      return true;
	    },
	  
	    _getDefine: function(def) {
	      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
	        return def;
	      }
	  
	      if (_.isObject(def)){
	        return def.define;
	      }
	  
	      return null;
	    },
	  
	    _addStartWithParent: function(parentModule, module, startWithParent) {
	      module.startWithParent = module.startWithParent && startWithParent;
	  
	      if (!module.startWithParent || !!module.startWithParentIsConfigured){
	        return;
	      }
	  
	      module.startWithParentIsConfigured = true;
	  
	      parentModule.addInitializer(function(options){
	        if (module.startWithParent){
	          module.start(options);
	        }
	      });
	    }
	  });
	  
	  
	    return Marionette;
	  })(this, Backbone, _);
	  
	  return Backbone.Marionette;

	}));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette, App) {var Controller;

	Controller = Marionette.Controller.extend({
	  initialize: function() {
	    var show;
	    show = this.getShowView();
	    return App.headerRegion.show(show);
	  },
	  getShowView: function() {
	    var Show;
	    Show = __webpack_require__(57);
	    return new Show;
	  }
	});

	module.exports = Controller;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette, App) {var Controller;

	Controller = Marionette.Controller.extend({
	  initialize: function() {
	    this.layout = this.getLayoutView();
	    this.listenTo(this.layout, 'show', (function(_this) {
	      return function() {
	        _this.listRegion();
	        return _this.panelRegion();
	      };
	    })(this));
	    App.vent.on('list:products', (function(_this) {
	      return function(products) {
	        return _this.listRegion(products);
	      };
	    })(this));
	    return App.mainRegion.show(this.layout);
	  },
	  listRegion: function(products) {
	    var listView;
	    listView = this.getListView(products);
	    return this.layout.listRegion.show(listView);
	  },
	  panelRegion: function() {
	    var panelView;
	    panelView = this.getPanelView();
	    return this.layout.panelRegion.show(panelView);
	  },
	  getLayoutView: function() {
	    var Layout;
	    Layout = __webpack_require__(58);
	    return new Layout;
	  },
	  getListView: function(products) {
	    var List;
	    List = __webpack_require__(59);
	    return new List({
	      collection: products
	    });
	  },
	  getPanelView: function() {
	    var Panel;
	    Panel = __webpack_require__(60);
	    return new Panel;
	  }
	});

	module.exports = Controller;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(1)))

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {var Show;

	Show = Marionette.ItemView.extend({
	  tagName: 'header',
	  className: 'container',
	  template: __webpack_require__(92)
	});

	module.exports = Show;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {var Layout;

	Layout = Marionette.Layout.extend({
	  className: 'container',
	  template: __webpack_require__(93),
	  regions: {
	    listRegion: '#list-region',
	    panelRegion: '#panel-region'
	  }
	});

	module.exports = Layout;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette) {var ChildView, List;

	ChildView = Marionette.ItemView.extend({
	  template: __webpack_require__(94),
	  tagName: 'tr'
	});

	List = Marionette.CompositeView.extend({
	  template: __webpack_require__(95),
	  itemView: ChildView,
	  itemViewContainer: 'tbody',
	  tagName: 'table',
	  className: 'table'
	});

	module.exports = List;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Marionette, $, Backbone, App) {var Panel;

	Panel = Marionette.ItemView.extend({
	  template: __webpack_require__(96),
	  events: {
	    'submit': 'search'
	  },
	  search: (function(_this) {
	    return function(e) {
	      var keyword;
	      e.stopPropagation();
	      e.preventDefault();
	      keyword = $('#search-keyword').val();
	      return $.ajax({
	        type: 'POST',
	        url: '/ajax/productlist',
	        data: {
	          keyword: keyword
	        },
	        success: function(data) {
	          var products;
	          products = new Backbone.Collection(data, {
	            comparator: 'Availability'
	          });
	          return App.vent.trigger('list:products', products);
	        },
	        error: function() {
	          return warn('search error', arguments);
	        }
	      });
	    };
	  })(this)
	});

	module.exports = Panel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(9), __webpack_require__(10), __webpack_require__(1)))

/***/ },
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.Wreqr (Backbone.Marionette)
	// ----------------------------------
	// v1.3.1
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.wreqr


	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Backbone, _) {
	      return factory(Backbone, _);
	    }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(Backbone, _);
	  } else {
	    factory(root.Backbone, root._);
	  }

	}(this, function(Backbone, _) {
	  "use strict";

	  var previousWreqr = Backbone.Wreqr;

	  var Wreqr = Backbone.Wreqr = {};

	  Backbone.Wreqr.VERSION = '1.3.1';

	  Backbone.Wreqr.noConflict = function () {
	    Backbone.Wreqr = previousWreqr;
	    return this;
	  };

	  // Handlers
	  // --------
	  // A registry of functions to call, given a name
	  
	  Wreqr.Handlers = (function(Backbone, _){
	    "use strict";
	    
	    // Constructor
	    // -----------
	  
	    var Handlers = function(options){
	      this.options = options;
	      this._wreqrHandlers = {};
	      
	      if (_.isFunction(this.initialize)){
	        this.initialize(options);
	      }
	    };
	  
	    Handlers.extend = Backbone.Model.extend;
	  
	    // Instance Members
	    // ----------------
	  
	    _.extend(Handlers.prototype, Backbone.Events, {
	  
	      // Add multiple handlers using an object literal configuration
	      setHandlers: function(handlers){
	        _.each(handlers, function(handler, name){
	          var context = null;
	  
	          if (_.isObject(handler) && !_.isFunction(handler)){
	            context = handler.context;
	            handler = handler.callback;
	          }
	  
	          this.setHandler(name, handler, context);
	        }, this);
	      },
	  
	      // Add a handler for the given name, with an
	      // optional context to run the handler within
	      setHandler: function(name, handler, context){
	        var config = {
	          callback: handler,
	          context: context
	        };
	  
	        this._wreqrHandlers[name] = config;
	  
	        this.trigger("handler:add", name, handler, context);
	      },
	  
	      // Determine whether or not a handler is registered
	      hasHandler: function(name){
	        return !! this._wreqrHandlers[name];
	      },
	  
	      // Get the currently registered handler for
	      // the specified name. Throws an exception if
	      // no handler is found.
	      getHandler: function(name){
	        var config = this._wreqrHandlers[name];
	  
	        if (!config){
	          return;
	        }
	  
	        return function(){
	          var args = Array.prototype.slice.apply(arguments);
	          return config.callback.apply(config.context, args);
	        };
	      },
	  
	      // Remove a handler for the specified name
	      removeHandler: function(name){
	        delete this._wreqrHandlers[name];
	      },
	  
	      // Remove all handlers from this registry
	      removeAllHandlers: function(){
	        this._wreqrHandlers = {};
	      }
	    });
	  
	    return Handlers;
	  })(Backbone, _);
	  
	  // Wreqr.CommandStorage
	  // --------------------
	  //
	  // Store and retrieve commands for execution.
	  Wreqr.CommandStorage = (function(){
	    "use strict";
	  
	    // Constructor function
	    var CommandStorage = function(options){
	      this.options = options;
	      this._commands = {};
	  
	      if (_.isFunction(this.initialize)){
	        this.initialize(options);
	      }
	    };
	  
	    // Instance methods
	    _.extend(CommandStorage.prototype, Backbone.Events, {
	  
	      // Get an object literal by command name, that contains
	      // the `commandName` and the `instances` of all commands
	      // represented as an array of arguments to process
	      getCommands: function(commandName){
	        var commands = this._commands[commandName];
	  
	        // we don't have it, so add it
	        if (!commands){
	  
	          // build the configuration
	          commands = {
	            command: commandName, 
	            instances: []
	          };
	  
	          // store it
	          this._commands[commandName] = commands;
	        }
	  
	        return commands;
	      },
	  
	      // Add a command by name, to the storage and store the
	      // args for the command
	      addCommand: function(commandName, args){
	        var command = this.getCommands(commandName);
	        command.instances.push(args);
	      },
	  
	      // Clear all commands for the given `commandName`
	      clearCommands: function(commandName){
	        var command = this.getCommands(commandName);
	        command.instances = [];
	      }
	    });
	  
	    return CommandStorage;
	  })();
	  
	  // Wreqr.Commands
	  // --------------
	  //
	  // A simple command pattern implementation. Register a command
	  // handler and execute it.
	  Wreqr.Commands = (function(Wreqr){
	    "use strict";
	  
	    return Wreqr.Handlers.extend({
	      // default storage type
	      storageType: Wreqr.CommandStorage,
	  
	      constructor: function(options){
	        this.options = options || {};
	  
	        this._initializeStorage(this.options);
	        this.on("handler:add", this._executeCommands, this);
	  
	        var args = Array.prototype.slice.call(arguments);
	        Wreqr.Handlers.prototype.constructor.apply(this, args);
	      },
	  
	      // Execute a named command with the supplied args
	      execute: function(name, args){
	        name = arguments[0];
	        args = Array.prototype.slice.call(arguments, 1);
	  
	        if (this.hasHandler(name)){
	          this.getHandler(name).apply(this, args);
	        } else {
	          this.storage.addCommand(name, args);
	        }
	  
	      },
	  
	      // Internal method to handle bulk execution of stored commands
	      _executeCommands: function(name, handler, context){
	        var command = this.storage.getCommands(name);
	  
	        // loop through and execute all the stored command instances
	        _.each(command.instances, function(args){
	          handler.apply(context, args);
	        });
	  
	        this.storage.clearCommands(name);
	      },
	  
	      // Internal method to initialize storage either from the type's
	      // `storageType` or the instance `options.storageType`.
	      _initializeStorage: function(options){
	        var storage;
	  
	        var StorageType = options.storageType || this.storageType;
	        if (_.isFunction(StorageType)){
	          storage = new StorageType();
	        } else {
	          storage = StorageType;
	        }
	  
	        this.storage = storage;
	      }
	    });
	  
	  })(Wreqr);
	  
	  // Wreqr.RequestResponse
	  // ---------------------
	  //
	  // A simple request/response implementation. Register a
	  // request handler, and return a response from it
	  Wreqr.RequestResponse = (function(Wreqr){
	    "use strict";
	  
	    return Wreqr.Handlers.extend({
	      request: function(){
	        var name = arguments[0];
	        var args = Array.prototype.slice.call(arguments, 1);
	        if (this.hasHandler(name)) {
	          return this.getHandler(name).apply(this, args);
	        }
	      }
	    });
	  
	  })(Wreqr);
	  
	  // Event Aggregator
	  // ----------------
	  // A pub-sub object that can be used to decouple various parts
	  // of an application through event-driven architecture.
	  
	  Wreqr.EventAggregator = (function(Backbone, _){
	    "use strict";
	    var EA = function(){};
	  
	    // Copy the `extend` function used by Backbone's classes
	    EA.extend = Backbone.Model.extend;
	  
	    // Copy the basic Backbone.Events on to the event aggregator
	    _.extend(EA.prototype, Backbone.Events);
	  
	    return EA;
	  })(Backbone, _);
	  
	  // Wreqr.Channel
	  // --------------
	  //
	  // An object that wraps the three messaging systems:
	  // EventAggregator, RequestResponse, Commands
	  Wreqr.Channel = (function(Wreqr){
	    "use strict";
	  
	    var Channel = function(channelName) {
	      this.vent        = new Backbone.Wreqr.EventAggregator();
	      this.reqres      = new Backbone.Wreqr.RequestResponse();
	      this.commands    = new Backbone.Wreqr.Commands();
	      this.channelName = channelName;
	    };
	  
	    _.extend(Channel.prototype, {
	  
	      // Remove all handlers from the messaging systems of this channel
	      reset: function() {
	        this.vent.off();
	        this.vent.stopListening();
	        this.reqres.removeAllHandlers();
	        this.commands.removeAllHandlers();
	        return this;
	      },
	  
	      // Connect a hash of events; one for each messaging system
	      connectEvents: function(hash, context) {
	        this._connect('vent', hash, context);
	        return this;
	      },
	  
	      connectCommands: function(hash, context) {
	        this._connect('commands', hash, context);
	        return this;
	      },
	  
	      connectRequests: function(hash, context) {
	        this._connect('reqres', hash, context);
	        return this;
	      },
	  
	      // Attach the handlers to a given message system `type`
	      _connect: function(type, hash, context) {
	        if (!hash) {
	          return;
	        }
	  
	        context = context || this;
	        var method = (type === 'vent') ? 'on' : 'setHandler';
	  
	        _.each(hash, function(fn, eventName) {
	          this[type][method](eventName, _.bind(fn, context));
	        }, this);
	      }
	    });
	  
	  
	    return Channel;
	  })(Wreqr);
	  
	  // Wreqr.Radio
	  // --------------
	  //
	  // An object that lets you communicate with many channels.
	  Wreqr.radio = (function(Wreqr){
	    "use strict";
	  
	    var Radio = function() {
	      this._channels = {};
	      this.vent = {};
	      this.commands = {};
	      this.reqres = {};
	      this._proxyMethods();
	    };
	  
	    _.extend(Radio.prototype, {
	  
	      channel: function(channelName) {
	        if (!channelName) {
	          throw new Error('Channel must receive a name');
	        }
	  
	        return this._getChannel( channelName );
	      },
	  
	      _getChannel: function(channelName) {
	        var channel = this._channels[channelName];
	  
	        if(!channel) {
	          channel = new Wreqr.Channel(channelName);
	          this._channels[channelName] = channel;
	        }
	  
	        return channel;
	      },
	  
	      _proxyMethods: function() {
	        _.each(['vent', 'commands', 'reqres'], function(system) {
	          _.each( messageSystems[system], function(method) {
	            this[system][method] = proxyMethod(this, system, method);
	          }, this);
	        }, this);
	      }
	    });
	  
	  
	    var messageSystems = {
	      vent: [
	        'on',
	        'off',
	        'trigger',
	        'once',
	        'stopListening',
	        'listenTo',
	        'listenToOnce'
	      ],
	  
	      commands: [
	        'execute',
	        'setHandler',
	        'setHandlers',
	        'removeHandler',
	        'removeAllHandlers'
	      ],
	  
	      reqres: [
	        'request',
	        'setHandler',
	        'setHandlers',
	        'removeHandler',
	        'removeAllHandlers'
	      ]
	    };
	  
	    var proxyMethod = function(radio, system, method) {
	      return function(channelName) {
	        var messageSystem = radio._getChannel(channelName)[system];
	        var args = Array.prototype.slice.call(arguments, 1);
	  
	        return messageSystem[method].apply(messageSystem, args);
	      };
	    };
	  
	    return new Radio();
	  
	  })(Wreqr);
	  

	  return Backbone.Wreqr;

	}));


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.BabySitter
	// -------------------
	// v0.1.4
	//
	// Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.babysitter

	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Backbone, _) {
	      return factory(Backbone, _);
	    }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(Backbone, _);
	  } else {
	    factory(root.Backbone, root._);
	  }

	}(this, function(Backbone, _) {
	  'use strict';

	  var previousChildViewContainer = Backbone.ChildViewContainer;

	  // BabySitter.ChildViewContainer
	  // -----------------------------
	  //
	  // Provide a container to store, retrieve and
	  // shut down child views.
	  
	  Backbone.ChildViewContainer = (function (Backbone, _) {
	  
	    // Container Constructor
	    // ---------------------
	  
	    var Container = function(views){
	      this._views = {};
	      this._indexByModel = {};
	      this._indexByCustom = {};
	      this._updateLength();
	  
	      _.each(views, this.add, this);
	    };
	  
	    // Container Methods
	    // -----------------
	  
	    _.extend(Container.prototype, {
	  
	      // Add a view to this container. Stores the view
	      // by `cid` and makes it searchable by the model
	      // cid (and model itself). Optionally specify
	      // a custom key to store an retrieve the view.
	      add: function(view, customIndex){
	        var viewCid = view.cid;
	  
	        // store the view
	        this._views[viewCid] = view;
	  
	        // index it by model
	        if (view.model){
	          this._indexByModel[view.model.cid] = viewCid;
	        }
	  
	        // index by custom
	        if (customIndex){
	          this._indexByCustom[customIndex] = viewCid;
	        }
	  
	        this._updateLength();
	        return this;
	      },
	  
	      // Find a view by the model that was attached to
	      // it. Uses the model's `cid` to find it.
	      findByModel: function(model){
	        return this.findByModelCid(model.cid);
	      },
	  
	      // Find a view by the `cid` of the model that was attached to
	      // it. Uses the model's `cid` to find the view `cid` and
	      // retrieve the view using it.
	      findByModelCid: function(modelCid){
	        var viewCid = this._indexByModel[modelCid];
	        return this.findByCid(viewCid);
	      },
	  
	      // Find a view by a custom indexer.
	      findByCustom: function(index){
	        var viewCid = this._indexByCustom[index];
	        return this.findByCid(viewCid);
	      },
	  
	      // Find by index. This is not guaranteed to be a
	      // stable index.
	      findByIndex: function(index){
	        return _.values(this._views)[index];
	      },
	  
	      // retrieve a view by its `cid` directly
	      findByCid: function(cid){
	        return this._views[cid];
	      },
	  
	      // Remove a view
	      remove: function(view){
	        var viewCid = view.cid;
	  
	        // delete model index
	        if (view.model){
	          delete this._indexByModel[view.model.cid];
	        }
	  
	        // delete custom index
	        _.any(this._indexByCustom, function(cid, key) {
	          if (cid === viewCid) {
	            delete this._indexByCustom[key];
	            return true;
	          }
	        }, this);
	  
	        // remove the view from the container
	        delete this._views[viewCid];
	  
	        // update the length
	        this._updateLength();
	        return this;
	      },
	  
	      // Call a method on every view in the container,
	      // passing parameters to the call method one at a
	      // time, like `function.call`.
	      call: function(method){
	        this.apply(method, _.tail(arguments));
	      },
	  
	      // Apply a method on every view in the container,
	      // passing parameters to the call method one at a
	      // time, like `function.apply`.
	      apply: function(method, args){
	        _.each(this._views, function(view){
	          if (_.isFunction(view[method])){
	            view[method].apply(view, args || []);
	          }
	        });
	      },
	  
	      // Update the `.length` attribute on this container
	      _updateLength: function(){
	        this.length = _.size(this._views);
	      }
	    });
	  
	    // Borrowing this code from Backbone.Collection:
	    // http://backbonejs.org/docs/backbone.html#section-106
	    //
	    // Mix in methods from Underscore, for iteration, and other
	    // collection related features.
	    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	      'last', 'without', 'isEmpty', 'pluck'];
	  
	    _.each(methods, function(method) {
	      Container.prototype[method] = function() {
	        var views = _.values(this._views);
	        var args = [views].concat(_.toArray(arguments));
	        return _[method].apply(_, args);
	      };
	    });
	  
	    // return the public API
	    return Container;
	  })(Backbone, _);
	  

	  Backbone.ChildViewContainer.VERSION = '0.1.4';

	  Backbone.ChildViewContainer.noConflict = function () {
	    Backbone.ChildViewContainer = previousChildViewContainer;
	    return this;
	  };

	  return Backbone.ChildViewContainer;

	}));


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(101);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<h1>Binnyfield’s</h1>");;return buf.join("");
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(101);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<h3>Products</h3><div id=\"panel-region\"></div><div id=\"list-region\"></div>");;return buf.join("");
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(101);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var locals_ = (locals || {}),ImageLarge = locals_.ImageLarge,ProductText = locals_.ProductText,Link = locals_.Link,Availability = locals_.Availability,Title = locals_.Title,AreaDescription = locals_.AreaDescription,UnitVolume = locals_.UnitVolume,UnitPrice = locals_.UnitPrice,Proof = locals_.Proof;
	buf.push("<td class=\"text-center\">");
	if ( ImageLarge != '/img/no_photo_big.jpg')
	{
	buf.push("<img" + (jade.attr("src", ImageLarge, true, false)) + (jade.attr("title", ProductText, true, false)) + "/>");
	}
	else
	{
	buf.push("<i>No image</i>");
	}
	buf.push("</td><td><a" + (jade.attr("href", 'http://www.binnys.com'+Link, true, false)) + ">" + (jade.escape(null == (jade_interp = Availability) ? "" : jade_interp)) + "</a></td><td>" + (jade.escape(null == (jade_interp = Title) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = AreaDescription) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = UnitVolume) ? "" : jade_interp)) + "</td><td>" + (jade.escape(null == (jade_interp = '$'+parseFloat(UnitPrice)) ? "" : jade_interp)) + "</td><td class=\"hidden-xs\">" + (jade.escape(null == (jade_interp = parseFloat(Proof)) ? "" : jade_interp)) + "</td>");;return buf.join("");
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(101);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<thead><tr><th></th><th>Availabilty</th><th>Title</th><th class=\"hidden-xs\">Region</th><th class=\"hidden-xs\">Volume</th><th>Price</th><th class=\"hidden-xs\">Proof</th></tr></thead><tbody></tbody>");;return buf.join("");
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(101);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var locals_ = (locals || {}),keyword = locals_.keyword,search = locals_.search;
	buf.push("<form role=\"form\"><div class=\"form-group\"><input" + (jade.attr("name", keyword, true, false)) + (jade.attr("type", search, true, false)) + " placeholder=\"Search…\" id=\"search-keyword\" class=\"form-control\"/></div></form>");;return buf.join("");
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7ad17c6085dee9a33787bac28fb23d46.eot"

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e49d52e74b7689a0727def99da31f3eb.ttf"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32941d6330044744c02493835b799e90.svg"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:application/font-woff;base64,d09GRgABAAAAAFsYABEAAAAAoUAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAcalXC8EdERUYAAAGcAAAAHgAAACABCAAET1MvMgAAAbwAAABDAAAAYGenS4RjbWFwAAACAAAAARsAAAJySvAJmmN2dCAAAAMcAAAACAAAAAgAKAOHZnBnbQAAAyQAAAGxAAACZVO0L6dnYXNwAAAE2AAAAAgAAAAIAAAAEGdseWYAAATgAABODAAAiTweHjMhaGVhZAAAUuwAAAA0AAAANgJiWP5oaGVhAABTIAAAABwAAAAkCjIED2htdHgAAFM8AAABFAAAAvTBwRGObG9jYQAAVFAAAAGrAAABuDSPVk5tYXhwAABV/AAAACAAAAAgAgQBoG5hbWUAAFYcAAABggAAA3zUr5ntcG9zdAAAV6AAAANAAAAIhLlGpmlwcmVwAABa4AAAAC4AAAAusPIrFHdlYmYAAFsQAAAABgAAAAZYr1LmAAAAAQAAAADMPaLPAAAAAM8MFvIAAAAAzwwJLnjaY2BkYGDgA2IJBhBgYmAEwltAzALmMQAADagBDQAAeNpjYGZpZJzAwMrAwszDdIGBgSEKQjMuYTBi2gHkA6Wwg1DvcD8GBwbeRwzMB/4LANVJMNQAhRmRlCgwMAIAC2EJ1gB42s2RP0vDYBDG723aSIrSUESsiHcIWqqDXbvFRe0gBJw6tTgUCx2Kk926dusixc0P4OiXaQZzjx2cnNRFhPiagENdHBx84P693P0O7iUihzLbJGM9mb6tTFrnTWhjSAEVyLfZCgnt060U5UDacrdd3vnYNVWvWlJHPa1oTRva1JZ2tKdDHesUHiqooYEjNNFCD0OMcY2bR0qSr10pcc8S6QfRaEF9Fa1roKElnutARzqBgQ9BHQFOEKKDAUaYYJoSTfKWzJMo6epSPI/v44sHJ9qI1malWVEqsi5lWRZXiN/5lV/4mZ8YfMWX3Ocud7jNLT7jUz7mQw62ouwafyvj0jfW5KzLLTZkX5EpX6B/LXfxYfU3U5+Pg2iWAAAAAI8AKAL4eNpdUbtOW0EQ3Q0PA4HE2CA52hSzmZDGe6EFCcTVjWJkO4XlCGk3cpGLcQEfQIFEDdqvGaChpEibBiEXSHxCPiESM2uIojQ7O7NzzpkzS8qRqnfpa89T5ySQwt0GzTb9Tki1swD3pOvrjYy0gwdabGb0ynX7/gsGm9GUO2oA5T1vKQ8ZTTuBWrSn/tH8Cob7/B/zOxi0NNP01DoJ6SEE5ptxS4PvGc26yw/6gtXhYjAwpJim4i4/plL+tzTnasuwtZHRvIMzEfnJNEBTa20Emv7UIdXzcRRLkMumsTaYmLL+JBPBhcl0VVO1zPjawV2ys+hggyrNgQfYw1Z5DB4ODyYU0rckyiwNEfZiq8QIEZMcCjnl3Mn+pED5SBLGvElKO+OGtQbGkdfAoDZPs/88m01tbx3C+FkcwXe/GUs6+MiG2hgRYjtiKYAJREJGVfmGGs+9LAbkUvvPQJSA5fGPf50ItO7YRDyXtXUOMVYIen7b3PLLirtWuc6LQndvqmqo0inN+17OvscDnh4Lw0FjwZvP+/5Kgfo8LK40aA4EQ3o3ev+iteqIq7wXPrIn07+xWgAAAAABAAH//wAPeNq9vQlgG+WVADzfzEijWxpJo5FkS7IkS/IpxZJlxfGR4Nx3yM2dgIBCOMIVrhAghXK0CYZCKA0tKSyQco6UUNpu2G3pwoq26hnSQrcsvVhajm0hu90m8fC/981Ilu0Eyu7//3EkzSXNe+973/vePQzLtDEM+QzXwnCMwKRLhMkMlgWefS9bMhr+bbDMsbDJlDg8bMDDZcHIHRssEzyeE6NiIifG28gs9e0//5lrOfZmG/sThjBFpsgv4ZcwMtPKKExGsecUUlWsWaL4M4rnkGLIKu6qImRLAdLJTOvx5KOpgizmxIIsRKWoLKTEuCikCkXCPb/j+Qq8CKeO1TYPTzqgjtHLAA0G/tH7WplFTNnCMJ14c4He3JAtE8bSuW8W4cydRLFlFMshhc0q5qrCZ8tmC54yC+bOssWMmxbG3FmyU+gCJCrW/sgo6SKj6mb14PiWupmMUpwN/Bf4Z5gCs4VRshmlrVpuy+JPtaXNFI4ohSOSVQwZpTmnGKtKMKtIGcVaLUtWvFByIWTTM0qBQharlkKRLHy6St2kU3FllXRVcWZL/aSzFCuIbkXoV7rFsrUl29/fj1Qs5HoL8UKur9CXy8o+Od6bZuMxBytEhahRgrcwn8sOs/mcUTDGY6k0SRWLlxleL96WWHzV/g82Dxqfyy1ZFPb3z5npIdcX1YNGsgvezdP6Z+ek0KIluWciGzc9Xr26dcRGDhcz+eLjp+544fwLC+unBbxdpw4X033FRVeOdDqD09bln7rwqq+mn7yGwTGpkFF+CXsA+MtNeYGrEoXPlAzayANRK9wtx7YiORlGH8Pavx7Y/+gD0sW/yJ/ESEyEUbiM4qjCmBHFlynJ8BMlMye6S1axv39aD+f15aLZvt5kPCakSTxmlLyygzguW86+f80TT1yT7up67pIv/ZIdWUPeX3H50x885dh49S8eCNgcm5Bt4FXkFeAdHuaBhbEzTJ7IBZIQzQYY9QpgcXQF6VIPsuvZ9TD6XUU8qG6u0L3DY4+yp6k20jW2F36H++jDjz7kX+BfYFjGyLgYRkgAexN4Ffp6MyQZE+xk6b+feog979DaQ+fY7Q84W532zf9+snbgdHvK8YDdXqMFwKQwZibHlI3Iz0JV4WAaWTKK6RCQssyZkHM4AzCuicNNkxEY10qJK0aJCNMpHxV5BYE79iaQUhl7fez1YpFN4u87GBPMl2eZFoZJhklhmOTFhJgUHETW93qTgsFBJDhm5FtvX34SID9r0fJ1bvfty+etcljGXBYH7H/+kvagtKGDPXP32F9dcvDyvkJ7QD65wF1msXLf5TyWseWiP8AANeSP3uX/hX+A8TBNzClM2YEYuTOKXFWaNMZozijkkCJVFcmFskExwBwAdg9Ionsfx7rcrXK/YhCB85mS2wFTwNyvyKLi6lea3PsIIxjg/LQetwsQkrwC8XmdxBhLEWB31uVr6XMlW2TSDKzWvIx0CcLFJq9JPXj1zspnXyTu735XfZ+8h+fU31d2Xq0ehJMXCwLpWsZepP75xe/CFRp/Fpn1/LP8HCYAHEmUYEZhDiFPOqqlJo2le4fZMJHhjZW8Dk5I88Xpp1599bVd066/5qr1fbOvvWXv8PDjt1w7m3PN2rKqm184Z+4CvnvVlln91950Y3nNmvKNN10LtProm8x8/j4YewtjA5aKenKeKPGYiYcrLCD/fg97D/mluv1u9SZ1+z33slwLFUV/UmcSj/oe+Wf4pHzY+Bs+xs8odhC/VAzxwERypuSnIE/4dY8sFORUIZ4Spt5n9r8s/M73Fn33naXLjnNH9sqdv/3Cjj984ec/n8C7HpjHeZKPJYdIb1/WFyJeY1wiEhlNzFT+R5mZIKN3EVK8L1fZqihbK7n7iupHdzE4/+j3l9B1yco44Xdk4JoIE2dSTCeTgRmhMGUGOYivlvwtICiFjBLLKaaq0ppVrBklmVNsVaUtqzgzSkdOcVWVrqziySjpnOKtKtOyiH84m0NyEKWXjiNf3WeyubytclbhXSii9pntooS7/qrSDO8aV4aySkt1X2tb1zQ81eIqReHKRHt3D+5y1VIeBZPNCoIp2NTfrzjFUnMIBVQPXS/z8fykF0pBmKVRcpxzvHJ0f7H+D8TN2F76OjB+kF/SeAnKUhBOx7bWjzC6fNPWRifQMMPMZEaYsh2p15UDtJFkoYwySEnTC7wxi9LDRddHP7y7Si2AOBCtvapMz5ZOonwD8qEPJK5PEmFMo7FkgEzcJ59wPgRcIIVCkroZ38e32fUnOpNtOMxe3LAz9sKJzjAgPSfjvpw5i7mUuZG5C9ZqSoXS4EU5pEOpt5hFSpSWbM0hLUpzroT97kzp9C/Afmu1tPqWLFBnFKlTciHTmYH52rKUQtNAUs1aAdv91dKC9fjpKm2AY5tvgu0LqqVrbs9mS3dTyuFcGCDabOgksaSY//h9kv//9vqQVEGCneCNjP7fzmfre+TR420e+6//6wWwztbkReMYr9V5fJDyeC+d/ktySnNVmYOjqpyOY6qshhHdMGFE5ROMaGnj8UfP64PdPjichF2jNPk8jgbyPZV9UY36H7f/ydRmD+DO2Bx8P/52I83Hv/0pKIoyPMTE+A/4DsbAMLA4pEgqRB7hsgfHvvYj8rJ6OtcLWz/G6y5kLuTn8fNATuN1BTORzUQwkwtJUH3rIAmS4EH1LfoGH8MT9w/iNbBWTdANUszzE7QDUAviOSVUVaLZcnMI1ZzmJGg8oWbcDEVAv9b1h7YG/SEJAiucVRJVpSVbTiTx0kQcvpVM4GayGb6VqGsZ7TDSSdAyyqwPRHa/khAVd78SAK1DdgUbtA7ZDVqHq78UAu1jH2OQ/HiuSSx7A6S//xN0Dw7keU7KSXEpnv9YPWResQKi/hO0EfUUvAile412X6a0izBnHE+zapmqWUV1zeo51KyaQx+jWz2HulVz+BO1Kw6WsY/HDLUG8r6O2I5r1VcFH1xlqiH2InG9CIhRXZGR+QdAf2iC1X4ug4ajBdDoouuSUC0L1JgTwJhTBFfJBhh5qmWbBw/awI5Ck6lkE2CQZH9zHACnmpm7IIE26wVg873JVN7nBg2NjaVZok1g1HfpBJZ/9vj5W4+Qs49sPf/xn522+9V3X919Gvl1SCri7CjiAvU8aRt+rFC5pnTkSOmaSuGxYfWXz2+Bq+BiYhtfs2DdLTIE5FKprsdMY8o8rjgmWy5HFFdG4REfRMIESFjBTNbQcVZLIpU2BbCwCRjHtb8iGCNdFRj6CkGDhBxWbWh5g6KwAukWZJr4XfwuZj5zMnM2g0ywoqoszih9QL2VlHoLqsoCV2kp3AMWtFVApwUM2lBDwPZLxX1OKdePrNDqLgUyYFiWVgDLlwRQYJTF4j4umpqLZ/vcpc6TkOE93gjrixDBJxdkH2zmsjPZvplE7iukCn2wme/NsMkMKSRTQioJm/GYkzU6ScooyIIRNg2oFEpeYywZNN7POvzciu7BWw3dPYZkW6wpkzSmM4bPTZ+2gvM7yZcMhi8Rl8yt6Br8nKF7mlG7wpDtMtw6kF7BBezs/UZy/rbyNvjPnhJtTxp7ugyfG0ifzAXhlMFwP2sPcid3DX3O0NWDX27uThpzHYbPzciczAUc2s87AtzJmRmfM2TSxuS0wPpt29afsm0byEKBKX70Ea8YvKD3j2ugBeYOphzFudYK1v603iwsFalMuSPblwN1oakKKiYqFY4uOJ7JULsVzPvgIVx1Wl2lBM7DrNKGmmk50UYlFAMM3eZCeaRMAy3VVeqBre6s0ltV7Nlybw9e1OuBi3pdqGeCUESHAHWi4CJSX0kalhMPqJ3aFrKSB16obnr07aLTQjwD7aSrfYB4LE6H9ehbVkeRu2WgfWxO+0CRyhjkM03a8CRrcRbbBwba4XtZq8Nx7BJkvvbBwXb2wNgc9gBYxkf3a5uavQR/Bon/NdggXUzZTPV14HvQz82HUFc3UT0bqQRMXzKYQPAQOlnNJF5zurCj7C0V9SD+saewt4xtHduLcoRdj/yOAvBtkBMORmRiTBmMpU6CXA/SzlgtGwkSzGgCieDRZhPVSesUISIpOqzkV2TUYT32jNXBriddAX6b1aHaxs4A9Dg34o4ylmd4/in+KZjDHuCB7Qza4M6q4kUhW5a9eBtZgnHx4JBTwxAgsMOouUpeQHD8ogBcJLtwcsO8R6Ox5LWDnLJwDg/MrJIow46Zd6Kty5S8TtgTGLsLT3nwlJGINl0Qu1tbeLeL5Vta3boA9qCEkPg9xE3mEPeePer76gH1fd+HZO2HH6pPzAeR8Y3GE3v2sGepT3yIp8dUIOlBaiuwHz3IMAYv0BTlVVq3soQcYgwWlTNDHQ9O6nggZmRhlGO6tIqTHAd/JMrFOU+OixfJsz+VHvb+hDw79lb7B209bzY9wSvoQDm6gq4FhzW/D6vr6No9FzFlK95TuxuYICQ7LirLvIC35hlN9NuBjhYqK0sCD5KKNYOksosgX6lXDL0g6KcEiKjtRf6kvoHyU30Dtn7z7LPUjwciFP14lSKMM/Ar2PfPAhQyE2bO0TVID53LBhjYCB1YsaqI2kIKymSzqyTBFiiOLbikiqJ7v513y1Q3aBaVcL8iuffbDB5fiI6p7IE1l5jMTFBfUXuH2WyYpUsRqY0kR4U9R87a88bhN/acpX2c/gFZ/cEH6lMrdlV2HSENJ+CDZdWnPsDzKp2uwLQTeTbIbKzxrM6iTQ0sipiAjeuv82UzYgJ8uR/50ouY+EVF6lfgCDKnj2LicSImRoGhetDxWZJrgokcF0/Ek8uPHNl1Yq5Uz9ZwoUzC1n0KiE+7Lk2AR1xUsWcBJW8GRwKMbzOocjxxUJ0sL3qiTTVZmJOjhRwXrXAt/0pA1m23OiqVLOnKVjaOPRwgv0LJpSZg4pO3YJk9PIGGEuNn5jXMe6RhgNIQYLDVKRcEyok2IAxvtnA+f30aU0L55CmE8uj6SAvMbMOJyPQhmUHaJ5OJ7IcRf+pJOH8nubsCnFvTmZqZVQy6mWFsxYwSADhDFE6A2+kqWTReDQOcFoTLwHu8cgCH2CyWJB+u+SKOPGHMXgkPB0SFAu0Ns+hAjnuNLUkXOpmFqCjAiu4gsq4k7TqifhU0otsvuYeM3v2Vl0EjYn/0rqYWbQFVCTSqk/HMdaftZjQdj6Hwupgocx1TFnE8YX75qmVfBOe4Lwhz3I7zrmw34AE7gy7ymOacgIHXGDdYLcUBGReqMaK7HwF+XjBYLaCbRBH+oLtkNiFavggsL1EqHsx4nQGd6JrLDrApiNFCEt3GnBgVQJHpy+dgTsZjKcRuy8tfuVvd/MXNt5WOLCSj9HOXdphdj4rfdXh2xZESLk34SY8xsOoVdZ49nh9rBaOYMoo/hyIumMWgRHMOBy2URWnXkkMxE80ir7XmUHdPZKmJYzpUtrm8qGxYq2WH2wdbqDCAtMOVDZf7BBgaqYaXBxb8IRKVEnntpfmMuFuOvVlzEqEMHH+h1wnd8tryr/0f21us7zbIa9SHQF7LOHYtmo7TCiN2CEalbAjioBlQUgdduNQpDgC4CQ86QIdBBYgpteCqxjsMQToz0Kc0MG4w5xq8SaDcaOo5KB9bVpKulVuoInJsK2guIMWp3Vpk17cPVFZu2bKyAgrMXjjP/mEX1cR1XYH6gTiYy7K2rmEkAbmJq9J4ApAQ5K5nmITZYVIQHSTNGQVAe/C2a7ZefmGxve36W0Zvu/JUL9KPjA5Os0ebDMtPJodPnmtpa7PMPRnJwuly6n7g6h7mJOZ8ppxB6gznlGRV6aPjHAIyjei2DK5iMaBNZ1XpdJWysDVQVQZcJRdVG0qzgbWznUAjmzXUTKVJMgOzU3B5vBxytw3WOifKObFuxQyTljCRxvfTbMzBSh5Rc0sgQdEtkZi077CCQrfj98T4+x1085xH3nj7jUfOqdhMe0w2+sauH98mHpCSVtJ1408vv/ynN6oHtb0r4QvwvSvHXiU/xAvVXnxv2NbleIVfz73NGEBnY8SoQTRESQHjIzJYBSkwczWpzyo7dsyv/SejILMr6pMNh2q/xW2mv+Vk3AxVExyHUL6JehAEfz1RABtDSIGYrf/2gbmXXjh7rfar/fnbnv36rX2X3HlPbfy+zZ/N/ZX+ZogZpHEr9BKH9d9G35BHEzwRGB0PrDb7XD5ZW94Jgwqcw6Pxc4BEE2KC1O8PVpIEhrNcQMuIaNCQeygsZwrXXy2cbNw5aiR3A1zH3qyQVwCwJ24tXHLn3VXT/d99YZdpxFT+3VtlU90/roBUEYGbAwBnlNokM5nZYPstZpYTonF4adocMEbc1XJ7z1yUGcFMOdW5RDNQyonupXgslimxRjgSB4U8C2iWHAtgL1ot9S5Ef+cKNFpKhjD6RqslDqOSIc07ZkfTJldV8vDuKqWtnUoHdbnMypbT1M+Sjpk7y8TqxLskXKUCfGfOAtgeqJaSi/DTVVoClBzJKsur5f6heSjLToaLpoVgZfJK/kDvTFR9CwlY0Nvap2OosxRrAgp7vNOpnRoXy/yMAfTZhN2zzAZfoK8wODRrNiV+T1SM59HdkstH0ZmuCUcCLw6EIofqYB5UQ+qRwYu0oyAAorirXc2BuCQoQuFFDqPdTUaLRdVGtSw0xFF4dmkWueajh+3K2F78wEuobNVlbBcIDYwhHsB3lKfsAfwlelGxAltF7m1kzgqK4814EQpo7hYQvnM0P765Pu5T15PNmvVT5r3NOLr2akkKZbP0GNVcW2nQUPMwoGyxZVGtRX0QTBQryhq0S/ywBZZrk+bxj1dRSJdcGMwQjP39pSaQ1jScgf5/NCGBPCmgmIwrDXxK8JnXP3Gfol2pryKVCvf20RWwxb19zF857bTjfk7Q9QRN1xN0jxZPtTxUZmCKU13PLQBrMEYr1fVED64cZsJ4ZV+20NebSsYEAhbu6+wBsOh+GQqvCofwDYbgVxYn6Ho27nerQ+FwCN/o3Cdg+/xav28A5Ld2Zzmn3VzxZmu2nVmL+NH774f7+wKU55rIVAgSOfSeElA4dUB+od0Q3lhrEY9kyYsIktUxCSQF9+FkLfao0cQCs1y3yjS910qXEktVsUwwpy0MejQFE501Au4Q3kDplBMLoLuBnhMVi89yXymOuYvs+zx59pgfWLBIhwBj93S9LMH9GMBA7E3COmyUKuRF8mJIOvamFCIH1Ln8Nm847G1Y91A/l0G7OYUpJxBGsJAs1Ga0cLXUCkXIljnLBAuyjaIA3MlmkUFNmm9E0FyzJiuuf85UTPPkAYOhGg+TOyp5YItLE4RM4ArDBPWGCPFRlaEC6gCw3LE3823siuEzWZdFHba42JEk67GQwxYPm2StlrG9FhwDmLNzKhX2ta1byam4lh29+UsWh8OCbxPyA0JMgukGvriUZiOAqGvPKN2gpmVgMhFM/AAsItVyhPonIxnALuIqpejyXsoBKhEYBiXQX+pMAUrR1kQLXTS622EvEoujRahExVK6BwSax73fGghmpmmKkZbdoPko0zws2A7WSbMcGHSheY0x1uvD7IcYKn8D7dzbqBzt4p25wqqOSvvKGWmrbRdoSsXRyuhoxTi8fnh4PQHq4FWoNJma5uY7YUfyDrSDKQzXjJIWvGj4TKrv5enYPgs2cQxeGvfZc0q4WmZtKN2JEs+UWnUtNA+W7EwSlWEYpGg+mUoTWOviYAA5iJMQj+zJk4vbh1s9p5PbVro68+RrsTZ32GhUbzxDvczfbOtwOsmmcvrKEV9f15/e6F43MkI6PGmHnXvrmHtaky0oCORfyStfUL8HPIf+n+8Bz7WAlOhhzmXKLQhZtKp9Ejo+HVWlJ6NZusBhdJT4Q3ANLlZRWLYwvQa065ZDIjArHaVEGkbJBwPTHoWN5n6lQ4RdpQed/4BgniZHpLlU3oDeSxyJMA+fJJ5CuwGHKK9txEFHZc2+1gj5xTXflqMxqw0I3du55bHlla+dctMNZz70+SUX7d19ipBr4waa5ZDdKcwnyhcKZxTaTAJny520Zd7qu5dWNq4+9ebi9UtXbqzPS+5Sqnu36CNBaJgWxIADo94oovR0BAS14OnDIUjlo7KDcxLO6JOlytIrTE9b2uYbzQbydTY6IxYwGG6yTJvfL8zOcCdPb/UQjvT3m+KphM127F97B439DPvRc7pfyAxzYBtTbtLstTJr8OGCYwOut1GudwHXW4AjklRQahouWp0wW0AHCFFfQ9lPAzn+IAZy/DSQ0wRf82trk7OKc6ZkAdlaMlDbLdKkxSRsosLDEKRg9hfkuJgTPGIuCjswGp1ElIHdCiKYpJy0ePHiG26A15Fd7IFdWZeUjsYqRXVzsRKLZrwiqH2PP37szce5c3CZDaUkM3vsmWyxmOVWsmYpFaJrUPSjb/B3gfxDfO9gQO0CfNkqNVEb0bUA3E4NXcuhT49kCHSbfazJTFDRcfnRGgJRRsUCawL8GRDZSkQE2R2ksnsmASRlAWQfdwLUo49r2BU11L2ZcdTTkit3g0YZ7sd11Me2IOrsnTXU9XyBxngqowsgjHLSZeDT7ockfglaYkf34zvXgu+4hsD223TbTyOY62kEcy+oLris0IhL5WO3/h5YxUn7nk84PxHW8e3KCcOtdXDI4fqmuvl4R48Db1L3MoJ+0Z3B4EAog4kYQxmlt4q5GHq+xRCZGCf25D/dfiMmxUayVxrHozJhELSQFwDPXlTfVN8+3tGPx0vDSMPuk/ASP3W8/PijdaLtcaTIrE/YRJRMx80twPyRlTp+S2h+wRyaQ3M6zaFZTfMLLqL5BcUsYrw1hzGcK0FM3IQ6QtnVMi1Lsw3K/rbpaPXc/L/KDDle5sf/jZa1IOfHv6G/ZcIc/sTtT0H1Y6OfZoSMH+3Wx8cImmqQ6WBmMItgZUSrPUmz3dJA9cUZNDQ185yuIBiOBylK42CfXrRNSPg495XHHkPzBmcOznOcOTDnu3BbPTg+/1VbDWoUBWAWohxWbfySo2/9vcIO/hmpjSI18ONswFdmyrOoP2txRpl1SJldpehO6yn8H3HD0LNHpulo5NPhx7UUo49XKn+vHD/6FjrV2OQNi4uLdR+Rwr1NvTrdNHMRphhafx6qYoP15YW108zQfAymxNt15y+6XCammYHl0hVh3490dUXG3JEu7hYw1z3snXR/C7yTopa4yzXMcxkoe4o+u2G5r4VyaR7FBN9zqIquED38gxkVoQBAJPYrkljyuKniApCVXR4JXRRNouLtn5o4N5MYUsQjRt26Jh908+s9gYDn6F53sPhX0rGIJN495r9o2eZlyzZ3cYfdwaD7mA3e3/vGZx8kw+qb5LD6Izy3DOh270cf8s38C4wXtPQhHYOQBnuEwq7lgKAz1qQFrJokIJ2dR1hDCKvA+Kme4ekFayobJl6qtaf5VBJ5iZoYxnuv/el11//k2oUL/7G/3xI754wrOme+eP+Fm+6//9Au9o9bf3Hztlf/+77L/3tkxBzbdOmexZ/fRc/cjzrVeHxNYhaOR9e8WnTN1xBd82hEldHDJuogYojCgJG9ktcDihJG0Y4bQ8uJsYmhs6VHFWVyxMysfvUItxZguorhuX83OBkf6HkMoM0VwkbU6oU0WwgTuZBmU8m+mcRBrppz8RVXhKWFy9ctnZlYtu3Lyy//3k3bHKed5hJ8aYuTNZtPL5BdZ37za195acP8u7ZcfcVVn5t7ygPFAd545je3rbwoeLbRt6ht4Y7e3CW76vbyS/xnmGYmCmvlOqYcRGo4qxgVwAFL0QHToktIDV+11IbUsGEcOBRG01HxiaVIDAliwlCxFNJCHry4ryUWT+guSOA2XhYmKDoFSWO9RIGkzIBihrzzKLkk8m31FTQIyeH2gco7j6oHH32H7P8aefBydRP522WXSaejo/3Rd4ymb4ORaMMrb6j85tF33rkwSx68DK75n8suW9M8Hs+9D+ZSM5NmFuiYwbSJZZRUVTFrs9mlGAHLDMXSXkWHIlOKuYAFpVArsGDJHIS5lOgv8Ub4TNantmwU4uO45GuokGEuQiQzkWIOAyBjYG9dc/dkZB4Pn3/+WeEQ+Yz6gOBfMHvt7H4NoxUt62sYPZAHhEg02esxE/JTMocM/5J1yLnZF4/jtZf6AeK4/jfpeJm1EWvVcRkP+1P/GY3wC+EI+i8wqyoK42UGRPf5wObXxqvUEm0QXicYLTObIinArWtopKw+Mhm5taSJLdyhrrxHw0ku1VCaW/k64rRD/T2eP/mLWn62lpckM3OZshux8FHrEewbs1ao4z2kcFnEzUQLdUouL0xCI5VpPswJssswH1mxxNio541IsEaYSRw+zCQPH2bMZ5bQGwoCN/U96g2tfE99Dd4r7Gmk7WXtyMvqL9WDL1eoM/Xlcfv2FqCxB6isRQWtOer202gL8Ej1ZA4tgkHgT1OAKpp6cli10Y2spuWqi8l/HN1P3lYX1XIba7IeJX1ZQj+53YkZWX56F7GGNVMLSdXuMn4n/UY0e2DKzdSAfkN//aaEub2up3j1eg7MhREy6O3CnBft129ne/E32SSbHP+VBn/cEuRCoC4tnMGrKF9WmCJ3C10vIwxTmJTQNjnBrXL85N1dx9fe9HsX+SX095nCuCtKcwg2fmkXLugN30M6t9Vwpr4KQyPOwDciLNDkMNs79kN+CSKMFSrk7SljRGMZINlzNebksyg0AvWfIZPiWXk8BsMzrrSiqoV3gNdz4yYn+QYOEtwPswy4t2t8R2F1aHznphVZ1qrOd9Hj3aur8U70PhPuocUfQafh26hO49Z1GlRoUFQgO0/WzaNkgpnGLxl7/UhdCydOthdo9C1G4P7Gf53m6GLqbepb7Io/qw+RjX9m140pfyYbYQtxc330M34lfyVaMwkzKRBZkOAg2ag+9Bd2UCJjyov00rGXfISMlTRZxzEc/zT/NPXnjtDMB0cVS9YQav/UzIeAnvmwDzMfqP9CwjRZzHuYmvWQAzmBSmVcinN7iAfkrGfPHvU99YD63h0V+o+mO9QP7tlDTqaHJ8DlBB1iPC8J4XI1wGXX4MLcIPsEuGwWjGcwsMTwsGqWiLF/MnjRfHQKWFh4cRygptIqS2HS9VV/3QmmUUggcEebC8Uoj2DYpSk3lwtyIVVICSlBngzEqld37Hh15054P7hjCixttTPwPhEmcSJM7gaYPHWYHOMwOafABJwlpCZDs4l4ye5n3z1vCiS3qO+Q3c+8e54WTx2HYzozyFxEIemvKoNUF4hS9bpXG70hOtfCVSWsuWUBvmGAL4zrTbQX1pu0uN/Mt80YoMOYGtSHUYmKSgdmKpdtzjQq2r1iyUim4JDLood82DCD5hV4jYKDl3PDfL43zWGlpAf4cTKGr9zFOwUja2DNvIP3cB6fSTY4UyE/qRjc3bHmeM+cnqbsyXOTt0/lVzbAGm0WwcCxxOvy2VyElyNDSc7Snl2fzS1p8xv9+Q1qujiBPhjJHahxtEQXZDdN4vFVMdeIH3ftltxSjYd9qB1PRbcQxYgnJpwfD7H3yKgWeJwK+B1gEBUrcL4xDucHS/MCpuzV43ARWhDFZMqOQDRHi6jKtng3jQNMQ+lcNjS3o3/DUy0L4RT6N3pQcwUVYl8sns7Q4XPDniL1lxhMywn1K0Qsh9vatThePjdMCvmcFGZlQMBBBCmeT5NUDtRxONpXiOdzsAsH4VRO+l7kts9X+rZscv/gB4HnT6l84fbwBv+liyv39b5SCZy7qLL4Ev9PyeHKDfcFKxXvis/OrZy3N/rSS03337DwYv+PfjTtq5VFF/p/+AP5ogUVjV8b8+Yi4zlfnroJWM+b0yUfGn6YM0VzvrzBiclxNC/gBMlxDVkPJ0r9WnjbbRfX/p84ffNXDVcxU/NVJ+MQnIpD0wQc/JNwCHwMDoABORH0m3as++FO9bETZ/jFd6yr7lQfnwJzkw6zj7I/Xy8O1SR7QIOZFofWcu2cXgqz6NNhdjQdJ9dOJpji5aHpXb2pKVAPs9OLVz75YXXj5ic/HJiab3dFkS0Mfzj2wcCHT27eWKtXPof6KYxMkObcYThW125KrAEYm6HKMc1kxuLhsb1snLxEs5l/PuX7ep5J7ft1XxXWoIOWpH2fpqx2qQPqLNKtwfBDmKOLYI4aUU8yUC+QQHOw+Cr+UIk3NKRVIyA/JC+SA+ohrZx5bC/WFOLvfAYG4a3a7xhrv0PGfweWCcXYrxdug3ryGdIGsHSoM2u/U6PJv1K9DauowZhG0B2ccd4d//EgXnWW8g/bK7e8+vT5JuLUsGBb51zVKGuM8E2xlp/lyJScuo4nE/jzwEuMyjeT5E719Zvf2UmSN6ubbyaj+gHOjEdgF34vxsT5nfxO+nsMGLpREWxd7VdiJIUXqa+RvTeT1E71tZsVOKJu3q6+xubxx1I71Ne2Y20Nzal8gOrVcWY51dpaqkqc+rNDmVpmBWl0Cpk1qy/gwuxKm52PxrUs0DjIaTMuVyER6Nk/2W9BPGGCajrG61BNR7Fdy6zUPsjaGXzc2+eN8zN4v/fHkn8aSO/fjp+HD3ae+jNvKOQlaXgfewlkuKFO1yTTwUxjemGF6WXKKZTkPTkMjqLUhsW4h3Zm6KWdGYYA/t4e0b3favPkZ2hhdzEnRWlyDMDV15vMEKyyd8JUg02cVU7iIF6JlrN6YlgEQrNtCmHMAh/F9eRSwrEx61CqJfSfPrdHej8aSg1Z4ix7aRFzwYtczON+9Vewedf3DY4WN8u1aBZikVg9pqdS08RRu89vG3WnkyWT10Jo14DDG6Zl/hm31M3cLS/Z2tf1Ix999Cf+WVo7lB3P88uBtoEpsKVeyk1SvpDGHL9hQ8HLOvg0Gxf6fIW+xDAmEaSSMS1WzQu/NJs4aXo6c8G5X77j7c90LfrMZZ+95vrTVznPcadmF8j0eRs3ndbu402CNyrGvzI0pN51iu+u7+YHbzp7+8Dgmlx3uD/8gvrDn+xekzMbPc7CjfZVI3uTM8+6aXXWazaEArkrWlpe+iHOmUsZGz+H/w9mAXAZURZSjppbVea6SoMwFIvgNTgX2GdGH029cXtlWAl9GrBhArCCLhMmiA9f6GNTPtmXSqbSbAE0nDDn4AUjbpNLDeZ58yIjM6a3OVsc3uVrRUPEZzE7Oc7kCLT6++dsmj3LmXz0H3xSar7TvXyVIWfvOH9R2snaeBMhVlfQnZwhC47emeRbI+HpN3ZLlsTwUHjkvdSKvcXowi6Pt8Upm6yEN3qbh2ZfMvspsurirjUPGVgh+rnX7jNFzrv48VW2gabepjY54OIt6aVrW9KXYJ3695gb+Pf4HBNlZjLzmdkMLk/tVWWGlk66IKMMHlIK1dJCIEIBVL5ZFnMgaGpvyw/TPC+mZJ4hup9nxNZ0fnhkPhX6QBdjNmyIAFmMsbQhVQgbskCZNJ/Sio3yvQWj7JMLmJgwFDQ2z1t+xZYvjn5xyxXL5zUbg5MP7BZmd5+2+rqbrl55StcCKymEZvSHe5T/UdLn3dpzwQWJJR4vu77N0rZu9Yb5mcz8DavXtWE26MR9y4ahM6d3tuVOH/iMgyxMzJ0RWHQKlryvWbjuiq2zL/BvaG3FaQq0YIAWCuOjGQ0nMV9jys6aJTqSwWxQpS/47aH//M9fM1KnRXGmHYrtO4aSg/zNodi/ozhd+6xOm6dzn4u+B+h7kL630vcEvpfhbMudLXfGjWCg9SuBfiXYr7T2K4l+xdrPPG+12V2BYGsirf8jsyxwyOGccDCdVmYFCaPRGtOncySOBC64kaw6gWcSmvoBVxSSMAgsDghfJ/iCocHEverL9yZWPnb5BSnL7p89n9h0FyVqRg7PcDpIW9LXnYlN82TIxs7U7JvT9mBQSJx67hfHyS3uPLriLunc86+d7mxT3+rb4X78Eo2imXXNK5uCY4/f7UxmkzP9s9gbp93Td9csb1ubrXfT2efR/ghfBeHopvqGG3PRk9StkQKQBbSkQX2WxCaSj1/alDA4Ek3S2DbvdO/Ytv8iL5AX1Mcx4DNnzvwWviVmaDl6qMj+fKy7iIIMu4PU8rUkKnfbYVZj8ihyc0dGSVA568OOOGUfzZL0+c2d5YSvVqNa6gRO9yVguofCaJOZw7DpS1CnfL63r4DeB+qPChP0FaQSIvUZZEhcMGKfhYJoMCaLPifZtH7rerLJ6fOL6gPFoOfMN870BIvqA6KfGNu9PQ4yl6waXr9+WH1a/UdHj7fda7f9Tf3bab5ZXtG8bJlZ9M7ynUaEv9lwNa7le5sndWEowGpSzzllVjHr6tH3PJaZabkwmAUEhj5G3huz0j/ltuYLObqfXxKSdmHi5C4pVPzYfzT2xL5fuzAkHVtUS2GH9ebv2tL89JzhGv4ZxsK4QJc+ieppfhpZ9NCkGxNtL8Flx40zQmsRfLDUW8V9gt1N6yhcYKU5cBCHCPZ6QC8pcBmY+lFSkLV9WCDX/wUXvYfG9qpPEu66Hc+pT7KP7bjuITz4l0qFXf8yelBfQpXtup37x+7beb12oNFf5gZdUqsBdoEhmZvoZZoYHiNiPJasZYuNPaX+pIjZ9JgQpuXPIzcPMFqeFR3/BHBzN7OBKUfw983VspmWapgxj0/KYg5MRw7N+k6gRpr6UpPYFAMbcXCukpvQDGEZSx5LGeByDlVckDxusRSOALlkTI7TekJJXhAgoKgPG1O9WLzgdRhAlNfaMYGNahTXpPKJgfaIaAUbG/b9qaXnfuU7Xzl3acpvxPZMpItdXzlyWcvpAavV2xxv60r7RdORSsfKbRdetiKXW3HZhdtWkrVaIi9W+WG/od8y3+Q/w72BWhMno6Ms/DuygWz87dg/kd2/Q3fZ79jZSOt5zOv8D3mmVhtvJvPYOezIb9WH1D1caOwFdvbv0Amn1dPNYIqGLaDjm2AetTGoU+tOGIGq1uiB4QVNRdc2HLiE0QpIGTQoeKFjXXyZdJKuH5Cbf3HsTXLvL8gNuN9ZYQ+QJvUPtBUR1rVtVv9AmlCdBxjdMGZPwJhlAdpyDMcrkFO6gPYuJallB2Pwha8im6BsAhWpFbMXMWWxWYtegLJUkpsBpG46KskC8A7oHOj7RM8n52A7CV1R6QjRzzgur3hZNJZMuQ1OR4C7KWloEs/Eydj3CmsKuyOhjpB6EN6yNI1GnjZ2W0u3gXvS7/Y8LEpw/NhM3u6jszervYe9UqjS4WMacoOxjsPZmAHHozau2LMUl3pFInZdIfmczvRRCQulK3rB62EsXuVu0Qpatd/W8n/xt10wVvXfdtL8QYP222IGGbnBPsuRKBgW4/eIEmy1pB5suNMxP9aW1aYWOhoISQOPbacyNapVs9HOTtQzhz2cNLccb6YaH8lpTJCDr738MukgHS+/rB5CDteSyXX+hf8ZsCe3w2820+oitEctGdoSajydjIZroihxotL4T8An/VH1Fy+91JADpgCVtfqChVqGuRKsYmeFEC1RMlDu8VZpWVZTzXcXoVZQOUKbqUWwmRpWaJkjoj69J6f8NBEtc1f2YNAIhGG8JpOO+dsHIk8ZWr3sHk/C8JR6V1FLtKdDBm9kDfs7X6pbHmul3iy6ru/Wc3WtIKsKYPXQsmsGC4IVo6vUAbBladl0qcOIfs8gJTAHTDuTSGlezg9yw4YBkhATcY/PAfyMHv4US9vZ6HIzljw3GwjwjljQ9wphWd4g8BX2kbEzkhnWYnMauFXeEF/g3g5JyLzYMCDrz9rtR1hB8kXXHAF92sILnIElR449U1HftVlJs0ROVn/LraS+/mdoXgvLLAL6nwf074R1Nq9XEeVoRmskhzLVny2305zq9gTWxfVmtNZD7TnAqqtHi+H3DZCCB+yCVJIGLASjFEYbuu4ABVTQkDOE0fA0xhY1ed1XzXRet8ptdHvP9ML7quucM7eI3qag2xQuXvjQ8hv+MmOGO0get02fN9067SJyphR6msxfus3b4glKnlbiuXGp+q2nAfM2gbOGJHe71yu0/1vP0FCPEflTAp3oQf5B1Ldoqyn8S6G3uyCgwzslC7L0x2Vvdu/e3f3msj/t3/+n2vYf95EX6Mc+evrBrt8s++P+/X9c9puuB7U1uqjXRcSYNKx/NK7cdghj5lio4msD1vPWqhaId4BgRAwsbS3xpZ7v4mRBRxFnkpwkRCUunsLgZXFoq/NIOvF+aCilfrN5KJVtmubYcLe3uKsIhvOLRw7djm2ZPlxc7CfrI53FrpO3CLu6Tm5rfvlfggn1DnL1qwef/c0N6h3FxtqwJTqcm5lyM45qgnp7mRw2A4BVU8CSZ2x2YanHx2G4Yf3kaU2GEtfam2gVu9grQNSwTMZFd9nU1oUucK1et92tdMKqkkYR3kE9STmxIPYOEOQG2aNPwHr6WIZNFiIwBVPRPBcX4jDTPgn3Ioq0sb03kFEggLp3MgEOvgrIk6vpvIT1r2iQ+DUU95OYaxl0pbbSFiXtNEPbi2iXe2idfA8t9Rw5Lu7dWnJtN82o7R4E6YJFct2A/H6b2OSdSY3CplZAOQ4UEBV/f8nbA5SRB0+i3uWCSIkA0z0BMzpCaElWtLaiEdoqQY566DJHk7ijHSzmv+TB8k0ZTJVis8NBLnRYRdvFDusakl6z6eLVm7YLTU71SeExsAESnzU2OX/gcrtdaoFYeTMn8DxrsHxxrfo07eC1mLWLCYv5LaNts8Prdly7ZHSZ+rQv9XDTKWSV1BaWvCFCWM7A2UwO+/Or3tVl2rnAN2uZMI2hXEs7omiZorBeT8f6CmVGtjydioPp/Ui7IbqUYC0CbYIQ6dJqEZBxgNBeF0pAZVALsCQjWFJoa+bbKe1CrTThQomICtNf4qZj5Uiqi9KOBSFo0EiBJcCGMFvLYkpx8VgqhzI8WhATAha6CQ5DB0ElMyeeexESyuq42O6yOsjFgjf6lEl90tVk3L5pteUNZ5PxsySxSf36urstBmIAgpl5K1FbuT9W2NmjS8i1Lpdkv8xmfIu3p8SxD+xfa5PIqmK7V336FPLf7636ptVpNXMYaSGqDSmszbWNqLMaHGCx9DEzwEIpF3CuTYc5NZBRpENKAfuZldslKkJnAHlycMCFein280O/SzsGWdx9/f0lR4bmdTFY4RNma/HvVCKP6VCSmEoancSITVAKw4ZBrA7ow0nlkw2iEMUaso0UdNZuf7hNUp9eNrrkWmfCsdl32qrnfQEN8mwWkTpFNZvY9eyP1fuMnshjAlmLpLlw9SWb1qg/W20j9kt81rX3uO11GpEKutK+j4RUXwe7paLHMFjGwr1n8MO63QscM5dR8loPmH6apJ7PKp3VcictwemcDphHs1h8mtKy0mcA5p0YB7SBSl5ypgBzO1X/jBEwOWeCrJCw1mSIJLQmkZgF4CScJyqLBgc1SZN5cRBWlVTSSVCTZ12+zfak81qydHQZWeVtf9g+9iHMAMuX3yV/PUV9ytuWzXKC0e/75j2A+sKI7xI7sa7JVdOrL7pk9YU4mcha4bFmh1PdDqOuvr7d2Oz8vs/t9pGKVXCZOLv7HvYyijiL+jjMkycZB6w0M3R9xUX1Nz2/jKbvac1DXTZ0yLq1Hn2Mh1aEl0ze/npNuB42YEEFF8xEMpy159fXPVwPlb27hyRYUJ/IPeol7Jrrfr3nrD3qu3oA1EMsr7xIkqTjJV1ffRJgcsGqN123zGAK+jSYtGwGi5bKUPJi7yU35nWVLYzYr1Wpo0tLpBBhV0kKErqzC9E8QHRt450r5B4EST2oAUQB1gB6VH39xVdemkKjYZ1GYp06Wvadezz7TkRj1ubsp1aaQcIsPHfJ6tW6zk6gU4J2rSBT6QTraKUGUwORHkXLi4xOhmmpDpO3cdC0vMUGsKQJYLl0sESaHGjDdZBx9U8dyoSZ9qM4Doi0irNyHBg3oyWp6dd8HU4XczvzJebLzFZ9PDuqyvKM8oUMUXZTcDURu17rTvIg5oAx2sCuF2c5HAZPNN46uGjNNbfcese96BuwuGdZ7LHktIFTz9/ywJepEF7eIbqf903rG5y3YM06vOYL4iyzhfGuv+jWHTvvpW5Oz0Se8Bh9gtcnZNE1LIfZgg9dcF4HQaHEFmA6wn/sCGwEZRCjqX1pgtuFvkKYlcMkAko5nCkMc4VkAUPlhTSX6kvhjIcrU8aUAyYptocV4D4OnPwFXxbevD4pzRVylKTXUuJpJP2bqckYIzaf3+Rf7RvuD5nSXEe3kRg+c1U4Fuccabtjnmgeakm7si6eGNt51hQIyh6P1egytjUZbW0Oh4fnE7zBIvh9Rpcp4pbNlvb4TJvVHOmzWYXMSqfH7ewMDpucQ05pmOM8hOshHBfkLKLVLcTMXc2tD5Mp84CcEr262TwvYPXwtrApE+bdi7zzzUaPxcZdEWodjpiJILishLVa4zKbYe0mzpd0hwKh5rDLSIhg8STMJm6hJHdaHB3egNnt4cxWOSW1CCmDnTPwrXGfjeNsbqOFALWElNMqC7HLLrO1ChabyPvXENbI286qxclY/ln+VsbLMIOkQID0fbJBLoCSniLGWIY42fXRZRv+Yac6dvdR+z9cv33sKWen89K7Ol3sunNf6Tv93Dvf3vbs6fMyY0+5XJcwtAfiBuDNp/S8cM03t4LBfgO9VaVArePmDPaVAkMfphPol9OruBQmqjT+kz9U6ukf72lZzlPrLY/WG3ZGxJjQ/6Jag2CzKdpwaqJRd6JtsEIPqzatdrpS+ZdxQ+9bx9tUH0BHIHugON7fAW0ArNjS6rX0kKrWMVmzq5kSY9INd1ycDKCfCGKRe/vYIu4W9eEKv6SIBd7qQWwAwzTaFminJ5gN1INDaFVrKIeagj+G1e1aBWgyozgPKTHaddAZQwKCagJg0Ebeca0nIRaGxWlhGHYhZLO47jIlB6y4SkRzD0qNHVPrJR7Ua0fd0rQzbI12pGugvdI+gH4GIBz9Rw1jMto+oBEKSzppHTozwa7HuKgXtKNaZp47h1F2jKpr4VbMTCA0Fwk9lNgfhStgEFW4ubKzglFX7YN9Td+rYEi1gi84wLXQj2MPaCfZt7RrGL1X515+L813iYCNPsIsYX6md2x3VtFTviinBKrK3CyWBffTvgS92XIbpVnbSebOWvudpQ0pAbAk6IXrUWsndtpIaqb+cFUZdtG4yYLqvsKC2aZOpYdaGwXaB0/PfliGSjD2FbA4aFuN0jBI31L3IOg/BTAdnjM7PXxGyzoKaz25bKLWG2dfR/fgMG62aUk4SlwsZQZw4fGT43X58ekd7+KxPupPwC0ZbBGWes20/ZSghakSWkEA2Ogn6gt0cSTd0iL7lsKrpcUnr2yPXEfM2o7DCXbOghwJt6QjcKqFlE/QPug27fzvu6It6ZZvt/QYthGHw4c7lrt9odZcbqWvBW9D/aO/ZAb4bwPvLAftCvMdUlW04kCa9MGoVbFXBPZvYEopzDmY2a+0iPutzmBTD1JIcpeyOWpEGGG5yWVxVeorEIy3pjCALBDgN71/vYCNJeGwfgk26AnDwgNqZoTgN1C5jMdAwpKm4LT4lnkzp0dntafaRHJn3O9sOtVrTp8UV68X5pJrvR65Kel0tY79undh4VSzwTmtNen3ktN7hzb1BeSztpiE046NCXNZw+zpouu85XNXbTq1bb7KkEP/tKx/VrOrp6OzC3/17Mw6kY3G1SuF2eQqn0tuTeEvjsyMD89qbZXw9wp5Xtx99rmn/e0jRhgkH83ef8a6z7VGC374Mc23uILp47/Hr4cZl2eGGJTC3dSPI2QJkg+0Bq2bWIemNWCzjI5mbH0uOLV8HC4HRDVofh0gCHVHYZ0CdlRMsylYhb24jPtkMG2HWbRcY05KJ+OKl2656+zz77r5xfi62fNf2iC6Oi+fNzJ/9rr4E0PDs3xnbFx5mW3W7OEN/YtmbLk8t2DwHM712Zduvvmlz6ZPvWj+vH/+rCzPuHneSfPmX3RqumntScO+Uy89/VLb8Lz1zfM3rnrymRXnaPj1f/QBfzX/T4wf1h7G4wVAYIwJbXqfErADPoyzYKQnQKgQkC7wCSZEL80fgBHvH9kx57QzRkjTyMgOk/WCg+r1fz3LnQ4VRg6O7BBsFxwkt8J+JhyKF0Z2jJxx1iz1DyNk41mzdo7gV749ssNswu/8z1nu7umFEcKfAd+y0G9tEHtyofiFnXBkZET9wyxNrlf03oHYQSWEefA00hqgVrWbemSMWtcXGBnYd2tVGLSDBhU1Gdr+pckNyqbR4NMew1AQtZSOmlVciIpRt16ZXxk878EnvlycoYVWimio/svQ2qGhtUXuW1I2HQ6ns9Kx+SCx/8IeOPYanhia0EvdP54VE8hgozEU0wTjR6lkb6EvKxOfV0DFgYCMJpkf/wxUWmvc6XR0OEgT/WhV/3jwJ2TrTw4SuRV2nU71LSd+xNX/Ug/+7McMR1KMG+zK3zA9wKGzmfsZrGPsoPWNw9lyN089LuhJGKBOSHe17B7AY24Puhzm0AY5sNZlq7hAZl2lLtJZ5t0zMBUQDE5vZJhuuUqzgJAgOpqx5r6pWpqLTY4wu4jtV7pExYyBkG7Ybe9XBsRvMI6m1Awa61fcmDGI3nDQccU0iaf5fK+eKcjLcRAKooyV+EbMF8Sid483zAGXiQ7ioU1fSerzhnWLjB42PbIsE12/fXkxOXflYCf3kKlv0azY4IpCW3l38Utr2gJ7XWKHt1nghxb+6Yn1K0lp6TlOspwYHYFM//rC6bfNFpYt5z1dMy8YWbDYrlYdgqdr8Nzhzz9hXbpMXNe2iQ2HuvySUQCz3m0aGOt03zprfkCPCZ/H3cs/DbTdweAqBHYDqChhGk1spo3srNWyhz4QxOPQaSocUvppD/rWbNlPux/6w+bOskD9XwKjVZQ7Na8FUtKPjW/Z6SOUYk7xOWukpaMnhzsOt9IFtO3owcUNjUtGLHUNaoHlHNILaEmlSryXPkJDAEsfKJ2T4j7YFoZJrg/ntIx90ZI0QyY1bMAclOJjfq/FzGW6Nz528/cfmLOiNbHa2x6Vw395ySRJ7TPiZ0vRL0SXDGbbl6c65J9lU2tlf8EoWUSbaJ5ma2XXF3sKwYG1Z7atL1/du7g5JHX1N6/qyBWz20MDfVYHiYW/GJC5EZ4P2qx38w6j3SpaCnfNB5kD1jX/jK7LRGr9Px0ZxYbNRJAoJSsYg4qp3lQ0LppZfGdpDAXsZf2TRgFpSQUNhxzbyt2C0T1WlxFG+gwF7H7xmN4TxpgDIa1tmmhipbdaYnhgbzvNk6eeuXKIRkdDMrZAwz5LOIosbZah5dXhgwYwtc4uwxct+iNfLLSisNSE7chdoLIGstl9bpdkopVyHpRN2Gmjlo6nmERYE8DoNdFaSMUuKiIOqGaLR2nPaQz0aI2QOFFrilQAFZJ9uYIxpNEirb45p3gOOruLBFv2ICFo01c8q7U4OowNiiqVCTRx0DrDGLNHyxcsCRbsPER9koCrifpdQHK6qJO3mYpU31QCCICMUwJkgX9FJIDDReNfoRaNKB4gzr6gxWrSNLwMNt5qJICgESAWwWoD3oDVBqVmF5zzYx2mEmigho49N5kqDdRAGhTrJDlnnBoaBdgD41Q5thVLcigPLtF5xA1csqnWvxRNAnRfACEoU5TtDtrGUMSJLWcUEX1R+zwu0UQf7SLQRyV5aB4hdmSyUuzxIR20A85+huWMtEuEA6tdDTydt7o/gyLGYXBDREtL527kZRgzbUxrDA4aOiDCvQ1GDj4oosJ8HA4Chd6NmJTdtL+2G9t7YLFYleJgRd/VPg8dHTvFU6A4WDQcRMrCFAfPRBx8k3FIUOg1Bk014kBbEBfPacShSIHHP8qVuERSvtTtGgtwJmKxktERsNZqRFz6VKWwOw+VBasHlyRgUmw7Sbva+ixmfAfpq8FtNaE45YxaFUuN4LQvWO2Vk2rihNaD0da2mLrYQHTatrv++t/BawV4nRReEDAgfCx0nbC4EV6L7xPgzUlcA8x1eCsakHoz3hODW+/5qNWdd4zX7jZPLY2W6wXRzNSC7Mn1Y1jQ+PD77z2CRYwVraRRq1zU6hi1E++cVCt3HGivxdFqsMTQizkJmvhUaFBkyCAWaKklU2r24GbseCXjkyH0dJP3H0ZYsNLykfcmAFkhS9V9COkj72l1mI2QqrYjR8bjfv9reGPj8Eb/HnjlJiznrUM0Ad7ikSMatO8/PBnaIiCy9P932kY5hLU2zhNhJYePaEyAiACPzGwg7WaAlfKkwUvrC4PMIFNfjqnbBysH3FqnY1AHZNrVGESpQI2oWvaGIooKp+XYY0KEJ18HLl+DWnvUW6UGFxlFeBCuivqw+jA+BmxCIS7V814DQXeI/yoTxYwfh+YbgiWxmUakMRnC16wlQ5Q86PF34kwFwoAtF0HLuI/J9YHhZuhzF/oyoImBrsUIxtdMMknvNhjMZrPDZmWdxGE2yerPyZdZVjCbnRb+gPrhYhcreNRFXslqctrZCzyiSHjyrM1pM7uMP1d/utZTn8uUbn4Y45lMmdPpZsKabCw1CtK8DhCL3vrUtmoTuhTk9MxExSUqzVrnURjSQj6KhZDUY4VZn7R5BKUpjm8mr9Uik8OOyhlnPPoOrkxU6AAxnd/S6PctXmDZd2hQQKNsQ01AiGllVutwOumiGgTAEg22mVXz5CRR5QOT7Dl/IBxpaUWtF/SDOFYtYzWLyRyOxenRoEi9bfUi65Sge920gt9CCvMVE7RqQJ9Ny66rVVQ/uGVR8dF3yJ/JxvvI4fvUJzSWOHvh9ffWGPS6Ze88aiZr71Nt96kPTaltObVWj9NEH9Lhaaxw0apysKUEWKKBuoeq9iC053mzxeF0e7RKRrkJjhCjYLO7ROaENTqs3ljiRFU68uV7Lr98z4mLdNx4+vIGOYa+UBfofmm9C7eod3CgD3mUaBGfCfQF+nQ6NzqQfbpPsSYLzCxt7Q+rvMPK+62uY37yAnkRMxmxWyY2l3Va1Pe4FuxGjGwytiXLHOf+nZPu//fdXEshNE+4excWqauzyZnjd2cP0PDU4aNvTbj3jXBv7LtZw11boQ1aY0rQ6GxZvL1Iby/i7aUpuIMZOuHmPezqL6vzdrG3Ntz8u+qP2dW71Xn3j83I1p/fhXijz9Zfx1yqYgDRoPUi91HMffTWPrx1cDLmciHFJTxYWdoIwMaDGzez3+KO3HfwPvKjBvL/29mvbjz2JmH/8T/hjGo/HhzpE8Dhyf4doHhkQS7I1gZQth48+1UO7/Y3ck4DMYoHNx4k7wB8977HfuvoH7OaDJPxmRz8s6BJmbDOg6e2n5lWPhmr2HFOK6rHmh8zkfkH1IT6/eXsnrEN5CHOdfQV4lKvJnuq3BNj02sysUhxwyrMpQyuHkYYSCMdSHzmhiNbNor0gRI87Jmytef/gfwxUhHkpO4hWkrnNIrustkna14hTaTgcwhkWjGOOm4siXiHpCPA8ZWwd9fYnF2YKVYs7uLe9oapEDz2DBboq5tD3PkVyn/DtP+eh+bjzWJQPwQInRRCJxgVZaNzAnjh2kJtpJ2KmZIRRGDZKvv1xvh1oCSQfhSkRAHLo7hxwNR3r9mmfg4hm3v9NWTj9WriN40Qvq6+d82NAGAJTm64Xm3lnqjU5orR4KCwykycPiuxtQGYRENnBY0qQorUaeJpKIvUwTj/CfWQ+rxOoOITT9xY+z8OivohvYgS6+ir9ORNX8f3Cb1J3ZR2F9E1GWjnoLRzoEljdKHKHcRy5BJvytbJ5wQKM+OBHLpAOl3Iz9j9x5alTsAgtijxYGk5rOYlJLB2yDKRzvhATkpmTSnnaFa7RufNqo2ip4WhKw00BjsCsHqSCiPaPrhSYY6D02nHwel42EyAvxF4JSRinkcJi0LKVlsA/UOwSE5GQR8oLdZvJuMoVID6l1AcaLRfPdiIwyUVOjY6Fvj01BoOFZoPZ6acMrl2QNMQwVzR+rcdXcErev86MnqE5g4ni7RrxZib/iDGls6D33tGt6m0ztg3Y6Si5AvmsL1JSW6mD4ssWZ05fFxkyebSqSPUWuhaqSsNvRA+ugpTIlktaFUZNOPVh40NeM7p0mNAbq8kah0btZJPUDlKxAv0MyFhtXRb+KNuB/qiehHuDmDWv6Zf0h7Ro3rTaLoJBtrL7LdpRA/zcg+9TON79V72tbrsGVpdNi29ZmpOFdmKS9M+s0s2Yf9njNWYqcZusVJHYY8mHkX9ycvam1DvZ5HwYrXOeA957UmwxWxW/08bhtBGgVYL3W4Nqu8GEuwB2h4ba2Bq75t/oJ5Ee2D8czGUj/qNBvUK2o9vZcQjXinOjTT2Nl7C5DBDhkYjbTklVy2zVgfau22Zsr85gZXmKXxWwniyaxsmuxpbaFPjaB4hp8/2kbAHLZenSX7APjRwiksPboc51OqdBCi8OEAOBxaTUZrJmw0E1M2LA6otsFjdXDsy3ZYkd6pbkrbp04nBLDm4a3wBwk6Hw+oWcmf98LHb8bAe29RsJz/TzLSAnZxmskzZr2sKvgz1mdNSH7cX3UCZjNb4yO2iLBVoplqcOMVKKuQS2K+5bsNHZSkB6KSiJJ+QtCxz0E4PotE0WrkAdJl1RfWOYq24AQswUxfQY6hQaVdrBs3YnMrZ6qFi3dwfrZx9dqU4Nu+RWx+BcXExLv4h/iF8RrA7zMlhLjeT9GHBJxAwTVKFYYLpw07iIpHhe847/6f3Xx+JPCIKnu94el1bdh47d4todHze0e1+mPt95x13HTzv/HuGouRhd9pxu4MXt5x7bOcWscf7oscoPjwxtx/Xt4zeXwmf45qheXsnZUoj9AEvTWhfZmCCtYn7ku3ZWZRomJpQIPneYS6LzCvp9VE0K8Hrm0mGyRDpa5ElL3aIBo0/zcdjDt5JJAe5mPUlV25emfQRQi52SChkvOGQ9/ve0A4yvINuGIPFra9vO/2xq4ozu8zm7EFvzkEyWd7eEpC8Tc0WS1b9qSPnxXZ47JNSgI/yMekev/8eKQabAaliCpzU0y5F29qiVkt9/mIecKAefycTO/dGpUQ0hT1dJa2LPX2JMn16x0fcN26gj+PQus5Xdh2hT6TGf+rmou5zqN3DTDvatOoRdm+OSjvLIepN1vpUaQuB9gSReuO/WoubXH2riKkGtEKIfhT1Hc0cr6VwsAc0rqImJj5LSu+ph70UsGpsge5PcNXtnq4Gf4Ko+RPw+X2iiz4DoCXe1qF1I6D7wZZkW7tW5DmpjR6G2jzoPMxpXf0NOXQogjqBfeiVrewBrLccm7NVoZ2TKMNjLyqgm/6UM3IYr1Bt8I7VGns1IUa930XNoff/Ek6BT4cTXTI0NiAfj5P+oIETYlShDj/69II6RvwEfJpAW5szBZvWqdgkdGz2eaXmUB2Xfd5gc+xjRgcYGEaH6J8nHBXqXKlo5tdEDCjkFH4qKibA7oO5NBX24FTYm8Zhl/3jsEs+vc/FcWE3iJ5uclyIdSk7EVT14V14eNeuqTwjU645dRxSL40LxbPYojFBH/Wjw97WALu3nvGPtVnRKrYubyW15zbomGnPATou/PTp0xiH7iQ8LuugxB0HG6Tx9va+/uR24ulr3749eZxpgXGQ1dvXrt2+GltmTZ4PcVrvOnkUOqaOQmfDHI+2pibMh1iy7e+d43Ea24l/3Ay/u4jRg8rHznD0fzPGCbhoVU8pZskUbNqmYtOuY/O8Vwo2hyOxRB2f573+YFO4pTX58RjFsdZV/gR8iufixD4BMqM0/7uODOrDE/AJ0fy1Tmb3OD7hTCnWDlpVhLIfNReQG5OUCVPZ40mzMBYQZHUG1MoE9wXkZhOtCwvi88aQH2P1fu+YzdJeVdpdNCkrgxn24wKRKTVhURho0V6s0zg+eWQYaz1OBySK0kgGhoqOS6Jziuf8K52TlSnyr0LHGhdIKiRpCGly35kQ1lZovrkQ9YIGaMhSp0N40mMdEeO6h46aUl7gX4vDw9GH/Smi+JzZybvlJsoMwRBWWdhdjFd/rJrUr/jc+4w2kZy4vU6+EKW2Q/REzrvQuJJ34qc70gVBy/3j+b06ri2gE+ypYRvNgGaAiYtNmQYBlJiEcAucz5ZbaIlOSxgszBYXOoWVQBarUeQsPtdUHHfEtnhpSh11VmKTLh8+WHaf2enmKUFiUZ0gYf05yrI/glan1ECUxiy6OlGAJ6hChM/uwdXxBKQJ4PxGnah4YtJ8GQ0W7R/W6n7w0YP8i/xJ9NkKl9MMN+pdVuyYqWLSqryjDWYWNtLVah4FzfkTw8A0PmtFkrFffymMqqobDJSSFZ9m4IxgfAQfdLqPsWhPXbaL+6xOSXsyIEclM4g2FNTxmECzMCSv7CBEi2A7Llv+Bhm96Zonnrgm3dX13CVf+iU7sobMoBY3eX/F5cgHT3/wlGPj1b94IGBzbFLv0x8H2YAb+vzDDHXrhw+h7kcbF4cBZjFo0BxWFA4zweSsiWBoyRMAhYl8lXzxzGsngqE5LygcX1UvDn6leM3TUyDBNYPouboXg33BAIMLoOhGSY5g01CSQ8OMnAlmmfrBE/gfvoSfld3d3bup92Cpuq9W73ot/E6B3w1rDuPx+mSsTMllCyL8oKg3eaI4pHQMfBJmw13bn+EvWDS9C++S7lt0gTk7cP0pwS+eeeUjrMO86AL2QH695PItuiCs/qi7m2TDFyzyR1rOGzr1s8ZTLnvkSt7Jsxcw/w8un4kSeNpjYGRgYGBkcFz6/1NPPL/NVwZ5lg1AEYbzPJx6MPq/1f85rHdZJYBcDgYmkCgAaDML2XjaY2BkYGCV+N8CJq3+XWa9ywAUQQHzAYk7Bkt42mPcwaDBsoGBAQmnwNhMPQwMrBIImnETELsxMDDchOLFQD4LkPaA0CA5qP4TjF9A7P+fIGb9/ww1kw+IxSFq/u+AYBS7YVgWiLOgasURehikoDQjlGYBmjEHqocRwgezWdD0ofgLB4aZeQJJzBQh9n8rkFbErvf/bKh+mNgUKL8Ui3qY+R1Q9glUOxl1oHbuBLIFgDQzDgzzJwuSv0H4DBBnIPGVoOEA4+cD3XsYiudjCRdQ3DwC0m5A2gpICyHCh1EPzc9eQCyKpJcDKp4IxExAzAoVZ0XCDCxHIPYwgMH/GwwBDJYMJ4DpRx0oxoQCEeAmmGRBEhFnQAUpYBMFIKz/c1AhSOf/T/8/AeUqAVIarnx42mNgYNCCwjSGJfggowGjB2MAYwvjKsZzjP+YzJhmMJ1hesesw+zD/IWliDWFjY9Nic2F7RG7D/sG9hccUzgNOBM4p3BxcblwdXC94w7jnsD9jMeOZwOvDG8Z7yo+K74Evi6+O/w3BHwEOgSuCfIJqglOERIRShC6JSwm3CfCI5IksktUTXSSWJLYLXEf8TbxFxIWEk0S+yR1JGdI/pHykqqR2iZ1TeqJtIi0gbSfdJv0NukH0l9k+GSiZJbIvJM1kj0kJyDXJfdG3k1+gfwB+UcKbApaCm4KeQoTFD4pZikeUXJSOqFcp7xORURlksozVRHVDtU5qptU36lFqXWo7VN7oc6nnqV+TsNCI0Vjh6aZ5hWtPK032hnam7R/6bjozNDdp/tML01vkt4vfSsDCYNthmqGdYaXjDiMdhgnGE8wkTJZZMpimma6z0zMLMZsizmXeYL5GvM/FgEWWywlLCMsp1lesZKwirNqs7pmrWNdYn3PxsEmw+aOrYvtCjsBOw+7PXbv7A3sZzkwOSQ4bHFUcuxw/ODU5PTDucP5m4uNS4LLPABRwojtAAABAAAA2wCbABEAAAAAAAIAAQACABYAAAEAAQEAAAAAeNqtUs1OwkAYnBY0Eo0aSTj34MGLDSAiwsl4EP+JRtGjVCiVQomtVBKfwmfw4sWDR59A38On8GCcXRYkyMEYaXZ39ut8s7NTAMzhBRrEL44FzhFo0RjXK+56WMMS7hTWMYsHhSPYw7PCUeTwqfAEbrWswpPIak8KTyGhvSscI/5QeBqL+rzCM8QZhePEZwq/IqH3Pbwhqd+HYWjabrdddyyv5ZuW18QmPLTRxTUc2KgjgIFHjjSSSGGFqMK3BnZwgRbXXfI7xILfgMnKBlw+xpCCL3dVrlWuHc6XZG7x5ucooYhtnnqIAxyTV6SWixqHQ32bPUfk27hhRZySYmdSeinghKeX2VcYq/VTaXlE67cOjJG+U3kPn+89mcGwp5LU6O2+q3UyA1iS3xl0mFjjXECTqg1qCk6NVXFyhYmbWJUjx9zTWP/jLcd/qfHVUD4mu11+5TZ9O8q1z6pAzX/jlOmyQueiGgwy2VeZ9v2lmZHIM4e8zDLPLDKD/2PmC43JiIUAAHjabdVV15RlAEbh2YBggd3drXO/89bYCPPZ3d0CioAoKnZ3d3d3YXd3x4E/wp+g+M32zPfkXjNrZj/PwTVrOmM6o8/fCzpF5/+ePzsdxjC2M7YzsTOJcSzCeCawKIuxOEuwJBOZxFIszTIs2/mL5VieFViRlViZVViV1VidNViTtVibdViX9VifDdiQjdiYTdiUzdicLdiSregSCnqUVNQ0tPTZmm3Ylu3Ynh3YkcnsxBSmMmCEndmFXdmN3dmDPdmLvdmHfdmP/TmAAzmIgzmEQzmMwzmCIzmKozmGYzmO4zmBEzmJaUxnBidzCjM5lVnMZg6nMZfTOYN5nMlZnM18zuFczuN8LuBCLuJiLuFSLuNyruBKruJqruFaruN6buBGbuJmbuFWbuN27uBO7uJu7uFe7uN+HuBBHuJhHuFRHuNxnuBJnuJpnuFZnuN5XuBFXuJlXuFVXmMBr/MGb/IWb/MO7/Ie7/MBH/IRH/MJn/IZn/MFX/IVX/MN3/Id3/MDP/ITP/MLv/Ibv/PH+Gkz58+ZngnzZs3odrtThzu5++8WC99w4xZuzy3dyq3dxm3dvjt5uMXIcKuRcYN5c2ePvqhGpoxu7WGNX2q6ox8eeImBlxh4iYGHDzx84OEDDx94+KCbrmsndmInpWsv9mIv9mKvsFfYK+wV9gp7hb3CXmGvsFfY69nr2evZ69nr2evZ69nr2evZ69kr7ZX2SnulvdJeaa+0V9or7ZX2KnuVvcpeZa+yV9mr7FX2KnuVvdpebae2U9up7dR2aju1ndpOY6fxXo29xl5jr7HX2GvsNfYae6291l5rr7XX2mvttfZae6291l7fXt9e317fXt9e317fXn/Yi+6j++g+wx/fwq3c2v3ve607vEf0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H91H99F9dB/dR/fRfXQf3Uf30X10H92ntqf/6D/6j/6j/+g/+o/+o//oP/qP/qP/6D/6j/6j/+g/+o/+o//oP/qP/qP/6D/6j/6j/+g/+o/+o//oP/+579vpDzsL/z3+AcxdM0C4Af+FsAGNAEuwCFBYsQEBjlmxRgYrWCGwEFlLsBRSWCGwgFkdsAYrXFhZsBQrAAAAAVLmWK4AAA=="

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	exports.escape = function escape(html){
	  var result = String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;');
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str =  str || __webpack_require__(102).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {



/***/ }
/******/ ])