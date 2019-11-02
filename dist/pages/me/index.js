'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../../components/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _fetch = require('./../../modules/common/fetch.js');

var _utils = require('./../../modules/common/utils.js');

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
            navigationBarTitleText: '我的'
        }, _this.$repeat = { "adapterMoments": { "com": "v-moment", "props": "moment" } }, _this.$props = { "v-moment": { "xmlns:v-bind": { "value": "", "for": "adapterMoments", "item": "item", "index": "index", "key": "index" }, "v-bind:moment.once": { "value": "item", "type": "item", "for": "adapterMoments", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
            'v-moment': _moment2.default
        }, _this.computed = {
            adapterMoments: function adapterMoments() {
                var user = this.user;
                return this.moments.map(function (m) {
                    return {
                        id: m.user_id,
                        avatar: user.avatarUrl,
                        name: user.nickName,
                        content: m.content,
                        images: (0, _utils.paddingImg)(m.circle_imgs.map(function (i) {
                            return i.imgUrl;
                        })),
                        createTime: (0, _utils.timeTransform)(m.created_at),
                        upvoteNum: m.targets_count,
                        commentsNum: m.comments_count
                    };
                });
            }
        }, _this.data = {
            moments: [],
            user: {}
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'fetchData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userInfo, response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$parent.getUserInfo();

                            case 2:
                                userInfo = _context.sent;

                                if (userInfo.id) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 6;
                                return this.$parent.getUserInfo();

                            case 6:
                                userInfo = _context.sent;

                            case 7:
                                _context.next = 9;
                                return (0, _fetch.getFetch)('/user/' + userInfo.id);

                            case 9:
                                response = _context.sent;

                                this.moments = response.circles;
                                this.user = response.user;

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchData() {
                return _ref2.apply(this, arguments);
            }

            return fetchData;
        }()
    }, {
        key: 'onShow',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.fetchData();

                            case 2:
                                this.$apply();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onShow() {
                return _ref3.apply(this, arguments);
            }

            return onShow;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/me/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1vbWVudENvbXBvbmVudCIsImNvbXB1dGVkIiwiYWRhcHRlck1vbWVudHMiLCJ1c2VyIiwibW9tZW50cyIsIm1hcCIsImlkIiwibSIsInVzZXJfaWQiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJuYW1lIiwibmlja05hbWUiLCJjb250ZW50IiwiaW1hZ2VzIiwiY2lyY2xlX2ltZ3MiLCJpIiwiaW1nVXJsIiwiY3JlYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJ1cHZvdGVOdW0iLCJ0YXJnZXRzX2NvdW50IiwiY29tbWVudHNOdW0iLCJjb21tZW50c19jb3VudCIsImRhdGEiLCJtZXRob2RzIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJyZXNwb25zZSIsImNpcmNsZXMiLCJmZXRjaERhdGEiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVZDLE8sR0FBVSxFQUFDLGtCQUFpQixFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLFFBQTFCLEVBQWxCLEUsUUFDakJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sZ0JBQWxCLEVBQW1DLFFBQU8sTUFBMUMsRUFBaUQsU0FBUSxPQUF6RCxFQUFpRSxPQUFNLE9BQXZFLEVBQWhCLEVBQWdHLHNCQUFxQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sZ0JBQXBDLEVBQXFELFFBQU8sTUFBNUQsRUFBbUUsU0FBUSxPQUEzRSxFQUFtRixPQUFNLE9BQXpGLEVBQXJILEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRix3QkFBWUM7QUFEVixTLFFBSU5DLFEsR0FBVztBQUNQQywwQkFETyw0QkFDVztBQUNkLG9CQUFNQyxPQUFPLEtBQUtBLElBQWxCO0FBQ0EsdUJBQU8sS0FBS0MsT0FBTCxDQUFhQyxHQUFiLENBQWlCLGFBQUs7QUFDekIsMkJBQU87QUFDSEMsNEJBQUlDLEVBQUVDLE9BREg7QUFFSEMsZ0NBQVFOLEtBQUtPLFNBRlY7QUFHSEMsOEJBQU1SLEtBQUtTLFFBSFI7QUFJSEMsaUNBQVNOLEVBQUVNLE9BSlI7QUFLSEMsZ0NBQVEsdUJBQVdQLEVBQUVRLFdBQUYsQ0FBY1YsR0FBZCxDQUFrQjtBQUFBLG1DQUFLVyxFQUFFQyxNQUFQO0FBQUEseUJBQWxCLENBQVgsQ0FMTDtBQU1IQyxvQ0FBWSwwQkFBY1gsRUFBRVksVUFBaEIsQ0FOVDtBQU9IQyxtQ0FBV2IsRUFBRWMsYUFQVjtBQVFIQyxxQ0FBYWYsRUFBRWdCO0FBUloscUJBQVA7QUFVSCxpQkFYTSxDQUFQO0FBWUg7QUFmTSxTLFFBa0JYQyxJLEdBQU87QUFDSHBCLHFCQUFTLEVBRE47QUFFSEQsa0JBQU07QUFGSCxTLFFBSVBzQixPLEdBQVUsRTs7Ozs7Ozs7Ozs7Ozt1Q0FHZSxLQUFLQyxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQWpCQyx3Qzs7b0NBQ0NBLFNBQVN0QixFOzs7Ozs7dUNBQ08sS0FBS29CLE9BQUwsQ0FBYUMsV0FBYixFOzs7QUFBakJDLHdDOzs7O3VDQUVtQixnQ0FBa0JBLFNBQVN0QixFQUEzQixDOzs7QUFBakJ1Qix3Qzs7QUFDTixxQ0FBS3pCLE9BQUwsR0FBZXlCLFNBQVNDLE9BQXhCO0FBQ0EscUNBQUszQixJQUFMLEdBQVkwQixTQUFTMUIsSUFBckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR00sS0FBSzRCLFNBQUwsRTs7O0FBQ04scUNBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQzJCQyxlQUFLQyxJOztrQkFBbkJ6QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgbW9tZW50Q29tcG9uZW50IGZyb20gJ0AvY29tcG9uZW50cy9tb21lbnQnXG4gICAgaW1wb3J0IHsgZ2V0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuICAgIGltcG9ydCB7IHBhZGRpbmdJbWcsIHRpbWVUcmFuc2Zvcm0gfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL3V0aWxzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG5cbiAgICAgICAkcmVwZWF0ID0ge1wiYWRhcHRlck1vbWVudHNcIjp7XCJjb21cIjpcInYtbW9tZW50XCIsXCJwcm9wc1wiOlwibW9tZW50XCJ9fTtcclxuJHByb3BzID0ge1widi1tb21lbnRcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFkYXB0ZXJNb21lbnRzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6bW9tZW50Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhZGFwdGVyTW9tZW50c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICAndi1tb21lbnQnOiBtb21lbnRDb21wb25lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgYWRhcHRlck1vbWVudHMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnRzLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogcGFkZGluZ0ltZyhtLmNpcmNsZV9pbWdzLm1hcChpID0+IGkuaW1nVXJsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiB0aW1lVHJhbnNmb3JtKG0uY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHZvdGVOdW06IG0udGFyZ2V0c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTnVtOiBtLmNvbW1lbnRzX2NvdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG1vbWVudHM6IFtdLFxuICAgICAgICAgICAgdXNlcjoge31cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGZldGNoRGF0YSAoKSB7XG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgaWYgKCF1c2VySW5mby5pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RmV0Y2goYC91c2VyLyR7dXNlckluZm8uaWR9YClcbiAgICAgICAgICAgIHRoaXMubW9tZW50cyA9IHJlc3BvbnNlLmNpcmNsZXNcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXJcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBvblNob3cgKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaERhdGEoKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuIl19