'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _fetch = require('./../../modules/common/fetch.js');

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _moments = require('./moments.js');

var _moments2 = _interopRequireDefault(_moments);

var _choice = require('./choice.js');

var _choice2 = _interopRequireDefault(_choice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '森林风'
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-moments": { "v-bind:class.once": "{ hidden: activeIndex !== 1}", "v-bind:momentsData.sync": "momentsData" }, "v-choice": { "v-bind:class.once": "{ hidden: activeIndex !== 0}", "v-bind:choiceData.sync": "choiceData" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-moments': _moments2.default,
            'v-choice': _choice2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '精选'
            }, {
                title: '圈子'
            }],
            activeIndex: 0,
            sliderWidth: 93.75,
            choiceData: {
                banners: [],
                hotTopic: []
            },
            momentsData: {}
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'updateDiscoverData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/circles', { noAjax: true });

                            case 2:
                                response = _context.sent;

                                this.choiceData = { hotTopic: response.hotTopic, banners: response.banners.posts };
                                this.momentsData = response.circles && response.circles.data;

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateDiscoverData() {
                return _ref2.apply(this, arguments);
            }

            return updateDiscoverData;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.updateDiscoverData();

                            case 2:
                                this.$apply();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/discover/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwiY2hvaWNlRGF0YSIsImJhbm5lcnMiLCJob3RUb3BpYyIsIm1vbWVudHNEYXRhIiwibWV0aG9kcyIsImNoYW5nZUFjdGl2ZUluZGV4IiwicGFyc2VJbnQiLCJub0FqYXgiLCJyZXNwb25zZSIsInBvc3RzIiwiY2lyY2xlcyIsInVwZGF0ZURpc2NvdmVyRGF0YSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsTUFBekMsRUFBZ0QsMkJBQTBCLGFBQTFFLEVBQXdGLDJCQUEwQixhQUFsSCxFQUFnSSxjQUFhLEVBQTdJLEVBQVosRUFBNkosYUFBWSxFQUFDLHFCQUFvQiw4QkFBckIsRUFBb0QsMkJBQTBCLGFBQTlFLEVBQXpLLEVBQXNRLFlBQVcsRUFBQyxxQkFBb0IsOEJBQXJCLEVBQW9ELDBCQUF5QixZQUE3RSxFQUFqUixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQywwQkFBeUIsbUJBQTFCLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDRix3Q0FERTtBQUVGLDBDQUZFO0FBR0Y7QUFIRSxTLFFBTU5DLEksR0FBTztBQUNIO0FBQ0FDLGtCQUFNLENBQUM7QUFDSEMsdUJBQU87QUFESixhQUFELEVBRUg7QUFDQ0EsdUJBQU87QUFEUixhQUZHLENBRkg7QUFPSEMseUJBQWEsQ0FQVjtBQVFIQyx5QkFBYSxLQVJWO0FBU0hDLHdCQUFZO0FBQ1JDLHlCQUFTLEVBREQ7QUFFUkMsMEJBQVU7QUFGRixhQVRUO0FBYUhDLHlCQUFhO0FBYlYsUyxRQWdCUEMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZUCxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CUSxTQUFTUixXQUFULENBQW5CO0FBQ0g7QUFISyxTOzs7Ozs7Ozs7Ozs7O3VDQU9pQixxQkFBUyxVQUFULEVBQXFCLEVBQUVTLFFBQVEsSUFBVixFQUFyQixDOzs7QUFBakJDLHdDOztBQUNOLHFDQUFLUixVQUFMLEdBQWtCLEVBQUVFLFVBQVVNLFNBQVNOLFFBQXJCLEVBQStCRCxTQUFTTyxTQUFTUCxPQUFULENBQWlCUSxLQUF6RCxFQUFsQjtBQUNBLHFDQUFLTixXQUFMLEdBQW1CSyxTQUFTRSxPQUFULElBQW9CRixTQUFTRSxPQUFULENBQWlCZixJQUF4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FHTSxLQUFLZ0Isa0JBQUwsRTs7O0FBQ04scUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzQzJCLGVBQUtDLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldEZldGNoIH0gZnJvbSAnQC9tb2R1bGVzL2NvbW1vbi9mZXRjaCdcbiAgICBpbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXInXG4gICAgaW1wb3J0IG1vbWVudHNDb21wb25lbnQgZnJvbSAnLi9tb21lbnRzJ1xuICAgIGltcG9ydCBjaG9pY2VDb21wb25lbnQgZnJvbSAnLi9jaG9pY2UnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmo67mnpfpo44nXG4gICAgICAgIH1cblxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widi1uYXZiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbGRhdGEub25jZVwiOlwidGFic1wiLFwidi1iaW5kOmFjdGl2ZUluZGV4LnN5bmNcIjpcImFjdGl2ZUluZGV4XCIsXCJ2LWJpbmQ6c2xpZGVyV2lkdGgub25jZVwiOlwic2xpZGVyV2lkdGhcIixcInhtbG5zOnYtb25cIjpcIlwifSxcInYtbW9tZW50c1wiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDF9XCIsXCJ2LWJpbmQ6bW9tZW50c0RhdGEuc3luY1wiOlwibW9tZW50c0RhdGFcIn0sXCJ2LWNob2ljZVwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDB9XCIsXCJ2LWJpbmQ6Y2hvaWNlRGF0YS5zeW5jXCI6XCJjaG9pY2VEYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtbmF2YmFyXCI6e1widi1vbjpjaGFuZ2VBY3RpdmVJbmRleFwiOlwiY2hhbmdlQWN0aXZlSW5kZXhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW5hdmJhcic6IG5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LW1vbWVudHMnOiBtb21lbnRzQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtY2hvaWNlJzogY2hvaWNlQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICB0YWJzOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn57K+6YCJJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5ZyI5a2QJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlcldpZHRoOiA5My43NSxcbiAgICAgICAgICAgIGNob2ljZURhdGE6IHtcbiAgICAgICAgICAgICAgICBiYW5uZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBob3RUb3BpYzogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb21lbnRzRGF0YToge31cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwYXJzZUludChhY3RpdmVJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIHVwZGF0ZURpc2NvdmVyRGF0YSAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZldGNoKCcvY2lyY2xlcycsIHsgbm9BamF4OiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmNob2ljZURhdGEgPSB7IGhvdFRvcGljOiByZXNwb25zZS5ob3RUb3BpYywgYmFubmVyczogcmVzcG9uc2UuYmFubmVycy5wb3N0cyB9XG4gICAgICAgICAgICB0aGlzLm1vbWVudHNEYXRhID0gcmVzcG9uc2UuY2lyY2xlcyAmJiByZXNwb25zZS5jaXJjbGVzLmRhdGFcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZURpc2NvdmVyRGF0YSgpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=