if (typeof window === "object") {
            window.__CSS_CHUNKS__ = {"index":"/public/index.aaa6b.css","lib/bootstrap":"/public/lib/bootstrap.bebe3.css","news/84b977732d09ee02fc2bdf57ee84ca8a2b7a36e0":"/public/news/84b977732d09ee02fc2bdf57ee84ca8a2b7a36e0.8807d.css","cases":"/public/cases.d41d8.css","error":"/public/error.d41d8.css"};
        }webpackJsonp([2],{

/***/ 11:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAATCAYAAADWOo4fAAAAAXNSR0IArs4c6QAAAWlJREFUSA1jYBikQMPAwoEYpzERo2gg1Pz/y7BKQ88inpDdg9YDDIzMtv///6/X1LVoBtKMuDyCUwKXBnqKGxs7iHz99X0zw3/GB4qyggnbt2//iW7/4I0BoEvPnj3wRlFGyOE/AwPj/Sfv9oM8hO6BIcEHJSFNHYsWDV2L++p61upDwtHYHKmpZxmnrmvxCrmEYsamcLCKvXn55KKolMxpUAklKiHzCsQf1JkYV0CCk9H/P9uZ/jMuY1TXMQfmkaELhmQM6OnZKf76/2sjMNgvD+piFFu6AFZsLj///zrJyMA488blE9HY1AxaMQ0d82JgUfpCS8/aFuZIFhhjMNOWlpac77/8nwN0owYbI4fJpUsHnsDcO+iTkKahlfy7z/+OAUuafxLCHNbIjod5YtDSoAoLlGSAFVjBoHUkLoep65nnA2vdl+r61o641IDEB28e+MeQyMTKZHb9/NGH+DwwaOVAGZcYxwEAdgFpy4cCwMoAAAAASUVORK5CYII="

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'INDEX';

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/banner1.67ada.png";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/banner2.96f2a.png";

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactRedux = __webpack_require__(15);

var _GetData = __webpack_require__(7);

var _GetData2 = _interopRequireDefault(_GetData);

var _Action = __webpack_require__(8);

var _Action2 = _interopRequireDefault(_Action);

var _ID = __webpack_require__(164);

var _ID2 = _interopRequireDefault(_ID);

var _store = __webpack_require__(217);

var _store2 = _interopRequireDefault(_store);

var _Container = __webpack_require__(219);

var _Container2 = _interopRequireDefault(_Container);

__webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = (0, _reactRedux.connect)(function (state) {
    return {
        state: state[_ID2.default]
    };
}, (0, _Action2.default)(_ID2.default))((0, _GetData2.default)({
    id: _ID2.default,
    component: _Container2.default,
    stop: true
}));

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(Index, null)
), document.getElementById('layout-main'));

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reducer = __webpack_require__(218);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)(_reducer2.default));

exports.default = store;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ID = __webpack_require__(164);

var _ID2 = _interopRequireDefault(_ID);

var _DB = __webpack_require__(9);

var _DB2 = _interopRequireDefault(_DB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = {};
reducer[_ID2.default] = (0, _DB2.default)(_ID2.default);

exports.default = reducer;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselOther = function (_Component) {
    _inherits(CarouselOther, _Component);

    function CarouselOther() {
        _classCallCheck(this, CarouselOther);

        return _possibleConstructorReturn(this, (CarouselOther.__proto__ || Object.getPrototypeOf(CarouselOther)).apply(this, arguments));
    }

    _createClass(CarouselOther, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "carousel-other", className: "carousel slide", "data-ride": "carousel", "data-interval": "50000" },
                _react2.default.createElement(
                    "ol",
                    { className: "carousel-indicators" },
                    _react2.default.createElement("li", { "data-target": "#carousel-other", "data-slide-to": "0", className: "active" }),
                    _react2.default.createElement("li", { "data-target": "#carousel-other", "data-slide-to": "1" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "carousel-inner", role: "listbox" },
                    _react2.default.createElement(
                        "div",
                        { className: "item active", style: { backgroundImage: "url(" + __webpack_require__(165) + ")" } },
                        _react2.default.createElement("div", { className: "carousel-caption" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item", style: { backgroundImage: "url(" + __webpack_require__(166) + ")" } },
                        _react2.default.createElement("div", { className: "carousel-caption" })
                    )
                ),
                _react2.default.createElement(
                    "a",
                    { className: "left carousel-control", href: "#carousel-other", role: "button", "data-slide": "prev" },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true" }),
                    _react2.default.createElement(
                        "span",
                        { className: "sr-only" },
                        "Previous"
                    )
                ),
                _react2.default.createElement(
                    "a",
                    { className: "right carousel-control", href: "#carousel-other", role: "button", "data-slide": "next" },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true" }),
                    _react2.default.createElement(
                        "span",
                        { className: "sr-only" },
                        "Next"
                    )
                )
            );
        }
    }]);

    return CarouselOther;
}(_react.Component);

var Carousel = function (_Component2) {
    _inherits(Carousel, _Component2);

    function Carousel() {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
    }

    _createClass(Carousel, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "carousel-generic", className: "carousel slide", "data-ride": "carousel", "data-interval": "50000" },
                _react2.default.createElement(
                    "ol",
                    { className: "carousel-indicators" },
                    _react2.default.createElement("li", { "data-target": "#carousel-generic", "data-slide-to": "0", className: "active" }),
                    _react2.default.createElement("li", { "data-target": "#carousel-generic", "data-slide-to": "1" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "carousel-inner", role: "listbox" },
                    _react2.default.createElement(
                        "div",
                        { className: "item active", style: { backgroundColor: '#0b131f', backgroundImage: "url(" + __webpack_require__(165) + ")" } },
                        _react2.default.createElement(
                            "div",
                            { className: "carousel-caption banner1" },
                            _react2.default.createElement(
                                "div",
                                { className: "container" },
                                _react2.default.createElement("img", { className: "font", src: __webpack_require__(220), alt: "font" }),
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:void(0)" },
                                    "\u67E5\u770B\u6848\u4F8B",
                                    _react2.default.createElement("img", { src: __webpack_require__(23), width: "48" })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item", style: { backgroundColor: '#c6c6c6', backgroundImage: "url(" + __webpack_require__(166) + ")" } },
                        _react2.default.createElement(
                            "div",
                            { className: "carousel-caption banner2" },
                            _react2.default.createElement(
                                "div",
                                { className: "container" },
                                _react2.default.createElement("img", { className: "font", src: __webpack_require__(221), alt: "font" }),
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:void(0)" },
                                    "\u67E5\u770B\u6848\u4F8B",
                                    _react2.default.createElement("img", { src: __webpack_require__(11), width: "48" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Carousel;
}(_react.Component);

var Container = function (_Component3) {
    _inherits(Container, _Component3);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(Carousel, null),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "equal-table desc1" },
                        _react2.default.createElement(
                            "div",
                            { className: "equal-table-cell item" },
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "\u56FD\u5185\u5BA2\u6237\u89E3\u51B3\u65B9\u6848"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "\u9488\u5BF9138\u4E2A\u6700\u6709\u4EF7\u503C\u7684\u4E09\u7EBF\u57CE\u5E02\uFF0C\u4EE5\u7535\u68AF\u5A92\u4F53\u8D44\u6E90\u4E3A\u4F9D\u6258\u7684\u8425\u9500\u89E3\u51B3\u65B9\u6848"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "equal-table-cell item" },
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "\u8425\u9500\u4E0B\u6C89\u89E3\u51B3\u65B9\u6848"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "\u9488\u5BF9\u56FD\u5185\u4F01\u4E1A\u6709\u8425\u9500\u4E0B\u6C89\u9700\u6C42\u7684\u5BA2\u6237\uFF0C\u63D0\u4F9B\u8BE6\u7EC6\u7684\u6570\u636E\u8C03\u7814\u4E0E\u5206\u6790\u670D\u52A1"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "equal-table-cell item" },
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "\u51FA\u6D77\u5BA2\u6237\u89E3\u51B3\u65B9\u6848"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "\u9488\u5BF9\u56FD\u5185\u6709\u51FA\u6D77\u9700\u6C42\u7684\u5927\u5BA2\u6237\uFF0C\u63D0\u4F9B\u6D77\u5916\u5E02\u573A\u843D\u5730\u8425\u9500\u89E3\u51B3\u65B9\u6848"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row desc2" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-xs-12 col-md-6 left" },
                            _react2.default.createElement(
                                "div",
                                { className: "item" },
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "\u68AF\u7535\u4F20\u5A92\u8986\u76D6\u5168\u56FD\u6700\u6709\u4EF7\u503C\u7684138\u4E2A\u6838\u5FC3\u4E09\u7EBF\u57CE\u5E02"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "60\u4E07\u5A92\u4F53\u8D44\u6E90\u54C1\u724C\u8FC5\u901F\u5360\u9886\u4E09\u7EBF\u57CE\u5E02\u6838\u5FC3\u6D88\u8D39\u4EBA\u7FA4"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:void(0)" },
                                    "\u4E86\u89E3\u66F4\u591A",
                                    _react2.default.createElement("img", { src: __webpack_require__(23), width: "48" })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-xs-12 col-md-6 right" },
                            _react2.default.createElement(
                                "div",
                                { className: "item" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "image-box" },
                                    _react2.default.createElement("img", { src: __webpack_require__(222), alt: "\u54C1\u724C\u89E3\u8BFB" })
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { href: "javacript:void(0)" },
                                    "\u54C1\u724C\u89E3\u8BFB"
                                ),
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "\u68AF\u7535\u4F20\u5A92\u662F\u8986\u76D6\u4E09\u7EBF\u57CE\u5E02\u4E24\u4EBF\u4EBA\u6B21\u7684\u7535\u68AF\u5A92\u4F53\u5E73\u53F0"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "\u662F\u4F01\u4E1A\u83B7\u53D6\u5BA2\u6237\u7684\u6700\u4F18\u6E20\u9053\uFF0C\u662F\u54C1\u724C\u4E0B\u6C89\u670D\u52A1\u7684\u521B\u65B0\u8005"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "desc3" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "p",
                            null,
                            "\u5E7F\u544A\u5E02\u573A\u590D\u76D8\u53CA\u5C55\u671B\uFF1A"
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            "\u4ECE\u5A92\u4F53\u6BD4\u8F83\u89D2\u5EA6\u518D\u8BBA\u7535\u68AF\u5A92\u4F53\u4EF7\u503C"
                        ),
                        _react2.default.createElement(
                            "a",
                            { href: "javacript:void(0)" },
                            "\u4E86\u89E3\u66F4\u591A",
                            _react2.default.createElement("img", { src: __webpack_require__(23) })
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        _react2.default.createElement(
                            "a",
                            { href: "JavaScript:void(0)" },
                            "\u67E5\u770B\u5168\u90E8",
                            _react2.default.createElement("img", { src: __webpack_require__(24), width: "9" })
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "\u4F1A\u8BAE\u6D3B\u52A8"
                        )
                    ),
                    _react2.default.createElement(CarouselOther, null),
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        _react2.default.createElement(
                            "a",
                            { href: "JavaScript:void(0)" },
                            "\u67E5\u770B\u5168\u90E8",
                            _react2.default.createElement("img", { src: __webpack_require__(24), width: "9" })
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "\u6210\u529F\u6545\u4E8B"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row desc4" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-4" },
                            _react2.default.createElement(
                                "div",
                                { className: "image-box box1" },
                                _react2.default.createElement("img", { src: __webpack_require__(223), alt: "\u6210\u529F\u6545\u4E8B1" }),
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    _react2.default.createElement(
                                        "div",
                                        { className: "title" },
                                        "\u6210\u529F\u6545\u4E8B"
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u201C\u4E91\u95EA\u4ED8\u201DAPP\u65E5\u5747\u4E8C\u7EF4\u7801\u4EA4\u6613\u91CF\u5FEB\u901F\u589E\u957F\u8FD1\u4E5D\u6210"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascrpit:void(0)" },
                                        "\u66F4\u591A",
                                        _react2.default.createElement("img", { src: __webpack_require__(11), width: "38" })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-4" },
                            _react2.default.createElement(
                                "div",
                                { className: "image-box box2" },
                                _react2.default.createElement("img", { src: __webpack_require__(224), alt: "\u6210\u529F\u6545\u4E8B2" }),
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    _react2.default.createElement(
                                        "div",
                                        { className: "title" },
                                        "\u6210\u529F\u6545\u4E8B"
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u519C\u884C\u624B\u673A\u94F6\u884C\u5BA2\u6237\u6570\u91CF\u5927\u5E45\u589E\u957F"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascrpit:void(0)" },
                                        "\u66F4\u591A",
                                        _react2.default.createElement("img", { src: __webpack_require__(11), width: "38" })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-4" },
                            _react2.default.createElement(
                                "div",
                                { className: "image-box box3" },
                                _react2.default.createElement("img", { src: __webpack_require__(225), alt: "\u6210\u529F\u6545\u4E8B3" }),
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    _react2.default.createElement(
                                        "div",
                                        { className: "title" },
                                        "\u6210\u529F\u6545\u4E8B"
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u96EA\u82B1\u52C7\u95EF\u5929\u6DAFsuperX \u5F15\u7206\u4ECA\u590F\u5564\u9152\u5E02\u573A"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascrpit:void(0)" },
                                        "\u66F4\u591A",
                                        _react2.default.createElement("img", { src: __webpack_require__(11), width: "38" })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        _react2.default.createElement(
                            "a",
                            { href: "JavaScript:void(0)" },
                            "\u67E5\u770B\u5168\u90E8",
                            _react2.default.createElement("img", { src: __webpack_require__(24), width: "9" })
                        ),
                        _react2.default.createElement(
                            "h3",
                            null,
                            "\u8FD1\u671F\u65B0\u95FB"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row desc5" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-4" },
                            _react2.default.createElement(
                                "div",
                                { className: "image-box box1" },
                                _react2.default.createElement("img", { src: __webpack_require__(226), alt: "\u65B0\u95FB1" }),
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    _react2.default.createElement(
                                        "div",
                                        { className: "title" },
                                        "\u65B0\u95FB  |  2018\u5E747\u67082\u65E5"
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        "\u68AF\u7535\u4F20\u5A92\u767E\u4F01\u767E\u57CE\u8BA1\u5212\uFF0C\u52A9\u529B100\u5BB6\u4F01\u4E1A\u62A2\u5360\u4E09\u7EBF\u57CE\u5E02\u8425\u9500\u7EA2\u5229\uFF0C\u6301\u7EED\u4E3A\u5BA2\u6237\u521B\u9020\u4EF7\u503C"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascrpit:void(0)" },
                                        "\u66F4\u591A",
                                        _react2.default.createElement("img", { src: __webpack_require__(11), width: "38" })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-8" },
                            _react2.default.createElement(
                                "a",
                                { className: "item", href: "javascript:void(0)" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "note" },
                                    "\u65B0\u95FB  |  2018\u5E746\u670825\u65E5"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "main" },
                                    "\u68AF\u7535\u4F20\u5A92\u4E0E\u96EA\u82B1\u5564\u9152\u8FBE\u6210\u6218\u7565\u5408\u4F5C"
                                )
                            ),
                            _react2.default.createElement(
                                "a",
                                { className: "item", href: "javascript:void(0)" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "note" },
                                    "\u65B0\u95FB  |  2018\u5E745\u670816\u65E5"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "main" },
                                    "\u68AF\u7535\u4F20\u5A92\u4E0E\u84DD\u6708\u4EAE\u8FBE\u6210\u6218\u7565\u5408\u4F5C"
                                )
                            ),
                            _react2.default.createElement(
                                "a",
                                { className: "item", href: "javascript:void(0)" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "note" },
                                    "\u65B0\u95FB  |  2018\u5E744\u670820\u65E5"
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "main" },
                                    "\u68AF\u7535\u4F20\u5A92\u4E0E\u674E\u5965\u8D1D\u7EB3\u5E7F\u544A\u516C\u53F8\u4E3E\u884C\u4F1A\u8C08"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Container;
}(_react.Component);

exports.default = Container;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/banner1字.b0bdb.png";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/banner2字.2384d.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/品牌解读.dcda9.png";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/成功故事1.e90ad.png";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/成功故事2.12c5b.png";

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/成功故事3.09ca3.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index/images/新闻1.2185d.png";

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(10)
// removed by extract-text-webpack-plugin
if (false) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1532571116501
		require("../../node_modules/extract-css-chunks-webpack-plugin/hotModuleReplacement.js")("/public/", "%%extracted-file%%");
	}
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAATCAYAAADWOo4fAAAAAXNSR0IArs4c6QAAAOxJREFUSA3VlTEKwjAUhhsX6d5REKceQoQInkMP4KDgEfQq6uzk6KZTQXDXxUHFMxi/Jx06FOyY/8HHCyGF7zUvSZJEGiEEH6laMy0KeMGk2eoIVyGfwxWW4CJU/K+EeAYn2EK77otW3WQsc865Ny4ebAcOFJGR9QJxByu4Qa5XQWmM/BjscHvlInxZxO+GkjzdFGBttIeN9VaQ3Q7EVXegh/sOLnI/n4YZgR3kqaL8AvEHDKTkEU5hDQV0qvJRv8QminCXdIQP9Hmd72SNQN7ufGuZuYZxxRLpGTxhWJnWGSJ+BmsfzUA+bWL+BfudodmzLDUWAAAAAElFTkSuQmCC"

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAO9JREFUKBVjCAsLc2QgAJiA8suBCsv////PiEstE1DSGIgDw8PD10VHR/NhU8i0evXqp4KCgrZAyae/f/8+B1Ssg64QxYrQ0NAooIJJQJwH1LwMphhFEUgQZBLQ+g1AvB1oQ9GsWbN+YygCKQS57devX4uBTHEgDsaqCKQQBKC+7gAFAVYAtA5uAJyBrBJkHdCnC4EKJYHiwRgmgRwOCgqgJDhoQEGEYhKuIGABWZOWlsb6/v37PkZGRk8gdli5cuUVkDgMMAN1S//48WMHUICFjY3NY/ny5Y9hkjCaBajzLJDTv2rVqk6YIAZNTFIBAERcYlx4pt35AAAAAElFTkSuQmCC"

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Tool = __webpack_require__(3);

var _DataService = __webpack_require__(16);

var _DataService2 = _interopRequireDefault(_DataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 模块入口方法
 * 
 * @param {Object} mySeting
 * @returns
 */
var Main = function Main(mySeting) {
    var seting = {
        id: '', // 应用唯一id表示
        type: 'GET', // 请求类型
        url: '', // 请求地址
        data: null, // 发送给服务器的数据
        stop: false, // true拦截请求，false不拦截请求
        component: _react2.default.createElement('div', null), // 数据回调给的组件
        success: null, // callback执行的方法 (res, state, props) => { return state; }
        error: null, // callback执行的方法 (res, state, props) => { return state; }
        after: null // callback执行的方法 (state, props) => { return state; }
    };

    /**
     * 覆盖默认设置
     */
    for (var key in mySeting) {
        seting[key] = mySeting[key];
    }

    /**
     * 组件入口
     * 
     * @class Index
     * @extends {Component}
     */

    var Index = function (_Component) {
        _inherits(Index, _Component);

        function Index(props) {
            _classCallCheck(this, Index);

            /**
             * 初始化状态
             * 
             * @param {Object} props
             */
            var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

            _this.initState = function (props) {
                var state = props.state;
                var _window$location = window.location,
                    pathname = _window$location.pathname,
                    search = _window$location.search;

                _this.path = pathname + search;

                if (_typeof(state.path[_this.path]) === 'object' && state.path[_this.path].path === _this.path) {
                    _this.setState(state.path[_this.path]);
                } else {
                    var state = (0, _Tool.merged)(state.defaults); // 数据库不存在当前的path数据，则从默认对象中复制，注意：要复制对象，而不是引用
                    state.path = _this.path;
                    _this.setState(state);
                }
            };

            /**
             * DOM初始化完成后执行回调
             */
            _this.redayDOM = function () {
                var _this$props$seting = _this.props.seting,
                    success = _this$props$seting.success,
                    error = _this$props$seting.error,
                    after = _this$props$seting.after;
                var _this$state = _this.state,
                    scrollX = _this$state.scrollX,
                    scrollY = _this$state.scrollY;

                if (_this.get) return false; // 已经加载过
                window.scrollTo(scrollX, scrollY); // 设置滚动条位置
                if (_this.testStop()) return false; // 请求被拦截

                var dataResponse = _DataService2.default.get(_this.getUrl(), _this.getData());
                var callbackNoError = function callbackNoError(res) {
                    var _state = (0, _Tool.merged)(_this.state);
                    var _props = (0, _Tool.merged)(_this.props);
                    _state.loadStatus = 1;
                    _state.loadMsg = '加载成功';
                    typeof success === "function" ? _state = success(res, _state, _props) : null;
                    _this.props._setState(_state);
                };
                var callbackAnyError = function callbackAnyError(res) {
                    var _state = (0, _Tool.merged)(_this.state);
                    var _props = (0, _Tool.merged)(_this.props);
                    _state.loadStatus = -1;
                    _state.loadMsg = '加载失败';
                    typeof error === "function" ? _state = error(res, _state, _props) : null;
                    _this.props._setState(_state);
                };
                var afterRespons = function afterRespons() {
                    if (typeof after === "function") {
                        var _state = (0, _Tool.merged)(_this.state);
                        var _props = (0, _Tool.merged)(_this.props);
                        _state = after(_state, _props);
                        _this.props._setState(_state);
                    }
                };
                _this.get = _DataService2.default.handleDataResponse({
                    dataResponse: dataResponse,
                    callbackNoError: callbackNoError,
                    callbackAnyError: callbackAnyError,
                    afterRespons: afterRespons
                });
            };

            /**
             * 组件卸载前执行一些操作
             */
            _this.unmount = function () {
                if (typeof _this.get !== 'undefined') {
                    _this.get.abort && _this.get.abort();
                    delete _this.get;
                    // delete this.action;
                }
                _this.state.scrollX = window.scrollX; //记录滚动条位置
                _this.state.scrollY = window.scrollY;
                _this.props._setState(_this.state);
            };

            /**
             * 获取ajax 请求url
             * 
             * @returns Object
             */
            _this.getUrl = function () {
                var url = _this.props.seting.url;

                if (typeof url === 'function') {
                    return url(_this.props, _this.state);
                } else if (url && typeof url === 'string') {
                    return url;
                } else {
                    return _this.props.location.pathname;
                }
            };

            /**
             * 获取要发送的数据
             * 
             * @returns
             */
            _this.getData = function () {
                var data = _this.props.seting.data;

                if (data === undefined || data === null) {
                    return {};
                } else if (typeof data === 'function') {
                    return data(_this.state, _this.props);
                } else {
                    return data;
                }
            };

            /**
             * 是否要拦截请求
             * 
             * @returns
             */
            _this.testStop = function () {
                var stop = _this.props.seting.stop;

                var result = stop;
                if (typeof stop === 'function') {
                    result = stop(_this.props, _this.state);
                }
                if (result) {
                    // 如果禁止请求需要this.get修改为true,假装已经请求过了
                    _this.get = true;
                }
                return result;
            };
            return _this;
        }

        _createClass(Index, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.initState(this.props);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(this.props.seting.component, _extends({}, this.props, { state: this.state }));
            }
            /**
             * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
             * 在生命周期中的这个时间点，组件拥有一个 DOM 展现，
             * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
             */

        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.redayDOM();
            }
            /**
             * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用
             */

        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(np) {
                var _window$location2 = window.location,
                    pathname = _window$location2.pathname,
                    search = _window$location2.search;

                var path = pathname + search;
                if (this.path !== path) {
                    this.unmount(); // 地址栏已经发生改变，做一些卸载前的处理
                }
                this.initState(np);
            }
            /**
             * 在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
             * 使用该方法可以在组件更新之后操作 DOM 元素。
             */

        }, {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                this.redayDOM();
            }
            /**
             * 在组件从 DOM 中移除的时候立刻被调用。
             * 在该方法中执行任何必要的清理，比如无效的定时器，
             * 或者清除在 componentDidMount 中创建的 DOM 元素
             */

        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.unmount(); // 地址栏已经发生改变，做一些卸载前的处理
            }
        }]);

        return Index;
    }(_react.Component);

    Index.defaultProps = { seting: seting };

    return Index;
};

exports.default = Main;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ID) {
    var action = {};
    var arr = ['_setState']; // 设置状态

    var _loop = function _loop(i) {
        action[arr[i]] = function (target) {
            return { _ID: _ID, target: target, type: arr[i] };
        };
    };

    for (var i = 0; i < arr.length; i++) {
        _loop(i);
    }

    return action;
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Tool = __webpack_require__(3);

var DB = function DB() {
    var _ID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var seting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var cb = {
        setDefaut: function setDefaut() {
            var defaults = (0, _Tool.merged)({
                path: '', // 当前页面的href
                data: null, // 页面的数据
                loadStatus: 0, // 0: 正在加载  1: 加载成功  -1: 加载失败
                loadMsg: '正在玩命加载中', // 加载提示
                scrollX: 0, // 滚动条X
                scrollY: 0 // 滚动条Y
            }, seting);
            return { defaults: defaults, path: {} };
        },
        _setState: function _setState(state, target) {
            state.path[target.path] = target;
            return (0, _Tool.merged)(state);
        }
    };
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (action._ID && action._ID !== _ID) {
            return state;
        } else if (cb[action.type]) {
            return cb[action.type](state, action.target);
        } else {
            return cb.setDefaut();
        }
    };
};

exports.default = DB;

/***/ })

},[216]);