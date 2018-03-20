'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _navbar = require('./../../components/navbar.js');

var _navbar2 = _interopRequireDefault(_navbar);

var _fetch = require('./../../modules/common/fetch.js');

var _recommend = require('./recommend.js');

var _recommend2 = _interopRequireDefault(_recommend);

var _activity = require('./activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _forgen = require('./forgen.js');

var _forgen2 = _interopRequireDefault(_forgen);

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
        }, _this.$repeat = {}, _this.$props = { "v-navbar": { "xmlns:v-bind": "", "v-bind:alldata.once": "tabs", "v-bind:activeIndex.sync": "activeIndex", "v-bind:sliderWidth.once": "sliderWidth", "xmlns:v-on": "" }, "v-recommend": { "v-bind:class.once": "{ hidden: activeIndex !== 0}", "v-bind:homeData.sync": "homeData" }, "v-activities": { "v-bind:class.once": "{ hidden: activeIndex !== 2}", "v-bind:activityData.sync": "activityData" }, "v-forgen": { "v-bind:class.once": "{ hidden: activeIndex !== 1}", "v-bind:forgenData.sync": "forgenData" } }, _this.$events = { "v-navbar": { "v-on:changeActiveIndex": "changeActiveIndex" } }, _this.components = {
            'v-navbar': _navbar2.default,
            'v-recommend': _recommend2.default,
            'v-activities': _activity2.default,
            'v-forgen': _forgen2.default
        }, _this.data = {
            /* 顶部分类 */
            tabs: [{
                title: '推荐'
            }, {
                title: '森究堂'
            }, {
                title: '活动'
            }],
            activeIndex: 0,
            sliderWidth: 93.75,
            userInfo: {},
            homeData: {
                posts: {
                    data: []
                },
                banners: {
                    posts: []
                },
                recommends: {
                    children: []
                }
            },
            forgenData: [],
            activityData: []
        }, _this.methods = {
            changeActiveIndex: function changeActiveIndex(activeIndex) {
                this.activeIndex = parseInt(activeIndex);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'changeActiveIndex',
        value: function changeActiveIndex(activeIndex) {
            this.activeIndex = parseInt(activeIndex);
        }
    }, {
        key: 'updateSenJiuTang',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _fetch.getFetch)('/posts/senJiuTang', { noAjax: true });

                            case 2:
                                response = _context.sent;

                                this.forgenData = response.topics || [];

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateSenJiuTang() {
                return _ref2.apply(this, arguments);
            }

            return updateSenJiuTang;
        }()
    }, {
        key: 'updateHomeData',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _fetch.getFetch)('/posts');

                            case 2:
                                this.homeData = _context2.sent;

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function updateHomeData() {
                return _ref3.apply(this, arguments);
            }

            return updateHomeData;
        }()
    }, {
        key: 'updateActivity',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _fetch.getFetch)('/posts/activity');

                            case 2:
                                response = _context3.sent;

                                this.activityData = response.topics && response.topics.posts;

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function updateActivity() {
                return _ref4.apply(this, arguments);
            }

            return updateActivity;
        }()
    }, {
        key: 'loginWechat',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var userInfo;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context4.sent;
                                _context4.next = 5;
                                return (0, _fetch.postFetch)('/loginWeChat', { noAjax: true, data: userInfo });

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function loginWechat() {
                return _ref5.apply(this, arguments);
            }

            return loginWechat;
        }()
    }, {
        key: 'onLoad',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.loginWechat();

                            case 2:
                                _context5.next = 4;
                                return this.updateHomeData();

                            case 4:
                                _context5.next = 6;
                                return this.updateActivity();

                            case 6:
                                _context5.next = 8;
                                return this.updateSenJiuTang();

                            case 8:
                                this.$apply();

                            case 9:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function onLoad() {
                return _ref6.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWJzIiwidGl0bGUiLCJhY3RpdmVJbmRleCIsInNsaWRlcldpZHRoIiwidXNlckluZm8iLCJob21lRGF0YSIsInBvc3RzIiwiYmFubmVycyIsInJlY29tbWVuZHMiLCJjaGlsZHJlbiIsImZvcmdlbkRhdGEiLCJhY3Rpdml0eURhdGEiLCJtZXRob2RzIiwiY2hhbmdlQWN0aXZlSW5kZXgiLCJwYXJzZUludCIsIm5vQWpheCIsInJlc3BvbnNlIiwidG9waWNzIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwibG9naW5XZWNoYXQiLCJ1cGRhdGVIb21lRGF0YSIsInVwZGF0ZUFjdGl2aXR5IiwidXBkYXRlU2VuSml1VGFuZyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFnRCwyQkFBMEIsYUFBMUUsRUFBd0YsMkJBQTBCLGFBQWxILEVBQWdJLGNBQWEsRUFBN0ksRUFBWixFQUE2SixlQUFjLEVBQUMscUJBQW9CLDhCQUFyQixFQUFvRCx3QkFBdUIsVUFBM0UsRUFBM0ssRUFBa1EsZ0JBQWUsRUFBQyxxQkFBb0IsOEJBQXJCLEVBQW9ELDRCQUEyQixjQUEvRSxFQUFqUixFQUFnWCxZQUFXLEVBQUMscUJBQW9CLDhCQUFyQixFQUFvRCwwQkFBeUIsWUFBN0UsRUFBM1gsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsMEJBQXlCLG1CQUExQixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ0Ysd0NBREU7QUFFRiw4Q0FGRTtBQUdGLDhDQUhFO0FBSUY7QUFKRSxTLFFBT05DLEksR0FBTztBQUNIO0FBQ0FDLGtCQUFNLENBQUM7QUFDSEMsdUJBQU87QUFESixhQUFELEVBRUg7QUFDQ0EsdUJBQU87QUFEUixhQUZHLEVBSUg7QUFDQ0EsdUJBQU87QUFEUixhQUpHLENBRkg7QUFTSEMseUJBQWEsQ0FUVjtBQVVIQyx5QkFBYSxLQVZWO0FBV0hDLHNCQUFVLEVBWFA7QUFZSEMsc0JBQVU7QUFDTkMsdUJBQU87QUFDSFAsMEJBQU07QUFESCxpQkFERDtBQUlOUSx5QkFBUztBQUNMRCwyQkFBTztBQURGLGlCQUpIO0FBT05FLDRCQUFZO0FBQ1JDLDhCQUFVO0FBREY7QUFQTixhQVpQO0FBdUJIQyx3QkFBWSxFQXZCVDtBQXdCSEMsMEJBQWM7QUF4QlgsUyxRQThDUEMsTyxHQUFVO0FBQ05DLDZCQURNLDZCQUNZWCxXQURaLEVBQ3lCO0FBQzNCLHFCQUFLQSxXQUFMLEdBQW1CWSxTQUFTWixXQUFULENBQW5CO0FBQ0g7QUFISyxTOzs7OzswQ0FuQlFBLFcsRUFBYTtBQUMzQixpQkFBS0EsV0FBTCxHQUFtQlksU0FBU1osV0FBVCxDQUFuQjtBQUNIOzs7Ozs7Ozs7Ozt1Q0FFMEIscUJBQVMsbUJBQVQsRUFBOEIsRUFBRWEsUUFBUSxJQUFWLEVBQTlCLEM7OztBQUFqQkMsd0M7O0FBQ04scUNBQUtOLFVBQUwsR0FBa0JNLFNBQVNDLE1BQVQsSUFBbUIsRUFBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR3NCLHFCQUFTLFFBQVQsQzs7O0FBQXRCLHFDQUFLWixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FHa0IscUJBQVMsaUJBQVQsQzs7O0FBQWpCVyx3Qzs7QUFDTixxQ0FBS0wsWUFBTCxHQUFvQkssU0FBU0MsTUFBVCxJQUFtQkQsU0FBU0MsTUFBVCxDQUFnQlgsS0FBdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUd1QixLQUFLWSxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQWpCZix3Qzs7dUNBQ0Esc0JBQVUsY0FBVixFQUEwQixFQUFFVyxRQUFRLElBQVYsRUFBZ0JoQixNQUFNSyxRQUF0QixFQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQVVBLEtBQUtnQixXQUFMLEU7Ozs7dUNBQ0EsS0FBS0MsY0FBTCxFOzs7O3VDQUNBLEtBQUtDLGNBQUwsRTs7Ozt1Q0FDQSxLQUFLQyxnQkFBTCxFOzs7QUFDTixxQ0FBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhFMkIsZUFBS0MsSTs7a0JBQW5CakMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IG5hdmJhckNvbXBvbmVudCBmcm9tICdAL2NvbXBvbmVudHMvbmF2YmFyJ1xuICAgIGltcG9ydCB7IGdldEZldGNoLCBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCByZWNvbW1lbmRDb21wb25lbnQgZnJvbSAnLi9yZWNvbW1lbmQnXG4gICAgaW1wb3J0IGFjdGl2aXRpZXNDb21wb25lbnQgZnJvbSAnLi9hY3Rpdml0eSdcbiAgICBpbXBvcnQgZm9yZ2VuQ29tcG9uZW50IGZyb20gJy4vZm9yZ2VuJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qOu5p6X6aOOJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInYtbmF2YmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDphbGxkYXRhLm9uY2VcIjpcInRhYnNcIixcInYtYmluZDphY3RpdmVJbmRleC5zeW5jXCI6XCJhY3RpdmVJbmRleFwiLFwidi1iaW5kOnNsaWRlcldpZHRoLm9uY2VcIjpcInNsaWRlcldpZHRoXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJ2LXJlY29tbWVuZFwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDB9XCIsXCJ2LWJpbmQ6aG9tZURhdGEuc3luY1wiOlwiaG9tZURhdGFcIn0sXCJ2LWFjdGl2aXRpZXNcIjp7XCJ2LWJpbmQ6Y2xhc3Mub25jZVwiOlwieyBoaWRkZW46IGFjdGl2ZUluZGV4ICE9PSAyfVwiLFwidi1iaW5kOmFjdGl2aXR5RGF0YS5zeW5jXCI6XCJhY3Rpdml0eURhdGFcIn0sXCJ2LWZvcmdlblwiOntcInYtYmluZDpjbGFzcy5vbmNlXCI6XCJ7IGhpZGRlbjogYWN0aXZlSW5kZXggIT09IDF9XCIsXCJ2LWJpbmQ6Zm9yZ2VuRGF0YS5zeW5jXCI6XCJmb3JnZW5EYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHtcInYtbmF2YmFyXCI6e1widi1vbjpjaGFuZ2VBY3RpdmVJbmRleFwiOlwiY2hhbmdlQWN0aXZlSW5kZXhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgICd2LW5hdmJhcic6IG5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICd2LXJlY29tbWVuZCc6IHJlY29tbWVuZENvbXBvbmVudCxcbiAgICAgICAgICAgICd2LWFjdGl2aXRpZXMnOiBhY3Rpdml0aWVzQ29tcG9uZW50LFxuICAgICAgICAgICAgJ3YtZm9yZ2VuJzogZm9yZ2VuQ29tcG9uZW50XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgLyog6aG26YOo5YiG57G7ICovXG4gICAgICAgICAgICB0YWJzOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o6o6I2QJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5qOu56m25aCCJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rS75YqoJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlcldpZHRoOiA5My43NSxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgICAgICAgIGhvbWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJhbm5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWNvbW1lbmRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JnZW5EYXRhOiBbXSxcbiAgICAgICAgICAgIGFjdGl2aXR5RGF0YTogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZUFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcGFyc2VJbnQoYWN0aXZlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdXBkYXRlU2VuSml1VGFuZyAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEZldGNoKCcvcG9zdHMvc2VuSml1VGFuZycsIHsgbm9BamF4OiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmZvcmdlbkRhdGEgPSByZXNwb25zZS50b3BpY3MgfHwgW11cbiAgICAgICAgfVxuICAgICAgICBhc3luYyB1cGRhdGVIb21lRGF0YSAoKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVEYXRhID0gYXdhaXQgZ2V0RmV0Y2goJy9wb3N0cycpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgdXBkYXRlQWN0aXZpdHkgKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRGZXRjaCgnL3Bvc3RzL2FjdGl2aXR5JylcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlEYXRhID0gcmVzcG9uc2UudG9waWNzICYmIHJlc3BvbnNlLnRvcGljcy5wb3N0c1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGxvZ2luV2VjaGF0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIGF3YWl0IHBvc3RGZXRjaCgnL2xvZ2luV2VDaGF0JywgeyBub0FqYXg6IHRydWUsIGRhdGE6IHVzZXJJbmZvIH0pXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcGFyc2VJbnQoYWN0aXZlSW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvZ2luV2VjaGF0KClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlSG9tZURhdGEoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVBY3Rpdml0eSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVNlbkppdVRhbmcoKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19