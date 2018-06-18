/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(12);

var _home2 = _interopRequireDefault(_home);

var _item = __webpack_require__(14);

var _item2 = _interopRequireDefault(_item);

var _api = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var routes = [{
  path: '/',
  exact: true,
  component: _home2.default
}, {
  path: '/popular/:id',
  component: _item2.default,
  fetchInitialData: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _api.fetchPopularRepos)(path.split('/').pop());

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function fetchInitialData() {
      return _ref.apply(this, arguments);
    };
  }()
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(7);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(13);

var _index = __webpack_require__(21);

var _index2 = _interopRequireDefault(_index);

var _serializeJavascript = __webpack_require__(9);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static("public"));

app.get("*", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var activeRoute, data, markup;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            activeRoute = _routes2.default.find(function (route) {
              return (0, _reactRouterDom.matchPath)(req.url, route);
            }) || {};

            if (!activeRoute.fetchInitialData) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return activeRoute.fetchInitialData(req.path);

          case 4:
            _context.t0 = _context.sent;
            _context.next = 8;
            break;

          case 7:
            _context.t0 = {};

          case 8:
            data = _context.t0;
            markup = (0, _server.renderToString)(_react2.default.createElement(
              _reactRedux.Provider,
              { store: _index2.default },
              _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: { data: data } },
                _react2.default.createElement(_app2.default, null)
              )
            ));


            res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR with RR</title>\n        <script src=\"/bundle.js\" defer></script>\n        <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n      </head>\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n    </html>\n  ");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(4000, function () {
  console.log("Server is listening on port: 4000");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

__webpack_require__(11);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(1);

var _navbar = __webpack_require__(18);

var _navbar2 = _interopRequireDefault(_navbar);

var _noMatch = __webpack_require__(19);

var _noMatch2 = _interopRequireDefault(_noMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navbar2.default, null),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                Component = _ref.component,
                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

            return _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {
                return _react2.default.createElement(Component, _extends({}, props, rest));
              } });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_noMatch2.default, props);
            } })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getRepo = __webpack_require__(15);

var _reactRedux = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      repos: (0, _getRepo.getRepo)(_this.props),
      loading: false,
      isMounted: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          repos = _state.repos;


      if (loading === true) {
        return _react2.default.createElement(
          'p',
          null,
          'LOADING2'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        'Home'
      );
    }
  }]);

  return Home;
}(_react.Component);

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getRepo = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = {
      repos: (0, _getRepo.getRepo)(_this.props),
      loading: false,
      isMounted: false
    };

    _this.fetchRepos = _this.fetchRepos.bind(_this);
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state.isMounted = true;
                console.log('component did mount', this.state.repos);
                _context.next = 4;
                return this.fetchRepos(this.props.match.params.id);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.isMounted = false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchRepos(this.props.match.params.id);
      }
    }
  }, {
    key: 'fetchRepos',
    value: function fetchRepos(lang) {
      var _this2 = this;

      console.log('fetching repos');
      this.setState(function () {
        return {
          loading: true
        };
      });

      this.props.fetchInitialData(lang).then(function (repos) {
        return _this2.setState(function () {
          return {
            repos: repos,
            loading: false
          };
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          repos = _state.repos;


      if (loading === true) {
        return _react2.default.createElement(
          'p',
          null,
          'LOADING2'
        );
      }

      return _react2.default.createElement(
        'ul',
        { style: { display: 'flex', flexWrap: 'wrap' } },
        repos.length && repos.map(function (_ref2) {
          var name = _ref2.name,
              owner = _ref2.owner,
              stargazers_count = _ref2.stargazers_count,
              html_url = _ref2.html_url;
          return _react2.default.createElement(
            'li',
            { key: name, style: { margin: 30 } },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: html_url },
                  name
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                '@',
                owner.login
              ),
              _react2.default.createElement(
                'li',
                null,
                stargazers_count,
                ' stars'
              )
            )
          );
        })
      );
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRepo = exports.getRepo = function getRepo(props) {
  if (false) {
    return window.__INITIAL_DATA__;
    //delete window.__INITIAL_DATA__
  } else {
    return props.staticContext.data;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPopularRepos = undefined;

var _isomorphicFetch = __webpack_require__(17);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchPopularRepos = exports.fetchPopularRepos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
    var encodedURI;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
            _context.next = 3;
            return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
              return data.json();
            }).then(function (repos) {
              return repos.items;
            }).catch(function (error) {
              console.warn(error);
              return null;
            });

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function fetchPopularRepos() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var languages = [{
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript'
  }, {
    name: 'Ruby',
    param: 'ruby'
  }, {
    name: 'Python',
    param: 'python'
  }, {
    name: 'Java',
    param: 'java'
  }];

  return _react2.default.createElement(
    'ul',
    null,
    languages.map(function (_ref) {
      var name = _ref.name,
          param = _ref.param;
      return _react2.default.createElement(
        'li',
        { key: param },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { activeStyle: { fontWeight: 'bold' }, to: '/popular/' + param },
          name
        ),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { activeStyle: { fontWeight: 'bold' }, to: '/' },
          'Home'
        )
      );
    })
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
  return _react2.default.createElement(
    'div',
    null,
    'Four Oh Four'
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(20);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

var _reduxDevtoolsExtension = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.reducers, {}, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));

exports.default = store;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(20);

var _users = __webpack_require__(24);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = {
  users: _users2.default
};

var reducers = exports.reducers = (0, _redux.combineReducers)(allReducers);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { value: [], loading: false, error: false };
  var action = arguments[1];

  switch (action.type) {
    case 'LOADING':
      state = _extends({}, state, { loading: true, error: false });
      return state;
    case 'USER_AUTHENTICATED':
      state = _extends({}, state, {
        value: { user: action.user },
        loading: false,
        error: false
      });
      return state;
    case 'USER_LOGOUT':
      state = _extends({}, state, { loading: false, error: false, value: [] });
      return state;
    case 'USER_ERROR':
      state = _extends({}, state, { loading: false, error: action });
      return state;
    default:
      return state;
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })
/******/ ]);