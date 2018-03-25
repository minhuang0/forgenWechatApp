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
            pages: ['pages/home/index', 'pages/discover/index', 'pages/recommend/index', 'pages/detail/moment', 'pages/publish/index', 'pages/list/index', 'pages/activity/index', 'pages/me/index', 'pages/show/index', 'pages/discuss/index', 'pages/index'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhhdCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiYXBwaWQiLCJzZWNyZXQiLCJncmFudF90eXBlIiwianNfY29kZSIsImNvZGUiLCJtZXRob2QiLCJoZWFkZXIiLCJvcGVuSWRSZXMiLCJjb25zb2xlIiwiaW5mbyIsIm9wZW5pZCIsInVuZGVmaW5lZCIsImdldFVzZXJJbmZvIiwib3BlbklkIiwibm9BamF4IiwidGhlbiIsImlkIiwidXNlciIsImZhaWwiLCJmYWlsRGF0YSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBa0VJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0EvRGRBLE1BK0RjLEdBL0RMO0FBQ0xDLG1CQUFPLENBQ0gsa0JBREcsRUFFSCxzQkFGRyxFQUdILHVCQUhHLEVBSUgscUJBSkcsRUFLSCxxQkFMRyxFQU1ILGtCQU5HLEVBT0gsc0JBUEcsRUFRSCxnQkFSRyxFQVNILGtCQVRHLEVBVUgscUJBVkcsRUFXSCxhQVhHLENBREY7QUFjTEMsb0JBQVE7QUFDSkMscUNBQXFCLE9BRGpCO0FBRUpDLDhDQUE4QixNQUYx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OUIsU0FBUytCLElBQVQsQ0FBY0QsRUFBNUM7QUFDQTFCLDRFQUFRRyxLQUFLUixVQUFMLENBQWdCQyxRQUF4QjtBQUNILGlFQUhNLENBQVA7QUFJQTtBQUNBO0FBQ0gsNkRBVlk7QUFXYmdDLGtFQUFNLGNBQVVDLFFBQVYsRUFBb0I7QUFDdEJYLHdFQUFRQyxJQUFSLENBQWEsUUFBYjtBQUNBbEIsdUVBQU80QixRQUFQO0FBQ0g7QUFkWSx5REFBakI7QUFnQkgscURBbEJELE1Ba0JPO0FBQ0hYLGdFQUFRQyxJQUFSLENBQWEsY0FBYjtBQUNBbEIsK0RBQU9nQixTQUFQO0FBQ0g7QUFDSjtBQW5DUSw2Q0FBYjtBQXFDSDtBQXhDTSxxQ0FBWDtBQTBDSCxpQ0E5Q00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5GYyxlQUFLYSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICAgIGltcG9ydCB7IHBvc3RGZXRjaCB9IGZyb20gJ0AvbW9kdWxlcy9jb21tb24vZmV0Y2gnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2Rpc2NvdmVyL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvcmVjb21tZW5kL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvZGV0YWlsL21vbWVudCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3B1Ymxpc2gvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9saXN0L2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvYWN0aXZpdHkvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9tZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL3Nob3cvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9kaXNjdXNzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvaW5kZXgnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYkJhcjoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMGI2MDAnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiAnI2VlZScsXG4gICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9ob21lcGFnZS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2hvbWVwYWdlX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfpppbpobUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZGlzY292ZXIvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9icm93c2UucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9icm93c2VfZmlsbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+WPkeeOsCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9wdWJsaXNoL2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvY2FtZXJhX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICfkuIrkvKAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2hvdy9pbmRleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJ21vZHVsZXMvaW1hZ2VzL2R5bmFtaWMucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9keW5hbWljX2ZpbGwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICflnIjlrZAnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWUvaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICdtb2R1bGVzL2ltYWdlcy9taW5lLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnbW9kdWxlcy9pbWFnZXMvbWluZV9maWxsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICAgIH1cblxuICAgICAgICBzbGVlcChzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgICAgICAgICB9LCBzICogMTAwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbyAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5ZvcGVuSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwaWQ6ICd3eDA3NGZjODlhNjMyOTFmNTgnLCAvLyDlsI/nqIvluo/llK/kuIDmoIfor4ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0OiAnYzUyNDU0ZWQ2ODY5MGM4YTM1MTkwYjk0MWM2YzI5OGInLCAvLyDlsI/nqIvluo/nmoQgYXBwIHNlY3JldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNfY29kZTogcmVzLmNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChvcGVuSWRSZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCfnmbvlvZXmiJDlip/ov5Tlm57nmoRvcGVuSWTvvJonICsgb3BlbklkUmVzLmRhdGEub3BlbmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq1vcGVuSWTmmK/lkKbojrflj5bmiJDlip9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5JZFJlcy5kYXRhLm9wZW5pZCAhPSBudWxsICYmIG9wZW5JZFJlcy5kYXRhLm9wZW5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnInkuIDngrnpnIDopoHms6jmhI8g6K+i6Zeu55So5oi3IOaYr+WQpuaOiOadgyDpgqPmj5DnpLog5piv6L+ZQVBJ5Y+R5Ye655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8ub3BlbklkID0gb3BlbklkUmVzLmRhdGEub3BlbmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0RmV0Y2goJy9sb2dpbldlQ2hhdCcsIHsgbm9BamF4OiB0cnVlLCBkYXRhOiB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gfSkudGhlbih1c2VySW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8uaWQgPSB1c2VySW5mby51c2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6Ieq5a6a5LmJ5pON5L2cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOe7keWumuaVsOaNru+8jOa4suafk+mhtemdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGZhaWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn55So5oi35ouS57ud5o6I5p2DJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhaWxEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ+iOt+WPlueUqOaIt29wZW5JZOWksei0pScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qob3BlbklkUmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19