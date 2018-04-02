'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _fetch = require('./modules/common/fetch.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/publish/index', 'pages/home/index', 'pages/discover/index', 'pages/recommend/index', 'pages/detail/moment', 'pages/list/index', 'pages/activity/index', 'pages/me/index', 'pages/me/user', 'pages/show/index', 'pages/discuss/index', 'pages/index'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: 'WeChat',
                navigationBarTextStyle: 'black'
            },
            tabBar: {
                color: '#000',
                selectedColor: '#00b600',
                backgroundColor: '#fff',
                borderStyle: '#eee',
                list: [{
                    pagePath: 'pages/home/index',
                    iconPath: 'modules/images/homepage.png',
                    selectedIconPath: 'modules/images/homepage_fill.png',
                    text: '首页'
                }, {
                    pagePath: 'pages/discover/index',
                    iconPath: 'modules/images/browse.png',
                    selectedIconPath: 'modules/images/browse_fill.png',
                    text: '发现'
                }, {
                    pagePath: 'pages/publish/index',
                    iconPath: 'modules/images/camera.png',
                    selectedIconPath: 'modules/images/camera_fill.png',
                    text: '上传'
                }, {
                    pagePath: 'pages/show/index',
                    iconPath: 'modules/images/dynamic.png',
                    selectedIconPath: 'modules/images/dynamic_fill.png',
                    text: '圈子'
                }, {
                    pagePath: 'pages/me/index',
                    iconPath: 'modules/images/mine.png',
                    selectedIconPath: 'modules/images/mine_fill.png',
                    text: '我的'
                }]
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            // this.getUserInfo()
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var that;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    if (that.globalData.userInfo) {
                                        return resolve(that.globalData.userInfo);
                                    }
                                    _wepy2.default.login({
                                        success: function success(res) {
                                            // 获取openId
                                            _wepy2.default.request({
                                                url: 'https://api.weixin.qq.com/sns/jscode2session',
                                                data: {
                                                    appid: 'wx074fc89a63291f58', // 小程序唯一标识
                                                    secret: 'c52454ed68690c8a35190b941c6c298b', // 小程序的 app secret
                                                    grant_type: 'authorization_code',
                                                    js_code: res.code
                                                },
                                                method: 'GET',
                                                header: { 'content-type': 'application/json' },
                                                success: function success(openIdRes) {
                                                    console.info('登录成功返回的openId：' + openIdRes.data.openid);
                                                    // 判断openId是否获取成功
                                                    if (openIdRes.data.openid != null && openIdRes.data.openid !== undefined) {
                                                        // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                                                        _wepy2.default.getUserInfo({
                                                            success: function success(res) {
                                                                var _this2 = this;

                                                                that.globalData.userInfo = res.userInfo;
                                                                that.globalData.userInfo.openId = openIdRes.data.openid;
                                                                return (0, _fetch.postFetch)('/loginWeChat', { noAjax: true, data: this.globalData.userInfo }).then(function (userInfo) {
                                                                    _this2.globalData.userInfo.id = userInfo.user.id;
                                                                    resolve(that.globalData.userInfo);
                                                                });
                                                                // 自定义操作
                                                                // 绑定数据，渲染页面
                                                            },
                                                            fail: function fail(failData) {
                                                                console.info('用户拒绝授权');
                                                                reject(failData);
                                                            }
                                                        });
                                                    } else {
                                                        console.info('获取用户openId失败');
                                                        reject(openIdRes);
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserInfo() {
                return _ref.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhhdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiYXBwaWQiLCJzZWNyZXQiLCJncmFudF90eXBlIiwianNfY29kZSIsImNvZGUiLCJtZXRob2QiLCJoZWFkZXIiLCJvcGVuSWRSZXMiLCJjb25zb2xlIiwiaW5mbyIsIm9wZW5pZCIsInVuZGVmaW5lZCIsImdldFVzZXJJbmZvIiwib3BlbklkIiwibm9BamF4IiwidGhlbiIsImlkIiwidXNlciIsImZhaWwiLCJmYWlsRGF0YSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUVJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0FoRWRBLE1BZ0VjLEdBaEVMO0FBQ0xDLG1CQUFPLENBQ0gscUJBREcsRUFFSCxrQkFGRyxFQUdILHNCQUhHLEVBSUgsdUJBSkcsRUFLSCxxQkFMRyxFQU1ILGtCQU5HLEVBT0gsc0JBUEcsRUFRSCxnQkFSRyxFQVNILGVBVEcsRUFVSCxrQkFWRyxFQVdILHFCQVhHLEVBWUgsYUFaRyxDQURGO0FBZUxDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4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QUF6QixHQUE4QjlCLFNBQVMrQixJQUFULENBQWNELEVBQTVDO0FBQ0ExQiw0RUFBUUcsS0FBS1IsVUFBTCxDQUFnQkMsUUFBeEI7QUFDSCxpRUFITSxDQUFQO0FBSUE7QUFDQTtBQUNILDZEQVZZO0FBV2JnQyxrRUFBTSxjQUFVQyxRQUFWLEVBQW9CO0FBQ3RCWCx3RUFBUUMsSUFBUixDQUFhLFFBQWI7QUFDQWxCLHVFQUFPNEIsUUFBUDtBQUNIO0FBZFkseURBQWpCO0FBZ0JILHFEQWxCRCxNQWtCTztBQUNIWCxnRUFBUUMsSUFBUixDQUFhLGNBQWI7QUFDQWxCLCtEQUFPZ0IsU0FBUDtBQUNIO0FBQ0o7QUFuQ1EsNkNBQWI7QUFxQ0g7QUF4Q00scUNBQVg7QUEwQ0gsaUNBOUNNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRmMsZUFBS2EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgICBpbXBvcnQgeyBwb3N0RmV0Y2ggfSBmcm9tICdAL21vZHVsZXMvY29tbW9uL2ZldGNoJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3B1Ymxpc2gvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvZGlzY292ZXIvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9yZWNvbW1lbmQvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9kZXRhaWwvbW9tZW50JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvbGlzdC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2FjdGl2aXR5L2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvbWUvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9tZS91c2VyJyxcbiAgICAgICAgICAgICAgICAncGFnZXMvc2hvdy9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2Rpc2N1c3MvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9pbmRleCdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiQmFyOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnIzAwYjYwMCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6ICcjZWVlJyxcbiAgICAgICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2hvbWVwYWdlLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvaG9tZXBhZ2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+mmlumhtSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9kaXNjb3Zlci9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2Jyb3dzZS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2Jyb3dzZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5Y+R546wJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3B1Ymxpc2gvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9jYW1lcmEucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9jYW1lcmFfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+S4iuS8oCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zaG93L2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvZHluYW1pYy5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2R5bmFtaWNfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+WciOWtkCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL21pbmUucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9taW5lX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgICAgICAgdXNlckluZm86IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgICAgICB9XG5cbiAgICAgICAgb25MYXVuY2goKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmdldFVzZXJJbmZvKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNsZWVwKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICAgICAgICAgIH0sIHMgKiAxMDAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGdldFVzZXJJbmZvICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0Lmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlm9wZW5JZFxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBpZDogJ3d4MDc0ZmM4OWE2MzI5MWY1OCcsIC8vIOWwj+eoi+W6j+WUr+S4gOagh+ivhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXQ6ICdjNTI0NTRlZDY4NjkwYzhhMzUxOTBiOTQxYzZjMjk4YicsIC8vIOWwj+eoi+W6j+eahCBhcHAgc2VjcmV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc19jb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKG9wZW5JZFJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+eZu+W9leaIkOWKn+i/lOWbnueahG9wZW5JZO+8micgKyBvcGVuSWRSZXMuZGF0YS5vcGVuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWrW9wZW5JZOaYr+WQpuiOt+WPluaIkOWKn1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbklkUmVzLmRhdGEub3BlbmlkICE9IG51bGwgJiYgb3BlbklkUmVzLmRhdGEub3BlbmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacieS4gOeCuemcgOimgeazqOaEjyDor6Lpl67nlKjmiLcg5piv5ZCm5o6I5p2DIOmCo+aPkOekuiDmmK/ov5lBUEnlj5Hlh7rnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuSWQgPSBvcGVuSWRSZXMuZGF0YS5vcGVuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RGZXRjaCgnL2xvZ2luV2VDaGF0JywgeyBub0FqYXg6IHRydWUsIGRhdGE6IHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyB9KS50aGVuKHVzZXJJbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5pZCA9IHVzZXJJbmZvLnVzZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDoh6rlrprkuYnmk43kvZxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g57uR5a6a5pWw5o2u77yM5riy5p+T6aG16Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZmFpbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnlKjmiLfmi5Lnu53mjojmnYMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFpbERhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn6I635Y+W55So5oi3b3Blbklk5aSx6LSlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChvcGVuSWRSZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=